import home1 from '../img/home1.png';
import {Layout,Description, Image,Hide} from '../styles';

//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {

   
    return(
        <Layout>
            <Description>
                <motion.div className="title">

                    <Hide>
                        <motion.h2>
                            We Work To Make
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>

                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</p>

                <button>Conatct Us</button>
            </Description>

            <Image>
                <img src={home1} alt="Guy with a camera"/>
            </Image>
        </Layout>
    )
};

//Syled Components


export default AboutSection;