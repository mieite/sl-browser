import React, {Component} from 'react';
import Results from "../Results";

import { getPlaylistHistory, getUserDetails } from '../api';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({initialized: true})
  }

  loadUserData = () => {
    if(!this.state.userId && this.state.username) {
      getUserDetails(this.state.username)
        .then(result => {
          this.setState({userId: result.id}, () => {this.search()})
        })
    } else {
      this.search();
    }
  }

  search = (data = [], max) => {
    if (this.state.username) {
      getPlaylistHistory(this.state.username)
        .then(result => {
          data.push(...result.items);
          if(!max) {
            max = result.total;
          }
          // if(data.length < max) {
          //   this.search(data, max);
          // } else {
            this.setState({data: data});
          // }
        });
    }
  }

  updateUsername = (e) => {
    this.setState({username : e.target.value});
  }

  render() {
    if (!this.state?.initialized) {
      return <></>;
    }
    return (
      <>
        <div id={'search'}>
          <input type={'text'} placeholder={'Streamer name'} onChange={(e) => { this.updateUsername(e)}}/>
          <button onClick={(e) => { this.loadUserData(e) }}>Search</button>
        </div>
        <div>&nbsp;</div>
        <div id={'result-main'}>
          {this.state.data && <Results data={this.state.data}/>}
        </div>
      </>
    )
  }
}

export default Main;