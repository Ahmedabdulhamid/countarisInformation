import {configureStore}from '@reduxjs/toolkit'
import { data } from './getAllCountaries'
import { getAllRegion } from './getCounteriesByRegion'
export const store=configureStore({
    reducer:{
        data,
        getAllRegion

    }
})