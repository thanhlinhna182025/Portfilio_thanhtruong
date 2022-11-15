import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Context'
import { useIsLarge, useIsMedium, useIsSmall } from '../../hooks'
import Images from '../../img'
import Card from '../card/Card'

import './service.css'
import CV from './TRUONG-TUAN-THANH-FRONT-END-DEVELOPER.pdf'
const Service = () => {
    const { darkMode } = useContext(ThemeContext)
    const transition = { duration: 2, type: 'spring' }
    const isLarge = useIsLarge()
    const isMedium = useIsMedium()
    const isSmall = useIsSmall()
    return (
        <div className="service" id="service">
            {/* Left side */}
            <div className="awesome">
                <span
                    style={{
                        color: darkMode ? 'white' : '',
                    }}
                >
                    My Services
                </span>
                <span
                    style={{
                        color: darkMode ? 'white' : '',
                    }}
                >
                    “I’m a developer with experience in building websites for
                    small and medium sized businesses. Front-end developer
                    (HTML/CSS/JS) with experience developing Pixel Perfect 👌
                    Responsive HTML Landing pages, CRM, Custom pages
                </span>
                <a href={CV} download>
                    <button className="button s-button">Download my CV</button>
                </a>
            </div>
            {/* Right side */}
            <div className="cards">
                <motion.div
                    style={{ left: '0rem', top: '12rem' }}
                    transition={transition}
                    whileInView={
                        isSmall
                            ? { top: '24rem', left: '-26rem' }
                            : isMedium
                            ? { top: '30rem', left: '-32rem' }
                            : isLarge
                            ? { top: '23rem', left: '-38rem' }
                            : { top: '17rem', left: '-51rem' }
                    }
                >
                    <Card
                        emoji={Images.cute}
                        heading="Front End"
                        detail="HTML , CSS ,JavaScript, React , Taiwind , Bootstrap , CSS module ,Photoshop ,Figma "
                    />
                </motion.div>
                <motion.div
                    style={{ left: '0rem', top: '12rem' }}
                    transition={transition}
                    whileInView={
                        isSmall
                            ? { top: '24rem', left: '-12.5rem' }
                            : isMedium
                            ? { top: '30rem', left: '-10.2rem' }
                            : isLarge
                            ? { top: '23rem', left: '-9rem' }
                            : { top: '17rem', left: '-15rem' }
                    }
                >
                    <Card
                        emoji={Images.wink}
                        heading="Backend"
                        detail="Mongoose , Express ,NodeJS"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Service
