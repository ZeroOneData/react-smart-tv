import { Typography, makeStyles, Toolbar} from '@material-ui/core';
import Container from '@material-ui/core/Container'
import React, { useEffect, useState } from 'react'
import CircularIndeterminate from '../utilities/CircularInIndeterminate';
import GetErrorDialog from '../utilities/Dialogs/GetErrorDialog';
import ROOT_URL from '../utilities/ROOT_URL';
import { useParams } from 'react-router-dom';
import SmartCarousel from './SmartCarousel';

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

function ImageList(props) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [errorCode, setErrorCode] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const classes = useStyles()

    document.title = props.pageName

    const {slug} = useParams()

    useEffect(() => {
        fetch(`${ROOT_URL}/${slug}/photos?client_id=KxMic2uEvSGnv4rBlsrycR1nO7IgMERswZ4eGq1s6f0`, {
            }
        )
        .then(res => {
            if(!res.ok) {
                setErrorCode(res.status)
                throw Error(`${res.status} - ${res.statusText}`)
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            setImages(data)
            setIsLoading(false)
            setError(null)
            setErrorCode(null)
            setOpenErrorDialog(false)
        })
        .catch(err => {
            setError(err.message)
            setOpenErrorDialog(true)
            setIsLoading(false)
        })
    }, [slug])

    return (
        <Container>
            {isLoading ?
                <Container className={classes.spinner}>
                    <CircularIndeterminate />
                </Container>:
                <Container>
                    <Toolbar style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} >
                        <Typography 
                            variant='h2' 
                            component='h2' 
                            color='textPrimary' 
                            gutterBottom
                        >
                            {slug}
                        </Typography>
                    </Toolbar>
                    <SmartCarousel images={images}/>
                </Container>
            }
            <GetErrorDialog openErrorDialog={openErrorDialog} error={error} errorCode={errorCode}/>
        </Container>
    )    
}

export default ImageList;