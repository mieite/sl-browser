import React, {Component} from 'react';
import ResultsByUser from './RequestsByUserTotals';

import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import RequestsByUserTotals from "./RequestsByUserTotals";
import RequestsByUser from "./RequestsByUser";

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

    this.setState({crunched: reqsByUser, byUserTotalsTableRows: byUserTotalsTableRows});
  }

  requestsByUserTotals() {
    if(!this.props.data || !this.state.byUserTotalsTableRows) {
      return <></>;
    }
    return (<RequestsByUserTotals data={{ nodes: this.state.byUserTotalsTableRows }}/>);
  }

  updateRequesterName = (e) => this.setState({requester: e.target.value});

  filterByUser = () => this.setState({showFilterByUser: true});

  filterByUserTable = () => {
    if(!this.props.data || !this.state?.crunched || !this.state?.requester || !this.state?.showFilterByUser) {
      return <></>;
    }
    const byUser = this.state.crunched.get(this.state.requester.toLowerCase());
    if(!byUser) {
      return <></>;
    }
    console.log(byUser);
    return (<RequestsByUser data={{nodes: byUser}}/>);
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
          <input type={'text'} placeholder={'Requests by user'} onChange={(e) => { this.updateRequesterName(e)}}/>
          <button onClick={(e) => { this.filterByUser()}}>search</button>
          {this.filterByUserTable()}
        </div>
      </>
    );
  }
}

export default Results;
