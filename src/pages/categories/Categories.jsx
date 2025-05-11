import React, { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import NewsCard from "../../components/newsCard/NewsCard";

const Categories = () => {
    const[news, setNews] = useState([]);
    const[loading, setLoading] = useState(false);

    const { state }  = useLocation();

    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${state.category }&apiKey=${apiKey}`;

    const getNews = async () => {
        setLoading(true);
        try {
            const { data } = await axios(url);
            setNews(data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getNews()
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <form className={styles.form}>
                    <input type="text" placeholder="ex:us,tr,jo,mx..."/>
                    <button type="submit">Filter Country</button>
                </form>
            </div>
            <div className={styles.right}>
                {loading && <Spinner/>}
                {news.map((item, index) => <NewsCard key={index} {...item}/>)}
            </div>
        </div>
    )
};

export default Categories;