import React from 'react';
import Article from '../components/Article';

const ArticleList = (props)=>{
  const articles=props.articles.map((article, index)=>{
    return (<Article key={index} details={article} position={index+1}/>);
  });

 return(
   <div>
   {articles}
   </div>
 )
}

export default ArticleList;
