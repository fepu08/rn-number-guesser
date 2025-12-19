import StartGameScreen from "./StartGameScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import { useGameContext } from "../components/context/gameContext";

const HomeScreen = () => {
  const {
    state: { userNumber, isGameOver },
    setUserNumber,
  } = useGameContext();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (!isGameOver && userNumber) {
    screen = <GameScreen />;
  }

  if (isGameOver) {
    screen = <GameOverScreen />;
  }

  return screen;
};

export default HomeScreen;
