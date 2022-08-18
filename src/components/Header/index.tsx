import Image from 'next/image'

import Watermark from '@/assets/watermark.png'

import styles from '@/styles/Home.module.css'

export const Header: React.FC = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>User</span>
          </h2>
          <p>welcome to the board</p>
        </div>
        <div className={styles.profile}>
          <Image
            src={Watermark}
            width={50}
            height={50}
            alt="profile photo"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}
