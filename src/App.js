import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'


export default function App(){
    return(
        <>
            <div className={styles.App}>
                <Routes>
                    <Route 
                    path='/' 
                    element= {<HomePage />}>
                    </Route>

                    <Route 
                    path='/about' 
                    element= {<AboutPage />}>
                    </Route>

                    <Route 
                    path='/contact' 
                    element={<ContactPage 
                    />}></Route>

                    <Route 
                    path='/projects' 
                    element={<ProjectsPage />}></Route>
                </Routes>
            </div>
        </>
    )
}