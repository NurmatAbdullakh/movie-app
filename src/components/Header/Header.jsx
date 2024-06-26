import Link from "next/link"
import styles from "./Header.module.scss"
import Image from "next/image"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} container`} >
                <Link href="/" className={styles.header__logo}>
                    <Image width={50} height={50} src="/images/Logo.png" alt="logo" />
                </Link>
            </div>
        </header>
    )
}

export default Header