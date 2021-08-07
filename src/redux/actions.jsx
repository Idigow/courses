import { COURSES_LOAD_START, COURSES_LOAD_SUCCESS } from "./type";
import { CATEGORIES_LOAD_START, CATEGORIES_LOAD_SUCCESS } from "./type";

export const loadCourses = () => {
  return (dispatch) => {
    dispatch({
      type: COURSES_LOAD_START,
    });
    fetch(`http://localhost:3001/courses`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: COURSES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
export const getCategories = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORIES_LOAD_START,
    });
    fetch(`http://localhost:3001/categories`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: CATEGORIES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
export const addComment = (email, text, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/callback`, {
      method: "POST",
      body: JSON.stringify({
        coursId: id,
        email: email,
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "add/new/comment",
          payload: json,
        })
      );
  };
};
export const getComments = (id) => {
  return (dispatch) => {
    dispatch({
      type: "comment/load/start",
    });
    fetch(`http://localhost:3001/callback?coursId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "comment/load/success",
          payload: json,
        });
      });
  };
};

