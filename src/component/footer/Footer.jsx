import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons'
import React from 'react'
import Images from '../../img'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Images.wave} alt="wave" style={{ width: '100%' }} />
            <div className="f-content">
                <span>thanhtruong182025@gmail.com</span>
                <div className="f-icons">
                    <UilInstagram color="white" size="60px" />
                    <UilGithub color="white" size="60px" />
                    <UilFacebook color="white" size="60px" />
                </div>
            </div>
        </div>
    )
}

export default Footer
