import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import UPSIDE from '../assets/UPSIDE.png'
import RIGHTSIDE from '../assets/RIGHTSIDE.png'
import AYO from '../assets/AYO.png'

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
                        duration: 4,
                        opacity: 0,
                        stagger: {
                            amount: 0.6,
                        },
                        ease: 'power2.inOut',
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

    const hoverDiv1 = useRef(null);
    const hoverDiv2 = useRef(null);
    const hoverDiv3 = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);

    useEffect(() => {
        // Set the initial alpha of the images to 0
        TweenMax.set(image1.current, { alpha: 0 });
        TweenMax.set(image2.current, { alpha: 0 });
        TweenMax.set(image3.current, { alpha: 0 });
    }, []); // The empty array ensures that the effect only runs on mount

    // Create event handlers for each div
    const handleMouseMove1 = (event) => {
        TweenMax.to(image1.current, 0, {
            x: event.pageX - hoverDiv1.current.offsetLeft - image1.current.offsetWidth / 2 + 130,
            y: event.pageY - hoverDiv1.current.offsetTop - image1.current.offsetHeight / 2 + 47,
            alpha: 1, // Fade in the image when the mouse moves
        });
    };

    const handleMouseLeave1 = () => {
        TweenMax.to(image1.current, 0.5, {
            alpha: 0,
        });
    };

    const handleMouseMove2 = (event) => {
        TweenMax.to(image2.current, 0, {
            x: event.pageX - hoverDiv2.current.offsetLeft - image2.current.offsetWidth / 2 + 130,
            y: event.pageY - hoverDiv2.current.offsetTop - image2.current.offsetHeight / 2 + 47,
            alpha: 1, // Fade in the image when the mouse moves
        });
    };

    const handleMouseLeave2 = () => {
        TweenMax.to(image2.current, 0.5, {
            alpha: 0,
        });
    };

    const handleMouseMove3 = (event) => {
        TweenMax.to(image3.current, 0, {
            x: event.pageX - hoverDiv3.current.offsetLeft - image3.current.offsetWidth / 2 + 130,
            y: event.pageY - hoverDiv3.current.offsetTop - image3.current.offsetHeight / 2 + 47,
            alpha: 1, // Fade in the image when the mouse moves
        });
    };

    const handleMouseLeave3 = () => {
        TweenMax.to(image3.current, 0.5, {
            alpha: 0,
        });
    };

    useEffect(() => {
        const text = document.querySelector('.behance p');
        const text2 = document.querySelector('.behances p');
        const text3 = document.querySelector('.behancess p');
        text.innerHTML = text.innerText.split('').map(
            (char, i) =>
                `<span style="transform: rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');
        text2.innerHTML = text2.innerText.split('').map(
            (char, i) =>
                `<span style="transform: rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');
        text3.innerHTML = text3.innerText.split('').map(
            (char, i) =>
                `<span style="transform: rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');
    }, [])


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
                        ref={hoverDiv1}
                        onMouseMove={handleMouseMove1}
                        onMouseLeave={handleMouseLeave1}
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
                        <div className="upside" ref={image1}>
                            <img src={UPSIDE} className="earth" />
                            <div className='please'>
                                <div className='circle'>
                                    <div className='behance'>
                                        <p>cooper edmondson behance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-item'
                        ref={hoverDiv2}
                        onMouseMove={handleMouseMove2}
                        onMouseLeave={handleMouseLeave2}
                    >
                        <div className="line2" ref={wrapperRef} style={style3} />
                        <div className='proj-title2'>
                            <a href='https://www.youtube.com/watch?v=D-7c6eyTDfs'>
                                <div className=' bg-transparent' id='testy'>
                                    Car Car
                                </div>
                            </a>
                        </div>
                        <div className='proj-desc2' id='dates'>
                            / 2022.
                        </div>
                        <div class="sub-line2" ref={wrapperRef} style={style4} />
                        <div className="upside" ref={image2}>
                            <img src={RIGHTSIDE} className="earth" />
                            <div className='please'>
                                <div className='circle'>
                                    <div className='behances'>
                                        <p>cooper edmondson behance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-item'
                        ref={hoverDiv3}
                        onMouseMove={handleMouseMove3}
                        onMouseLeave={handleMouseLeave3}
                    >
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
                        <div className="upside" ref={image3}>
                            <img src={AYO} className="earth" />
                            <div className='please'>
                                <div className='circle'>
                                    <div className='behancess'>
                                        <p>cooper edmondson behance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

