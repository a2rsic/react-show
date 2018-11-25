import React, { Component, Fragment } from 'react';
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { fetchData } from "./shows/fetchData";
import { ShowList } from './shows/ShowList';

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: []
    }

  }

  componentDidMount() {
    this.fetchShowsItem()
  }

  fetchShowsItem = () => {
    fetchData()
      .then(showData => {
        console.log("fetch:", showData);
        
        this.setState({ shows: showData })
      })
  }

  render() {

    console.log("render, state:", this.state.shows);
    if(this.state.shows.length === 0) {
      return (
        <Fragment>
        <Header />
        <h3>
          loading...
        </h3>
        <Footer />
        </Fragment>
      )
    }
    
    return (
      <Fragment>
        <Header />
        <main>
        <ShowList listOfShows={this.state.shows}/>
        </main>
        <Footer />
      </Fragment>
    );
  }
}




export default App;
