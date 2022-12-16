import React, { useState, useRef, useEffect } from 'react';
import fawef from '../assets/fawef.png'
import GOOGLY from '../assets/GOOGLY.png'
import BAGEL from '../assets/BAGEL.png'
import JOBI from '../assets/JOBI.gif'

import { useAnimation, motion } from 'framer-motion';


export default function Main() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY);
    }

    const threshold = 100; // the number of pixels the user must scroll down before the div starts moving
    const amount = scrollY - threshold; // the amount by which the div should be translated
    const translateY = amount > 0 ? -amount / 2 : 0; // the translateY value to use in the transform propertythe translateY value to use in the transform propertys
    ////////////////////////////////






    const useScrollPosition = () => {
        const [testScroll, setTestScroll] = useState(window.pageYOffset);

        const onScroll = () =>{
            setTestScroll(window.pageYOffset);
        };

        useEffect(() => {
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, []);
        return testScroll;
    };

    const position = useScrollPosition();

    return (
        <div className='grain-effect'>
            <div className='main-1' >
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
                <div className='cont px-10'>
                    <div className='bg-transparent text-white' id='introduction'>
                        <div>
                            <p className='bg-transparent'>
                                HELLO! I am a 21 year old
                                <span className='span-p'>Software Engineer</span>
                                . Currently looking for my first role!
                            </p>
                        </div>
                    </div>
                    <div className=""
                        style={{
                            position: 'relative',
                            width: '20%',
                            height: '100%',
                            animationDuration: '2s',
                            // backgroundColor: '#6A6A6A',
                            backgroundImage: `url("https://media4.giphy.com/media/rcFs59ww1R7yeFszmo/giphy.gif")`,
                            transition: 'transform 4s ease-out',
                            // margin: '2rem',
                            transform: `translate3d(0, ${-translateY / 14}px, 0)`,
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{ position: 'relative' }} className="bg-transparent">
                            <img
                                src={BAGEL}
                                style={{
                                    position: 'absolute',
                                    top: '100px',
                                    zIndex: 1,
                                    transform: `translate3d(0, ${translateY / 5}px, 0)`,
                                }}
                                className="bg-transparent"
                            />
                        </div>
                    </div>
                </div>
                <div id='about'>
                    <br />
                </div>

                <div className=' flex gap-10 px-20 mt-40'>
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
                <div className='py-60'>
                </div>






                <div className='jobu-wrap'>
                    <div className='text-parent z-1 bg-transparent'>
                        <h1 className='h12'
                        style={{
                            transform: `translate3d(-${position / 13}px, -${position * 0.1}px, 0px)`
                        }}
                        >
                            A FULLSTACK DEVELOPER
                        </h1>
                        <h1 className='h12'
                        style={{
                            transform: `translate3d(${position / 80}px, -${position * 0.1}px, 0px)`
                        }}
                        >
                            WITH A CREATIVE MIND
                        </h1>
                    </div>
                    <img className="jobu" src={JOBI}
                    style={{
                        transform: `translate3d(-50%, calc(-${position * 0.4}px - -30%), 0)`,
                    }}
                    />
                    <div className='text-parent z-10 bg-transparent'>
                        <h1 className='h12 out'
                        style={{
                            transform: `translate3d(-${position / 13}px, -${position * 0.1}px, 0px)`
                        }}
                        >
                            A FULLSTACK DEVELOPER
                        </h1>
                        <h1 className='h12 out'
                        style={{
                            transform: `translate3d(${position / 80}px, -${position * 0.1}px, 0px)`
                        }}
                        >
                            WITH A CREATIVE MIND
                        </h1>
                    </div>
                </div>






            </div>
        </div>
    )
}

