import React, { useEffect, useState } from 'react';
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import dateFormat from "dateformat";
import '../../index.css';

const RequestsBySong = ({
  data,
  songName
}) => {

  const [crunched, setCrunched] = useState(null);

  useEffect(() => {
    const crunched = data.reduce((map, req) => {
      if (!req.song && !req.nonlistSong) {
        console.log(`req song is null! ${JSON.stringify(req)}`);
        return map;
      }
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

      let lowercaseSong = song.toLowerCase();
      if (!lowercaseSong.includes(songName.toLowerCase())) {
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
    setCrunched({ nodes: Array.from(crunched.values())});
  }, [songName]);

  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a, b) => a.actualSong.localeCompare(b.actualSong)),
      FIRST_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()),
      TOTAL_PLAYED : (array) => array.sort((a, b) => a.total - b.total)
    }
  }

  const sort = useSort(data, {state: {sortKey: 'TOTAL_PLAYED', reverse: true}}, sortOptions);

  if(!data) {
    return <>missing data</>;
  } else if (!crunched) {
    return <>crunching data</>;
  }
  
  return (
    <div className={"paragraph"}>
      <Table data={crunched} sort={sort}>{(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSort sortKey={'SONG_NAME'}>Name</HeaderCellSort>
              <HeaderCellSort sortKey={'FIRST_DATE'}>First</HeaderCellSort>
              <HeaderCellSort sortKey={'LAST_DATE'}>Last</HeaderCellSort>
              <HeaderCellSort sortKey={'TOTAL_PLAYED'}>Total played</HeaderCellSort>
            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.actualSong}</Cell>
                <Cell>{dateFormat(new Date(item.firstDate), 'yyyy-mm-dd HH:MM')}</Cell>
                <Cell>{dateFormat(new Date(item.lastDate), 'yyyy-mm-dd HH:MM')}</Cell>
                <Cell>{item.total}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
      </Table>
    </div>
  );
}

export default RequestsBySong;