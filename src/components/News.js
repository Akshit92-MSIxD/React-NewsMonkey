import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
        <>
        <div className="container">
                  
                <h1>NewsMonkey - Top HeadLines :</h1>
                
                <div className="row">

                    <div className="col-md-1">  <NewsItem title="mytitle1" description="myDescription1"/> </div>
                    <div className="col-md-1">  <NewsItem title="mytitle2" description="myDescription2"/> </div>
                    <div className="col-md-1">  <NewsItem title="mytitle3" description="myDescription3"/> </div>
                    <div className="col-md-1">  <NewsItem title="mytitle4" description="myDescription4"/> </div>
                    <div className="col-md-1">  <NewsItem title="mytitle5" description="myDescription5"/> </div>
                
                </div>
            

        </div>
        
       
        </>
    )
  }
}
