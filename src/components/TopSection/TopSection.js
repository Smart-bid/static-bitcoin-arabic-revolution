import React, { Component } from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'

import en_1 from './en_1.mp4'
import fr_video from './fr_video.mp4'


export default class TopSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: [
                {
                    type: "text",
                    name: "first_name",
                },
                {
                    type: "text",
                    name: "last_name",
                },
                {
                    type: "email",
                    name: "email",
                },
                {
                    type: "password",
                    name: "password",
                },
            ],
            videos: {
                en_1,
                fr_video
            }
        };
        this.regPanel = React.createRef();
    }
    handleScroll() {

        let panel = this.regPanel.current;

        window.scrollTo({
            top: panel.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className='TopSection'>
                <Header languageManager={this.props.languageManager} handleScroll={this.handleScroll.bind(this)}/>

                <div className="title-block">
                    <h1>{languageManager.title}</h1>
                    <label>
                        <span>{languageManager.subtitle}</span>
                    </label>
                </div>
                <div className="player-form-logos-block">
                    <div className="container player-form-block" id="bitcoin-video-container">

                        <div className="player-holder col-md-8 col-sm-7" id="bitcoin-video">
                            <div className="videoWrapper">
                                <VideoPlayer link={this.state.videos[languageManager.video]} />
                            </div>
                        </div>
                        <div className="form-holder col-md-4 col-sm-5">
                            <h2 className="form_title">{languageManager.topreg1}</h2>
                            <div className="form_wrapper whiteLabel_form">
                                <div className="gtd-common-form mainForm">
                                    <Regform {...this.props} allInputs={this.state.inputs} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
