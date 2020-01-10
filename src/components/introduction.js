import React from 'react'
import '../scss/components/introduction.scss'
import IntroductionBG from './sections/introduction_bg'
import IntroductionTxt from './sections/introduction_txt'

function Introduction() {
    return (
        <div className="intro_body">
            <IntroductionBG />
            <IntroductionTxt />
        </div>
    )
}

export default Introduction
