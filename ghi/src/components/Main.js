import React, { useState, useRef, useEffect } from 'react';
import fawef from '../assets/fawef.png'
import PAPER from '../assets/PAPER.gif'
import BAGEL from '../assets/BAGEL.png'
import JOBI from '../assets/JOBI.gif'

import { useAnimation, motion } from 'framer-motion';


export default function Main() {
    console.log(window.pageYOffset)

    const useScrollPosition = () => {
        const [testScroll, setTestScroll] = useState(window.pageYOffset);

        const onScroll = () => {
            setTestScroll(window.pageYOffset);
        }

        useEffect(() => {
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, []);
        return testScroll;
    };

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
    const position = useScrollPosition();









    return (
        <div className='main-1' >
            <div className='grain-effect' />
            <nav className=' bg-transparent text-white uppercase font-semibold' id='col-3'>
                <div className='bg-transparent'>
                    <a href='#about'>About</a>
                    <br />
                    <a>Projects</a>
                </div>
                <div className='bg-transparent'>
                    <a>Github</a>
                </div>
            </nav>
            <div className='rotate'>
                <img src={fawef} className='image' />
            </div>
            <div className='py-40'>
            </div>
            <div className='jobu-wrap'>
                <div className='text-parent z-1 bg-transparent'>
                    <h1 className='h12'
                        style={{
                            transform: `translate3d(-${position / 2 - 40}px, -${position * 0.1}px, 0px)`
                        }}
                    >
                        A FULLSTACK DEVELOPER
                    </h1>
                    <h1 className='h12'
                        style={{
                            transform: `translate3d(${position / 2 - 400}px, -${position * 0.1}px, 0px)`
                        }}
                    >
                        WITH A CREATIVE MIND
                    </h1>
                </div>
                <img className="jobu" src={JOBI}
                    style={{
                        transform: `translate3d(-50%, calc(-${position * 0.26}px - 0%), 0)`,
                    }}
                />
                <div className='text-parent z-10 bg-transparent'>
                    <h1 className='h12 out'
                        style={{
                            transform: `translate3d(-${position / 2 - 40}px, -${position * 0.1}px, 0px)`
                        }}
                    >
                        A FULLSTACK DEVELOPER
                    </h1>
                    <h1 className='h12 out '
                        style={{
                            transform: `translate3d(${position / 2 - 400}px, -${position * 0.1}px, 0px)`
                        }}
                    >
                        WITH A CREATIVE MIND
                    </h1>
                </div>
            </div>
            <div className='flex gap-10 ' id='intro'>
                <div className='bg-transparent text-white'>
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
                                I'm a recent graduate of Hack Reactor's
                                bootcamp. I've also graduated from Abraham
                                Baldwin Agricultural College with my Associates
                                of Science. I love the outdoors, movies, and learning
                                about new technologies. Feel free to connect with me and
                                chat!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='moving-container'
                style={divStyle}
            >
                <img src={PAPER} className="papa" />
                <div>
                    <img className="fixing" style={imgStyle} src={BAGEL} />
                </div>
            </div>
        </div>
    )
}

