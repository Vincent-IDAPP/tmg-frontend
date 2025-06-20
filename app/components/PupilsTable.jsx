import styles from "../css/components/table/_pupilsTable.module.scss";
import PupilRow from "./PupilRow";
import { Fragment } from "react";
import AddPupilRow from "./AddPupilRow";
const PupilsTable = ({
  pupilsList,
  setPupilId,
  setModalContent,
  setOpenModal,
  setReload
}) => {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Prénom</th>
            <th className={styles.th}>Nom</th>
            <th className={styles.th}>Classe</th>
            <th className={styles.th}>Options</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {pupilsList &&
            pupilsList?.map((pupil, index) => {
              return (
                <Fragment key={index}>
                  <PupilRow
                    pupil={pupil}
                    setPupilId={setPupilId}
                    setModalContent={setModalContent}
                    setOpenModal={setOpenModal}
                  />
                </Fragment>
              );
            })}
          <AddPupilRow setReload={setReload} />
        </tbody>
      </table>
    </div>
  );
};

export default PupilsTable;
