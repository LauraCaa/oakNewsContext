import React from "react";
import styles from "./NewsCard.module.css";
import news from "../../assets/img/news.jpg";

const NewsCard = ({title, url, urlToImage, content}) => {
    return(
        <div className={styles.card}> 
            <img src={urlToImage ? urlToImage : news} alt="new"/>
            <div className={styles.cardDetail}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className={styles.a}>
                    <a 
                        href={url} 
                        rel="noreferrer" 
                        taget="_blank" className={styles.link}
                    >
                    Detail
                    </a>
                </div>
            </div>
        </div>
    )
};
export default NewsCard;
