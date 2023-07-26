import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webCamRef = useRef(null);

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webCamRef.current.getScreenshot();
    setImage(imageSrc);
    navigate("/preview");
  }, [webCamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webCamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        fontSize="large"
        onClick={capture}
        className="webcamCapture__button"
      />
      {image && <img src={image} alt="Image" />}
    </div>
  );
};

export default WebcamCapture;
