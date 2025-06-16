import styles from "@/app/css/components/_header.module.scss"
import Logo from "@/public/images/logo.png"
import Link from "next/link"
import Image from "next/image"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <Link href='/'>
                        <Image 
                            src={Logo}
                            alt="logo"
                            sizes="100%"
                            priority
                        />
                    </Link>
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link className={styles.link} href='/'>Élèves</Link>
                        </li>
                        <li className={styles.li}>
                            <Link className={styles.link} href='/portail/sous-matieres'>Sous-matières</Link>
                        </li>
                        <li className={styles.li}>
                            <Link className={styles.link} href='/portail/competences'>Compétences</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header