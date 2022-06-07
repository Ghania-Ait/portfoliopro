import React,{useState} from 'react'
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../utilities/commonUtils'
import ScrollService from '../../../utilities/ScrollService';
import {faBars} from '@fortawesome/free-brands-svg-icons'
import './Header.css'

export default function Header(props) {
    
const [selectedScreen, setSelectedScreen]=useState(0);
const [showHeaderOptions, setShowHeaderdOptions]=useState(1);

const updateCurrentScreen=(currentScreen)=>{
    if(!currentScreen || !currentScreen.screenInView)
    return;
    let screenIndex=GET_SCREEN_INDEX(currentScreen.screenInView)
    if(screenIndex < 0)
    return;
}

let currentScreenSubscription = ScrollService.currentScreenBoardCaster.subscribe(updateCurrentScreen)

    return (
        <div>
            
        </div>
    )
}
