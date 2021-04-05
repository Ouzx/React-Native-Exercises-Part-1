import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      // console.log(err.response.data); // err.message
      dispatch({
        type: "add_error",
        payload: "Something went wron with signup!",
      });
    }
  };
};
const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false, errMessage: "" }
);
