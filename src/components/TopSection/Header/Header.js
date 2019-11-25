import React, { Component } from 'react'
import People  from './People/People'

import logo from './logo.png'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalId: null,
            firstTime: 60 * 60000,
            time: {
                minutes: '00',
                seconds: '00',
                milliseconds: '00',
            }
        };
    }

    componentDidMount() {
        let intervalId = setInterval(this.timerStart, 1000);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    timerStart = () => {
        let date = new Date();

        const startTime = () => {
            this.setState({
                firstTime: this.state.firstTime - 1,
            })
            date.setTime(this.state.firstTime);

            this.setState({
                time: {
                    minutes: date.getMinutes(),
                    seconds: date.getSeconds(),
                    milliseconds: date.getMilliseconds().toString().substr(0,2),
                }
            });
            requestAnimationFrame(startTime);
        }
        requestAnimationFrame(startTime);
    }

    render() {
        let languageManager = this.props.languageManager();
        const {
            minutes,
            seconds,
            milliseconds
        } = this.state.time;
        return (

            <header className='Header'>
                <div className="red-warning">
                    <label className="m-0">
                        <b className="warning">{languageManager.risk[1]}</b>
                        <span className="due-to">{languageManager.risk[0]}</span>
                        <span id="clock" dir="ltr">
                            {`${minutes} : ${String(seconds).length === 1 ? `0${seconds}` : seconds} : ${milliseconds}`}
                        </span>
                    </label>
                </div>

                <section className="header-block container">
                    <div className="logo-item">
                        <img src={logo} width="200" alt=""/>
                    </div>
                    <div id="excl-off" className="exclusive-offer" style={{color:'red'}}>
                        {languageManager.header_title}
                    </div>
                    <People languageManager={this.props.languageManager}/>

                </section>

            </header>
        )
    }
}
