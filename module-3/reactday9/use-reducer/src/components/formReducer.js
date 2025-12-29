export const initialState = {
  step: 1,
  submitted: false,
  data: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
};

export function formReducer(state, action) {
  if (action.type === "CHANGE_INPUT") {
    return {
      ...state,
      data: {
        ...state.data,
        [action.field]: action.value,
      },
    };
  }

  if (action.type === "NEXT") {
    return { ...state, step: state.step + 1 };
  }

  if (action.type === "BACK") {
    return { ...state, step: state.step - 1 };
  }

  if (action.type === "SUBMIT") {
    return { ...state, submitted: true };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return state;
}
