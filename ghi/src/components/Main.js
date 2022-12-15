import React, { useState, useRef, useEffect } from 'react';
import fawef from '../assets/fawef.png'
import GOOGLY from '../assets/GOOGLY.png'
import BAGEL from '../assets/BAGEL.png'
import GIP from '../assets/GIP.gif'


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

    return (
        <div className='grain-effect'>
            <div className='main-1'>

                <nav className=' bg-transparent text-white uppercase font-semibold' id='col-3'>
                    <div className='bg-transparent'>
                        <a>About</a>
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
                            backgroundColor: '#6A6A6A',
                            transition: 'transform 4s ease-out',
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


            </div>
        </div>
    )
}

