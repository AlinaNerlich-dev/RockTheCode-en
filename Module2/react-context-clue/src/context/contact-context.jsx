import { createContext } from "react";

const ContactContext = createContext({
  favoritedFriends: [],
  addFavoriteFriend: () => {},
  removeFavoriteFriend: () => {},
});

export default ContactContext;
