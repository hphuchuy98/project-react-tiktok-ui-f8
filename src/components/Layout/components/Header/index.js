import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
// import 'tippy.js/dist/tippy.css';


function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() =>{
            setSearchResult([])
        }, 0);
    },[])

    return (
        <header className={styles['wrapper']}>
            <div className={styles['inner']}>
                {/* Logo */}
                <div className={styles['logo']}>
                    <img src={images.logo} alt="tik tok" />
                </div>

                {/* Search */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={styles['search-result']} tabIndex="-1" {...attrs}>
                            <PoperWrapper>
                                <h4 className={styles['search-title']}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={styles['actions']}>
                    <Button text > Upload </Button>
                    <Button primary> Log in </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
