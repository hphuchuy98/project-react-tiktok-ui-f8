import styles from './Header.module.scss';

import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles['inner']}>
                {/* Logo */}
                <div className={styles['logo']}>
                    <img src={images.logo} alt="tik tok" />
                </div>

                {/* Search */}
                <div className={styles['search']}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={styles['clear']}>
                        {/* icon clear search */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* icon loading */}
                    <FontAwesomeIcon icon={faSpinner} className={styles['loading']} />

                    <button className={styles['search-btn']}>
                        {/* icon search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={styles['actions']}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
