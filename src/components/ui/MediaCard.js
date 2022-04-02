import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import ImageDetailDialog from './Dialogs/ImageDetailDialog'
import { CardActions, IconButton } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

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
    justifyContent: 'center',
    height: 40
  },
})

export default function MediaCard({ image }) {
  const classes = useStyles()
  const [openImageDialog, setOpenImageDialog] = useState(false)

  const handleClose = () => {
    setOpenImageDialog(false)
  }

  const handleOpen = () => {
    setOpenImageDialog(true)
  }

  return (
    <Card className={classes.root} raised>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.media}
          image={image.urls.regular}
        />
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton onClick={handleOpen}>
          <PlayCircleOutlineIcon color='primary' />
        </IconButton>
      </CardActions>
      <ImageDetailDialog 
        image = {image} 
        openImageDialog={openImageDialog}
        handleClose={handleClose} />
    </Card>
  )
}