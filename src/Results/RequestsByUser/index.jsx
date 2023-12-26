import React from 'react';
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import dateFormat from "dateformat";
import '../../index.css';

const RequestsByUser = ({
  data,
  showUser
}) => {

  const theme = useTheme(getTheme());

  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a, b) => a.song.localeCompare(b.song)),
      REQUESTER: (array) => array.sort((a, b) => a.requester.localeCompare(b.requester)),
      PLAY_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
    }
  }
  const sort = useSort(data, { state: { sortKey: 'PLAY_DATE' }}, sortOptions);

  console.log("rendering RequestsByUser");
  return (
    <div className={"paragraph"}>
      <Table data={data} sort={sort} theme={theme}>{(tableList) => (
        <>
          <Header>
            <HeaderRow>
              {showUser && <><HeaderCellSort sortKey={'REQUESTER'}>Name</HeaderCellSort></>}
              <HeaderCellSort sortKey={'SONG_NAME'}>Song Name</HeaderCellSort>
              <HeaderCell>Song URI</HeaderCell>
              <HeaderCellSort sortKey={'PLAY_DATE'}>Played</HeaderCellSort>
            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                {showUser && <><Cell>{item.requester}</Cell></>}
                <Cell>{item.song}</Cell>
                <Cell><div className={"wrap"}>{item.uri}</div></Cell>
                <Cell>{dateFormat(new Date(item.playedAt), 'yyyy-mm-dd HH:MM')}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}</Table>
    </div>
  )
};

export default RequestsByUser;