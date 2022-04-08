import React, { useState, useEffect } from "react";

const Modal = ({ closeModal, name, unrecognized }) => {
    return (
        <div>
            {unrecognized ? <div><div>Unknown Individual detected</div></div> :
            <div>{name +"is here"}</div>}
            <button onClick = {() => closeModal(false)} name={""} unrecognized={false}>Close</button>
        </div>
    );
}

const Notifications = () => {
    const RecognizedPerson= () => {

        const [intervalId, setIntervalId] = useState(0);
        const [response, setResponse] = useState(0);
        const [openModal, setOpenModal] = useState(false);
        const [name, setName] = useState("");
        const [unrecognizedPerson, setUnrecognizedPerson] = useState(false);
        const [stringData, setStringData] = useState("");

        async function GetInfo () {
            const response = await fetch('https://randomuser.me/api/'); //put url here of /detect http://localhost:3000/detect
            const data =  await response.json();
            setStringData(JSON.stringify(data, null,2));
            setResponse(data.results[0]);
            if(response != null){
                setOpenModal(true);
                setName(response.name.first);
                
            }
            else if(response == null){
                setUnrecognizedPerson(true);
                setOpenModal(true);
            }
        }
        const handleClick = () => {
            if(intervalId){
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
            const newIntervalId = setInterval(() => {
                GetInfo();
            }, 2000);
            setIntervalId(newIntervalId);
        }
        return (
            <div>
                <button onClick = {() => handleClick()}>
                    {!intervalId ? "Activate Sentry Mode" : "Deactivate Sentry Mode"}
                </button>
                <div>
                    {console.log("Messages")}
                    {console.log(openModal)}
                    {console.log(stringData)}
                    {openModal ? 
                    <Modal closeModal ={setOpenModal} name ={name} unrecognized={unrecognizedPerson}/> : null}
                </div>
            </div>
        )
    }
    return( 
        <div>
            <RecognizedPerson />
        </div>
    );
}

//activate sentry mode
//will recieve data from api and send in modal
export default Notifications;