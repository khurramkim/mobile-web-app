import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-3  col-md-12">
							<div className="single-footer-widget">
								<h6>Top Products</h6>
								<ul className="footer-nav">
                  <FooterLink text="Managed Website" />
                  <FooterLink text="Manage Reputation" />
                  <FooterLink text="Power Tools" />
                  <FooterLink text="Marketing Service" />
								</ul>
							</div>
						</div>
						<div className="col-lg-6  col-md-12">
							<div className="single-footer-widget newsletter">
								<h6>Newsletter</h6>
								<p>You can trust us. we only send promo offers, not a single spam.</p>
								<div id="mc_embed_signup">
									<form target="_blank"  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">

										<div className="form-group row" style={{width:'100%'}}>
											<div className="col-lg-8 col-md-12">
												<input name="EMAIL" placeholder="Enter Email"  required="" type="email" />
												<div style={{position:'absolute', left: '-5000px'}}>
													<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1"  type="text" />
												</div>
											</div> 
										
											<div className="col-lg-4 col-md-12">
												<button className="nw-btn primary-btn">Subscribe<span className="lnr lnr-arrow-right"></span></button>
											</div> 
										</div>		
										<div className="info"></div>
									</form>
								</div>		
							</div>
						</div>
						<div className="col-lg-3  col-md-12">
							<div className="single-footer-widget mail-chimp">
								<h6 className="mb-20">Instragram Feed</h6>
								<ul className="instafeed d-flex flex-wrap">
                  <InstaFeed img="img/i1.jpg" />
                  <InstaFeed img="img/i2.jpg" />
                  <InstaFeed img="img/i3.jpg" />
                  <InstaFeed img="img/i4.jpg" />
                  <InstaFeed img="img/i5.jpg" />
                  <InstaFeed img="img/i6.jpg" />
                  <InstaFeed img="img/i7.jpg" />
                  <InstaFeed img="img/i8.jpg" />
								</ul>
							</div>
						</div>						
					</div>

					<div className="row footer-bottom d-flex justify-content-between">
						<p className="col-lg-8 col-sm-12 footer-text m-0 text-white">			
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
						</p>
						<div className="col-lg-4 col-sm-12 footer-social">
              <SocialIcon icon="fa fa-facebook" />
              <SocialIcon icon="fa fa-twitter" />
              <SocialIcon icon="fa fa-dribbble" />
              <SocialIcon icon="fa fa-behance" />
						</div>
					</div>
				</div>
			</footer>
    );
  }
}


class FooterLink extends Component {
  render() {
    return (
      <li><a href="#">{this.props.text}</a></li>
    );
  }
}

class InstaFeed extends Component {
  render() {
    return (
      <li><img src={this.props.img} alt="" /></li>
    );
  }
}

class SocialIcon extends Component {
  render() {
    return (
      <a href="#"><i className={this.props.icon}></i></a>
    );
  }
}



export default Footer;
