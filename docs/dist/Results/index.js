import React, {Component} from "../../snowpack/pkg/react.js";
import ResultsByUser from "./RequestsByUserTotals/index.js";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "../../snowpack/pkg/@table-library/react-table-library.js";
import {HeaderCellSort, useSort} from "../../snowpack/pkg/@table-library/react-table-library/sort.js";
import RequestsByUserTotals from "./RequestsByUserTotals/index.js";
import RequestsByUser from "./RequestsByUser/index.js";
class Results extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.crunchData();
  }
  crunchData = () => {
    console.log("crunch");
    const reqsByUser = new Map();
    const data = this.props.data;
    if (!data) {
      return;
    }
    data.forEach((req) => {
      const info = req.requests[0];
      const name = info && info.name || "anonymous";
      const list = reqsByUser.has(name.toLowerCase()) ? reqsByUser.get(name.toLowerCase()) : [];
      let song;
      if (req.song) {
        song = `${req.song.artist} - ${req.song.title}`;
      } else {
        if (req.nonlistSong) {
          song = req.nonlistSong;
        } else {
          song = req.note;
        }
      }
      let uri;
      if (req.note && req.note.toLowerCase().startsWith("http")) {
        uri = req.note;
      } else if (req.nonlistSong && req.nonlistSong.toLowerCase().startsWith("http")) {
        uri = req.nonlistSong;
      }
      if (uri && uri.includes("youtube") && uri.includes("&")) {
        uri = uri.substring(0, uri.indexOf("&"));
      } else if (uri && uri.includes("spotify") && uri.includes("?")) {
        uri = uri.substring(0, uri.indexOf("?"));
      }
      list.push({
        id: req.id,
        uri,
        createdAt: req.createdAt,
        playedAt: req.playedAt,
        song,
        requester: name
      });
      reqsByUser.set(name.toLowerCase(), list);
    });
    const byUserTotalsTableRows = Array.from(reqsByUser, ([key, userReqs]) => {
      return {
        id: userReqs[0].id,
        requester: userReqs[0].requester,
        firstDate: userReqs[userReqs.length - 1].playedAt,
        lastDate: userReqs[0].playedAt,
        total: userReqs.length
      };
    });
    this.setState({crunched: reqsByUser, byUserTotalsTableRows});
  };
  requestsByUserTotals() {
    if (!this.props.data || !this.state.byUserTotalsTableRows) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
    return /* @__PURE__ */ React.createElement(RequestsByUserTotals, {
      data: {nodes: this.state.byUserTotalsTableRows}
    });
  }
  updateRequesterName = (e) => this.setState({requester: e.target.value});
  filterByUser = () => this.setState({showFilterByUser: true});
  filterByUserTable = () => {
    if (!this.props.data || !this.state?.crunched || !this.state?.requester || !this.state?.showFilterByUser) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
    const byUser = this.state.crunched.get(this.state.requester.toLowerCase());
    if (!byUser) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
    console.log(byUser);
    return /* @__PURE__ */ React.createElement(RequestsByUser, {
      data: {nodes: byUser}
    });
  };
  render() {
    if (!this.state?.crunched) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, "Crunching data...");
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, " Total: ", this.state.crunched.size, " requesters"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", null, "User leaderboard")), /* @__PURE__ */ React.createElement("div", null, this.requestsByUserTotals()), /* @__PURE__ */ React.createElement("div", null, " "), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      placeholder: "Requests by user",
      onChange: (e) => {
        this.updateRequesterName(e);
      }
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => {
        this.filterByUser();
      }
    }, "search"), this.filterByUserTable()));
  }
}
export default Results;
