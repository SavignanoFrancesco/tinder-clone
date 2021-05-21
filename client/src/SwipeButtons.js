import React from "react";
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons(){
    return (
        <div className="swipe-buttons">
            <IconButton className="icon-button swipe-button-repeat">
                <ReplayIcon className="repeat-icon"/>
            </IconButton>
            <IconButton className="icon-button swipe-button-left">
                <CloseIcon className="left-icon"/>
            </IconButton>
            <IconButton className="icon-button swipe-button-star">
                <StarRateIcon className="star-icon"/>
            </IconButton>
            <IconButton className="icon-button swipe-button-right">
                <FavoriteIcon className="right-icon"/>
            </IconButton>
            <IconButton className="icon-button swipe-button-lightning">
                <FlashOnIcon className="repeat-lightning"/>
            </IconButton>

        </div>
    )
}

export default SwipeButtons;