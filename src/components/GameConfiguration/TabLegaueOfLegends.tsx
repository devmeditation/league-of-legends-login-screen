import styles from "./tabLegaueOfLegends.module.css";

export function TabLegaueOfLegends() {
  return (
    <section className={styles.tabLegaueOfLegends}>
      <span className={styles.tabLegaueOfLegendsTitle}>
        <h1> League of Legends</h1>
      </span>

      <form>
        <div className={styles.tabLegaueOfLegendsInputGroup}>
          <label htmlFor="interfaceLangSelected">Idioma do texto do jogo</label>
          <select name="interfaceLangSelected" id="interfaceLangSelected">
            <option selected value="pt">
              Português
            </option>
          </select>
        </div>

        <div className={styles.tabLegaueOfLegendsInputGroup}>
          <label htmlFor="interfaceServeSelected">Patchline atual</label>
          <select name="interfaceServeSelected" id="interfaceServeSelected">
            <option selected value="livebr">
              Live (BR)
            </option>
          </select>
        </div>

        <div className={styles.tabLegaueOfLegendsInputGroup}>
          <label htmlFor="gameInstallationPath">Caminho de instalação</label>
          <input
            type="text"
            name="gameInstallationPath"
            value={"C:\\Riot Game\\Legaue of Legends"}
            // readOnly
            disabled
          />
        </div>

        <span className={styles.tabLegaueOfLegendsButton}>Reparar</span>
      </form>
    </section>
  );
}
