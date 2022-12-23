import React, { useState, useRef, useEffect } from 'react';
import fawef from '../assets/fawef.png'
import JOBI from '../assets/JOBI.gif'
import { useAnimation, motion } from 'framer-motion';


export default function Main() {


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

    const position = useScrollPosition();


    return (
        <div className='main-1' >
            <div className='grain-effect' />
            <nav className=' bg-transparent text-white uppercase font-semibold' id='col-3'>
                <div className='bg-transparent'>
                    <a  className="a" href='#about'>About</a>
                    <br />
                    <a  className="a" href='#projects'>Projects</a>
                </div>
                <div className='bg-transparent'>
                    <a 
                     className="a" href='https://github.com/cooperedmondson'>Github</a>
                    <br/>
                    <a  className="a" href='#contact'>
                        Contact
                    </a>
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
        </div>
    )
}

