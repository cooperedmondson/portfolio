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
            
            <motion.div 
            initial='initial'
            animate='animate'
            exit='exit'
            variants={works}
            className='banner'
            >
                <motion.span variants={letters}>W</motion.span>
                <motion.span variants={letters}>O</motion.span>
                <motion.span variants={letters}>R</motion.span>
                <motion.span variants={letters}>K</motion.span>
                <motion.span variants={letters}>S</motion.span>
            </motion.div>

        </div>
    )
}

