import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from './components/Horned.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      dataArr: hornsData,

      hornedTitle: "",
      hornedUrl: "",
      hornedDiscription: "",

      show: false,
    }
  }

  hornedBeastData = (title, url, description) => {

    this.setState({
      hornedTitle: title,
      hornedUrl: url,
      hornedDiscription: description,
    })
  }

  showingFunction = () => {
    this.setState({
      show: true,
    })
  }


  closingFunction = () => {
    this.setState({
      show: false,
    })
  }





  render() {
    return (
      <div>
        <Header />

        <Main

          beastArr={this.state.dataArr}
          myFilter={this.myFilter}
          myFilterRest={this.myFilterRest}
          appFunctionApptoMain={this.hornedBeastData}
          showHandeling={this.showingFunction}

        />

        <SelectedBeast

          horndBeastTitle={this.state.hornedTitle}
          hornedBeastUrl={this.state.hornedUrl}
          hornedBeastDiscription={this.state.hornedDiscription}
          show={this.state.show}
          hide={this.closingFunction}
        />

        <Footer />

      </div>
    )
  }
}
export default App;