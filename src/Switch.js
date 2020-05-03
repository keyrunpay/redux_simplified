import React from "react";
import { enableSwitch, disableSwitch } from "./redux/action/switchAction";
import { connect } from "react-redux";

class Switch extends React.Component {
  render() {
    return (
      <div className="count">
        <h3>Counter: {this.props.switch.enabled ? "Enabled" : "Disabled"}</h3>
        <br />
        <button
          onClick={() => {
            this.props.enableSwitch();
          }}
        >
          Enable
        </button>
        <button
          onClick={() => {
            this.props.disableSwitch();
          }}
        >
          Disable
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    switch: state.switch,
  };
};

export default connect(mapStateToProps, {
  enableSwitch,
  disableSwitch,
})(Switch);
