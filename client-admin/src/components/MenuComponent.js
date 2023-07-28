import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import './css/menu.css';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
 
  render() {
    return (
      
      <div className="border-bottom">
      <div className="navigation-right">
          Hello <b>{this.context.username}</b>
          <Link to='/admin/home' onClick={this.lnkLogoutClick}>
          <i className="fas fa-sign-out-alt logout-icon"></i> {/* Icon Logout từ thư viện Font Awesome */}
          </Link>
        </div>

       
        <div className="float-clear" />
      </div>
      
      
    
  
      
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;