import { ReactNode } from 'react';

import styles from './information.module.css';

interface informationProps {
  children: ReactNode;
}

export function Information({children}: informationProps) {
  return (
    <>
      <div className={styles.informationsContainer}>
        <p className={styles.informations}>
          <strong> Informe os dados </strong>
        </p>
        <div>
          {children}
        </div>
      </div>
      <button type='button' className={styles.buttonCalculator}> Calcular </button>
    </>
  );
}