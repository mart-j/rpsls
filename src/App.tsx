import React, { useState } from 'react';

type Choise = '👊' | '🖐' | '✂️' | '🦎' | '🖖';
type Choises = ['👊', '🖐', '✂️', '🦎', '🖖'];

const App = () => {
  const [playerChoise, sertPlayerChoise] = useState<Choise>();
  const [computerChoise, setComputerCoise] = useState<Choise>();
  const [animationStatus, setAnimationStatus] = useState<'' | 'animate'>();

  const arr: Choises = ['👊', '🖐', '✂️', '🦎', '🖖'];

  const choises: { [key: string]: string } = {
    '👊🖐': 'Paper covers rock You Lose 😖',
    '👊✂️': 'Rock crushes scissors You Win 🥳',
    '👊🦎': 'Rock crushes lizard You Win 🥳',
    '👊🖖': 'Spock vaporizes rock You Lose 😖',
    '🖐👊': 'Paper covers rock You Win 🥳',
    '🖐✂️': 'Scissors cut paper You Lose 😖',
    '🖐🦎': 'Lizard eats paper You Lose 😖',
    '🖐🖖': 'Paper disproves spock You Win 🥳',
    '✂️👊': 'Rock crushes scissors You Lose 😖',
    '✂️🖐': 'Scissors cut paper You Win 🥳',
    '✂️🦎': 'Scissors decapitate lizard You Win 🥳',
    '✂️🖖': 'Spock smashes scissors You Lose 😖',
    '🦎👊': 'Rock crushes lizard You Lose 😖',
    '🦎🖐': 'Lizard eats paper You Win 🥳',
    '🦎✂️': 'Scissors decapitate lizard You Lose 😖',
    '🦎🖖': 'Lizard poisons spock You Win 🥳',
    '🖖👊': 'Spock vaporizes rock You Win 🥳',
    '🖖🖐r': 'Paper disproves spock You Lose 😖',
    '🖖✂️': 'Spock smashes scissors You Win 🥳',
    '🖖🦎': 'Lizard poisons spock You Lose 😖',
  };

  const resultMessege = () => {
    return choises[`${playerChoise}${computerChoise}`] || "It's a tie 🤜 🤛";
  };

  const computerChoiseHandler = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(5));
    setComputerCoise(arr[randomIndex]);
  };

  const startGameHandler = (index: number) => {
    if (!animationStatus) {
      computerChoiseHandler();
      sertPlayerChoise(arr[index]);
      setAnimationStatus('animate');
    }
  };

  const result = () => {
    const textArr = resultMessege().split(' ');
    const lastChar = textArr[textArr.length - 1];
    if (lastChar === '😖') {
      return 'lose';
    }
    if (lastChar === '🤛') {
      return 'tie';
    }
    return 'won';
  };

  return (
    <div
      onAnimationEnd={() => setAnimationStatus('')}
      className={`container ${result()}`}
    >
      <div className={`results ${animationStatus}`}>
        {playerChoise ? resultMessege() : 'Choose Your Weapon ⚔️'}
      </div>
      <div className={`playersChoiseWrapper ${animationStatus}`}>
        <div className="weaponChoise">
          <span className="weapon">{playerChoise || '👨‍🦱'}</span>
          <span>Player</span>
        </div>
        <div className="weaponChoise">
          <span className="weapon">{computerChoise || '🖥️'}</span>
          <span>Computer</span>
        </div>
      </div>
      <div className="choiseWrapper">
        {arr.map((choise, i) => {
          return (
            <button
              className="button"
              onClick={() => startGameHandler(i)}
              key={`${i}`}
            >
              {choise}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default App;
