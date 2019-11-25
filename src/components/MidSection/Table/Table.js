import React, {Component} from 'react'

import ok from './ok.png'

export default class Table extends Component {
    constructor(props) {
        super(props);
        var random = this.rand(),
            date = this.currentDate();
        this.state = {
            random: random,
            tableArr: [],
            date: date
        }
    }

    currentDate() {
        let stamp = new Date().getTime(),
            date = `\/Date(${stamp})\/`,
            nowDate = new Date(parseInt(date.substr(6))),
            result = "";
        result += nowDate.format("mmmm d, yyyy");
        return result;
    }

    rand() {
        let languageManager = this.props.languageManager();
        const random = Math.floor(Math.random() * languageManager.tableList.length);
        return random;
    }
    componentDidMount() {
        let languageManager = this.props.languageManager();
        var testArr = [];
        testArr.push(languageManager.tableList);
        this.setState({
            tableArr: testArr[0]
        })

        const _this = this;
        this.timer = setInterval(() => {
            var random = this.state.random;
            testArr[0].unshift(testArr[0][random]);
            testArr.push(languageManager.tableList);
            _this.setState({
                tableArr: testArr[0],
            })
        },3000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let languageManager = this.props.languageManager();
        return(
            <section className="live-profit-results-block" id="table">
                <div className="left-side-coin"></div>
                <div className="right-side-coin"></div>

                <div className="results-table container">
                    <div>
                        <button className="yellow-btn join-now-btn scroll-top-btn" onClick={()=>window.scrollTo(0, 0)}>
                            <span>{languageManager.tableBtn}</span>
                        </button>
                        <h4>
                            {languageManager.tableName}
                        </h4>
                    </div>
                    <div className="container" style={{height: 590+ 'px',overflow: 'hidden'}}>
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                {
                                    languageManager.tableMenuItems.map((item, index) => {
                                        return(
                                            <th key={index}>{item.name}</th>
                                        )
                                    })
                                }
                            </tr>
                            </thead>
                            <tbody className="tbody">
                            {
                                this.state.tableArr.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td className="bold">
                                                {item.name}
                                            </td>
                                            <td className="bold">
                                                <b>{item.price}</b>
                                            </td>
                                            <td>{this.state.date}</td>
                                            <td>{item.currency}</td>
                                            <td>
                                                <img src={ok} width="25"/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        )
    }
}