import React from 'react';
import Main from './Main';
import Header from '../components/Header'
import Footer from '../components/Footer'


class App extends React.Component {

  constructor(props) {
    super(props)

    if (!localStorage.isList) { localStorage.setItem("isList", "true") };
    this.state = { isList: localStorage.isList };
    console.log(this.state);
  }

  changeLayout = (event) => {
    this.setState((prevState) => {
      localStorage.isList = !prevState.isList;
      return {
        isList: !prevState.isList
      }
    })
  }

  showAboutPage = () => {
    console.log("rr")
  }


  render() {

    return (
      <div className="App">
        <Header isList={this.state.isList} onChangeLayout={this.changeLayout} showAboutPage={this.showAboutPage} />
        <Main isList={this.state.isList} />
        <Footer />
      </div>
    );
  }
}

export default App;
