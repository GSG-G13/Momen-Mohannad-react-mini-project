import { Component } from "react";
import './nav.css'
class NavBar extends Component {
  
    render() {
        const {search, searchChange} = this.props
        return(
            
            <div className="nav-bar">
            <div>
            <input placeholder={"Search" || search} className="search-input" value={search} type="text" onChange={(e)=> searchChange(e.target.value)}/>
            <button className="search-btn">Search</button>
            </div>
            </div>
        )
    }
}

export default NavBar