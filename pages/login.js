import React, { Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { loginUser } from '../actions/authAction'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.loginUser.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return ({ errors: nextProps.errors }) // <- this is setState equivalent
        }
        if (nextProps.auth.isAuthenticated) {
            nextProps.router.push('/dashboard')
        }
        return null
    }
    onChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }
    loginUser = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        this.props.loginUser(data)

    }
    render() {
        const { errors } = this.props.errors
        return (
            <>

                <div id="contact" className='container contact styles.parallax'>
                    <div className='col-md-4'>
                        <h2 className="main-title">Login</h2>
                        <hr />
                        <div className="divide50"></div>
                    </div>

                    <div className="inner contact">

                        <div className="contact-form">

                            <form id="contact-us" onSubmit={this.loginUser}>

                                <div className="col-xs-8 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="300">


                                    <input type="email" name="email" id="mail" onChange={this.onChange} value={this.state.email} autoComplete="email" required="required" className="form" placeholder="Email" />
                                    <p className='text-center color-red'>{errors?.email}</p>
                                    <input type="text" name="password" id="password" onChange={this.onChange} value={this.state.password} autoComplete="password" required="required" className="form" placeholder="Password" />
                                    <p className='text-center color-red'>{errors?.password}</p>


                                </div>

                                <div className="relative fullwidth col-xs-12">

                                    <button type="submit" id="submit" name="submit" className="form-btn semibold">Send Message</button>
                                </div>

                                <div className="clear"></div>
                            </form>




                        </div>
                    </div>
                </div>
            </>
        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))