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
                  <div className="single-rated">
                    <img className="img-fluid" src="img/r1.jpg" alt="" />
                    <a href="single.html"><h4>Creative Art Designer</h4></a>
                    <h6>Premium Labels Limited</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address"><span className="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                    <p className="address"><span className="lnr lnr-database"></span> 15k - 25k</p>
                    <a href="#" className="btns text-uppercase">Apply job</a>
                  </div>
                  <div className="single-rated">
                    <img className="img-fluid" src="img/r1.jpg" alt="" />
                    <a href="single.html"><h4>Creative Art Designer</h4></a>
                    <h6>Premium Labels Limited</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address"><span className="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                    <p className="address"><span className="lnr lnr-database"></span> 15k - 25k</p>
                    <a href="#" className="btns text-uppercase">Apply job</a>
                  </div>
                  <div className="single-rated">
                    <img className="img-fluid" src="img/r1.jpg" alt="" />
                    <a href="single.html"><h4>Creative Art Designer</h4></a>
                    <h6>Premium Labels Limited</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p className="address"><span className="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                    <p className="address"><span className="lnr lnr-database"></span> 15k - 25k</p>
                    <a href="#" className="btns text-uppercase">Apply job</a>
                  </div>                                    
                </div>
              </div>              

              <div className="single-slidebar">
                <h4>Jobs by Category</h4>
                <ul className="cat-list">
               
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Technology</p><span>37</span></a></li>
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Media & News</p><span>57</span></a></li>
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Goverment</p><span>33</span></a></li>
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Medical</p><span>36</span></a></li>
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Restaurants</p><span>47</span></a></li>
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Developer</p><span>27</span></a></li>
                  <li><a className="justify-content-between d-flex" href="category.html"><p>Accounting</p><span>17</span></a></li>
                </ul>
              </div>

              <div className="single-slidebar">
                <h4>Carrer Advice Blog</h4>
                <div className="blog-list">
                  <div className="single-blog" style={{backgroundColor: "#000", backgroundImage:'url(img/blog1.jpg)'}}>
                    <a href="single.html"><h4>Home Audio Recording <br />
                    For Everyone</h4></a>
                    <div className="meta justify-content-between d-flex">
                      <p>
                        02 Hours ago
                      </p>
                      <p>
                        <span className="lnr lnr-heart"></span>
                        06
                         <span className="lnr lnr-bubble"></span>
                        02
                      </p>
                    </div>
                  </div>
                  <div className="single-blog " style={{backgroundColor: "#000", backgroundImage:'url(img/blog2.jpg)'}}>
                    <a href="single.html"><h4>Home Audio Recording <br />
                    For Everyone</h4></a>
                    <div className="meta justify-content-between d-flex">
                      <p>
                        02 Hours ago
                      </p>
                      <p>
                        <span className="lnr lnr-heart"></span>
                        06
                         <span className="lnr lnr-bubble"></span>
                        02
                      </p>
                    </div>
                  </div>
                  <div className="single-blog " style={{backgroundColor: "#000", backgroundImage:'url(img/blog1.jpg)'}}>
                    <a href="single.html"><h4>Home Audio Recording <br />
                    For Everyone</h4></a>
                    <div className="meta justify-content-between d-flex">
                      <p>
                        02 Hours ago
                      </p>
                      <p>
                        <span className="lnr lnr-heart"></span>
                        06
                         <span className="lnr lnr-bubble"></span>
                        02
                      </p>
                    </div>
                  </div>                                    
                </div>
              </div>              

            </div>
          </div>
        </div>  
      </section>
    );
  }
}

class FilterJob extends JobPost {
  render() {
    return (
      <li><a href="#">{this.props.name}</a></li>
    );
  }
}

class JobList extends JobPost {
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

class JobTag extends JobList {
  render() {
    return (
      <li><a href="#">{this.props.name}</a></li>
    );
  }
}

class JobLocation extends JobPost {
  render() {
    return (
      <li><a className="justify-content-between d-flex" href={this.props.page}><p>{this.props.name}</p><span>{this.props.item}</span></a></li>
    );
  }
}




export default JobPost;
