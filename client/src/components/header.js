import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Payment from './payments';
class Header extends Component {
   
    // render header content based on auth
     renderContent = () => {
        switch(this.props.auth) {
            case null : return
            case false : return <li><a href='/auth/google'>Log in with Google</a></li>
            default:return [
                <li key={4} style={{margin:'0 1.2rem'}}>Hey {this.props.auth.name}</li>,
                <li key={1}><Payment/></li>,
                <li key={2} style={{margin:'0 2.5rem'}}>CREDITS:{this.props.auth.credits}</li>,
                <li key={3}><a href='/api/logout'>Log out</a></li>
            ]
        }
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to={this.props.auth ? '/surveys' : '/'}
                    className='left brand-logo'>Quora</Link>
                    <ul id="nav-mobile" className="right">
                        { this.renderContent() }  
                    </ul>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = ({auth}) => {
    return {auth};
} 

export default  connect(mapStateToProps)(Header);


