import React, { Component } from 'react';

class SearchField extends Component {
    
    constructor(){
        super();
        this.state={
            gifs:[]
        }
        this.gifByKeyword=this.gifByKeyword.bind(this)
      }
      gifByKeyword = async (searchTerm) => {
        console.log("In Mount")
        const url = ("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY") + searchTerm + ("gw0Mfu715hGvJMgPwVuJ5jWlqt7s5w44");
        const response = await fetch(url);
        console.log(response);
        const gifData = await response.json();
        this.setState({
            gifs: gifData.data
        });
    }
    handleSearchChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        let searchVar = document.getElementById('search').value
        this.gifByKeyword(searchVar)
    }    
       render(){
        console.log("In Render")
        return (
            <>
          <div className="container"> 
          <input id='search' placeholder="Search for a gif..." height="100"></input>
          <button id="searchButton" type='button' onClick={this.handleSearchChange}>Search</button>
            {
            (<div>
                {this.state.gifs.map(gvalue =>
                    <div className="gif-images">
                        <img src = {gvalue.images.original.url}/>
                    </div>
                )}
            </div>)
            }
            </div>
          </>
        ); 
      } 
    }
export default SearchField;