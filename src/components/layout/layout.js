import React from 'react';
import AuxComponent from '../../HOC/AuxComponent';
import styles from './layout.module.css';

const layout = ( props ) => (
  <AuxComponent>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>
      {props.children}
    </main>
  </AuxComponent> 
);

export default layout;