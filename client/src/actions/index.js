import axios from 'axios';

import {FETCH_USER} from './types';
export const  fetchUser =  () => {
    return async (dispatch) => {
         const user = await axios.get('/api/current-user');
         dispatch({type:FETCH_USER,payload:user})
    }
}

export const handleToken = token => {
    return async (dispatch) => {
        const res = await axios.post('/api/stripe', token);
        dispatch({type:FETCH_USER,payload:res});
    }
}

   