import * as Tooltip from "@radix-ui/react-tooltip";
import { FaClock } from "react-icons/fa";

import styles from "./gameInformation.module.css";

export function GameInformation() {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger className={styles.gameInformationTrigger}>
            <span>!</span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={styles.gameInformationContent}
              side="right"
            >
              <strong className={styles.gameInformationContentTitle}>Transferência de conta indisponíves</strong>
              <span className={styles.gameInformationContentDate}>
                <FaClock />
                03/12/2022 8:14
              </span>

              <p className={styles.gameInformationContentText}>
                As transferências de conta estão indisponíveis enquanto
                trabalhamos na solução de um problema.
              </p>

              <Tooltip.Arrow className={styles.gameInformationContentArrow} />

              <div className={styles.gameInformationContentLink}>
                <a href="#">mais detalhes</a>
              </div>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
