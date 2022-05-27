import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';

function AccountItem() {
    return ( 
        <div className={styles['wrapper']}>
            <img 
                className={styles['avatar']} 
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f4012677b93404e20a9f713dfda944cd~c5_300x300.webp?x-expires=1653789600&x-signature=cReHV6DH35VXRFJ3a1QFlmFbovY%3D' 
                alt='Hoa' 
                />
            <div className={styles['info']}>
                <h4 className={styles['name']}> 
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />
                </h4>
                <span className={styles['username']}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;