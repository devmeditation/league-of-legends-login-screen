import * as Dialog from "@radix-ui/react-dialog";

import styles from "./versionButton.module.css";

export function VersionButton() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild className={styles.versionButtonTrigger}>
          <span>V60.0.10</span>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.versionButtonOverlay} />
          <Dialog.Content className={styles.versionButtonContent}>
            <div>
              <h1>v60.0.10</h1>
              
              <p>Fudation: 4082528</p>
              <p>UX: 4082528</p>
              <p>SDK: 202.323.433443.111</p>
            </div>

            <span className={styles.versionButtonClose}>
              <Dialog.Close asChild>
                <button>OK</button>
              </Dialog.Close>
            </span>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
