import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import UPSIDE from '../assets/UPSIDE.png'
import AIR from '../assets/UPSIDE.png'

import { gsap, TweenMax } from "gsap";


export default function Main2() {
    const wrapperRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting);
            },
            { rootMargin: '0px 0px -5% 0px' }
        );
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    const style = {
        width: isInViewport ? '14%' : '0%',
        transition: 'width 1s ease-in-out'
    };
    const style2 = {
        width: isInViewport ? '22%' : '0%',
        transition: 'width 2s ease-in-out'
    };
    const style3 = {
        width: isInViewport ? '58%' : '0%',
        transition: 'width 2s ease-in-out'
    };
    const style4 = {
        width: isInViewport ? '4%' : '0%',
        transition: 'width 1s ease-in-out'
    };
    const style5 = {
        width: isInViewport ? '3%' : '0%',
        transition: 'width 1s ease-in-out'
    };
    const style6 = {
        width: isInViewport ? '60%' : '0%',
        transition: 'width 2s ease-in-out'
    };
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { rootMargin: '0px 0px -10% 0px' }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    const pathLength = 200; // Adjust this value to the length of your path
    const styles = {
        strokeDasharray: pathLength,
        strokeDashoffset: isVisible ? 0 : pathLength,
        transition: 'stroke-dashoffset 2s ease-in-out',
    };
    const patLength = 160; // Adjust this value to the length of your path
    const stylez = {
        strokeDasharray: patLength,
        strokeDashoffset: isVisible ? 0 : patLength,
        transition: 'stroke-dashoffset 2s ease-in-out',
    };


    const didAnimate = useRef(false);
    const timeline_home = gsap.timeline();

    useEffect(() => {
        if (didAnimate.current) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    timeline_home.from("#testy", {
                        duration: 1.8,
                        skewY: 20,
                        y: 400,
                        stagger: {
                            amount: .48,
                        }
                    }, "-=1.2")
                    timeline_home.from("#dates", {
                        duration: 1.2,
                        skewY: 30,
                        y: 500,
                        stagger: {
                            amount: .48,
                        }
                    }, "-=1.2");
                    observer.disconnect();
                }
            });
        });

        const el = document.querySelector('#testy');
        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, []);


    const hoverDiv = useRef(null);
    const image = useRef(null);

    useEffect(() => {
        // Set the initial alpha of the image to 0
        TweenMax.set(image.current, {
            alpha: 0
        });
    }, []); // The empty array ensures that the effect only runs on mount

    const handleMouseMove = (event) => {
        TweenMax.to(image.current, 0, {
            x: event.pageX - hoverDiv.current.offsetLeft - image.current.offsetWidth / 2,
            y: event.pageY - hoverDiv.current.offsetTop - image.current.offsetHeight / 2 - 25,
            alpha: 1 // Fade in the image when the mouse moves
        });
    }

    const handleMouseLeave = () => {
        TweenMax.to(image.current, 0.5, {
            alpha: 0
        });
    }

    return (

        <div className='main-2'>
            <div id="projects" />
            <div className='project_items'>
                <div className='pr_items'>
                    <div className='featured'>
                        <div ref={containerRef} className="svgeez">
                            <svg width="150" height="145" viewBox="0 0 150 145" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-transparent">
                                <path style={styles} d="M1 60.5L49.5 142.5L149 111" stroke="white" stroke-width="6" className="bg-transparent" />
                                <path style={stylez} d="M109 1L49 144" stroke="white" stroke-width="6" className="bg-transparent" />
                            </svg>
                        </div>
                        Featured Works
                        <span className='featured-subtext'>
                            ( "3" )
                        </span>
                    </div>
                    <div className='p-item'
                        ref={hoverDiv}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >

                        <div ref={wrapperRef} style={style} className="line" />
                        <div className='proj-title'>
                            <a href='https://www.youtube.com/watch?v=aeTpUjq7xak' className='a-wrap'>
                                <div className=' bg-transparent' id='testy' >
                                    Purely Puptonic
                                </div>
                            </a>
                        </div>
                        <div className='proj-desc' id='dates'>
                            / 2022.
                        </div>
                        <div className="sub-line" ref={wrapperRef} style={style2} />
                        <img src={UPSIDE} className="upside" ref={image} />
                    </div>
                    <div className='p-item'
                    ref={hoverDiv}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    >
                        <div className="line2" ref={wrapperRef} style={style3} />
                        <div className='proj-title2'>
                            <div className=' bg-transparent' id='testy'>
                                Car Car
                            </div>
                        </div>
                        <div className='proj-desc2' id='dates'>
                            / 2022.
                        </div>
                        <div class="sub-line2" ref={wrapperRef} style={style4} />
                        <img src={UPSIDE} className="upside" ref={image} />
                    </div>
                    <div className='p-item'>
                        <div className="line3" ref={wrapperRef} style={style5} />
                        <div className='proj-title3'>
                            <div className=' bg-transparent' id='testy'>
                                Stocks
                            </div>
                        </div>
                        <div className='proj-desc3' id='dates'>
                            / 2022.
                        </div>
                        <div className="sub-line3" ref={wrapperRef} style={style6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

