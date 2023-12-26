import React from 'react';
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import dateFormat from "dateformat";

const RequestsByUser = ({
  data
}) => {
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a, b) => a.song.localeCompare(b.song)),
      PLAY_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
    }
  }
  const sort = useSort(data, { state: { sortKey: 'PLAY_DATE' }}, sortOptions);

  return (
    <Table data={data} sort={sort}>{(tableList) => (
      <>
        <Header>
          <HeaderRow>
            <HeaderCellSort sortKey={'SONG_NAME'}>Song Name</HeaderCellSort>
            <HeaderCell>Song URI</HeaderCell>
            <HeaderCellSort sortKey={'PLAY_DATE'}>Played</HeaderCellSort>
          </HeaderRow>
        </Header>
        <Body>
          {tableList.map((item) => (
            <Row key={item.id} item={item}>
              <Cell>{item.song}</Cell>
              <Cell>{item.uri}</Cell>
              <Cell>{dateFormat(new Date(item.playedAt), 'yyyy-mm-dd HH:MM')}</Cell>
            </Row>
          ))}
        </Body>
      </>
    )}</Table>
  )
};

export default RequestsByUser;