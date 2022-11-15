import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Context'
import { useIsMedium, useIsSmall } from '../../hooks'
import Images from '../../img'
import Humble from '../../img/humble.png'
import Float from '../float'
import './intro.css'

const Intro = () => {
    const { darkMode } = useContext(ThemeContext)
    const isMedium = useIsMedium()
    const isSmall = useIsSmall()

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span
                        style={{
                            color: darkMode ? 'white' : '',
                        }}
                    >
                        Hi ! I am
                    </span>
                    <span>Thanh Truong</span>
                    <span
                        style={{
                            color: darkMode ? 'white' : '',
                        }}
                    >
                        I'm fresher frontend developer
                    </span>
                </div>
                <div className="i-icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100069433286635"
                        target="_blank"
                    >
                        <img src={Images.facebook} alt="facebooklogo" />
                    </a>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                    >
                        <img src={Images.github} alt="githublogo" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Images.vectorBlue} alt="vectorBlue" />
                <img src={Images.vectorYellow} alt="vectorYellow" />
                <img src={Images.computer} alt="Computer" />
                <motion.div
                    style={{ top: '1rem', left: '40px' }}
                    transition={{ duration: 2, type: 'spring' }}
                    whileInView={
                        isSmall
                            ? { left: '0rem ', top: '-2rem' }
                            : isMedium
                            ? { left: '0rem ', top: '-2rem' }
                            : { left: '-10rem ', top: '-5rem' }
                    }
                >
                    <Float image={Humble} text1="I'm" text2="Web Developer" />
                </motion.div>
                <motion.div
                    style={{ bottom: '1rem', left: '-200px' }}
                    transition={{ duration: 2, type: 'spring' }}
                    whileInView={
                        isSmall
                            ? { left: '13rem', top: '-7rem' }
                            : isMedium
                            ? { left: '20rem', top: '-2rem' }
                            : { left: '10rem', top: '0rem' }
                    }
                >
                    <Float
                        image={Images.heartemoji}
                        text1="Fresher"
                        text2="Frontend"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro
