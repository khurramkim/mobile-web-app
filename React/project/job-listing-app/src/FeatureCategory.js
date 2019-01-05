import React, { Component } from 'react';

class FeatureCategory extends Component {
  render() {
    return (
      <section className="feature-cat-area pt-100" id="category">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-10">
              <div className="title text-center">
                <h1 className="mb-10">Featured Job Categories</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>            
          <div className="row">      
            <CategoryBlock name="Accounting" image="img/o1.png" />
            <CategoryBlock name="Development" image="img/o2.png" />
            <CategoryBlock name="Technology" image="img/o3.png" />
            <CategoryBlock name="Media & News" image="img/o4.png" />
            <CategoryBlock name="Medical" image="img/o5.png" />
            <CategoryBlock name="Goverment" image="img/o6.png" />                                                     
          </div>
        </div>  
      </section>
    );
  }
}

class CategoryBlock extends FeatureCategory {
  render() {
    return (
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="single-fcat">
          <a href="category.html">
            <img src={this.props.image} alt="" />
          </a>
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}



export default FeatureCategory;
