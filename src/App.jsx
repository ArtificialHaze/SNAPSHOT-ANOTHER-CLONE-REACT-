import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";
import View from "./View";
import Login from "./Login";

const App = () => {
  // const user = useSelector(selectUser);
  const user = "Vakho";
  // const dispatch = useDispatch();

  useEffect(() => {
    // USE FIRE BASE
    // auth.onAuthStateChanged((authUser) => {
    //   if (authUser) {
    //     dispatch(
    //       login({
    //         username: result.user.displayName,
    //         profilePic: result.user.photoUrl,
    //         id: result.user.uid,
    //       })
    //     );
    //   } else {
    //     dispatch(logout());
    //   }
    // });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user && <Login />}
        <>
          <img className="app__logo" src={""} alt="App_Logo" />
          <div className="app__body">
            <div className="app__bodyBackground">
              <Routes>
                <Route path="/" exact element={<WebcamCapture />} />
                <Route path="/chats" exact element={<Chats />} />
                <Route path="/chats/view" exact element={<View />} />
                <Route path="/preview" element={<Preview />} />
              </Routes>
            </div>
          </div>
        </>
      </Router>
    </div>
  );
};

export default App;
