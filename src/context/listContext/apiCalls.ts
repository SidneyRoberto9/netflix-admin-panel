import { List } from "models/list.model";
import { api } from "../../services/api";
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  createListStart,
  createListSuccess,
  createListFailure,
} from "./ListActions";

export const getLists = async (dispatch: {
  (value: any): void;
  (arg0: { type: string; payload?: List }): void;
}) => {
  dispatch(getListsStart());
  try {
    const res = await api.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

export const deleteList = async (
  id: string,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: string }): void;
  }
) => {
  dispatch(deleteListStart());
  try {
    await api.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};

export const createList = async (
  list: List,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: List }): void;
  }
) => {
  dispatch(createListStart());
  try {
    const res = await api.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};
