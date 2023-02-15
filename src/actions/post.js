import * as postApi from '../api'
import { FETCH_ALL, FETCH_ONE, CREATE, UPDATE, LIKE, REMOVE } from "../actions/action-types";

// Action Creators 
export const fetchAllPosts = () => async (dispatch) => {
    try {
        const { data } = await postApi.fetchAll()
         dispatch({ type: FETCH_ALL, payload: data })  
    } catch (error) {
        console.error(error)        
    } 
} 

export const fetchPost = () => async (dispatch) => {
    try {
        const { data } = await postApi.fetchOne()
         dispatch({ type: FETCH_ONE, payload: data })  
    } catch (error) {
        console.error(error)        
    } 
} 

export const createPost = (postData) => async (dispatch) => {
    try {
        const { data } = await postApi.create(postData)
         dispatch({ type: CREATE, payload: data })  
    } catch (error) {
        console.error(error)        
    } 
} 

export const updatePost = (id, postData) => async (dispatch) => {
    try {
        const { data } = await postApi.update(id, postData)
         dispatch({ type: UPDATE, payload: data })  
    } catch (error) {
        console.error(error)        
    } 
} 


export const removePost = (id) => async (dispatch) => {
    try {
         await postApi.remove(id)
         dispatch({ type: REMOVE, payload: { _id: id} })  
    } catch (error) {
        console.error(error)        
    } 
}  


export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await postApi.like(id)
         dispatch({ type: LIKE, payload: data })  
    } catch (error) {
        console.error(error)        
    } 
}  

