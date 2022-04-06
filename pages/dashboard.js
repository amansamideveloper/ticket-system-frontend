import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTickets } from '../actions/checkinAction';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getTickets()
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tickeType: {}
        };
    }


    render() {


        const { loading, ticketType } = this.props.ticketType
        let content;
        if (loading || ticketType === null) {
            content = <h4>Loading please wait</h4>;
        } else {
            content = <div className="row">
                {ticketType?.map((item) => (
                    <Link href={`/ticket/${item._id}`}>
                        <div key={item._id} className="col-md-3 text-center pointer">
                            <div className="service-item">

                                <h4 className="service-title" >{item.name} </h4>
                                <p className="service-desc">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        }
        return (
            <div id="services" className="services">

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 text-center">
                            <h2 className="main-title">Online Bus Ticket</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="divide50"></div>

                    {content}

                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getTickets: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    ticketType: state.checkin
})

export default connect(mapStateToProps, { getTickets })(Dashboard)

