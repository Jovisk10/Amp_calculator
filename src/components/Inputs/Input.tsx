import styles from './input.module.css';

import { useOption } from '../contexts/option'

export function Input() {
  const { mosState } = useOption()

  return (
    <div>
        <>
          {mosState ? (
            <>
                <h4 className={styles.hTitle}>Especificações</h4>
              <div className={styles.especificacaoTitle}>
                <input type='text' id='input' className={styles.inputEspecificacao} placeholder=' Id ' />
                <input type='text' id='input' className={styles.inputEspecificacao} placeholder=' R2' />
                <input type='text' id='input' className={styles.inputEspecificacao} placeholder=' Vgs' />
              </div>
              <div className={styles.parametrosTitle}>
                <h4 className={styles.hTitle}>Parametros</h4>
                <input type='text' id='input' className={styles.input} placeholder=' Valor de Vdd' />
                <input type='text' id='input' className={styles.input} placeholder=' Valor de Vrs' />
                <input type='text' id='input' className={styles.input} placeholder=' Valor de Vdq' />
              </div>
            </>
          ) : (
            <>
              <input type='text' id='input' className={styles.input} placeholder=' Valor de Vdd' />
              <input type='text' id='input' className={styles.input} placeholder=' Valor de Vrs ' />
            </>
          ) }
        </>
    </div>
  )
}