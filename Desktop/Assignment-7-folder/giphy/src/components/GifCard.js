import React, { Component } from 'react'
class GifCard extends Component {
    constructor(){
        super();
        this.state = {
            gifURL: []
        }
    }
 
    async componentDidMount(){
        const url = 'http://api.giphy.com/v1/gifs/random?api_key=d9yzq75PA0Fdy2XP84jqHK2mLIxw4H2k';
        const response = await fetch(url);
        console.log(response);
        const gifData = await response.json();
        this.setState({
            gifURL: gifData.data
        });  
        console.log(this.state.gifURL); 
    }

    randomGif = async () =>{
        const url = 'gw0Mfu715hGvJMgPwVuJ5jWlqt7s5w44';
        const response = await fetch(url);
        console.log(response);
        const gifData = await response.json();
        this.setState({
            gifURL: gifData.data
        });  
        console.log(this.state.gifURL);
    }
    
    render(){
    return (
        <div>
            <h1>Gif<br></br> Randomizer</h1>
            <button onClick={this.randomGif}>Generate a Random Gif!</button>
                <div>
                    <img className='gifDisplay' src ={this.state.gifURL.image_url} alt = 'gif'/>
                </div>
        </div>
    )
}
}
export default GifCard