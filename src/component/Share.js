import MuiButton from "@mui/material/Button";
import ShareIcon from '@mui/icons-material/Share';
import { styled } from "@mui/material/styles";
import "./Share.css";

export const Button = styled(MuiButton)((props) => ({
    color:"#5BC2A8"
  }));

const Share = ()=>{
    return(
        <div className="share">
            <Button variant="outlined" startIcon={<ShareIcon/>}>Share</Button>
        </div>
  )
}

export default Share;