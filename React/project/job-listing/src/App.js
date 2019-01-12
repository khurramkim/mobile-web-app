import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Feature from './FeatureArea/Feature-Area';
import PopularPost from './PopularPost/PopularPost';
import FeatureCategory from './FeatureCategory/FeatureCategory';
import JobPost from './JobPost/JobPost';
import CallToAction from './CallToAction/CallToAction';
import AppDownload from './AppDownload/AppDownload';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Feature/>
        <PopularPost/>
        <FeatureCategory/>
        <JobPost />
        <CallToAction />
        <AppDownload />
        <Footer />
      </div>
    );
  }
}

export default App;
