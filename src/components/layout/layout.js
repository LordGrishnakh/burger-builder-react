import React from 'react';
import AuxComponent from '../../HOC/AuxComponent';
import styles from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  <AuxComponent>
    <Toolbar />
    <main className={styles.Content}>
      {props.children}
    </main>
  </AuxComponent> 
);

export default layout;