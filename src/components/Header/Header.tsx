import styles from './header.module.css';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { useOption } from '../contexts/option'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  const { mosState, MosActive, jFetState, JFetActive} = useOption()

  return (
    <header className={styles.headerContainer}>
        <div className={styles.headerCampImage}>
          <img src="/amp-op.svg" alt="ampOp"/>

          <p> Amplificadores <br /> Operacionais </p>
        </div>

        <div className={styles.headerCampButton}>
          <button type='button' className={styles.headerButton} onClick={MosActive}> 
           MosFet 
          </button>

          <button  type = 'button' className={styles.headerButton} onClick={JFetActive}>
            JFet
          </button>
          <button disabled type = 'button' className={styles.headerButton}>
            AmpOp
          </button>
        </div>

        <span>{currentDate}</span>
    </header>
  )
}