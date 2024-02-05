import React from 'react'
import ToText from '../Utils/ToText';

function ArticleCard(props) {

    console.log(props)
    function OpenArticle(url) {
        window.open(url, '_blank', 'noopener,noreferrer');

    }
    return (
        <div className="col-12 col-md-3 medium-container">
            <div className="medium-card" onClick={() => OpenArticle(props.link)}>
                <div className="medium-img">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*jfdwtvU6V6g99q3G7gq7dQ.png" alt="medium-img">
                    </img>
                </div>
                <div>
                    <p>{`${ToText(
                        props.description.substring(0, 600)
                    )}...`}</p>
                    <div className="article-avatar">
                        <img src={props.avatar} alt="image-article">
                        </img>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default ArticleCard