import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                    <h2>Grillin' Burgers</h2>

                    <p>Experience the ultimate culinary delight as we strive to deliver unparalleled taste sensations.</p>
                    <br />

                    <em>We value and appreciate your authentic feedback, which helps us constantly improve.</em>

                    <strong>All right received @grillinburgers</strong>
                </div>

                <aside>
                    <h4>Stay connected</h4>

                    <a href="https://github.com/anay15">
                        <AiFillYoutube />
                    </a>
                    <a href="https://github.com/anay15">
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/anay15">
                        <AiFillGithub />
                    </a>
                </aside>
            </footer>
        </div >
    )
}

export default Footer