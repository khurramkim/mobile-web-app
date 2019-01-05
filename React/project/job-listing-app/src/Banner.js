import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section className="banner-area relative" id="home">  
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-center">
            <div className="banner-content col-lg-12">
              <h1 className="text-white">
                <span>1500+</span> Jobs posted last week        
              </h1> 
              <form action="search.html" className="serach-form-area">
                <div className="row justify-content-center form-wrap">
                  <div className="col-lg-4 form-cols">
                    <input type="text" className="form-control" name="search" placeholder="what are you looging for"/>
                  </div>
                  <div className="col-lg-3 form-cols">
                    <div className="default-select" id="default-selects">
                      <select>
                        <option value="1">Select area</option>
                        <option value="2">Dhaka</option>
                        <option value="3">Rajshahi</option>
                        <option value="4">Barishal</option>
                        <option value="5">Noakhali</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 form-cols">
                    <div className="default-select" id="default-selects2">
                      <select>
                        <option value="1">All Category</option>
                        <option value="2">Medical</option>
                        <option value="3">Technology</option>
                        <option value="4">Goverment</option>
                        <option value="5">Development</option>
                      </select>
                    </div>                    
                  </div>
                  <div className="col-lg-2 form-cols">
                      <button type="button" className="btn btn-info">
                        <span className="lnr lnr-magnifier"></span> Search
                      </button>
                  </div>                
                </div>
              </form> 
              <p className="text-white"> <span>Search by tags:</span> Tecnology, Business, Consulting, IT Company, Design, Development</p>
            </div>                      
          </div>
        </div>
      </section>
    );
  }
}



export default Banner;
