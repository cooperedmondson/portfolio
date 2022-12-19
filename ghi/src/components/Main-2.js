import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';



export default function Main2() {

    const works = {
        animate: {
            transition: {
                delayChildren: .6,
                staggerChildren: .1,
                staggerDirection: 1,
            }
        }
    }

    const letters = {
        initial: {
            y: 400
        },
        animate: {
            y: 0,
            transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }
        }
    }


    return (

        <div className='main-2'>
            
            <div
            className='banner'
            >
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
                <span>S</span>
            </div>

        </div>
    )
}

