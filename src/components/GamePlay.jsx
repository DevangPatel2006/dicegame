import styled from "styled-components";
import Rolldice from "./Rolldice";
import { Button } from "../styled/Button";
import Totalscore from "./Totalscore";
import Numberselect from "./Numberselect";
import Rules from "./Rules";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setselectedNumber] = useState();
  const [score, setscore] = useState(0);
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState();
  const [showrules, setshowrules] = useState(false);

  const generate = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const changedice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
      return;
    }

    const randomnumber = generate();
    setcurrentDice(randomnumber);

    if (selectedNumber === randomnumber) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
    seterror(""); // Clear error
  };

  const resetscore = () => {
    setscore(0);
    setselectedNumber(undefined);
    seterror("");
    setcurrentDice(1);
  };

  return (
    <Maincontainer>
      <div className="topsection">
        <Totalscore score={score} />
        <Numberselect
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>

      <Rolldice currentDice={currentDice} changedice={changedice} />

      <div className="btn1">
        <Button className="diffbtn" onClick={resetscore}>Reset</Button>
        <Button
          onClick={() => {
            setshowrules((prev) => !prev);
          }}
        >
          {showrules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showrules && <Rules />}
    </Maincontainer>
  );
};

export default GamePlay;

const Maincontainer = styled.div`
  padding: 50px;

  .topsection {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }

  .btn1 {
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  .diffbtn {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      border: 1px solid transparent;
      color: white;
    }
  }
`;
