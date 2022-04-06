import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bookingUser } from '../actions/bookingAction'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
export class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phonenumber: '',
      email: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.bookingUser.bind(this);
  }
  onChange(e) {

    this.setState({ [e.target.name]: e.target.value });

  }
  bookingUser = (e) => {
    e.preventDefault()
    const data = {
      fullname: e.target.name.value,
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value
    };

    this.props.bookingUser(data)

  }
  render() {
    const { errors, booking, loading } = this.props
    console.log(this.props)
    return (
      <div id="contact" className='container contact parallax'>
        <div className='col-md-4'>
          <h2 className="main-title">Check in </h2>
          <hr />

          <div className="divide50"></div>

        </div>

        <div className="inner contact">

          <div className="contact-form">


            <form id="contact-us" onSubmit={this.bookingUser}>
              <fieldset >

                <div className="col-xs-8 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="300">
                  <p className='text-center color-red'>{errors?.message}</p>
                  <input type="text" name="name" onChange={this.onChange} value={this.state.name} id="departure" required="required" className="form" placeholder="Name" />
                  <p className='text-center color-red'>{errors?.fullname}</p>
                  <input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email} required="required" className="form" placeholder="Email" />
                  <p className='text-center color-red'>{errors?.email}</p>
                  <input type="text" name="phonenumber" id="time" onChange={this.onChange} value={this.state.phonenumber} placeholder="Phone number" required="required" className="form" />
                  <p className='text-center color-red'>{errors?.phonenumber}</p>
                </div>

                <div className="relative fullwidth col-xs-12">
                  <button type="submit" id="submit" name="submit" className="form-btn semibold">Book now</button>
                </div>
                <div className="clear"></div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
Booking.propTypes = {
  bookingUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  bookingUser: state.booking,
  booking: state.booking.booking,
  loading: state.booking.loading

})

export default connect(mapStateToProps, { bookingUser })(Booking)