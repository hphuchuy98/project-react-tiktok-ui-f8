import Button from "~/components/Button";

import styles from './Menu.module.scss';

function MenuItem({ data }) {
    return ( 
        <Button className={styles['menu-item']} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;