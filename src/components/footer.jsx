import { BsFacebook, BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import {FaCloudDownloadAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const downloadResume = () => (
        window.open('resume.pdf')
    )
    return(
    <div className="footer">
        <div className="links">
            <h4>Terms of use</h4>
            <h4>Privacy policy</h4>
            <h4>About</h4>
            <h4>Blog</h4>
            <h4>FAQ</h4>
        </div>
        <div className="footer-info">
            Hello, my name is Faishal Rahman and I am an engineering student and I really liked to 
            create and work in these type of technologies and create something useful out of it. 
            I want to be a Full stack developer but currently learning Front end technologies with 
            basic backend to support my front end application. 
            <b>You can download my resume by clicking on the download icon below</b>. 
            <b>You can also check my GitHub profile from the icon below</b>
        </div>
        <div className="social-medias">
            <span>
                <Link to={'https://github.com/itsmefaishal'} target='_blank' rel="noopener noreferrer"
                className='link'
                >
                    <BsGithub/>
                </Link>
            </span>
            <span><BsFacebook /></span>
            <span><BsInstagram/></span>
            <span><BsLinkedin/></span>
            <span><BsTwitter/></span>
            <span><FaCloudDownloadAlt onClick={downloadResume}/></span>
        </div>
    </div>
    );
}
export default Footer;