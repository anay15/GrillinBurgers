import React from 'react'
import { motion } from "framer-motion"
import me from "../../assets/burger.png"
const Founder = () => {
    const option = {
        // transition: { delay: 0.2 },
        initial: {
            x: "-100%",
            opacity: 0
        },
        whileInView: {
            x: 10,
            opacity: 1
        }
    }
    return (
        <motion.section className='founder'>
            <motion.div {...option}>
                <img src={me} alt="alternate" height={200} width={200} />
                <h3>Anay Nayak</h3>
                <p3>I am 3rd computer engineering student Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ipsa ut quasi, atque, libero iste quaerat dolorum ipsum, est iusto illo adipisci. Veritatis accusantium saepe reprehenderit rerum culpa eaque porro.</p3>
            </motion.div>
        </motion.section>
    )
}

export default Founder
