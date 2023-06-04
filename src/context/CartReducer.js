export const cartReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR":
      return { count: state.count + 1 };
    case "RESTARCARRITO":
      return { count: state.count - action.payload.count };
    case "RESTAR":
      return { count: state.count - 1 };

    case "RESETEAR":
      return { count: 0 };
    default:
      return state;
  }
};
