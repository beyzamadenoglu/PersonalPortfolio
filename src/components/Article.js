import React, { Component } from "react";
import axios from "axios";

import ArticleCard from "./ArticleCard";


class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avatar: "",
        profileurl: "",
      },
      item: [],
      isloading: true,
      error: null
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@beyzamadenoglu";

  componentDidMount() {
    axios.get(this.mediumURL)

      .then((data) => {
        // console.log(data.data)
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;

        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avatar: avatar,

            },
            item: posts,
            isloading: false
          }),
          () => {
          }
        );
      })
      .catch((e) => {
        this.setState({ error: e.toJSON() })
        console.log(e);
      });
  }
  render() {
    let post;

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <ArticleCard key={index} {...post} {...this.state.profile} {...index} />
      ))
    }
    if (this.state.isloading) {
      post = <p>yuklenior</p>
    }
    if (this.state.error) {
      let error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <div>
          <h2 className="">{error}</h2>
          <p className="">{errorMsg}</p>
        </div>
      );
    }
    return (
      <div id="article" className="container-fluid">
        <h2 className="article-header">My Articles</h2>
        <svg className="medium-card-svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="blobSvg">
          <path id="blob" fill="url(#gradient)">
            <animate attributeName="d" dur="5000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ "stop-color": "rgb(238, 205, 163)" }}></stop>
              <stop offset="100%" style={{ "stop-color": "rgb(239, 183, 110)" }}></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="row">{post}</div>

      </div>

    );
  }

}

export default Article;