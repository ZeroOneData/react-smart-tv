import { Button, Dialog, DialogActions, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
    },
    '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    spinner: {
        display: 'flex',
          marginLeft: theme.spacing(1),  
          justifyContent:'center', 
          alignItems:'center', 
          height: '80vh',
        }
}));

const GetErrorDialog = (props) => {
    const classes = useStyles() 
    const history = useHistory()

    const handleClose = () => {
        history.push('/')
      };
    
    const refresh = ()=>{
    // it re-renders the component
        window.location.reload();
    }

    return(
        <Dialog
            open={props.openErrorDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
                <div>
                    <div className={classes.root}>
                        <Alert
                            severity="error"
                        >
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