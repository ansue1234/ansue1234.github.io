import { css } from "@emotion/react"
import {IconButton} from '@material-ui/core'
import {KeyboardArrowDown, KeyboardArrowUp} from '@material-ui/icons'
import React, {useState, useEffect} from 'react'




function scrollToTop(top) {
    if (top) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      document.body.scrollTop = document.body.scrollHeight;
      document.documentElement.scrollTop = document.body.scrollHeight;
    }
}

export default function Scroll({direction}) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    if (isDesktop) {
        if (direction === 'Up') {
            return (
                <div>
                    <IconButton color='primary' aria-label='Scroll to Top' onClick={()=>(scrollToTop(true))} css={css`left: calc(10%); top:calc(10%); position: fixed`} size='medium'><KeyboardArrowUp/></IconButton>
                </div>
            )
        } else {
            return (
                <div>
                    <IconButton color='primary' aria-label='Scroll to Bottom' onClick={()=>(scrollToTop(false))} css={css`left: calc(10%); top:calc(15%); position: fixed`} size='medium'><KeyboardArrowDown/></IconButton>
                </div>
            )
        }
    } else {
        return (<div/>)
    }
}