import React, { Component } from 'react';
const api_key = '607226744df7228000e847e5a41b51f0';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: "Kharkiv",
            description : ''
        }
    }

    componentDidMount(){
        this.grabWeather(this.state.city);
    }

    grabWeather(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
            .then(response => response.json())
            .then(json => this.setState({description : json.weather[0].description}));
    }

    render(){
        return (
            <div>
                <div>Weather report for {this.state.city}</div>
                <div><strong> Description : {this.state.description}</strong></div>
            </div>)
    };
}
export  default  App;