import React, {Component} from 'react';
import RequestsByUserTotals from "./RequestsByUserTotals";
import RequestsByUser from "./RequestsByUser";
import RequestsBySong from "./RequestsBySong";

class Results extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.crunchData();
  }

  crunchData = () => {
    console.log("crunch");
    const reqsByUser = new Map();
    const data = this.props.data;

    if(!data) {
      return;
    }

    data.forEach((req) => {
      const info = req.requests[0];
      const name = info && info.name || 'anonymous';
      const list = reqsByUser.has(name.toLowerCase()) ? reqsByUser.get(name.toLowerCase()) : [];
      let song;
      if(req.song) {
        song = `${req.song.artist} - ${req.song.title}`;
      } else {
        if(req.nonlistSong) {
          song = req.nonlistSong;
        } else {
          song = req.note;
        }
      }

      let uri;
      if(req.note && req.note.toLowerCase().startsWith('http')) {
        uri = req.note;
      } else if(req.nonlistSong && req.nonlistSong.toLowerCase().startsWith('http')) {
        uri = req.nonlistSong;
      }

      if(uri && uri.includes('youtube') && uri.includes('&')) {
        uri = uri.substring(0, uri.indexOf('&'));
      } else if(uri && uri.includes('spotify') && uri.includes('?')) {
        uri = uri.substring(0, uri.indexOf('?'));
      }
      
      list.push({
        id: req.id,
        uri: uri,
        createdAt: req.createdAt,
        playedAt: req.playedAt,
        song: song,
        requester: name
      });
      reqsByUser.set(name.toLowerCase(), list);
    });

    const byUserTotalsTableRows = Array.from(reqsByUser, ([key, userReqs]) => {
      return {
        id: userReqs[0].id,
        requester: userReqs[0].requester,
        firstDate: userReqs[userReqs.length-1].playedAt,
        lastDate: userReqs[0].playedAt,
        total: userReqs.length
      }
    });

    console.log(data);

    this.setState({crunched: reqsByUser, byUserTotalsTableRows: byUserTotalsTableRows});
  }

  requestsByUserTotals() {
    if(!this.props.data || !this.state.byUserTotalsTableRows) {
      return <>fetching & crunching data</>;
    }
    return (<RequestsByUserTotals data={{ nodes: this.state.byUserTotalsTableRows }}/>);
  }

  updateRequesterName = (e) => this.setState({requester: e.target.value});

  updateSongName = (e) => this.setState({songName: e.target.value});

  filterByUser = () => this.setState({showFilterByUser: true});

  filterBySongName = () => this.setState({actualSongName: this.state.songName, showFilterBySongName: true});

  filterByUserTable = () => {
    if(!this.props.data || !this.state?.crunched || !this.state?.requester || !this.state?.showFilterByUser) {
      return <></>;
    }
    const byUser = this.state.crunched.get(this.state.requester.toLowerCase());
    if(!byUser) {
      return <></>;
    }
    // console.log(byUser);
    return (<RequestsByUser data={{nodes: byUser}}/>);
  }

  filterBySongNameTable = () => {
    if (!this.props.data || !this.state?.crunched || !this.state?.actualSongName || !this.state?.showFilterBySongName) {
      return <></>
    }
    return (<RequestsBySong data={this.props.data} songName={this.state.actualSongName}/>)

  }

  render() {
    if(!this.state?.crunched) {
      return <>Crunching data...</>
    }
    return (
      <>
        <div> Total: {this.state.crunched.size} requesters</div>
        <div><h5>User leaderboard</h5></div>
        <div>{this.requestsByUserTotals()}</div>
        <div>&nbsp;</div>
        <div>
          <p>
            <input type={'text'} placeholder={'Requests by user'} onChange={(e) => { this.updateRequesterName(e)}}/>
            <button onClick={(e) => { this.filterByUser()}}>search</button>
            {this.filterByUserTable()}
          </p>
          <p>
            <input type={'text'} placeholder={'Requests by song name'} onChange={(e) => { this.updateSongName(e)}}/>
            <button onClick={(e) => { this.filterBySongName()}}>search by song name</button>
            {this.filterBySongNameTable()}
          </p>
        </div>
      </>
    );
  }
}

export default Results;
