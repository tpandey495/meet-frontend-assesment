import React from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from '../assets/logo.png';
import Mobilemenu from './Drawer';
import data from '../config/data';



const Deskmenu=()=>{
    return (
      <>
        <Tabs sx={{ marginLeft: "auto" }} value={0} aria-label="icon tabs example" indicatorColor={"#14967B"}>
          <Tab className="active-tabs" icon={data[0].icon }  label={data[0].name} style={{borderBottom : "1px solid #14967B"}} />
          <Tab icon={data[1].icon} label={data[1].name}/>
          <Tab icon={data[2].icon} label={data[2].name} />
       </Tabs>
        <Button sx={{ marginLeft: "auto" }} variant="outlined">
          Post Job
        </Button>
        <Button sx={{ marginLeft: "10px",background:"#14967B" }} variant="contained">
          Sign In
        </Button>
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