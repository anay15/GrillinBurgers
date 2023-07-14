import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>

                <article>
                    <h4>Grillin' Burgers</h4>
                    <p>
                        Indulge in Burger Bliss: Where Flame-Kissed Perfection Meets Your Cravings
                    </p>

                    <p>
                        Explore the various type of food and burgers. Click below to see the
                        menu
                    </p>

                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Anay Nayak</h3>
                        </div>

                        <p>
                            Anay Nayak, the visionary behind Grillin' Burgers - where culinary excellence meets divine flavors as an affiliate of God Taste.
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};

export default About;