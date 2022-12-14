import {
  faBookOpen,
  faCog,
  faHeart,
  faRocket,
  faSignOutAlt,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@/styles/Home.module.css'

export const NavBar: React.FC = () => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Streamline</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: '18px', cursor: 'pointer' }}
            />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faRocket}
              style={{ width: '18px', cursor: 'pointer' }}
            />
            <a href="#">Explore</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: '18px', cursor: 'pointer' }}
            />
            <a href="#">Library</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ width: '18px', cursor: 'pointer' }}
            />
            <a href="#">Favourite</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: '18px', cursor: 'pointer' }}
            />
            <a href="#">Settings</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ width: '18px', cursor: 'pointer' }}
            />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
