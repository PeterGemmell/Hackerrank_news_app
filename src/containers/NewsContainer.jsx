import React from 'react';
import ArticleList from '../components/ArticleList';
import Filter from '../components/Filter';


class NewsContainer extends React.Component{
  constructor(props){
    super(props);

    this.state={
      articles:[],
      filteredarticles:[]
    };

    // this.filter = this.filter.bind(this);
  }

  componentDidMount(){
    this.loadarticles(this.props.articles[0].url);


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
      this.setState({articles: results, filteredarticles: results})
    }); // promise is fetching everything from an array.
  });

}
  //
  // filter(searchTerm){
  //   const lowerSearch = searchTerm.toLowerCase();
  //   const filteredarticles = this.state.articles.filter((article) => {
  //     article.title.toLowerCase().indexOf(lowerSearch) > -1;
  //   });
  //   this.setState({ filteredarticles: filteredarticles });
  // }

render(){
  return(
    <div>
    <Filter handleChange={this.filter}/>
   <ArticleList articles={this.state.filteredarticles}/>

    </div>
  )
}

}

export default NewsContainer;
