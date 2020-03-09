import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE
} from "../constants/actions-types";

const initialState = {
  movieList: [
    {
      id: 1,
      name: "In The Mood For Love",
      year: "2000",
      img:
        "https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/iixUc63lfGc"
    },

    {
      id: 2,
      name: "Black Hawk Down",
      year: "2001",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWFX47qeuxedZAPefLR9Tz35fAxQIGV6WfqTxpUkwoVMo-yZdSw&s",
      rating: 4,
      trailer: "https://www.youtube.com/embed/2GfBkC3qs78"
    },
    {
      id: 3,
      name: "Parasite",
      year: "2019",
      img:
        "https://img4.cdn.cinoche.com/images/591587145c8e772c64fa4847eba6cbf5.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY"
    },
    {
      id: 4,
      name: "The Shining",
      year: "1980",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51HliQRngAL._AC_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/5Cb3ik6zP2I"
    },
    {
      id: 5,
      name: "Camping",
      year: "2006",
      img:
        "https://www.campingdeladune.fr/wp-content/uploads/2019/07/camping-film-1.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/JAKzzI1XAsM"
    }
  ],
  searchInput: "",
  ratingSearch: 0
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload
      };
    case RATING_SEARCH:
      return {
        ...state,
        ratingSearch: payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movieList: state.movieList.filter(el => el.id !== payload)
      };
    case ADD_MOVIE:
      return {
        ...state,
        movieList: [...state.movieList, payload]
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movieList: state.movieList.map(el =>
          el.id === payload.id ? payload : el
        )
      };

    default:
      return state;
  }
};

export default movieReducer;
