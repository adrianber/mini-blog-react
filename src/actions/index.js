import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';

export function fetchPosts(){

    const req = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: req
    };
}

export function createPost(props){
    const req = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: req
    }
}

export function fetchPost(id){
    const req = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: FETCH_POST,
        payload: req
    }
}

export function deletePost(id){
    const req = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: DELETE_POST,
        payload: req
    }
}