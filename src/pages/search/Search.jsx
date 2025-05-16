import React, {useState, useEffect} from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import useNews from "../../hooks/useNews";

const Search = () => {
    const {state} = useLocation();
    const { news, loading } = useNews("", "us", state);
    
    console.log(news);
    return(
        <div className={styles.searchPage}>
            <h1>News About: <span>{state}</span></h1>
            <div className={styles.searchNews}>
                {loading && <h1>Loading...</h1>}
                {!loading && news?.length === 0 && <h1>No results found</h1>}
                {news && news.map((item, index) => <NewsCard key={index} {...item}/>)}
            </div>
        </div>
    )
};

export default Search;