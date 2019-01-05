import React, { Component } from 'react';

class AppDownload extends Component {
  render() {
    return (
      <section className="download-area section-gap" id="app">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 download-left">
							<img className="img-fluid" src="img/d1.png" alt="" />
						</div>
						<div className="col-lg-6 download-right">
							<h1>Download the <br />
							Job Listing App Today!</h1>
							<p className="subs">
								It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned.
							</p>
							<div className="d-flex flex-row">
                <Available icon="fa fa-apple" boldtext="Available" store="on App Store" />
                <Available icon="fa fa-android" boldtext="Available" store="on Play Store" />									
							</div>						
						</div>
					</div>
				</div>	
			</section>
    );
  }
}

class Available extends Component {
  render() {
    return (
      <div className="buttons">
        <i className={this.props.icon} aria-hidden="true"></i>
        <div className="desc">
          <a href="#">
            <p>
              <span>{this.props.boldtext}</span> <br />
              {this.props.store}
            </p>
          </a>
        </div>
      </div>
    );
  }
}



export default AppDownload;
