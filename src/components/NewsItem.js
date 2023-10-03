import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title,description} = this.props;  // Object Destructuring Syntax [Note : We can also use this.props.prop_name :)]
    return (
        <div className="newsItem">

            <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

      </div>
    )
  }
}
