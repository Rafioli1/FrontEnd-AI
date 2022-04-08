import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { addFace } from './api/face'
import { useState } from 'react'
import Button from '@mui/material/Button';

export default function Add (){
    const [ name, setName ] = useState("");
    const router = useRouter();
    return(
        <main className={styles.main}>
            <div class="title">
                <h1 className={styles.title}>
                Add Face 
                </h1>
            </div>
            <div class="sub-title">
                <h2>Please enter the name of the person you would like to add to the profiles page</h2>
            </div>
            <div class = "addform">
                <form>
                <label for="fname">First name:</label>
                <br></br>
                <input onChange={(e) => setName(e.target.value)} type="text" id="fname" name="fname"></input>
                <br></br>
                <div class="subb">
                <Button styles={{background: "black"}} onClick={() => {
                    addFace(name)
                    router.push("/profile")
                    }} value="Submit">Submit
                </Button>
                </div>
                </form>
            </div>  
        </main>
    )
}