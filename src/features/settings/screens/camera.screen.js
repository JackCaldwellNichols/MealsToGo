import React, { useState, useRef, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`;

export const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef)
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
      } catch (error) {
        console.log(error);
      }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        type={Camera.Constants.Type.front}
        ref={(camera) => (cameraRef.current = camera)}
        ratio={"16:9"}
      />
    </TouchableOpacity>
  );
};
