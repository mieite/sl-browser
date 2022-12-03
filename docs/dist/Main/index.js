import React, {Component} from "../../snowpack/pkg/react.js";
import Results from "../Results/index.js";
import {getPlaylistHistory, getUserDetails} from "../api.js";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({initialized: true});
  }
  loadUserData = () => {
    if (!this.state.userId && this.state.username) {
      getUserDetails(this.state.username).then((result) => {
        this.setState({userId: result.id}, () => {
          this.search();
        });
      });
    } else {
      this.search();
    }
  };
  search = (data = [], max) => {
    if (this.state.username) {
      getPlaylistHistory(this.state.username).then((result) => {
        data.push(...result.items);
        if (!max) {
          max = result.total;
        }
        this.setState({data});
      });
    }
  };
  updateUsername = (e) => {
    this.setState({username: e.target.value});
  };
  render() {
    if (!this.state?.initialized) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      id: "search"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      placeholder: "Streamer name",
      onChange: (e) => {
        this.updateUsername(e);
      }
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => {
        this.loadUserData(e);
      }
    }, "Search")), /* @__PURE__ */ React.createElement("div", null, " "), /* @__PURE__ */ React.createElement("div", {
      id: "result-main"
    }, this.state.data && /* @__PURE__ */ React.createElement(Results, {
      data: this.state.data
    })));
  }
}
export default Main;
