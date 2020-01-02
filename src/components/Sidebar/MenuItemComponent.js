import React from 'react';
import { bool, func, string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#a3d4e6',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        backgroundColor: 'rgb(153, 204, 255, 0.4)'
    },
    activeTitle: {
        color: '#FFFFFF'
    },
    container: {
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'rgb(153, 204, 255, 0.7)',
        },
        paddingLeft: 32,
        paddingRight: 32
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#686b7d',
        marginLeft: 24
    }
});

function MenuItemComponent(props) {
    const { active, icon, title, ...otherProps } = props;
    const Icon = icon;
    return (
        <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {active && <div className={css(styles.activeBar)}></div>}
            <Icon fill={active && "#FFFFFF"} opacity={!active && "1"} />
            <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
        </Row>
    );
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};

export default MenuItemComponent