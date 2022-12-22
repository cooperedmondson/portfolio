import React from 'react'
import { Link } from 'react-router-dom'
import BASE from '../assets/BASE.png'
import PLEASE from '../assets/PLEASE.gif'


export default function Footer() {
    return (
        <div className='footer-container'>
            <div>

                <div className='testing'>
                    <div >
                        <img src={PLEASE} />
                    </div>
                </div>

                <div className='contact' id="contact">
                    <p className='contact-p'>
                        <span>Like what you've seen? Feel
                            free to contact me.
                        </span>
                    </p>
                    <br />
                        <a className="contact-a" href="mailto:cooperedmondson0115@gmail.com"> " Email "</a>
                        <a className="contact-a" href="https://www.linkedin.com/in/cooper-edmondson/"> " LinkedIn "</a>
                </div>


            </div>
        </div>
    )
}
