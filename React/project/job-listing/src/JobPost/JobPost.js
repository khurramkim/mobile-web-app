import React, { Component } from 'react';

class JobPost extends Component {
  render() {


    return (
      <section className="post-area section-gap">
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-lg-8 post-list">
              <ul className="cat-list">
                <FilterJob name="Recent" />
                <FilterJob name="Full Time" />
                <FilterJob name="Intern" />
                <FilterJob name="part Time" />
              </ul>
              
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />
               <JobList image="img/post.png" heading="Creative Art Designer" label="Premium Labels Limited" />                             
              
              <a className="text-uppercase loadmore-btn mx-auto d-block" href="category.html">Load More job Posts</a>

            </div>
            <div className="col-lg-4 sidebar">
              <div className="single-slidebar">
                <h4>Jobs by Location</h4>
                <ul className="cat-list">
                  <JobLocation page="category.html" name="New York" item="37" />
                  <JobLocation page="category.html" name="Park Montana" item="57" />
                  <JobLocation page="category.html" name="Atlanta" item="33" />
                  <JobLocation page="category.html" name="Arizona" item="36" />
                  <JobLocation page="category.html" name="Florida" item="47" />
                  <JobLocation page="category.html" name="Rocky Beach" item="27" />
                  <JobLocation page="category.html" name="Chicago" item="17" />
                </ul>
              </div>

              <div className="single-slidebar">
                <h4>Top rated job posts</h4>
                <div className="active-relatedjob-carusel">
                  <TopRated img="img/r1.jpg" heading="Creative Art Designer" label="Premium Labels Limited" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua." jobnatue="Job Nature: Full time" location="56/8, Panthapath Dhanmondi Dhaka" salary="15k - 25k" apply="Apply job" />
                  <TopRated img="img/r1.jpg" heading="Creative Art Designer" label="Premium Labels Limited" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua." jobnatue="Job Nature: Full time" location="56/8, Panthapath Dhanmondi Dhaka" salary="15k - 25k" apply="Apply job" />
                  <TopRated img="img/r1.jpg" heading="Creative Art Designer" label="Premium Labels Limited" descrip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua." jobnatue="Job Nature: Full time" location="56/8, Panthapath Dhanmondi Dhaka" salary="15k - 25k" apply="Apply job" />
                                             
                </div>
              </div>              

              <div className="single-slidebar">
                <h4>Jobs by Category</h4>
                <ul className="cat-list">
                  <JobCategory link="category.html" text="Technology" item="37" />
                  <JobCategory link="category.html" text="Media & News" item="57" />
                  <JobCategory link="category.html" text="Goverment" item="33" />
                  <JobCategory link="category.html" text="Medical" item="36" />
                  <JobCategory link="category.html" text="Restaurants" item="47" />
                  <JobCategory link="category.html" text="Developer" item="27" />
                  <JobCategory link="category.html" text="Accounting" item="17" />
                </ul>
              </div>

              <div className="single-slidebar">
                <h4>Carrer Advice Blog</h4>
                <div className="blog-list">
                  
                  <Advice 
                    bgimg="url(img/blog1.jpg)"
                    head="Home Audio RecordingFor Everyone"
                    hour="02 Hours ago"
                    heart=" 06 "
                    bubble=" 02"
                  />

                  <Advice 
                    bgimg="url(img/blog2.jpg)"
                    head="Home Audio RecordingFor Everyone"
                    hour="02 Hours ago"
                    heart=" 06 "
                    bubble=" 02"
                  />

                  <Advice 
                    bgimg="url(img/blog1.jpg)"
                    head="Home Audio RecordingFor Everyone"
                    hour="02 Hours ago"
                    heart=" 06 "
                    bubble=" 02"
                  />

                                    
                </div>
              </div>              

            </div>
          </div>
        </div>  
      </section>
    );
  }
}

class FilterJob extends Component {
  render() {
    return (
      <li><a href="#">{this.props.name}</a></li>
    );
  }
}

class JobList extends Component {
  render() {
    return (
      <div className="single-post d-flex flex-row">
        <div className="thumb">
          <img src={this.props.image} alt="" />
          <ul className="tags">
            <JobTag name="Art" />
            <JobTag name="Media" />
            <JobTag name="Design" />   
          </ul>
        </div>
        <div className="details">
          <div className="title d-flex flex-row justify-content-between">
            <div className="titles">
              <a href="single.html"><h4>{this.props.heading}</h4></a>
              <h6>{this.props.label}</h6>         
            </div>
            <ul className="btns">
              <li><a href="#"><span className="lnr lnr-heart"></span></a></li>
              <li><a href="#">Apply</a></li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
          </p>
          <h5>Job Nature: Full time</h5>
          <p className="address"><span className="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
          <p className="address"><span className="lnr lnr-database"></span> 15k - 25k</p>
        </div>
      </div>
    );
  }
}

class JobTag extends Component {
  render() {
    return (
      <li><a href="#">{this.props.name}</a></li>
    );
  }
}

class JobLocation extends Component {
  render() {
    return (
      <li><a className="justify-content-between d-flex" href={this.props.page}><p>{this.props.name}</p><span>{this.props.item}</span></a></li>
    );
  }
}

class TopRated extends Component {
  render() {
    return (
      <div className="single-rated">
        <img className="img-fluid" src={this.props.img} alt="" />
        <a href="single.html"><h4>{this.props.heading}</h4></a>
        <h6>{this.props.label}</h6>
        <p>
          {this.props.descrip}
        </p>
        <h5>{this.props.jobnatue}</h5>
        <p className="address"><span className="lnr lnr-map"></span>{this.props.location}</p>
        <p className="address"><span className="lnr lnr-database"></span>{this.props.salary}</p>
        <a href="#" className="btns text-uppercase">{this.props.apply}</a>
      </div>
    );
  }
}



class JobCategory extends Component {
  render() {
    return (
      <li><a className="justify-content-between d-flex" href={this.props.link}><p>{this.props.text}</p><span>{this.props.item}</span></a></li>
      
    );
  }
}


class Advice extends Component {
  render() {
    
    const style = {
        backgroundImage: this.props.bgimg,
        backgroundColor : '#000'
    }
    return (

    <div className="single-blog" style={style}>
    <a href="single.html"><h4>{this.props.head}</h4></a>
    <div className="meta justify-content-between d-flex">
      <p>
        {this.props.hour}
      </p>
      <p>
        <span className="lnr lnr-heart"></span>
        {this.props.heart}
         <span className="lnr lnr-bubble"></span>
         {this.props.bubble}
      </p>
    </div>
  </div>

    );
  }
}






export default JobPost;
