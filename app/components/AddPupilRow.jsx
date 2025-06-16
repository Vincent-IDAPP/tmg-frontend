import React from 'react'
import styles from "../css/components/table/_addPupilRow.module.scss"
const AddPupilRow = () => {
    return (
        <tr className={styles.addPupil}>
            <td className={styles.inputCell}>
                <input type="text" placeholder="Saisir le prénom..." id="firstName" name="firstName" />
            </td>
            <td className={styles.inputCell}>
                <input type="text" placeholder="Saisir le nom..." id="lastName" name="lastName" />
            </td>
            <td className={styles.inputCellSelect}>
                <select id="schoolGrade" name="schoolGrade" className={styles.select}>
                    <option  disabled selected>Saisir la classe...</option>
                    <option >CE2</option>
                    <option >CM1</option>
                    <option >CM2</option>
                </select>
            </td>
            <td>
                <span onclick={() => addPupil()} className={styles.addPupilButton}>
                    Cliquer pour ajouter
                </span>
            </td>
        </tr >
    )
}

export default AddPupilRow