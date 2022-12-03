import React, {Component} from "../../../snowpack/pkg/react.js";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "../../../snowpack/pkg/@table-library/react-table-library.js";
import {HeaderCellSort, useSort} from "../../../snowpack/pkg/@table-library/react-table-library/sort.js";
import dateFormat from "../../../snowpack/pkg/dateformat.js";
class RequestsByUserTotals extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }
  render() {
    console.log("rendering RequestsByUserTotals");
    if (!this.props.data) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
    return /* @__PURE__ */ React.createElement(RequestsByUserTotalsTable, {
      data: this.props.data
    });
  }
}
const RequestsByUserTotalsTable = (props) => {
  console.log("creating RequestsByUserTotalsTable");
  const sortOptions = {
    sortFns: {
      REQUESTER: (array) => array.sort((a, b) => a.requester.localeCompare(b.name)),
      FIRST_DATE: (array) => array.sort((a, b) => new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime()),
      LAST_DATE: (array) => array.sort((a, b) => new Date(a.lastDate).getTime() - new Date(b.lastDate).getTime()),
      TOTAL_PLAYED: (array) => array.sort((a, b) => a.total - b.total)
    }
  };
  const sort = useSort(props.data, {state: {sortKey: "TOTAL_PLAYED", reverse: true}}, sortOptions);
  return /* @__PURE__ */ React.createElement(Table, {
    data: props.data,
    sort
  }, (tableList) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement(HeaderRow, null, /* @__PURE__ */ React.createElement(HeaderCellSort, {
    sortKey: "REQUESTER"
  }, "Name"), /* @__PURE__ */ React.createElement(HeaderCellSort, {
    sortKey: "FIRST_DATE"
  }, "First"), /* @__PURE__ */ React.createElement(HeaderCellSort, {
    sortKey: "LAST_DATE"
  }, "Last"), /* @__PURE__ */ React.createElement(HeaderCellSort, {
    sortKey: "TOTAL_PLAYED"
  }, "Total played"))), /* @__PURE__ */ React.createElement(Body, null, tableList.map((item) => /* @__PURE__ */ React.createElement(Row, {
    key: item.id,
    item
  }, /* @__PURE__ */ React.createElement(Cell, null, item.requester), /* @__PURE__ */ React.createElement(Cell, null, dateFormat(new Date(item.firstDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ React.createElement(Cell, null, dateFormat(new Date(item.lastDate), "yyyy-mm-dd HH:MM")), /* @__PURE__ */ React.createElement(Cell, null, item.total))))));
};
export default RequestsByUserTotals;
