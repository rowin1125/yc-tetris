import React, { useState, useEffect } from 'react';
import { StyledHighscore } from './styles/StyledHighscore';
import firebase from '../firebase';

const useScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('score')
      .orderBy('score', 'desc')
      .limit(10)
      .onSnapshot(snapshot => {
        const newScores = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setScores(newScores);
      });
    return () => unsubscribe();
  }, []);

  return scores;
};

const Highscore = () => {
  const scores = useScores();
  return (
    <StyledHighscore>
      <h2 style={{ color: '#f77f00' }}>Highscores</h2>
      <ol>
        {scores.map(score => (
          <li key={score.id}>
            <span style={{ color: '#f77f00' }}>{`${score.name}`}</span> - {`${score.score}`} - <span style={{ color: '#f77f00' }}>{`${score.city}`}</span>
          </li>
        ))}
      </ol>
    </StyledHighscore>
  );
};

export default Highscore;
