import React from 'react';
import styles from './styles.scss';
import TitleSection from '../TitleSection';

class App extends React.Component {
  render() {
    return (
      <div className="main-root-content">
        <TitleSection />
        <div className={styles.nextSection}>Hey!</div>
      </div>
    );
  }
}

export default App;
