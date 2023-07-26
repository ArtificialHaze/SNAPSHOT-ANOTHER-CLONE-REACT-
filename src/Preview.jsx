import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
// import { useDispatch, useSelector } from "react-redux";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";

const Preview = () => {
  const navigate = useNavigate();
  // const user = useSelector(selectUser);

  //   USE USESELECTOR HERE ONCE YOU SETUP REDUX
  const cameraImage = "";

  //   const dispatch = useDispatch();

  const closePreview = () => {
    // dispatch(resetCameraImage());
  };

  const sendPost = () => {
    const id = uuid();
    // HOOK UP FIRE BASE
    // const uploadTask = storege
    //   .ref(`posts/${id}`)
    //   .putString(cameraImage, "data_url");
    // uploadTask.on(
    //   "state_changed",
    //   null,
    //   (error) => console.log(error),
    //   () => {
    //     storage
    //       .ref("posts")
    //       .child(id)
    //       .getDownloadURL()
    //       .then((url) => {
    //         db.collection("posts").add({
    //           imageUrl: url,
    //           username: "DreamDevs.",
    //           read: false,
    //           profilePic:user.profilePic,
    //           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         });
    // navigate("/chats");
    //       });
    //   }
    // );
  };

  // useEffect(() => {
  //     if (!cameraImage) {
  //       navigate("/");
  //     }
  //   }, [cameraImage, navigate]);

  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      {/* <img src={cameraImage} alt="Image" /> */}
      <div onClick={sendPost} className="preview__footer">
        <h2>Send now</h2>
        <SendIcon fontSize="small" className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
