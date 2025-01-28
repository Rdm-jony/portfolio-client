import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import javascript from '../assets/javascript.png'
import firebase from '../assets/firebase.png'
import mongodb from '../assets/mongodb.png'
import redux from '../assets/redux.png'
import { motion } from "motion/react"

const Skills = () => {
    const skillis = [
        { 'name': "html", "img": html, "proficiency": '90' },
        { 'name': "css", "img": css, "proficiency": '80' },
        { 'name': "javascript", "img": javascript, "proficiency": '70' },
        { 'name': "react js", "img": react, "proficiency": '80' },
        { 'name': "node js", "img": node, "proficiency": '70' },
        { 'name': "express js", "img": express, "proficiency": '80' },
        { 'name': "mongodb", "img": mongodb, "proficiency": '70' },
        { 'name': "firebase", "img": firebase, "proficiency": '60' },
        { 'name': "redux", "img": redux, "proficiency": '60' },
    ]

    const leftVariants = {
        hidden: {
            opacity: 0,
            x: -100, // Initial position outside the viewport
        },
        visible: {
            opacity: 1,
            x: 0, // Final position in the viewport
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.3, // Delay for stagger effect
            },
        },
    };
    const rightVariants = {
        hidden: {
            opacity: 0,
            x: 100, // Initial position outside the viewport
        },
        visible: {
            opacity: 1,
            x: 0, // Final position in the viewport
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.3, // Delay for stagger effect
            },
        },
    };
    return (
        <div id='skills' className='mb-16'>
            <h2 className='text-center text-3xl font-semibold my-10'>My Skills</h2>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    skillis?.map((skill, idx) => <motion.div
                        initial="hidden"
                        // animate="visible"
                        variants={idx % 2 === 0 ? leftVariants : rightVariants}
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}>
                        <div key={idx} className='border border-gray-100 dark:bg-slate-950 p-5 drop-shadow-md rounded-md bg-white '>
                            <div className='flex items-center gap-5'>
                                <img className='w-10 h-12' src={skill?.img} alt="" />
                                <p className='font-semibold capitalize text-xl'>{skill?.name}</p>
                            </div>
                            <progress className="progress my-3" value={skill?.proficiency} max="100"></progress>
                            <p className='text-sm'>{skill?.proficiency}% Proficiency</p>
                        </div>
                    </motion.div>)
                }
            </div>

        </div>
    );
};

export default Skills;