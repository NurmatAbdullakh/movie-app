import Link from "next/link"
import styles from "./Footer.module.scss"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer__container} container`} >
                <Link href="/" className={styles.footer__logo}>
                    <Image width={50} height={50} src="/images/Logo.png" alt="logo" />
                </Link>
                <div className={`${styles.footer__copyright} sm`}>© 2024</div>
            </div>
        </footer>
    )
}

export default Footer