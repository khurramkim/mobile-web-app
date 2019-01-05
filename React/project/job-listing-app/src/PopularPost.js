import React, { Component } from 'react';

class PopularPost extends Component {
  render() {
    return (
      <section className="popular-post-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="active-popular-post-carusel">
                <Post heading="Creative Designer" postimg="img/p1.png"  btntext="view job post" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />
                <Post heading="Creative Designer" postimg="img/p2.png"  btntext="view job post" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />
                <Post heading="Creative Designer" postimg="img/p1.png"  btntext="view job post" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />
                <Post heading="Creative Designer" postimg="img/p2.png"  btntext="view job post" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />
                <Post heading="Creative Designer" postimg="img/p1.png"  btntext="view job post" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />
                <Post heading="Creative Designer" postimg="img/p2.png"  btntext="view job post" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis." />                                        
            </div>
          </div>
        </div>  
      </section>
    );
  }
}


class Post extends Component {
  render() {
    return (
      <div className="single-popular-post d-flex flex-row">
        <div className="thumb">
          <img className="img-fluid" src={this.props.postimg} alt="" />
          <a className="btns text-uppercase" href="#">{this.props.btntext}</a>
        </div>
        <div className="details">
          <a href="#"><h4>{this.props.heading}</h4></a>
          <h6>Los Angeles</h6>
          <p>
            {this.props.descrip}
          </p>
        </div>
      </div>
    );
  }
}


export default PopularPost;
