import React, { Component } from 'react';
import { OldPhone } from './../../../assets/images/icons';
import Logo from '../logo';
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="flexParent shrinker">
                    <div className="logo">
                        <div className="flexParent">
                            <div className="logoImage">
                                <Logo className="homeLogoBottom" />
                            </div>
                            <div className="logoSide">
                                <div className="companyName">Options Mantra</div>
                                <div className="companyTagline">Where ideas multiply money</div>
                            </div>
                        </div>
                    </div>
                    <div className="filler">&nbsp;</div>
                    <div className="contactInfo flexParent">
                        <div className="email">info@optionsmantra.com</div>
                        <div className="phone flexParent">
                            <div className="phoneIcon">{OldPhone('#fff', 16)}</div>
                            <div className="phoneNumber">080 4174 4399</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}