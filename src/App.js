import React, { Component } from 'react';
import NewsContainer from './containers/NewsContainer';

class App extends Component{
  render(){
    const articles = [
      {name: "Latest Stories", url: "https://hacker-news.firebaseio.com/v0/topstories.json"},
      {name: "Story Detail", url: "https://hacker-news.firebaseio.com/v0/item/{storyId}.json"}
    ]

    return(
      <NewsContainer articles={articles}/>
    );
  }
}

export default App;
