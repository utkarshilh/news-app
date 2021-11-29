import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, discription, imageUrl, newsUrl, author, date } = this.props;

        return (
            <div className="my-3">
                <div className="card" >
                    {/* <span className="position-absolute top-0 traslate-middle badge round-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span> */}
                    <img src={imageUrl ? imageUrl : "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/IMG_20210717_150737.jpeg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"> <small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small> </p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
