import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCl9Z-uF_h7cEbY6iKqUnX9wL7fqc7zZZ4';

YTSearch({key:API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));