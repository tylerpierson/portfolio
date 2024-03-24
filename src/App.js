import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'


export default function App(){
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        body: ''
    })

    //createUsers
    const createUser = async () => {
        const body = {...newUser}
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdUser = await response.json()
            const usersCopy = [createdUser,...users]
            setUsers(usersCopy)
            setNewUser({
                name: '',
                email: '',
                body: ''
            })
        } catch (error) {   
            console.error(error)
        }
    }
    return(
        <>
            <div className={styles.App}>
                <Routes>
                    <Route 
                    path='/' 
                    element= {<HomePage />}>
                    </Route>

                    <Route 
                    path='/contact' 
                    element={<ContactPage 
                        createUser={createUser}
                    />}></Route>

                    <Route 
                    path='/projects' 
                    element={<ProjectsPage />}></Route>
                </Routes>
            </div>
        </>
    )
}