import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Feature from './Feature-Area';
import PopularPost from './PopularPost';
import FeatureCategory from './FeatureCategory';
import JobPost from './JobPost';
import CallToAction from './CallToAction';
import AppDownload from './AppDownload';
import Footer from './Footer';

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
