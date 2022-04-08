import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function About (){
    return(
        <main className={styles.main}>
            <div class="abtitle">
                <h1 className={styles.title}>
                About 
                </h1>
            </div>
            
            <div class= "subtitle">
                <h2>Project Goal</h2>
            </div>

            <div class="textbox">
                <p>The goal of WatchDog AI is to create a smart security system that leverages machine learning and artificial intelligence to add another barricade of security for all users. With this project, the user would be able to detect individuals entering and exiting the surveilled area - in which threats can be assessed using the above listed technologies in order to increase security measures.</p>
             </div>

             <div class= "subtitle">
                <h2>Project Rationale</h2>
            </div>
            <div class="textbox">
                <p>According to FBI statistics, there is a burglary every 30 seconds resulting in over 3000 burglaries in the US alone[1]. In modern society, security is seen as a protective measure for individuals that often gives them both a psychological and a physical comfort - crucial in our current stress-ridden age. With this in mind, our project aims to increase this through a security recognition feature - driving unwanted visitor detection via cutting edge machine learning and artificial intelligence technology. In doing so, we heighten the security effectiveness of the average home; increasing the preventative measures crucial in safeguarding families everywhere. We at Watchdog believe our product will aid in revolutionizing property security, enhancing existing systems and building safeguards anew for millions of properties globally.</p>
             </div>

             <div class= "subtitle">
                <h2>Expectations</h2>
            </div>
            <div class="textbox">
                <p>The expectation of this team is that we aim to successfully create an augmented layer of security on security cameras that would effectively increase the convenience of security systems while acting as another layer of security through its detection of targets. These two in conjunction would help customers feel more protected and safe by using our product.

                    A big reason for the choice in WatchDog AI was the fact that this type of project allowed us to use machine learning which is an ever growing division of technology that is at the forefront in advancing multiple aspects of the world. By working on WatchDog AI and having our project centered around this, we would be able to learn critical and valuable skills in this already large yet growing industry. Working on this project would also give each of the members of the group an opportunity to improve on interpersonal, communication as well as organizational skills. In which all are crucial to an engineer's success in modern society. This project would ultimately give each of the individuals working on the project actual working experience on a long term project allowing for us to be set up and ready for the future.	
                </p>
             </div>
        </main>
    )

}