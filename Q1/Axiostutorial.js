import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Axiostutorial() {
    const[userdata,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
        console.log(response)
        setdata(response.data)
    })
   },[])
  return (
    <p>axiostutorial
        {userdata.map((data)=>{
        return(
            <div>{data.id}<p></p>{data.username}</div>
        )
    })}
    </p>
  );
}

export default Axiostutorial;
