import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';

function AccountItem() {
    return ( 
        <div className={styles['wrapper']}>
            <img 
                className={styles['avatar']} 
                src='https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/vocgmvpi/2022_05_11/luong-thuy-linh2-2898.jpg' 
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