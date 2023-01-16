import { createStore, action } from "easy-peasy";

const store = createStore({
  user: undefined,
  signin: action((state: any, payload) => {
    state.user = payload as {};
  }),
  logout: action((state: any, payload) => {
    state.user = undefined;
  }),
});

export default store;
