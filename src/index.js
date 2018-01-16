import _ from 'lodash'
import React, { Component } from "react";
import ReactDOM, { render }  from 'react-dom';
import YTSearch from "youtube-api-search"
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const youTubeAPI_KEY = 'AIzaSyBpcBERmpT4_aD3YYLcXG0OaKtUg4iBlnA'


// create a new component, it should produce HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('ReactJS Lessons');
    };

    videoSearch(term) {
        YTSearch( {key : youTubeAPI_KEY, term: term}, (videos) => {
            this.setState( {
                videos: videos,
                selectedVideo:videos[0]
             });
        });
    }



    render () {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video= {this.state.selectedVideo}/>
                <VideoList
                videos = {this.state.videos}
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}/>
            </div>
        )
    }
}
// take this component and generate HTML and put it on the DOM


ReactDOM.render(<App />, document.querySelector('.container'))
