import React, {useState} from "../../../snowpack/pkg/react.js";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "../../../snowpack/pkg/@table-library/react-table-library.js";
import {HeaderCellSort, useSort} from "../../../snowpack/pkg/@table-library/react-table-library/sort.js";
import dateFormat from "../../../snowpack/pkg/dateformat.js";
const RequestsByUser = (props) => {
  const sortOptions = {
    sortFns: {
      SONG_NAME: (array) => array.sort((a, b) => a.song.localeCompare(b.song)),
      PLAY_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime())
    }
  };
  const sort = useSort(props.data, {state: {sortKey: "PLAY_DATE"}}, sortOptions);
  return /* @__PURE__ */ React.createElement(Table, {
    data: props.data,
    sort
  }, (tableList) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement(HeaderRow, null, /* @__PURE__ */ React.createElement(HeaderCellSort, {
    sortKey: "SONG_NAME"
  }, "Song Name"), /* @__PURE__ */ React.createElement(HeaderCell, null, "Song URI"), /* @__PURE__ */ React.createElement(HeaderCellSort, {
    sortKey: "PLAY_DATE"
  }, "Played"))), /* @__PURE__ */ React.createElement(Body, null, tableList.map((item) => /* @__PURE__ */ React.createElement(Row, {
    key: item.id,
    item
  }, /* @__PURE__ */ React.createElement(Cell, null, item.song), /* @__PURE__ */ React.createElement(Cell, null, item.uri), /* @__PURE__ */ React.createElement(Cell, null, dateFormat(new Date(item.playedAt), "yyyy-mm-dd HH:MM")))))));
};
export default RequestsByUser;
