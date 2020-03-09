import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { connect } from "react-redux";
import "./MovieCard.css";

import Rating from "../Rating/Rating";
import { deleteMovie, editMovie } from "../../JS/actions/actions";
import ModalComp from "../ModalComp/ModalComp";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  render() {
    const { name, img, rating, id } = this.props.movie;
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <Link to={`/description/${id}`}>
            <CardImg top src={img} alt={""} className="Card" />
          </Link>
          <CardBody>
            <CardTitle>
              <h6 className="title"> {name}</h6>
            </CardTitle>
            <Rating count={rating} />
            <Button
              className="btn-round"
              color="outline-primary"
              onClick={this.toggle}
            >
              Edit
            </Button>
            <Button
              className="btn-round"
              color="outline-danger"
              onClick={() => this.props.deleteMovie(id)}
            >
              Delete
            </Button>
          </CardBody>
        </Card>

        {this.state.isOpen && (
          <ModalComp
            isOpen={this.state.isOpen}
            toggle={this.toggle}
            movie={this.props.movie}
            handleClick={this.props.editMovie}
          />
        )}
      </>
    );
  }
}

export default connect(null, { deleteMovie, editMovie })(MovieCard);
