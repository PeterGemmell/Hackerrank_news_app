import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';


class NewsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articles:[],
      filteredarticles:[]
    };
  }

componentDidMount(){
  this.loadarticles(this.props.articles[0].url)

}

loadarticles(url){
  fetch(url)
  .then(res => res.json())
  .then((articlesList) => {
    const reducedList= articlesList.slice(0,10);
    const filteredarticles = reducedList.map((storyId) =>{
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then(res => res.json())
    })

    Promise.all(filteredarticles)
    .then((results) => {
      this.setState({filteredarticles: results})
    }) // promise is fetching everything from an array.
  })

}
render(){
  return(
    <div>
   <ArticleList articles={this.state.filteredarticles}/>

    </div>
  )
}

}

export default NewsContainer;
