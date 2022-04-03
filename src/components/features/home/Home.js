import { Typography, Toolbar } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import CircularIndeterminate from '../../ui/CircularInIndeterminate'
import GetErrorDialog from '../../ui/Dialogs/GetErrorDialog'
import SmartCarousel from '../../ui/SmartCarousel'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import useFetch from '../../utilities/customHooks/useFetch'
import ROOT_URL from '../../utilities/ROOT_URL'
import ApiKey from '../../utilities/auth/ApiKey'

export default function Home(props) {
    document.title = props.pageName
    
    const { data: images, error, errorCode, isLoading, openErrorDialog } = useFetch(
        `${ROOT_URL}/photos/?client_id=${ApiKey}`)

    return (
        <Container>
            { isLoading ? 
                <CircularIndeterminate message='loading'/>
                :
                <Container>
                    <Toolbar style={{ justifyContent:'center'}}>
                        <Typography 
                            variant='h2' 
                            component='h2' 
                            color='textPrimary' 
                            gutterBottom
                        >
                            {'SmartTUBE'}
                            <LiveTvIcon fontSize='inherit' color='primary' style={{marginLeft:50}}/>
                        </Typography>
                    </Toolbar>
                    <SmartCarousel images = {images}/>                             
                </Container>
            }
            <GetErrorDialog openErrorDialog={openErrorDialog} error={error} errorCode={errorCode}/>
        </Container>
    )    
}