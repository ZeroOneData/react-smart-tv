import { Container, Dialog, DialogContent, makeStyles, Typography } from "@material-ui/core";

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
    }
}));

const ImageDetailDialog = ({openImageDialog, image, handleClose}) => {
    const classes = useStyles() 

    return(
        <Dialog
            open={openImageDialog}
            onClose={handleClose}
        >
            <DialogContent>
                <Container
                className={classes.divInner}
                style={{backgroundImage: `url(${image.urls.regular})` }} >
                    {/* <img src={image}></img> */}
                    
                    
                </Container>
                <Typography 
                className={classes.typoInnerCenter} 
                variant='subtitle1'>
                    {`Photo credits go to: ${image.user.name}`}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default ImageDetailDialog;