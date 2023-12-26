import { HeaderCellSort, useSort } from "@table-library/react-table-library/sort";
import { Body, Cell, Header, HeaderRow, Row, Table } from "@table-library/react-table-library";
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import dateFormat from "dateformat";
import React from "react";

const AggregateBySong = ({
  data
}) => {
  const theme = useTheme(getTheme());

  console.log(`data: ${data.nodes.length}` );
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a, b) => a.actualSong.localeCompare(b.actualSong)),
      FIRST_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()),
      TOTAL_PLAYED : (array) => array.sort((a, b) => a.total - b.total)
    }
  }

  const sort = useSort(data, {state: {sortKey: 'TOTAL_PLAYED', reverse: true}}, sortOptions);

  return (
    <div className={"paragraph"}>
      <Table data={data} sort={sort} theme={theme}>{(tableList) => (
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
                <Cell><div className={"wrap"}>{item.actualSong}</div></Cell>
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

export default AggregateBySong;