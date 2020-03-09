import React, { Component } from "react";
import { Button, FormGroup, Input, Modal } from "reactstrap";
import { connect } from "react-redux";
import { addNewMovie, editMovie } from "../../JS/actions/actions";

class ModalComp extends Component {
  state = {
    name: "",
    img: "",
    rating: 0
  };
  changeHandler = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  clickHandler = () => {
    this.props.movie
      ? this.props.editMovie({
          ...this.state,
          id: this.props.movie.id
        })
      : this.props.addNewMovie(this.state);
    this.props.toggle();
  };
  componentDidMount() {
    this.props.movie &&
      this.setState({
        name: this.props.movie.name,
        img: this.props.movie.img,
        rating: this.props.movie.rating
      });
  }
  render() {
    const { isOpen, toggle } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        toggle={() => toggle()}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggle()}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h6 className="text-muted">Add new movie</h6>
        </div>
        <div className="modal-body">
          <FormGroup>
            <label>Title</label>
            <Input
              defaultValue={this.state.name}
              name="name"
              placeholder="Enter a title for the movie..."
              type="text"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Image</label>
            <Input
              defaultValue={this.state.img}
              placeholder="Enter an image link..."
              type="text"
              name="img"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <label>Rating</label>
            <Input
              defaultValue={this.state.rating}
              placeholder="Enter a poster rating..."
              type="text"
              name="rating"
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button
            block
            className="btn-round"
            color="default"
            onClick={() => this.clickHandler()}
          >
            {this.props.movie ? "Save" : "ADD"}
          </Button>
          <Button block className="btn-round" color="danger">
            cancel
          </Button>
        </div>
      </Modal>
    );
  }
}
export default connect(null, { addNewMovie, editMovie })(ModalComp);
