import React, {  useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>  {

const [articles , setArticles] = useState([])
// const [totalArticles , setTotalArticles] = useState( 0)

const [loading , setLoading] = useState( true)

const [page , setPage] = useState( 1)

const [totalResults , setTotalResults] = useState( 0)



  const updateNews =  async() => {
   
    props.setProgress(0);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b99b3270eca94ad1a78191abac8dfcd7&page=${page}&pagesize=${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);



    let parsedData = await data.json();
    console.log(parsedData.articles , " icgueargaurogv yuer g")
    props.setProgress(70);


    setArticles(parsedData.articles)
    // setTotalArticles({totalArticles: parsedData.totalResults})
    setLoading(false)
  
    props.setProgress(100);

  }

  useEffect( () => {

    
   updateNews();
  }, [])

  // updateNews();


 const fetchMoreData = async() => {

    setPage(page +1)
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b99b3270eca94ad1a78191abac8dfcd7&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)



    // setArticles({articles:articles.concat(parsedData.articles)})

    const newArticles = articles.concat(parsedData.articles)
    setArticles(newArticles)
    // setTotalArticles({totalArticles: parsedData.totalArticles})
    setTotalResults(parsedData.totalResults)

    setLoading(false)

  }

  
  


    return (
      <>


        
          <div className="text-center"><h1> Welcome to Get-News</h1></div>



              {loading && <Spinner />}


          <InfiniteScroll
        
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

<div className="container"> 
          <div className="row">
        
           {articles.map((element, index) => {
              return (

                <div className="col-md-4" key={index}>


                  <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} Author={element.author} source={element.source.name} />
                </div>
              );
            })}
          </div>
          </div>
          </InfiniteScroll>
          

      </>
    );
}



 News.defaultProps ={

  country : "in",
  pageSize: 8,
  category: "general"

}
News.propTypes ={
country :PropTypes.string,
category:PropTypes.string,
// pageSize : PropTypes.number

}
export default  News