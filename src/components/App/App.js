import './App.css'
import React from "react";
import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";


const App = () => {

    const data = [
        {label: 'Учу Реакт', important: true, id: 'db23987fbq6s'},
        {label: 'Все еще учу Реакт', important: false, id: 'sgh32876dg'},
        {label: 'До сих пор учу Реакт', important: false, id: 'hc3674g873'}
    ];

    return (
        <div className='app'>
            <Header/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;