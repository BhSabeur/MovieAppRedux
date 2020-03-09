import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import { connect } from "react-redux";

import ModalComp from "../ModalComp/ModalComp";
import { addNewMovie } from "../../JS/actions/actions";

class AdnewMovie extends Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  render() {
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <CardImg
            top
            src={require("../../assets/plus.svg")}
            alt="..."
            className="Card"
            onClick={() => this.toggle()}
          />
        </Card>
        <ModalComp
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          handleclick={this.props.addNewMovie}
        />
      </>
    );
  }
}
export default connect(null, { addNewMovie })(AdnewMovie);
