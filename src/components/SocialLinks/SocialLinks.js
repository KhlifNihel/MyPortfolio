import React from "react";

import SocialData from "../../Data/SocialData";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import classes from "./socialLinks.module.css";
import { useSelector } from "react-redux";
const SocialLinks = (props) => {

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    return (
        <div className={`${classes.socialLinks} ${props.className}`} style={{ color: nonThemeColor }}>
            <a href="https://github.com/KhlifNihel" ><GitHubIcon fontSize="large" /></a>
            <a href="https://www.linkedin.com/in/nihel-khlif-712504229/"><LinkedInIcon fontSize="large" /></a>
            <a href={SocialData.instaLink}><InstagramIcon fontSize="large" /></a>
            <a href="https://outlook.office.com/mail/deeplink/compose/?mailtouri=mailto%3akhlifnihel%40fsm.u-monastir.tn"><EmailIcon fontSize="large" /></a>
        </div>
    )
};
export default SocialLinks;