/**
 * Created by EliMcJah on 3/13/17.
 */

import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar.js';

// const API_KEY = 'AIzaSyDUjRuScbQd1syYVICjqxBfxE3kiJZXeBA';

/*Create a new component. This component should produce some HTML*/

const App = () => {
    return (<div>
        <SearchBar />
    </div>);
};


/*Take this components generated HTML and put it on the page(in the DOM)*/

ReactDom.render(<App />, document.querySelector('.container'));