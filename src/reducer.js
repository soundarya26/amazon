export const initialState = {
  basket: [
    {
      id: "90829332",
      title: "lg",
      price: 1094.96,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg",
    },
    {
      id: "90829359",
      title: "new",
      price: 109.96,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg",
    },
  ],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product(id:${action.id}) as its not there`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;
