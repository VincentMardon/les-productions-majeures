import { useTheme } from './hooks/useTheme'
import * as styles from './App.css.ts'

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={styles.container}>
      <div>Thème actuel : {theme}</div>
      <button className={styles.button} onClick={toggleTheme}>
        Changer de theme
      </button>
      <div>Hello World!</div>
    </div>
  )
}

export default App
