import { useState, useEffect } from "react";
import axios from 'axios';

const useProfile = (payload) => {
    const[user,setUser]=useState([]);
    
    useEffect(()=>{
      fetchData();
    },[])
    
    const  fetchData=async()=>{
        try{
            const data=await axios.post("https://api.meetworks.in/users/get_unique_jobseeker_profile",payload);
            console.log(data);
            setUser(data);
        }
        catch(Err){
          return <div>{Err}</div>
        }
    }

  return user;
};

export default useProfile;

