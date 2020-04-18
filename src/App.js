import React, { Component } from 'react';

import { PAGE_ONE, PAGE_TWO, PAGE_THREE, PAGE_FOUR } from './pages.js';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTurner from './components/PageTurner';

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
