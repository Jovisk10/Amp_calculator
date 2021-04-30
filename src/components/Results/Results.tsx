import styles from './results.module.css';

export function Resultados() {
  return (
    <div className={styles.resultsContainer}>

      <p className={styles.results}>Resultados</p>
      
      <div className={styles.campResults}>
        
          <h4 className={styles.resultsTitle}> <img src="/resistor-draw.png" alt="resistor"/> Resistores </h4>
          <div className={styles.campParams}></div>
          
          <h4 className={styles.resultsTitle} > <img src="/whats-draw.png" alt="wats"/> Potências </h4>
          <div  className={styles.campParams}></div>
      </div>
    </div>
  )
}