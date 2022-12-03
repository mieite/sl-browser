import React, { Component } from 'react';
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import dateFormat from "dateformat";

class RequestsBySong extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.data) {
      return <></>;
    }
    return <RequestsBySongTable data={this.props.data}/>;
  }
}


const RequestsBySongTable = (props) => {

  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a, b) => a.song.localeCompare(b.song)),
      FIRST_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()),
      TOTAL_PLAYED : (array) => array.sort((a, b) => a.total - b.total)
    }
  }

  const sort = useSort(props.data, {state: {sortKey: 'TOTAL_PLAYED', reverse: true}}, sortOptions);

  return (
    <Table data={props.data} sort={sort}>{(tableList) => (
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
              <Cell>{item.requester}</Cell>
              <Cell>{dateFormat(new Date(item.firstDate), 'yyyy-mm-dd HH:MM')}</Cell>
              <Cell>{dateFormat(new Date(item.lastDate), 'yyyy-mm-dd HH:MM')}</Cell>
              <Cell>{item.total}</Cell>
            </Row>
          ))}
        </Body>
      </>
    )}</Table>
  )
};

export default RequestsBySong;