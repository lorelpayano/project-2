// CONTACT US, FAQ, CAREERS, MEET THE TEAM (INFO ABOUT EACH OF US)

//CAREERS (TEAM IS FULL + FUNNY GIF)

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-small.png'


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer className = 'site-footer'>
                    <div className='footerLogo'>
                        <Link to='/'>
                        <img className='logo' src={logo} alt='logo'/>
                        </Link>
                        <p className='logo'>infiniT Nutrition</p>
                    </div>
                    <ul>
                        <li><Link className='footerLinks' to='./ContactUs'>Contact Us</Link></li>
                        <li><Link className='footerLinks' to='./FAQ'>FAQ</Link></li>
                        <li><Link className='footerLinks' to='./Careers'>Careers</Link></li>
                        <li><Link className='footerLinks' to='./MeetTheTeam'>Meet The Team</Link></li>
                        <li><Link className='footerLinks' to='/login'>Log In</Link></li>
                        <li><Link className='footerLinks' to= '/signup'>Sign Up</Link></li>
                    </ul>
                    <hr></hr>

                    <section id="lab_social_icon_footer">
                    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                    <div class="container">
                            <div class="text-center center-block">
                                    <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                                    <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                                    <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                                    <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                        </div>
                    </div>
                    </section>

                </footer>
            </div>
        );
    }
}

export default Footer;