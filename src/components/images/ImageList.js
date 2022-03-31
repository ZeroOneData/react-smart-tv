import { Button, Typography, makeStyles, Toolbar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import MediaCard from '../Cards/MediaCard';
import CircularIndeterminate from '../utilities/CircularInIndeterminate';
import GetErrorDialog from '../utilities/Dialogs/GetErrorDialog';
import ROOT_URL from '../utilities/ROOT_URL';
import { useLocation, useParams } from 'react-router-dom';

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
    // const location = useLocation()
    // const { topicInstance } = location.state
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [errorCode, setErrorCode] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    const classes = useStyles()

    document.title = props.pageName

    const {slug} = useParams()


    useEffect(() => {
        fetch(`${ROOT_URL}/${slug}/photos?client_id=KxMic2uEvSGnv4rBlsrycR1nO7IgMERswZ4eGq1s6f0`, {
            // headers: {
            //     'Authorization': 'JWT ' + localStorage.getItem('access_token')
            //   }
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
            setUsers(data)
            console.log(users)
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
            {isLoading ?<Container className={classes.spinner}>
                            <CircularIndeterminate />
                        </Container>:
                <Container>
                    <Toolbar >
                        <Typography 
                                variant='h5' 
                                component='h2' 
                                color='textPrimary' 
                                gutterBottom
                                className={classes.container}
                            >
                                {slug}
                        </Typography>
                    </Toolbar>
                    <Grid container spacing ={2}>
                        {users.map(user => (
                            <Grid item key={user.id} xs={12}>
                                <MediaCard user={user}></MediaCard>
                            </Grid>
                            ))  
                        }       
                    </Grid>                             
                </Container>
            }
            <GetErrorDialog openErrorDialog={openErrorDialog} error={error} errorCode={errorCode}/>
        </Container>
    )    
}

export default ImageList;