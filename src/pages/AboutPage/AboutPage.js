import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

function AboutPage() {
  return (
    <>
        <NavBar />
        <h1>This is the AboutPage</h1>  
        <div className={styles.bgDesign}></div>
    </>
  )
}

export default AboutPage