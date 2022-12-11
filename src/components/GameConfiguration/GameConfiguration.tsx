import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { SiRiotgames } from "react-icons/si";
import { TabLangSelect } from "./TabLangSelect";
import { TabLegaueOfLegends } from "./TabLegaueOfLegends";

import styles from "./gameConfiguration.module.css";
import { VersionButton } from "../VersionButton/VersionButton";

export function GameConfiguration() {
  const [configurationOptionSelected, setConfigurationOptionSelected] =
    useState(true);

  function handleConfigurationOptionSelected(
    configurationOptionValue: boolean
  ) {
    setConfigurationOptionSelected(configurationOptionValue);

    // switch (configurationOptionSelected) {
    //   case "tabLangSelected":
    //     <GameConfigurationLangSelect />;
    //     break;
    //   case "tabLeagueOfLegends":
    //     <TabLegaueOfLegends />;
    //     break;
    //   case "tabServiceTerms":
    //     <TabServiceTerms />;
    //     break;
    //   case "tabThe3rd":
    //     <TabThe3rd />;
    //     break;
    //   case "tabPrivacyNotice":
    //     <TabPrivacyNotice />;
    //     break;
    //   default:
    //     console.log("Option not found!");
    // }
  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <span className="">Configurações</span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.gameConfigurationOverlay} />
          <Dialog.Content className={styles.gameConfigurationContent}>
            <div className={styles.gameConfigurationOpitionTab}>
              <h1>Configurações</h1>

              <span
                className={
                  configurationOptionSelected
                    ? styles.gameConfigurationOpitionTabActive
                    : styles.gameConfigurationOpitionTabInactive
                }
                onClick={() => handleConfigurationOptionSelected(true)}
              >
                <SiRiotgames className="mr-2" /> Client Riot
              </span>

              <span
                className={
                  !configurationOptionSelected
                    ? styles.gameConfigurationOpitionTabActive
                    : styles.gameConfigurationOpitionTabInactive
                }
                onClick={() => handleConfigurationOptionSelected(false)}
              >
                League of Legends
              </span>
            </div>

            {configurationOptionSelected ? (
              <TabLangSelect />
            ) : (
              <TabLegaueOfLegends />
            )}

            <footer className={styles.gameConfigurationFooter}>
              <div>
                <p>Termos de serviço</p>
                <p>Terceiros</p>
                <p>Aviso de privacidade</p>
              </div>

              <div>
                <VersionButton />
              </div>
            </footer>

            <Dialog.Close asChild>
              <span className={styles.gameConfigurationClose}>X</span>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
