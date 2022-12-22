import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import BASE from '../assets/BASE.png'



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
                    <div className='p-item'>
                        <div ref={wrapperRef} style={style} className="line" />
                        <div className='proj-title'>
                            <div className=' bg-transparent'
                            >Purely Puptonic</div>
                        </div>
                        <div className='proj-desc'>
                            / 2022.
                        </div>
                        <div class="sub-line" ref={wrapperRef} style={style2} />
                    </div>
                    <div className='p-item'>
                        <div class="line2" ref={wrapperRef} style={style3} />
                        <div className='proj-title2'>
                            <div className=' bg-transparent'
                            >Car Car</div>
                        </div>
                        <div className='proj-desc2'>
                            / 2022.
                        </div>
                        <div class="sub-line2" ref={wrapperRef} style={style4} />
                    </div>
                    <div className='p-item'>
                        <div class="line3" ref={wrapperRef} style={style5} />
                        <div className='proj-title3'>
                            <div className=' bg-transparent'
                            >Stocks</div>
                        </div>
                        <div className='proj-desc3'>
                            / 2022.
                        </div>
                        <div class="sub-line3" ref={wrapperRef} style={style6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

