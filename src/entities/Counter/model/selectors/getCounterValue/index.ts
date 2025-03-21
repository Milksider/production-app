import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter';

export const getCounterValue = createSelector(getCounter, (state) => state.value);
