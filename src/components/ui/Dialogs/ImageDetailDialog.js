import { Container, Dialog, DialogContent, DialogContentText, IconButton, makeStyles, Typography } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(() => ({
    divInner: {
        height: '70vh',
        width: '80vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    typoInnerCenter: {
        flex: '80vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'justify',
        textAlignLast: 'center',
    },
}))

const ImageDetailDialog = ({ openImageDialog, image, handleClose }) => {
    const classes = useStyles() 

    return(
        <Dialog open={openImageDialog} onClose={handleClose} >
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h6' component='div'>
                    {image.description}
                    <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </Typography>
            </Container>
            <DialogContent>
                <Container
                    className={classes.divInner}
                    style={{backgroundImage: `url(${image.urls.regular})` }} >
                </Container>
                <DialogContentText className={classes.typoInnerCenter}>
                    {`Photo credits: ${image.user.name}`}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default ImageDetailDialog;