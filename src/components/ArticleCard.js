import React from 'react'
import ToText from '../Utils/ToText';

function ArticleCard(props) {

    function OpenArticle(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className="col-12 col-md-6 medium-container">
            <div className="medium-card" onClick={() => OpenArticle(props.link)}>
                <div className="medium-img">
                <img src={props.thumbnail} alt="haha">
                </img>
                </div>

                <div>
                <p>{`${ToText(
                        props.description.substring(0, 600)
                    )}...`}</p>
                <div className="article-avatar">
                    <img src={props.avatar} alt="image-here">
                    </img>
                   
                </div>

                </div>
            </div>
        </div>
    )

}

export default ArticleCard