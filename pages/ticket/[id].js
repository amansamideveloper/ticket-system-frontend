import React, { Component } from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { checkinUser } from '../../actions/checkinAction'
import { withRouter, NextRouter } from 'next/router'
import Link from 'next/link'
class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departure: '',
            destination: '',
            time: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.checkinUser.bind(this);
    }
    onChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return ({ errors: nextProps.errors }) // <- this is setState equivalent
        }
        console.log(nextProps)
        return null
    }
    checkinUser = (e) => {
        e.preventDefault()
        const data = {
            departure: e.target.departure.value,
            destination: e.target.destination.value,
            travel_date: e.target.time.value,
        };
        this.props.checkinUser(data)
    }
    render() {
        const { errors } = this.props.errors
        const { availableBus, loading } = this.props.availableBus
        let form
        if (availableBus) {
            form = <div>
                <p>There is available seats, you can book, we will call you</p>
                <Link href={'/booking'} className="pointer" >
                    <div className="aman"><h2>Book now</h2></div>

                </Link>
            </div>

        }

        return (
            <div id="contact" className='container contact parallax'>
                <div className='col-md-4'>
                    <h2 className="main-title">Check in</h2>
                    <hr />
                    {form}
                    <div className="divide50"></div>

                </div>

                <div className="inner contact">

                    <div className="contact-form">


                        <form id="contact-us" onSubmit={this.checkinUser}>
                            <fieldset >

                                <div className="col-xs-8 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="300">

                                    <input type="text" name="departure" onChange={this.onChange} value={this.state.departure} autoComplete="departure" id="departure" required="required" className="form" placeholder="መነሻ" />
                                    <p className='text-center color-red'>{errors?.departure}</p>
                                    <input type="text" name="destination" id="destination" onChange={this.onChange} value={this.state.destination} autoComplete="destination" required="required" className="form" placeholder="መድረሻ" />
                                    <p className='text-center color-red'>{errors?.destination}</p>
                                    <input type="date" name="time" id="time" onChange={this.onChange} value={this.state.time} required="required" className="form" />
                                    <p className='text-center color-red'>{errors?.time}</p>
                                </div>

                                <div className="relative fullwidth col-xs-12">
                                    <button type="submit" id="submit" name="submit" className="form-btn semibold">Checkin</button>
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
Ticket.propTypes = {
    checkinUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    availableBus: state.checkin

})


export default connect(mapStateToProps, { checkinUser })(withRouter(Ticket))


