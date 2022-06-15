import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';


import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/image';
// import 'tippy.js/dist/tippy.css';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language': 
                // Handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,   //đường vạch trên log out
        },
    ]

    return (
        <header className={styles['wrapper']}>
            <div className={styles['inner']}>
                {/* Logo */}
                <div className={styles['logo']}>
                    <img src={images.logo} alt="tik tok" />
                </div>

                {/* Search */}
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={styles['search-result']} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={styles['search-title']}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
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
                </HeadlessTippy>

                <div className={styles['actions']}>
                    {currentUser ? (
                        <>
                            <Tippy 
                                delay={[0, 200]}
                                content="Upload video" 
                                placement='bottom'
                            >
                                <button className={styles['action-btn']}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>

                            {/* use logo SVG of tik tok */}
                            <Tippy 
                                delay={[0, 200]}
                                content="Message" 
                                placement='bottom'
                            >
                                <button className={styles['action-btn']}>
                                    <UploadIcon className={styles['action-icon']} />
                                </button>
                            </Tippy>

                            <Tippy 
                                delay={[0, 200]}
                                content="Inbox" 
                                placement='bottom'
                            >
                                <button className={styles['action-btn']}>
                                    <InboxIcon className={styles['action-icon']} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Upload </Button>
                            <Button primary> Log in </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image 
                                className={styles['user-avatar']} 
                                alt="NGUYEN VAN A" 
                                src='https://i.pinimg.com/236x/1e/0d/60/1e0d60ac07c9e0d8c0d150fb74113eb2_22.jpg' 
                                // fallback="https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg"
                            />
                        ) : (
                            <button className={styles['more-btn']}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;
