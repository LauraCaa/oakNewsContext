import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {ThemeContext} from "../context/ThemeContext";

const useNews = (initialCategory = "", initialCountry = "us", query = "") => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const [category, setCategory] = useState(initialCategory);
    const [country, setCountry] = useState(initialCountry);
    const apiKey = process.env.REACT_APP_API_KEY;
    const theme = useContext(ThemeContext);
    
    const url = query
        ? `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apiKey=${apiKey}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        getNews(filterUrl);
        setFilter("");
    }

    const getNews = async (API) => {
        setLoading(true);
        try {
            const { data } = await axios(API);
            setNews(data.articles);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getNews(url);
    }, [url, theme.state.darkMode]);

    useEffect(() => {
        setCategory(initialCategory)
        setCountry(initialCountry)
    }, [initialCategory, initialCountry]);

    return{
        news,
        loading,
        filter,
        country,
        category,
        theme,
        setFilter,
        setCategory,
        handleSubmit, 
    }
}

export default useNews;