import React from 'react';
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import dateFormat from "dateformat";

const RequestsByUserTotals = ({
  data
}) => {
  const theme = useTheme(getTheme());
  console.log("rendering RequestsByUserTotals");
  if(!data) {
    return <></>;
  }

  console.log("creating RequestsByUserTotalsTable");

  const sortOptions = {
    sortFns: {
      REQUESTER: (array) => array.sort((a, b) => a.requester.localeCompare(b.requester)),
      FIRST_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()),
      TOTAL_PLAYED : (array) => array.sort((a, b) => a.total - b.total)
    }
  }

  const sort = useSort(data, {state: {sortKey: 'TOTAL_PLAYED', reverse: true}}, sortOptions);

  return (
    <Table data={data} sort={sort} theme={theme}>{(tableList) => (
      <>
        <Header>
          <HeaderRow>
            <HeaderCellSort sortKey={'REQUESTER'}>Name</HeaderCellSort>
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

export default RequestsByUserTotals;