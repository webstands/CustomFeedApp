import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
           <img className={styles.avatar} src="https://lh3.googleusercontent.com/a/ACg8ocLP4yedXsDybyoY99VsZing5FeVxtea1wIDVrdtgrB1UbO4PByk=s288-c-no"></img>                                 

           <div className={styles.commentBox}>
              <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        Elbio Moreira
                        <time dateTime="2024-07-24 16:44:00">Cerca de 1h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
              </div>

              <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
              </footer>
           </div>
        </div>
    );
}