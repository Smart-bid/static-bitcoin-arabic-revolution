import React, { Component } from 'react'
import Testimonals from './Testimonals/Testimonals'
import Features from './Features/Features'
import Table from './Table/Table'
import HowItWorks from './HowItWorks/HowItWorks'
import Faq from './Faq/Faq'

import bitGo from './images/bitgo.png'
import norton from './images/norton.png'
import secureTrading from './images/secure-trading.png'
import mcAffee from './images/mcafee.png'
import tvs from './images/tvs.png'


export default class MidSection extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="MidSection">
                <div className="container logos-form-block">
                    <div className="left-side-logos">
                        <div className="ext-logo">
                            <img src={bitGo} alt=""/>
                        </div>
                        <div className="ext-logo">
                            <img src={norton} alt=""/>
                        </div>
                        <div className="ext-logo">
                            <img src={secureTrading} alt=""/>
                        </div>
                        <div className="ext-logo">
                            <img src={mcAffee} alt=""/>
                        </div>
                    </div>
                    <div className="right-side-values">
                        <div className="ext-logo bid-value">
                            <span>BID</span> <span className="bid-val"><span>$</span>6532.56
                    </span>
                        </div>
                        <div className="ext-logo ask-value">
                            <span>ASK</span> <span className="ask-val"><span>$</span>6593.52
                    </span>
                        </div>
                    </div>
                </div>


                <section className="join-us-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="join-us-text">
                                    <h2>
                                        <span>{languageManager.join_title}</span>
                                    </h2>
                                    <p>
                                        {languageManager.join_description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="as-seen-on">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="join-us-text-2">
                                    <h6 data-i18n="as-seen-on">As seen on</h6>
                                    <img src={tvs} alt="seen on"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="join-us-image"></div>
                </section>

                {/*Testimonals*/}
                <div className="real-testimonials-header">
                    <h4>{languageManager.testimonal_title}</h4>
                </div>
                <Testimonals languageManager={this.props.languageManager}/>

                {/*Features*/}
                <Features languageManager={this.props.languageManager}/>

                {/*Table*/}
                <Table languageManager={this.props.languageManager}/>

                {/*How it Works*/}
                <HowItWorks languageManager={this.props.languageManager}/>

                <Faq languageManager={this.props.languageManager}/>
            </div>

        )
    }
}
