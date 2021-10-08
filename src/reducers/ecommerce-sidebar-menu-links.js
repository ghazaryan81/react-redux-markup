import {
 // ECOMMERCE_SIDEBAR_MENU_LINKS_START,
 ECOMMERCE_SIDEBAR_MENU_LINKS_SUCCESS,
 // ECOMMERCE_SIDEBAR_MENU_LINKS_FAILURE,
} from "../actionTypes";

const initialState = [];

export const ecommerceSidebarMenuLinks = (
 state = initialState,
 { type, payload }
) => {
 if (type === ECOMMERCE_SIDEBAR_MENU_LINKS_SUCCESS) {
  return payload;
 }
 return state;
};
