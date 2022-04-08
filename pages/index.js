import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Image1 from "../public/croping52.png";
import Notifications from "../pages/Notifications";

export default function Home() {
  const router = useRouter();
  return (
    
    <div className={styles.container}>
      <Head>
        <title>WatchDog AI</title>

      </Head>

      <main className={styles.main}>
        <div class = "watchImg"> 
          <Image src = {Image1} width = "200" height = "200"></Image>
        </div>
        <h1 className={styles.title}>
          WatchDog AI <a href="https://nextjs.org"></a>
        </h1>
      
        <div class="homeButtons">
          <div class="profileButton">
            <Button
              onClick={() => {
              router.push("/profile")
              }}
            >          
            Profiles
            </Button>
          </div>

          <div class="aboutButton">
            <Button
              onClick={() => {
              router.push("/about")
              }}
            >          
            About
            </Button>
          </div>
        </div>
        <div class="Sentry">
              <Notifications />
        </div>
        

      </main>
    </div>
  )

}
