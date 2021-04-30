import { createContext, ReactNode, useContext, useState } from 'react'

interface OptionContextData {
  mosState: boolean;
  jFetState: boolean;
  MosActive: () => void;
  JFetActive: () => void;
}

interface OptionProviderProps {
  children: ReactNode;
}

const OptionContext = createContext({} as OptionContextData);

export default function OptionProvider({ children }: OptionProviderProps) {
  const [mosState, setMosState] = useState(false);
  const [jFetState, setJFetState] = useState(false);

  function MosActive() {
    setMosState(true)
    setJFetState(false)
    console.log(mosState)
    console.log(jFetState)
  }

  function JFetActive() {
    setMosState(false)
    setJFetState(true)
    console.log(mosState)
    console.log(jFetState)
  }

  return (
    <OptionContext.Provider value={{
      mosState,
      MosActive,
      jFetState,
      JFetActive,
    }}>
      {children}
    </OptionContext.Provider>
  )
}

export function useOption() {
  const context = useContext(OptionContext)
  const { mosState, MosActive, jFetState, JFetActive} = context
  return {mosState, MosActive, jFetState, JFetActive};
}