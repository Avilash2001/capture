import home1 from '../img/home1.png';
import {Layout,Description, Image,Hide} from '../styles';

//Framer Motion
import { motion } from "framer-motion";
//Animations
import { titleAnim,fade,photoAnim } from "../animation";

const AboutSection = () => {

   
    return(
        <Layout>
            <Description>
                <motion.div className="title">

                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We Work To Make
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>

                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have professionals with amazing skills
                </motion.p>

                <motion.button variants={fade}>Conatct Us</motion.button>
            </Description>

            <Image>
                <motion.img variants={photoAnim} src={home1} alt="Guy with a camera"/>
            </Image>
        </Layout>
    )
};

//Syled Components


export default AboutSection;