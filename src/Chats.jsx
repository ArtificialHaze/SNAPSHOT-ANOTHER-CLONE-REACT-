import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Chat from "./Chat";
import RadioButtonUnchekedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Chats = () => {
  const [posts, setPosts] = useState([0, 1, 2, 3, 4]);
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // USE FIRE BASE
    // db.collection("posts")
    //   .orderBy("timestamp", "desc")
    //   .onSnapshot((snapshot) =>
    //     setPosts(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
    //       }))
    //     )
    //   );
  }, []);

  const takeSnap = () => {
    // dispatch(resetCameraImage())
    navigate("/");
  };

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon className="chats__searchIcon" />
          <input type="text" placeholder="Friends.." />
        </div>
        <ChatBubbleIcon className="chats__chatIcon" />
      </div>
      <div className="chats__posts">
        {posts.map((post, index) => (
          <Chat key={index} {...post} />
        ))}
      </div>
      <RadioButtonUnchekedIcon
        className="chats__takePicIcon"
        fontSize="large"
        onClick={takeSnap}
      />
    </div>
  );
};

export default Chats;
