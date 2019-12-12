import React, { Component } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import logo from '../../BottomSection/logo.png'
import formCheck from './18.png'

export default class Regform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            check: true,
            errors: {},
            form: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                phone_number: ""
            }
        };
        this.sendData = this.sendData.bind(this)
    }

    updateValue(name, value) {
        this.setState({
            form: {
                ...this.state.form,
                [name]: value}
            }
        );
        this.props.trackStartEdit()
    }

    sendData() {
        let form = this.state.form,
            checkParams = this.props.validateParams(form)

        if (checkParams.success && this.state.check) this.setState({errors: {},loading: true}, () => {
            this.props.setLeadData(form)
                .then(this.props.handleSubmit)
                .then(res => (res.redirectUrl && res.success) ? window.location = res.redirectUrl : this.setState({responseError: res.error}))

        })
        else this.setState({errors: checkParams.errors, loading: false})
    }

    render() {
        let languageManager = this.props.languageManager(),
            errors = this.state.errors,
            errorMsgs = (this.state.errors) ? Object.keys(this.state.errors).map(key => { if (this.state.errors[key].messages) return this.state.errors[key].messages }).filter(value => value) : []

        if (!this.state.loading) {
            return (
                <div className="gtd-form-wrapper">

                        {this.props.allInputs.map((item, index)=>{
                            return(
                                <div className="form-group" key={index}  style={{marginBottom: ((errors.hasOwnProperty(item.name) && errors[item.name].hasOwnProperty('messages'))  ? '0' : '1rem')}}>
                                    <input type={item.type}
                                           name={item.name}
                                           autoComplete='off'
                                           placeholder={languageManager[item.name]}
                                           defaultValue={this.state.form[item.name]}
                                           className="form-control gtd-field-fname"
                                           onChange={(e) => this.updateValue(e.target.name, e.target.value)}/>
                                    {(errors.hasOwnProperty(item.name)) ? (errors[item.name].hasOwnProperty('messages') && <div className='form-feedback'>{errors[item.name].messages[0]}</div>) : ''}
                                </div>
                            )
                        })}

                        <div className="row" style={{margin:0}}>
                            <IntlTelInput
                                fieldName="phone_number"
                                autoComplete='off'
                                preferredCountries={[this.props.countryCode]}
                                defaultCountry={this.props.countryCode.toLowerCase()}
                                containerClassName="intl-tel-input"
                                inputClassName="inputfield tel small-input"
                                placeholder={languageManager.phone}
                                separateDialCode={true}
                                format={true}
                                value={this.state.form.phone_number}
                                onPhoneNumberChange={(e, value) => this.updateValue('phone_number', value.replace(/\D/g,''))}
                            />
                            {(errors.hasOwnProperty("phone_number")) ? (errors["phone_number"].hasOwnProperty('messages') && <div className='form-feedback'>{errors["phone_number"].messages[0]}</div>) : ''}
                        </div>

                        <div className="agree_wrapper">
                            <img src={formCheck} alt=""/>
                            <input type="checkbox" name="iagree_input" className="iagree_input" id="iagree_input" checked={this.state.check} onChange={() => this.setState({check: !this.state.check})}/>
                            <span className="iagree">
                                <span className="popup_terms_link">{languageManager.agree}</span>
                            </span>
                        </div>

                    <button onClick={this.sendData} className='submit_btn gtd-form-submit '>{languageManager.button}</button>
                </div>
            )
        } else {
            return (
                <div className={"Regform " + (this.props.class ? this.props.class : '')}>
                    {
                        (this.state.responseError) ?
                            <div className="response-error">
                                <p>{this.state.responseError}</p>
                                <button className="submit_btn gtd-form-submit" onClick={()=>this.setState({loading:false})}>Ok</button>
                            </div>
                            : <h1 style={{color: '#fff'}}>Bitcoin Revolution</h1>
                    }
                </div>
            )

        }
    }
}
