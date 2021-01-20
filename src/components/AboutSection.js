import home1 from '../img/home1.png';
import {Layout,Description, Image,Hide} from '../styles';

//Framer Motion
import { motion } from "framer-motion";
//Animations
import { titleAnim,fade,photoAnim } from "../animation";
import styled from 'styled-components';

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
            <Wave/>
        </Layout>
    )
};

//Wave Component

const Wave = () => {
    return(
        <SyledWave 
            viewBox="0 0 1440 363" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path 
                initial = {{
                    pathLength:0,
                    pathOffset:1
                }}
                animate ={{
                    pathLength:1,
                    pathOffset:0
                }}
                transition={{
                    duration:1
                }}
                d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
                stroke="#D96ED4" 
                strokeOpacity="0.5" 
                strokeWidth="10"
            />
        </SyledWave>
    )
}

const SyledWave = styled.svg`
    position: absolute;
    left:0;
    z-index: 1;
`


export default AboutSection;