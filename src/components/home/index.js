import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { chevronDown } from '../../assets/images/icons';
import './index.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container flexParent shrinker">
                <Header />
                <div className="middle filler">
                    <div className="middleContainer shrinker col flexParent">
                        <div className="mainTitle">Something long interesting</div>
                        <div className="mainText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie velit quam, id facilisis turpis scelerisque in. Pellentesque posuere vitae nulla vitae suscipit. Vivamus at nisi in nunc rutrum sollicitudin. Fusce et turpis facilisis nisi malesuada pellentesque nec ac nisi. Quisque tincidunt felis rhoncus eros vehicula, lobortis volutpat ipsum viverra. Praesent semper nulla nulla, ac dignissim arcu faucibus sit amet. Pellentesque malesuada eros ipsum.
                        </div>
                        <div className="chevronDown">
                            {chevronDown('#41a6e4', 75)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}