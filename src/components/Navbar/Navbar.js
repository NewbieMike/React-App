import React, { useState } from 'react';
import styles from './Navbar.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';
import { render } from 'node-sass';


/*const Navbar = () => (
    
);

function NavClick(){
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
}
function handleClick(){
    handleClick = () => {
        setClick(!click);
    }
}*/
const [click, setClick] = useState(false);
class Navbar extends React.Component {
    
    handleClick(){
        setClick(!click);
    }

    render(){
        return(
            <div className={styles.navigation}>
                <nav className={styles.navbar_container}>
                    <Link to="/" className={styles.navbar_logo}>APP LOGO</Link>
                    <div className={styles.menu_icon} onClick={this.handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
