import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <section className="features-area">
        <div className="container">
          <div className="row">
              <FeatBlock name="Searching" text="Lorem ipsum dolor sit ametasasa, consectetur adipisicing." />
              <FeatBlock name="Applying" text="Lorem ipsum dolor sit ametasasa, consectetur adipisicing." />
              <FeatBlock name="Security" text="Lorem ipsum dolor sit ametasasa, consectetur adipisicing." />
              <FeatBlock name="Notifications" text="Lorem ipsum dolor sit ametasasa, consectetur adipisicing." />                                  
          </div>
        </div>  
      </section>
    );
  }
}

class FeatBlock extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <div className="single-feature">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}



export default Feature;
