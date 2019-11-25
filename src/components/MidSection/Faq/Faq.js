import React, {Component} from 'react'

export default class Faq extends Component {

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="frequently-asked-questions-block">
                <div className="container">
                    <div className="frequently-head">
                        <button className="move-to-top">{languageManager.faqs_button}</button>
                        <h4>{languageManager.faqs_title}</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="question-card-holder">
                                {
                                    languageManager.faqs_list.slice(0,3).map((item,index) => {
                                        return(
                                            <div className="question-card" key={index}>
                                                <span className="question-number">0{index+1}</span>
                                                <div className="question-answer">
                                                    <h4>{item.title}</h4>
                                                    {item.descr}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="question-card-holder">
                                {
                                    languageManager.faqs_list.slice(3,5).map((item, index) => {
                                        let indexArr = [4,5];
                                        return(
                                            <div className="question-card" key={index}>
                                                <span className="question-number">0{indexArr[index]}</span>
                                                <div className="question-answer">
                                                    <h4>{item.title}</h4>
                                                    {item.descr}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}