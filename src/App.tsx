
import { Header } from './components/Header';
import styles from './app.module.css';
import './global.css';
import { Post } from './Post';
import { Sidebar } from './components/sidebar';

function App() {

  return (
    <>
    <Header />

      <div className={styles.wrapper}>
           <Sidebar />
            <main>
              <Post
                 author="Elbio Moreira"
                 content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
               />
               <Post
                 author="Walter Lima"
                 content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
               />
            </main>
         
      </div>
     
    </>
  )
}

export default App
