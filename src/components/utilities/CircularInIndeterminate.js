import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
  },
  spinner: {
    display: 'flex',
      marginLeft: theme.spacing(1),  
      justifyContent:'center', 
      alignItems:'center', 
      height: '80vh',
    }
}))

export default function CircularIndeterminate({message}) {
  const classes = useStyles();

  return (
    <Container className={classes.spinner}>
      <Typography component = 'div' className={classes.root}>
        <CircularProgress size= {120}/> 
        <Typography variant='subtitle1'>  {`...${message}`}</Typography>
      </Typography>
    </Container>
  )
}