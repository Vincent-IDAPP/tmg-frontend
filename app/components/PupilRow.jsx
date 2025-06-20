import styles from "@/app/css/components/table/_pupilRow.module.scss";
import Link from "next/link";
import Glass from "@/public/icons/Glass";
import Chart from "@/public/icons/Chart";
import Trash from "@/public/icons/Trash";
const PupilRow = ({ pupil, setPupilId, setModalContent, setOpenModal }) => {
    const handleDelete = (id) => {
        setOpenModal(true);
        setModalContent("delete");
        setPupilId(id)
    }

  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{pupil?.first_name}</td>
      <td className={styles.td}>{pupil?.last_name}</td>
      <td className={styles.td}>{pupil?.school_grade_name}</td>
      <td className={`${styles.td} ${styles.managePupils}`}>
        <Link href={`/pupils/${pupil?.id}`} className={styles.option}>
          <Glass />
        </Link>
        <Link href={`/pupils/${pupil?.id}/diagramme`} className={styles.option}>
          <Chart />
        </Link>
        <div className={styles.option} onClick={() => handleDelete(pupil.id)}>
          <Trash fill="red"/>
        </div>
      </td>
    </tr>
  );
};

export default PupilRow;
