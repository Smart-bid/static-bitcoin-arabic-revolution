import React, {Component} from 'react'

export default class Testimonals extends Component {
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="real-testimonials-body">
                <div className="row m-0">
                    {
                        languageManager.testimonal_members.map((item, index) => {
                            return (
                                <div className="col-md-3 p-0" key={index}>
                                    <div className={`card bg-dark text-white person-${index+1}`}>
                                        <div className="card-img-overlay">
                                            <h5>{item.name}</h5>
                                            <p>${item.location}</p>
                                            <p>
                                                <span className="profit">
                                                    <span>{item.testimonials_profit}</span>: <span>{item.currency}</span>
                                                    <span>{item.price_amount}</span>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="overlay">
                                            <div className="text">
                                                {item.text}
                                            </div>
                                        </div>
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