import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'

export const MuiButton = ({ children, onClick, variant}) => {
    return (
        // <div>
        //      <Button variant='text'>Text</Button>
        //      <Button variant='contained'>Contained</Button>
        //      <Button variant='outlined'>outlined</Button>

        //      <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
        // </div>
        <Button variant={variant} onClick={onClick}>
            {children}
        </Button>
    )
}
