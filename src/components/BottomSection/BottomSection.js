import React, { Component } from 'react'
import logo from './logo.png'

export default class BottomSection extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div>
                <div className="get-started-block">
                    <button className="move-to-top" onClick={()=>window.scrollTo(0, 0)}>{languageManager.last_btn}</button>
                </div>
                <footer className="footer-block">
                    <div className="container">
                        <div className="footer-logo">
                            <img src={logo} className="footer-logo" alt="logo" style={{width: 235+'px'}}/>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}
