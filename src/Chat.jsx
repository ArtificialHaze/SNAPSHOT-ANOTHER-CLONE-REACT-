import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ReactTimeago from "react-timeago";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

const Chat = ({ post }) => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(selectUser);

  const open = () => {
    // if (!read) {
    //   dispatch(selectImage(imageUrl));
    //   //   FIRE BASE DATA BASE
    //   db.collection("posts").doc(id).set(
    //     {
    //       read: true,
    //     },
    //     { merge: true }
    //   );
    navigate("/chats/view");
  };

  useEffect(() => {
    // ===== FIRE BASE DATA BASE =====
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
  return (
    <div onClick={open} className="chat">
      {/* USE FIRE BASE */}
      <Avatar
        className="chat__avatar"
        src="user.profilePic"
        // onClick={() => auth.signOut()}
      />
      <div className="chat__info">
        <h4>{"username"}</h4>
        {/* timestamp?.toDate()).toUTCString() */}
        <p>
          {/* {!read && "Tpa to view -"} */}
          <ReactTimeago date={new Date()} />{" "}
        </p>
      </div>
      {/* !read &&*/}
      <StopRoundedIcon className="chat__readIcon" />
    </div>
  );
};

export default Chat;
