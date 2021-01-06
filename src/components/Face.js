import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs"; //needed
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "../utils/utility";

export default function Face(){
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    //  Load posenet
    const runFacemesh = async () => {
      const model = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);

      //How many frames to go without running the bounding box detector. Only relevant if maxFaces > 1. Defaults to 5.
      //higher the number -> best performance
      model.pipeline.maxContinuousChecks = 60;
       // The maximum number of faces detected in the input. Should be set to the minimum number for performance. Defaults to 10.
      model.pipeline.maxFaces = 1;

      setInterval(() => {
        draw(model);
      }, 100);
    };

    const draw = async (model) =>{
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {

         // Get Video Properties
         const video = webcamRef.current.video;
         const videoWidth = webcamRef.current.video.videoWidth;
         const videoHeight = webcamRef.current.video.videoHeight;
   
         // Set video width
         webcamRef.current.video.width = videoWidth;
         webcamRef.current.video.height = videoHeight;
   
         // Set canvas width
         canvasRef.current.width = videoWidth;
         canvasRef.current.height = videoHeight;

        const predictions = await model.estimateFaces({
          input: webcamRef.current.video
        });

        const ctx = canvasRef.current.getContext("2d");
        drawMesh(predictions, ctx);
      }
    }
  
    useEffect(()=>{runFacemesh()}, []);
    
    return (
          <div>
            <Webcam
              ref={webcamRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
    
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
        </div>
      );
}