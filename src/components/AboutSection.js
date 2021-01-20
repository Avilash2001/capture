import home1 from '../img/home1.png';
import {Layout,Description, Image,Hide} from '../styles';

//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {

    const titleAnim = {
        hidden: { opacity: 0},
        show: { opacity: 1,transition:{duration: 2}}
    }

    const containerAnim = {
        hidden: {x: 100},
        show: {x:0,transition:{duration: 1, ease: "easeOut" ,staggerChildren:1 }}
    }
    
    return(
        <Layout>
            <Description>
                <motion.div variants={containerAnim} initial="hidden" animate="show" className="title">

                    <Hide>
                        <motion.h2 variants ={titleAnim}>
                            We Work To Make
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants ={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants ={titleAnim}>
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