import styles from './footer.module.css'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span>João Vitor Campos</span>
      <span>
        Minhas redes: 
        <a href="https://www.linkedin.com/in/joao-vitor-campos-861953198/" rel='external' target='_blank'> Linkedin</a>
        <a href="https://github.com/Jovisk10" rel='external' target='_blank'> GitHub</a>
      </span>
    </div>
  )
}