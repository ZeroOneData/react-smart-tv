import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ImageDetailDialog from '../utilities/Dialogs/ImageDetailDialog';
import { Button, CardActions, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 280,
    height: 250
  },
  media: {
    height: 210
  },
  actions: {
    height: 50
  },
});

export default function MediaCard({image, handleClose}) {
  const classes = useStyles();
  
  const [openImageDialog, setOpenImageDialog] = useState(false
    )

    function handleClose () {
      setOpenImageDialog(false)
    }

  return (
    <Card className={classes.root} raised>
      <CardActionArea onClick={() => setOpenImageDialog(true)}>
        <CardMedia
          className={classes.media}
          image={image.urls.regular}
        />
      </CardActionArea>
      <CardActions style={{justifyContent: 'center', height: 40}} >
        <IconButton onClick={() => setOpenImageDialog(true)} color='primary'>
          <PlayCircleOutlineIcon />
        </IconButton>
      </CardActions>
      <ImageDetailDialog 
        image = {image} 
        openImageDialog={openImageDialog}
        handleClose={handleClose} />
    </Card>
  );
}
