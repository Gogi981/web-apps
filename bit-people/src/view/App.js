import React from 'react';
import Main from './Main';
import Header from '../components/Header'
import Footer from '../components/Footer'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isList: !!JSON.parse(localStorage.getItem("isList")),
      lastRefresh: localStorage.getItem("lastRefresh")
    };
  }



  setLastRefresh = () => {
    this.setState({ lastRefresh: Date() });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main lastRefresh={this.setLastRefresh} />
        < Footer lastRefresh={this.state.lastRefresh} />
      </div>
    );
  }
}

export default App;
