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
import { styled } from "@mui/material/styles";

export const CButton = styled(Button)((props) => ({
  color:"rgba(20, 150, 123, 1)"
}));

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
             index==0? (<Tab  key={index} label={pages.name} style={{color:" rgba(91, 194, 168, 1)"}} icon={pages.icon}/>):<Tab  key={index} label={pages.name} icon={pages.icon}/>
            ))}
          </Tabs>
        </List>
        <CButton sx={{ marginLeft: "auto" ,marginRight:"auto"}} variant="outlined">
          Post Job
        </CButton>
        <Button sx={{ marginLeft: "auto",marginRight:"auto",marginTop:"20px",background:"#14967B" }} variant="contained">
          Sign In
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