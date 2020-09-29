import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {lat:null, errorMessage:''};
  }

  componentDidMount(){
    //Geolocation API is built into the browser. Used to get user's current location
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request"/>
  }

  render(){
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }  
}

ReactDOM.render(<App/>, document.getElementById('root'));
