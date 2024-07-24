import styles from './post.module.css'

export function Post(){
    return <article className={styles.post}>
              <header>
                 <div className={styles.author}>
                    <img className={styles.avatar} src="https://lh3.googleusercontent.com/a/ACg8ocLP4yedXsDybyoY99VsZing5FeVxtea1wIDVrdtgrB1UbO4PByk=s288-c-no"></img>                                 
                    <div className={styles.authorInfo}>
                        <strong>Elbio Moreira</strong>
                        <span>Web Developer</span>
                    </div>
                 </div>

                 <time dateTime="2024-07-24 16:44:00">Publicado há 1h</time>
              </header>

              <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '} <a href='#'>jane.design/doctorcare</a></p>

                <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
              </div>
           </article>
}