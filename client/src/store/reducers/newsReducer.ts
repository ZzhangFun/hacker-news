interface newsState {
  news: any[];
  loading: boolean;
  error: null | string;
}

const initialState: newsState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      state;
  }
};
