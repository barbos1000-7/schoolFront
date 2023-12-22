import styles from './Footer.module.scss'
import SvgSelector from "@/helps/svgSelector";

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blocks}>
                <div className={styles.leftBlock}>
                    <div className={styles.linkItem}>
                        <div className={styles.icon}>
                            <SvgSelector name='geo'/>
                        </div>
                        <div className={styles.link}>
                            г. Оренбург, ул. Томилинская, 242
                        </div>
                    </div>
                    <a className={styles.linkItem} href='tel:+73532432007'>
                        <div className={styles.icon}>
                            <SvgSelector name='phone'/>
                        </div>
                        <div className={styles.link}>+7 (353) 243-20-07</div>
                    </a>
                    <div className={styles.linkItem}>
                        <div className={styles.icon}>
                            <SvgSelector name='email'/>
                        </div>
                        <div className={styles.link}>orenl6@yandex.ru</div>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.linkItem}>
                        <div className={styles.icon}>
                            <SvgSelector name='instagram'/>
                        </div>
                        <div className={styles.link}>baza.store.orb</div>
                    </div>
                    <a
                        className={styles.linkItem}
                        href='https://t.me/baza_store'
                        target='blank'
                    >
                        <div className={styles.icon}>
                            <SvgSelector name='telegram'/>
                        </div>
                        <div className={styles.link}>baza_store</div>
                    </a>
                    <div className={styles.linkItem}>
                        <div className={styles.icon}>
                            <SvgSelector name='vk'/>
                        </div>
                        <div className={styles.link}>baza_store</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
