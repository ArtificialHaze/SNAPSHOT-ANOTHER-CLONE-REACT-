import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const View = () => {
  //   const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!selectedImage) {
  //       exit();
  //     }
  //   }, []);

  const exit = () => {
    navigate("/chats");
  };

  return (
    <div className="chatView">
      <img onClick={exit} src={"selectedImage"} alt="Image" />
      <div className="chatView__timer">
        <CountdownCircleTimer
          duration={10}
          isPlaying
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#f7b801", 0.33],
            ["#a30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default View;
