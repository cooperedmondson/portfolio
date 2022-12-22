import React from 'react'
import Main from './Main'
import Main2 from './Main-2'
import Main3 from './Main-3'
import Footer from './Footer'
export default function Contain() {
    return (
        <div>
            <div className="main-one">
                <Main />
            </div>
            <div className="main-two">
                <Main3 />
            </div>
            <div className="main-three">
                <Main2 />
            </div>
            <div className="footies">
                <Footer />
            </div>
        </div>
    )
}