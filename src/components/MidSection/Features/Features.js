import React, {Component} from 'react'

//Images
import feature1 from './images/1.png'
import feature2 from './images/2.png'
import feature3 from './images/3.png'

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuresImage: [
                feature3,
                feature2,
                feature1,
            ]
        }
    }
    render() {
        let languageManager = this.props.languageManager();
        return(
            <div className="tree-boxes-block">
                <div className="tree-boxes-holder container p-0">
                    {
                        languageManager.features_list.map((item,index)=>{
                            return(
                                <div className="box" key={index}>
                                    <img src={this.state.featuresImage[index]} className="box-icon"/>
                                    <h4>
                                        <span>{item.title}</span>
                                    </h4>
                                    <p>{item.descr}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}