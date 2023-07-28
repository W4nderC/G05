import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import './css/menu.css';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: '' 
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/' + item._id}className="menu-cus-w">{item.name}</Link></li>
      );
    });
    return (
      
      <div className="border-menu-cus">
        
        <div className="float-right">
          <form className="search">
          <input type="search" placeholder=" Nhập sản phẩm cần tìm tại đây" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
          <input className="submit" type="submit" value="Tìm kiếm" onClick={(e) => this.btnSearchClick(e)} />  
          </form>
        <div className="float-left">
          <ul className="menu-cus">
          <li className="menu"><Link to='/'className='menu-cus'>Home</Link></li>
            {cates}
          </ul> 
        </div>
        {/* <img src="" class="logo-image-cus" alt="Logo sneaker"></img> */}
        <div className="float-clear" />
        </div>
      </div>
    );
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);