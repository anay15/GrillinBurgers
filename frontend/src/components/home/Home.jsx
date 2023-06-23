import React from 'react'
import Founder from './Founder';
import Menu from './Menu';
import { motion } from "framer-motion";
function Home() {
    // const options = {
    //     initial: {
    //         x: "-100%",
    //         opacity: 10,
    //     }, whileInView: {
    //         x: 0,
    //         opacity: 0,
    //     },
    // };
    return (
        <>
            <section className='home'>
                <div>
                    <motion.h1>Grillin' Burgers</motion.h1>
                    <motion.p >Ignite Your Taste Adventure!</motion.p>
                </div>
                <a href="#menu">Explore Menu</a>
            </section>
            <Founder />
            <Menu />
        </>
    )
}

export default Home