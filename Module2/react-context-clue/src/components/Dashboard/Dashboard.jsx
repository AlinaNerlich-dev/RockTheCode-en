import { useState } from "react";
import ContactContext from "../../context/contact-context";
import FavoriteContacts from "../FavoriteContacts/FavoriteContacts";
import ContactsList from "../ContactsList/ContactsList";

const Dashboard = () => {
  const [favoriteFriends, setFavoriteFriends] = useState([]);

  const addFavoriteFriend = (friend) => {
    setFavoriteFriends((prevFavoritedFriends) => [
      ...prevFavoritedFriends,
      friend,
    ]);
  };

  const removeFavoriteFriend = (friendId) => {
    setFavoriteFriends((prevFavoritedFriends) =>
      prevFavoritedFriends.filter((friend) => friend.id !== friendId)
    );
  };

  const friendContext = {
    favoritedFriends: favoriteFriends,
    addFavoriteFriend: addFavoriteFriend,
    removeFavoriteFriend: removeFavoriteFriend,
  };

  return (
    <ContactContext.Provider value={friendContext}>
      <FavoriteContacts />
      <ContactsList />
    </ContactContext.Provider>
  );
};

export default Dashboard;
