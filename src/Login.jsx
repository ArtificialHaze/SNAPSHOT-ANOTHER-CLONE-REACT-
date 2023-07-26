import React from "react";
// import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const Login = () => {
  //   const dispatch = useDispatch();

  const signIn = () => {
    // USE FIRE BASE
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     dispatch(
    //       login({
    //         username: result.user.displayName,
    //         profilePic: result.user.photoUrl,
    //         id: result.user.uid,
    //       })
    //     );
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={""} alt="SnapshotImage" />
        <Button onClick={signIn} variant="outlined">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
