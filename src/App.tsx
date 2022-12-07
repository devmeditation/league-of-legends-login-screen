import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple, FaArrowRight } from "react-icons/fa";
import { FiMinus, FiX } from "react-icons/fi";

import { GameInformation } from "./components/GameInformation/GameInformation";
import { VersionButton } from "./components/VersionButton/VersionButton";
import { ClientConfigurationOptions } from "./components/ClientConfigurationOptions/ClientConfigurationOptions";

import styles from "./styles/app.module.css";

function App() {
  return (
    <main className={styles.appContainer}>
      <div className="lg:m-5">
        <section className={styles.appContent}>
          <aside>
            <header className={styles.appContentHeader}>
              <img src="/logo-riot.svg" alt="" />
              <div className={styles.appContentHeaderTitle}>
                <span>Riot</span>
                <span>Games</span>
              </div>
            </header>

            <form className={styles.appContentForm}>
              <div className={styles.appContentFormGroup}>
                <h1 className={styles.appContentFormTitle}>Fazer login</h1>

                <input
                  className={styles.appContentFormInput}
                  type="text"
                  placeholder="NOME DO USUÁRIO"
                />

                <input
                  className={styles.appContentFormInput}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="SENHA"
                />

                <section
                  id="SocialMediaLoginButtons"
                  className={styles.appContentFormButtonGroup}
                >
                  <a
                    className={`${styles.appContentFormButton} bg-blue-600 `}
                    href="#"
                  >
                    <span className="rounded-full bg-white text-blue-600 p-1">
                      <FaFacebookF size={12} />
                    </span>
                  </a>
                  <a
                    className={`${styles.appContentFormButton} bg-stone-100/50`}
                    href="#"
                  >
                    <FcGoogle size={20} />
                  </a>
                  <a
                    className={`${styles.appContentFormButton} bg-black text-white`}
                    href="#"
                  >
                    <FaApple size={20} />
                  </a>
                </section>

                <section
                  id="keepLogin"
                  className={styles.appContentFormCheckGroup}
                >
                  <input type="checkbox" name="login" id="login" />
                  <label htmlFor="login">Manter login</label>
                </section>
              </div>

              <footer className={styles.appContentFormFooter}>
                <a className={styles.appContentFormFooterButtonLogin} href="#">
                  <FaArrowRight />
                </a>

                <a
                  className={styles.appContentFormFooterButtonRecoverPassword}
                  href="#"
                >
                  Não consegue iniciar sessão?
                </a>

                <div className={styles.appContentFormFooterGroup}>
                  <a
                    className={styles.appContentFormFooterButtonCreateAnAccount}
                    href="#"
                  >
                    criar conta
                  </a>

                  <div className={styles.appContentFormFooterButtonVersion}>
                    <VersionButton />
                  </div>
                </div>
              </footer>
            </form>
          </aside>

          <div className={styles.appContentBannerContainer}>
            <div>
              <span className={`${styles.appContentBannerButton} hover:bg-red-600/75`}>
                <FiX />
              </span>
              <span className={`${styles.appContentBannerButton} right-8 hover:bg-stone-600/75`}>
                <FiMinus />
              </span>
            </div>

            <div>
              <div className={styles.appContentBannerButtonInfo}>
                <GameInformation />
              </div>

              <div className={styles.appContentBannerButtonClientConfigurationOptions}>
                <ClientConfigurationOptions />
              </div>
            </div>

            <img
              src="/bg-garen.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;