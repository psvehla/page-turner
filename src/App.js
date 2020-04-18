import React, { Component } from 'react';

import {
  PAGE_ONE,
  PAGE_TWO,
  PAGE_THREE,
  PAGE_FOUR,
  PAGE_FIVE,
  PAGE_SIX,
  PAGE_SEVEN,
} from './pages.js';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageTurner from './components/page-turner/PageTurner';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: PAGE_ONE,
    }
  }

  onClickHandler = async () => {
    switch (this.state.currentPage) {
      case PAGE_ONE:
        this.setState({
          currentPage: PAGE_TWO,
        });
        break;
      case PAGE_TWO:
        this.setState({
          currentPage: PAGE_THREE,
        });
        break;
      case PAGE_THREE:
        this.setState({
          currentPage: PAGE_FOUR,
        });
        break;
      case PAGE_FOUR:
        this.setState({
          currentPage: PAGE_FIVE,
        });
        break;
      case PAGE_FIVE:
        this.setState({
          currentPage: PAGE_SIX,
        });
        break;
      case PAGE_SIX:
        this.setState({
          currentPage: PAGE_SEVEN,
        });
        break;
      default:
        this.setState({
          currentPage: PAGE_ONE,
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PageTurner currentPage={this.state.currentPage} onClick={this.onClickHandler} />
        <Footer />
      </div>
    );
  }
}

export default App;
