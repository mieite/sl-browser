import React, { useEffect, useRef, useState } from 'react';
import RequestsByUserTotals from "./RequestsByUserTotals";
import RequestsByUser from "./RequestsByUser";
import RequestsBySong from "./RequestsBySong";
import '../index.css';

const Results = ({
  data
}) => {

  const [crunched, setCrunched] = useState(null);
  const [byUserTotalsTableRows, setByUserTotalsTableRows] = useState([]);
  const requesterName = useRef(null);
  const [actualRequesterName, setActualRequesterName] = useState(null);
  const [showFilterByUser, setShowFilterByUser] = useState(false);
  const [showFilterBySongName, setShowFilterBySongName] = useState(false);
  const songName = useRef(null);
  const [actualSongName, setActualSongName] = useState(null);

  useEffect(() => {
    crunchData();
  }, []);

  const crunchData = () => {
    console.log("crunch");
    const reqsByUser = new Map();

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

    setCrunched(reqsByUser);
    setByUserTotalsTableRows(byUserTotalsTableRows);
  }

  const requestsByUserTotals = () => {
    if(!data || !byUserTotalsTableRows) {
      return <>fetching & crunching data</>;
    }
    return (<RequestsByUserTotals data={{ nodes: byUserTotalsTableRows }}/>);
  }

  const filterByUserTable = () => {
    if(!data || !crunched || !requesterName || !showFilterByUser) {
      return <></>;
    }
    const byUser = crunched.get(actualRequesterName.toLowerCase());
    if(!byUser) {
      return <></>;
    }
    console.log(`getting to do byUser`);
    return (<RequestsByUser data={{nodes: byUser}}/>);
  }

  const filterBySongNameTable = () => {
    if (!data || !crunched || !actualSongName || !showFilterBySongName) {
      return <></>
    }
    return (<RequestsBySong data={data} songName={actualSongName}/>)

  }

  if(!crunched) {
    return <>Crunching data...</>
  }
  return (
    <>
      <div> Total: {crunched.size} requesters</div>
      <div><h5>User leaderboard</h5></div>
      <div>{requestsByUserTotals()}</div>
      <div>&nbsp;</div>
      <div>
        <div className={"segment"}>
          <input type={'text'} placeholder={'Requests by user'} onChange={(e) => { requesterName.current = e.target.value}}/>
          <button onClick={() => { setShowFilterByUser(true); setActualRequesterName(requesterName.current); }}>search</button>
          {filterByUserTable()}
        </div>
        <div className={"segment"}>
          <input type={'text'} placeholder={'Requests by song name'} onChange={(e) => { songName.current = e.target.value}}/>
          <button onClick={(e) => { setShowFilterBySongName(true); setActualSongName(songName.current); }}>search by song name</button>
          {filterBySongNameTable()}
        </div>
      </div>
    </>
  );
}

export default Results;
