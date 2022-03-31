import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Typography variant='div'className={classes.root}>
      <CircularProgress size= {120}/> 
      <Typography varient='subtitle'>  ...loading</Typography>
    </Typography>
  );
}