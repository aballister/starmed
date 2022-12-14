import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getBalanceAction } from '../../store/slices/balance';
import Preloader from '../Preloader/Preloader';
import { useReducer } from '../../hooks';
import BalancePreloader, { BalanceValue } from './App.style';
import { getCurrencySymbol } from '../../utils/Utils';

export default function Balance({ header, force }) {
    const dispatch = useDispatch();
    const balance = useReducer('balance', true, true);
    const [preloader, setPreloader] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (!balance.key || force) {
            dispatch(getBalanceAction({ force: true, callback: setPreloader }));
        }
    }, [force]);

    if (preloader) {
        return (
            <BalancePreloader inHeader={header}>
                <Preloader visible />
            </BalancePreloader>
        );
    }

    return (
        <BalanceValue>
            { `${header ? `${t('header.balance')} ` : ''}${balance.balance} ${t(getCurrencySymbol())}` }
        </BalanceValue>
    );
}

Balance.propTypes = {
    force: PropTypes.bool,
    header: PropTypes.bool,
};

Balance.defaultProps = {
    force: false,
    header: false,
};