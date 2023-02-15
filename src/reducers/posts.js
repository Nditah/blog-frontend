import { FETCH_ALL, CREATE, UPDATE, LIKE, REMOVE } from "../actions/action-types";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts, action.payload];

    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case REMOVE:
      return posts.filter((post) => post._id !== action.payload._id);

    default:
      return posts;
  }
};

export default reducer;
