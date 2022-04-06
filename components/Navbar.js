// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { logOut } from '../actions/authAction'
// import Link from 'next/link'
// export class Navbar extends Component {
//     logOutUser(e) {
//         e.preventDefault();
//         this.props.logOut();
//     }

//     render() {
//         const { isAuthenticated, user } = this.props.auth

//         const authLink = (
//             <div>

//                 <a href='#' onClick={this.logOutUser.bind(this)}>{user.name}</a>

//             </div>
//         )
//         const guestLink = (
//             <div>
//                 <Link href='/login'>
//                     <h2>Login</h2>
//                 </Link>
//             </div>
//         )
//         return (
//             <div>
//                 {isAuthenticated ? authLink : guestLink}
//             </div>
//         )
//     }
// }
// Navbar.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
// }
// const mapStateToProp = (state) => ({
//     auth: state.auth
// })
// export default connect(mapStateToProp, { logOut })(Navbar)