import { SiRiotgames } from "react-icons/si";

import styles from "./tabLangSelect.module.css";

export function TabLangSelect() {
  return (
    <>
      <div className={styles.tabLangSelectContainer}>
        <span className={styles.tabLangSelectTitle}>
          <SiRiotgames className={styles.tabLangSelectRiotIcon} />
          <h1>Cliente Riot</h1>
        </span>

        <select
          name="interfaceLangSelected"
          id="interfaceLangSelected"
        >
          <option selected value="pt">
            Português
          </option>
          <option value="us">English (US)</option>
          <option value="es">Español (ES)</option>
          <option value="it">Italiano</option>
          <option value="cn">中國人</option>
          <option value="co">코리아노</option>
        </select>
      </div>
    </>
  );
}
