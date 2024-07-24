
import { Header } from './components/Header';
import styles from './app.module.css';
import './global.css';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

function App() {

  return (
    <>
    <Header />

      <div className={styles.wrapper}>
           <Sidebar />
            <main>
              <Post/>
              <Post/>
            </main>
         
      </div>
     
    </>
  )
}

export default App
