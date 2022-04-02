import { Typography, Toolbar} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import CircularIndeterminate from '../../ui/CircularInIndeterminate'
import GetErrorDialog from '../../ui/Dialogs/GetErrorDialog'
import ROOT_URL from '../../utilities/ROOT_URL'
import { useParams } from 'react-router-dom'
import SmartCarousel from '../../ui/SmartCarousel'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import useFetch from '../../utilities/customHooks/useFetch'
import ApiKey from '../../utilities/auth/ApiKey'

export default function ImageList(props) {
    document.title = props.pageName

    const {slug} = useParams()
    
    const { data: images, error, errorCode, isLoading, openErrorDialog } = useFetch(
        `${ROOT_URL}/topics/${slug}/photos?client_id=${ApiKey}`, slug)
    return (
        <Container>
            {isLoading ?
                <CircularIndeterminate message='loading'/>
                :
                <Container>
                    <Toolbar style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} >
                        <Typography 
                            variant='h2' 
                            component='h2' 
                            color='textPrimary' 
                            gutterBottom
                        >
                            {slug}
                            <LiveTvIcon fontSize='inherit' color='primary' style={{marginLeft:50}}/>
                        </Typography>
                    </Toolbar>
                    <SmartCarousel images={images}/>
                </Container>
            }
            <GetErrorDialog openErrorDialog={openErrorDialog} error={error} errorCode={errorCode}/>
        </Container>
    )    
}