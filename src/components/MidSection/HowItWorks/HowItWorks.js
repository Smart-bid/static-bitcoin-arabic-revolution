import React, { Component } from 'react'

export default class HowItWorks extends Component {
    render() {
        let arr = ['one', 'two', 'three'];
        let languageManager = this.props.languageManager();
        return(
            <div className="how-it-works-block">
                <div className="how-it-works-tittle">
                    {languageManager.howItWorks_title}
                </div>
                <div className="how-it-works-holder container p-0">

                    {
                        languageManager.howItWorks_list.map((item,index)=>{
                            return(
                                <div className={`card how-it-works step-${index+1}`} key={index}>
                                    <div className={`card-header head-${arr[index]}`}>
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {item.descr}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }




                </div>
            </div>
        )
    }
}