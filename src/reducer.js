export const initialState = {
  data: [],
  loading: false,
  searchText: "",
  total: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload.items,
        total: action.payload.total_count,
        loading: false,
      };
    case "SEARCH":
      return {
        ...state,
        searchText: action.payload,
        loading: action.payload ? true : false,
        total: action.payload ? state.total : 0,
        data: action.payload ? state.data : [],
      };
    default:
      return state;
  }
};
