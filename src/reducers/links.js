import {
 FETCH_LINKS_SUCCESS,
 FETCH_LINKS_START,
 FETCH_LINKS_FAILURE,
} from "../actionTypes";
const initialState = [];

export const links = (state = initialState, { type, payload }) => {
 switch (type) {
  case FETCH_LINKS_START: {
   return state;
  }

  case FETCH_LINKS_SUCCESS: {
   const newsState = [...state];
   newsState.push(...payload);
   return newsState;
  }

  case FETCH_LINKS_FAILURE: {
   return state;
  }
  default:
   return state;
 }
};
