import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav>
            <ul className={styles.topUL}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <p>Categories</p>
                    <ul className={styles.bottomUL}>
                        <li onClick={() => navigate( "/categories",{ state: {category:"business"}})}>
                            Bussines
                        </li>
                        <li onClick={() => navigate( "/categories",{ state: {category:"general"}})}>
                            General
                        </li>
                        <li onClick={() => navigate( "/categories",{ state: {category:"health"}})}>
                            Health
                        </li>
                        <li onClick={() => navigate( "/categories",{ state: {category:"science"}})}>
                            Science
                        </li>
                        <li onClick={() => navigate( "/categories",{ state: {category:"sports"}})}>
                            Sports
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;