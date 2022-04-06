import React, { useState, useEffect, Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { registerUser } from '../actions/authAction'
import { withRouter, NextRouter } from 'next/router'
import styles from '../styles/Home.module.css'
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            email: '',
            password: '',
            password2: '',
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.registerUser.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return ({ errors: nextProps.errors }) // <- this is setState equivalent
        }
        if (nextProps.auth.success) {
            nextProps.router.push('/login')
        }
        return null
    }
    onChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }
    registerUser = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password2: e.target.password2.value,
        };
        console.log(this.props)
        this.props.registerUser(data)

    }
    render() {
        const { errors } = this.props.errors


        return (
            <div id="contact" className='container contact parallax'>
                <div className='col-md-4'>
                    <h2 className="main-title">Register</h2>
                    <hr />
                    <div className="divide50"></div>
                </div>

                <div className="inner contact">

                    <div className="contact-form">

                        <form id="contact-us" onSubmit={this.registerUser}>

                            <div className="col-xs-8 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="300">

                                <input type="text" name="name" onChange={this.onChange} value={this.state.name} autoComplete="name" id="name" required="required" className="form" placeholder="Name" />
                                <p className='text-center color-red'>{errors?.name}</p>
                                <input type="email" name="email" id="mail" onChange={this.onChange} value={this.state.email} autoComplete="email" required="required" className="form" placeholder="Email" />
                                <p className='text-center color-red'>{errors?.email}</p>
                                <input type="text" name="password" id="password" onChange={this.onChange} value={this.state.password} autoComplete="password" required="required" className="form" placeholder="Password" />
                                <p className='text-center color-red'>{errors?.password}</p>

                                <input type="text" name="password2" id="password2" required="required" onChange={this.onChange} value={this.state.password2} className="form" placeholder="Confirm password" />
                                <p className='text-center color-red'>{errors?.password2}</p>
                            </div>

                            <div className="relative fullwidth col-xs-12">

                                <button type="submit" id="submit" name="submit" className="form-btn semibold">Send Message</button>
                            </div>

                            <div className="clear"></div>
                        </form>


                        <div className="mail-message-area">

                            <div className="alert gray-bg mail-message not-visible-message">
                                <strong>Thank You !</strong> Your email has been delivered.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,

})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))