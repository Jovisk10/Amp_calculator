import { Information } from "../components/Informations/Informations";
import { Input } from "../components/Inputs/Input";
import { Resultados } from "../components/Results/Results";

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
    <section >
      <div>
        <Information>
          <Input  />
          <Input  />
          <Input  />
        </Information>
      </div>

      <div>
      <Resultados />
      </div>
    </section>

  </div>
  )
}

// Sistema de paginas com rotas e cada input sera um children do Informations

// Assim cria-se um menu no pages 