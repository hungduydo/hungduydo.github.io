import Pageable from 'pageable';
import React, { useEffect } from 'react';
import About from './about';
import Banner from './banner';
import Contact from './contact';
import './home.css';
import Resume from './resume';

const Home = () => {
    let pages;
    
    useEffect(() => {
        initPagetable(pages);
    });


    return (
        <div id="container">
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Contact></Contact>
        </div>
    );
}

const initPagetable = (pages) => {
    pages = new Pageable("#container", {
        pips: true,
        animation: 700,
        delay: 300,
        throttle: 50,
        swipeThreshold: 150,
        orientation: "vertical",
        freeScroll: false,
    });
}
export default Home;