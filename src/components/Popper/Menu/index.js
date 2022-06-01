import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';


function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            // visible          //hide list menu
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={styles['menu-list']} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={styles['menu-popper']}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            { children }
        </Tippy>
    );
}

export default Menu;
