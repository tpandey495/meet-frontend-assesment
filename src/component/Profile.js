import React, { useState,useEffect } from 'react'
import { Box,Paper} from '@mui/material';
import Profilepic from '../assets/user.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import './profile.css'
import useProfile from '../utils/useProfile';

const  Profile=()=> {
    const payload={
        jobseeker_id: "614b410c2c4b197356a37f18"
    }
    const user= useProfile(payload);
   
  return (
    <Box className="user-profile">
     {
      user.length==0?(<p></p>):
      (
     <Box className="profile">
       <Paper elevation={2}>
        <Box className="total-experience">
            <Box className="user-pic">
              <img  src={user?.data[0]?.user_image_url} alt="user-profile"/>
            </Box>
            <Box className="experience-det">
              <Box className="user-info">
                <span>{user?.data[0]?.jobseeker_name}</span> 
                <span>|</span>
                <span className="locicon"><LocationOnIcon/> </span>  
                <span> {user?.data[0]?.city}</span>
              </Box>

              <Box className="user-experience">
               <Box className="experience">
                <span><BusinessCenterIcon/></span>
                <span>EXPERIENCE</span>
                <span ><button>{user?.data[0]?.total_months_exp+" months"}</button></span>
               </Box>
                 {
                user?.data[0]?.user_experiences.map((item,index)=>{
                return <Box className="experience-info" key={index}>
                        <Box className="logo-box">
                           {
                       item.company_logo&&<img className="company-logo" width={"34px"} src={item.company_logo} alt="company_logo" /> 
                           } 
                          <Box className="user-post">{item?.user_post}</Box>
                        </Box>
                        <Box className="company-name">{item?.company_name}</Box>
                        <Box className="duration">{item?.company_starting_date}-{item?.company_ending_date}</Box>
                        <Box className="role-description">{item?.role_discription}</Box>
                     </Box>
                })
              }
              <Box className="education-info">
                  <Box className="education">
                    <span className="eduicon"><SchoolIcon/></span>
                    <span>EDUCATION</span>
                  </Box>
                  <Box className="course-name">{user?.data[0]?.user_qualifications[0]?.course_type}-{user?.data[0]?.user_qualifications[0]?.course_name}</Box>
                  <Box className="user-college">{user?.data[0]?.user_qualifications[0]?.user_college}|{user?.data[0]?.user_qualifications[0]?.user_passing_year}</Box>
              </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      )
     }
    </Box>
  )
  }

 
export default Profile;