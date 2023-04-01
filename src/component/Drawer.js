import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  Tab,
  Tabs,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import data from '../config/data';


const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>  
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <Tabs value={0} orientation="vertical">
            {data.map((pages, index) => (
              <Tab  key={index} label={pages.name} icon={pages.icon}/>
            ))}
          </Tabs>
        </List>
        <Button sx={{ marginLeft: "auto" ,marginRight:"auto"}} variant="outlined">
          Login
        </Button>
        <Button sx={{ marginLeft: "auto",marginRight:"auto",marginTop:"20px",background:"#14967B" }} variant="contained">
          SignUp
        </Button>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="black" />
      </IconButton>
    </>
  );
};

export default DrawerComp;