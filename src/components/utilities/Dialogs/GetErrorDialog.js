import { Button, Dialog, DialogActions } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { useHistory } from "react-router-dom"

const GetErrorDialog = (props) => {
    const history = useHistory()

    const handleClose = () => {
        history.push('/')
      };
    
    const refresh = ()=>{
        window.location.reload()
    }

    return(
        <Dialog
            open={props.openErrorDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div>
                <div>
                    <Alert severity="error">
                        <strong>Error - </strong>{props.error}
                    </Alert>
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Logout
                    </Button>
                    <Button onClick={refresh} autoFocus>
                        Retry
                    </Button>
                </DialogActions>
            </div>       
        </Dialog>
    )
}

export default GetErrorDialog;