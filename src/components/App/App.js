// import styles from './App.css';
import './App.css';
import React, {Component} from "react";
import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Учу Реакт', important: true, id: 1},
                {label: 'Все еще учу Реакт', important: false, id: 2},
                {label: 'До сих пор учу Реакт', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data})=> {
           const newArr = [...data, newItem];
           return {
               data: newArr
           }
        });
    }

    render() {
        return (
            <div className='app'>
                <Header/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}
