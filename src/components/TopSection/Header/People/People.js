import React, { Component } from 'react'
import arabic from './images/arabic.png'

export default class People extends Component {

    render() {
        let languageManager = this.props.languageManager();
        return (
            <div className="just-made-money">
                <img src={arabic} alt="User"/>
                    <span className="just-made">
                        <span>كمال</span>
                        <span>حصل للتو</span>
                        <span className="value">﷼844.94</span>
                    </span>
            </div>
        )

    }
}
