import React, { useEffect, useState } from 'react';
import '../../index.css';
import RequestsByUser from "../RequestsByUser";
import { requestToDefaultTableRow, parseSong } from "../../utils";
import AggregateBySong from "./AggregateBySong";

const RequestsBySong = ({
  data,
  songName,
  aggregate
}) => {

  const [crunched, setCrunched] = useState(null);

  useEffect(() => {
    console.log(`effect called with songName ${songName}`);
    const crunched = aggregate ? crunchAggregated() : crunch();
    setCrunched({nodes: Array.from(crunched.values())});
  }, [songName, aggregate]);

  const crunch = () => {
    return data.map(req => {
      const parsed = requestToDefaultTableRow(req);
      if (parsed.song.toLowerCase().includes(songName)) {
        return parsed;
      }
      return null;
    }).filter(x => x);
  };

  const crunchAggregated = () => {
    console.log(`crunching aggregated with songName ${songName}`);
    return data.reduce((map, req) => {
      if (!req.song && !req.nonlistSong) {
        console.log(`req song is null! ${JSON.stringify(req)}`);
        return map;
      }
      const song = parseSong(req);

      let lowercaseSong = song.toLowerCase();
      if (songName && !lowercaseSong.includes(songName.toLowerCase())) {
        return map;
      }

      if (!map.has(lowercaseSong)) {
        map.set(lowercaseSong, {...req, actualSong: song, firstDate: req.createdAt, lastDate: req.createdAt, total: 1});
      } else {
        const existing = map.get(lowercaseSong);
        existing.total++;
        if (new Date(req.createdAt).getTime() < new Date(existing.firstDate).getTime()) {
          existing.firstDate = req.createdAt;
        }
        if (new Date(req.createdAt).getTime() > new Date(existing.lastDate).getTime()) {
          existing.lastDate = req.createdAt;
        }
      }
      return map;
    }, new Map());
  }

  if(!data) {
    return <div className={"paragraph"}>missing data</div>;
  }
  if (!crunched) {
    return <div className={"paragraph"}>crunching</div>;
  }
  if (aggregate) {
    return <AggregateBySong data={crunched}/>
  } else {
    return <RequestsByUser data={crunched} showUser={true}/>
  }
}

export default RequestsBySong;