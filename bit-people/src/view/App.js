import React from 'react';
import Main from './Main';
import Header from '../components/Header'
import Footer from '../components/Footer'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isList: !!JSON.parse(localStorage.getItem("isList")) };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
