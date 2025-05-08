import React, {useState}from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const[search, setSearch] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate("/search", { state: search });
        setSearch("");
    };

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>OAK NEWS</h1>
                <form onSubmit={handlesubmit}>
                    <input 
                        className= {styles.search} 
                        type= "text" 
                        placeholder= "search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">SEARCH</button>
                </form>
            </div>
            <Navbar></Navbar>
        </div>
    )
};

export default Header;