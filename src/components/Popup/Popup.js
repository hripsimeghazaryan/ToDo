import { React } from 'react';
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import './Popup.css';

function Popup({open, handlePopUp, removeTask, id}) {

    return (
        <Dialog
        className="remove-popup"
        open={open}
        onClose={handlePopUp}
        >
            <DialogTitle style={{color: "rgb(33, 133, 148)", textAlign: "center", padding: 0}}>
                {"Are you sure you want to delete?"}
            </DialogTitle>
            <DialogActions className='popup-buttons'>
                <Button 
                variant="contained"
                onClick={(event) => {
                    event.preventDefault();
                    removeTask(id)
                    handlePopUp()
                }
                }
                >
                    Yes
                </Button>
                <Button 
                variant="contained"
                onClick={handlePopUp}
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup;