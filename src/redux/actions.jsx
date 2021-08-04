import { COURSES_LOAD_START, COURSES_LOAD_SUCCESS } from "./type";
import { CATEGORIES_LOAD_START, CATEGORIES_LOAD_SUCCESS } from "./type";

export const loadCourses = () => {
  return (dispatch) => {
    dispatch({
      type: COURSES_LOAD_START,
    });
    fetch(`http://localhost:3000/courses`)
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
    fetch(`http://localhost:3000/categories`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: CATEGORIES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};