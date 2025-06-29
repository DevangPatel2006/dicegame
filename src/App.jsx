import { useState } from 'react';
import Startgame from './components/Startgame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGame, setisGame] = useState(false);

  const togglegame = () => {
    setisGame((prev) => !prev);
  };

  return (
    <>
      {isGame ? <GamePlay /> : <Startgame toggle={togglegame} />}
    </>
  );
}

export default App;
