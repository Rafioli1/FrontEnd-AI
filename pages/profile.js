import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { addFace } from './api/face'
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Image2 from "../public/profile1.jpg";
import Image3 from "../public/profile2.jpg";
import Image4 from "../public/profile10.png";
import Image5 from "../public/profile4.jpg";
import Image6 from "../public/profile5.jpg";
import Image7 from "../public/profile11.jpg";
import Image8 from "../public/profile8.jpg";
import Image9 from "../public/portrait12.jpg";
import Image10 from "../public/profile13.jpg";
import Empty from "../public/empty.jpg";

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const ProfileInput = ({ onSubmit }) => {
    const [input, setInput] = useState("");
  
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(input);
            setInput("");
            addFace(input);
          }}
        >
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      </div>
    );
  };
  
  const AddProfiles = () => {
    const [list, setList] = useState([]);
    
    const removeItem = (index) => {
        setList(list.filter((o, i) => index !== i));
    };
  
    return (
      <div>
        <ProfileInput
          onSubmit={(value) =>
            setList([{ value: value, complete: false }, ...list])
          }
        />
        {list.map(({ value, complete }, i) => (
          <div
            key={i}
            onClick={() => removeItem(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            <div class = "Row3">
                <div class ="prof10">
                <Image src={Empty} width = "200" height = "220"></Image>
                <h3>{value}</h3>
                </div>
            </div>
          </div>
        ))}
        <br />
      </div>
    );
  }
export default function Profile (){
    const router = useRouter();
    return(
        <main className={styles.main}>
            <div class="title">
                <h1 className={styles.title}>
                Profiles 
                </h1>
            </div>
            <div class ="RowN">
                <h3>Add Name of Person</h3>
            </div>

            <div class = "Row0">
                    <AddProfiles/>
            </div>


            <div class = "Row1">
                <div class = "prof1">
                    <Image src = {Image2} width = "200" height = "220"></Image>
                    <h3>Claire</h3>
                </div>
                
                <div class = "prof2">
                    <Image src = {Image3} width = "200" height = "220"></Image>
                    <h3>Noah</h3>
                </div>
                <div class = "prof3">
                    <Image src = {Image4} width = "200" height = "220"></Image>
                    <h3>Charlie</h3>
                </div>
            </div>

            <div class = "Row2">
                <div class = "prof4">
                    <Image src = {Image5} width = "200" height = "220"></Image>
                    <h3>Nathan</h3>
                </div>
                <div class = "prof5">
                    <Image src = {Image6} width = "200" height = "220"></Image>
                    <h3>Chloe</h3>
                </div>
                <div class = "prof6">
                    <Image src = {Image7} width = "200" height = "220"></Image>
                    <h3>Denise</h3>
                </div>   
            </div>

            <div class = "Row3">
                <div class = "prof7">
                    <Image src = {Image8} width = "200" height = "220"></Image>
                    <h3>George</h3>
                </div>
                <div class = "prof8">
                    <Image src = {Image9} width = "200" height = "220"></Image>
                    <h3>Kevin</h3>
                </div>
                <div class = "prof9">
                    <Image src = {Image10} width = "200" height = "220"></Image>
                    <h3>Michael</h3>
                </div>  
            </div>

        </main>
    )

}