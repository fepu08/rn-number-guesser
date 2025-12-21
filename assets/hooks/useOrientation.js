import { useWindowDimensions } from "react-native";

const useOrientation = () => {
  const { width, height } = useWindowDimensions();

  const getOrientation = () => {
    return width > height ? "landscape" : "portrait";
  };

  return {
    width,
    height,
    getOrientation,
  };
};

export default useOrientation;
