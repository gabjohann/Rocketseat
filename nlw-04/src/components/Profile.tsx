import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() 
{
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gabjohann.png" alt="Gab Johann"/>
      <div>
        <span>
          <a href="https://github.com/gabjohann" target="_blank">Gab Johann</a>
        </span>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  );
}
