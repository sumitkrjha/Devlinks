import { configureStore } from '@reduxjs/toolkit';

// Action types
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const UPDATE_LINK_DATA = 'UPDATE_LINK_DATA';

// Action creators
export const updateUserData = (newData) => ({
  type: UPDATE_USER_DATA,
  payload: newData,
});

export const updateLinkData = (newData) => ({
  type: UPDATE_LINK_DATA,
  payload: newData,
});


// Initial state
const initialState = {
  userData: {
    profilePhoto: '',
    firstName: '',
    lastName: '',
    email: '',
  },
  linkData: [],
};


// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
      case UPDATE_LINK_DATA:
        const existingLinkIndex = state.linkData.findIndex(
          (item) => item.platform === action.payload.platform
        );
  
        if (existingLinkIndex !== -1) {
          // Update the existing link
          const updatedLinkData = [...state.linkData];
          updatedLinkData[existingLinkIndex] = action.payload;
  
          return {
            ...state,
            linkData: updatedLinkData,
          };
        } else {
          // Add a new link
          return {
            ...state,
            linkData: [...state.linkData, action.payload],
          };
        }
    default:
      return state;
  }
};

// Create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
