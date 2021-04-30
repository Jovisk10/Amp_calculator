
import OptionProvider from "../components/contexts/option";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/Header/Header";
import { Information } from "../components/Informations/Informations";
import { Input } from "../components/Inputs/Input";
import { Resultados } from "../components/Results/Results";
import styles from '../styles/home.module.css';

export default function Home() {

  return (
    <div className={styles.homeContainer}>
      <OptionProvider>
        <Header />
      <section>
        <div>
            <Information>
              <Input />
            </Information>
        </div>

        <div>
          <Resultados />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>    
    </OptionProvider>
  </div>
  )
}
