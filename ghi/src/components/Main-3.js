import React, { useState, useRef, useEffect } from 'react';
import fawef from '../assets/fawef.png'
import PAPER from '../assets/PAPER.gif'
import BAGEL from '../assets/BAGEL.png'
import JOBI from '../assets/JOBI.gif'

import { useAnimation, motion } from 'framer-motion';

export default function Main3() {
    const useScrollTest = () => {
        const [scrollTest, setScrollTest] = useState(window.pageYOffset);

        const onScrolling = () => {
            setScrollTest(window.pageYOffset);
        };

        useEffect(() => {
            window.addEventListener('scroll', onScrolling);
            return () => {
                window.removeEventListener('scroll', onScrolling);
            };
        }, []);

        const startThreshold = 1400;
        const stopThreshold = 2400;
        const scrollPosition = window.scrollY;
        let divTop;
        if (scrollPosition < startThreshold) {
            divTop = startThreshold;
        } else if (scrollPosition > stopThreshold) {
            divTop = stopThreshold;
        } else {
            divTop = scrollPosition;
        }

        const divStyle = {
            transform: `translate3d(0%, calc(-${divTop * 0.2}px - 0%), 0)`,
        };
        const imgStyle = {
            transform: `translate3d(0%, calc(${divTop * 0.07}px - -30%), 0)`,
        };

        return { scrollTest, divStyle, imgStyle };
    };

    const { scrollTest, divStyle, imgStyle } = useScrollTest();
    return (
        <div>
            <div id='about'/>
            <div className='flex gap-10 ' id='intro' >
                <div className='bg-transparent text-white' >
                    <h1 className='about'> About Me </h1>
                </div>
                <div className='text-white' id='hello'>
                    <div className='text-container'>
                        <div className='uppercase' id="p-text">
                            <div className='b1'>
                                <div>FullStack</div>
                                <div>Developer</div>
                            </div>
                            <div className='b1'>
                                <div>BackEnd</div>
                                <div>Developer</div>
                            </div>
                            <div className='b1'>
                                <div>FrontEnd</div>
                                <div>Developer</div>
                            </div>
                        </div>
                        <br />
                        <div className='boh'>
                            <p className='b2'>
                                I'm a Junior Full Stack Developer and
                                a recent graduate of the Software Engineering
                                program at Hack Reactor. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='moving-container'
                    style={divStyle}
                >
                    <img src={PAPER} className="papa" />
                    <div>
                        <img className="fixing" style={imgStyle} src={BAGEL} />
                    </div>
                </div>
            </div>
        </div>
    )
}

