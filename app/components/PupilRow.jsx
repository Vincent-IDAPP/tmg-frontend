import styles from "@/app/css/components/table/_pupilRow.module.scss"
import Link from "next/link";
const PupilRow = ({ pupil }) => {
    
    return (
        <tr className={styles.tr}>
            <td className={styles.td}>{pupil?.first_name}</td>
            <td className={styles.td}>{pupil?.last_name}</td>
            <td className={styles.td}>{pupil?.school_grade_name}</td>
            <td className={styles.td}>
                <Link href={`/pupils/${pupil?.id}`} className={styles.consultPupil}>
                    consulter
                </Link>
                <Link href={`/pupils/${pupil?.id}/diagramme`} className={styles.pupilCharts}>
                    diagramme
                </Link>
            </td>
            <td className={styles.td}>
            </td>
        </tr>
    )
}

export default PupilRow