import React, { Component } from 'react';

class CallToAction extends Component {
  render() {
    return (
      <section className="callto-action-area section-gap" id="join">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content col-lg-9">
							<div className="title text-center">
								<h1 className="mb-10 text-white">Join us today without any hesitation</h1>
								<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <Button text="I am a Candidate" link="#" />
                <Button text="Request Free Demo" link="#" />
							</div>
						</div>
					</div>	
				</div>	
			</section>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <a className="primary-btn" href={this.props.link}>{this.props.text}</a>
    );
  }
}



export default CallToAction;
