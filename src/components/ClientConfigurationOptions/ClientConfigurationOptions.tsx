import { BsFillPersonFill } from "react-icons/bs";
import * as Popover from "@radix-ui/react-popover";

import { GameConfiguration } from "../GameConfiguration/GameConfiguration";

import styles from "./clientConfigurationOptions.module.css";

export function ClientConfigurationOptions() {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
          <span className={styles.clientConfigurationOptionsTrigger}>
            <BsFillPersonFill />
          </span>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.clientConfigurationOptionsContent}
            side="left"
            sideOffset={6}
          >
        
            <p className={styles.clientConfigurationOptionsContentButtonActive}>
              <GameConfiguration />
            </p>
            <p className={styles.clientConfigurationOptionsContentButtonDesable}>Encerrar sessão</p>
            <p className={styles.clientConfigurationOptionsContentButtonActive}>
              Sair
            </p>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
