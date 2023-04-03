import React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import  MuiButton from '@mui/material/Button';
import logo from '../assets/logo.png';
import Mobilemenu from './Drawer';
import data from '../config/data';
import { styled } from "@mui/material/styles";



export const Button = styled(MuiButton)((props) => ({
  color:"rgba(20, 150, 123, 1)"
}));



const Deskmenu=()=>{
    return (
      <>
       <Tabs sx={{ marginLeft: "auto" }} value={0} TabIndicatorProps={{
            style: {
              backgroundColor: "rgba(91, 194, 168, 1)"
            }}}>
          <Tab className="active-one" icon={data[0].icon }  label={data[0].name} style={{color:" rgba(91, 194, 168, 1)"}} />
          <Tab icon={data[1].icon} label={data[1].name}/>
          <Tab icon={data[2].icon} label={data[2].name} />
       </Tabs>
        <Button sx={{ marginLeft: "auto" }} variant="outlined">
          Post Job
        </Button>
        <MuiButton sx={{ marginLeft: "10px",background:"#14967B" }} variant="contained">
          Sign In
        </MuiButton>
      </>
    )
}

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{background:"white"}}>
        <Toolbar>
          <img src={logo} alt="company-icon" />
          {isMatch ? (
            <Mobilemenu />
          ) : (
           <Deskmenu />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;