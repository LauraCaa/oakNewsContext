import React,{ useContext} from "react";
import styles from "./ChangeTheme.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import moon from "../../assets/img/moon.jpg";
import sun from "../../assets/img/sun.jpg";

const ChangeTheme = () => {
    const theme = useContext(ThemeContext);

    const  handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return(
        <div className={styles.toggle}>
            <img src={sun} alt="sun" className={styles.icon}/>
            <img src={moon} alt="moon" className={styles.icon}/>
            <div className={styles.button} onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
};

export default ChangeTheme;