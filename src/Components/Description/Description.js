import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  trailer: state.movieReducer.movieList
});

const Description = props => {
  const [trailer] = props.trailer.filter(el => el.id == props.match.params.id);
  console.log(props.match.params);
  return (
    <div>
      <iframe
        title="trailer"
        width="982"
        height="546"
        src={trailer.trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default connect(mapStateToProps)(Description);
