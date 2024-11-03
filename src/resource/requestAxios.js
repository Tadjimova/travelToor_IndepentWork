
import axios from "axios";
import { funckActions } from "../context/actions";


export  async function getDestinationData(url, dispatch) {
    try{
        dispatch(funckActions.fetchingDestData())
        const res = await axios.get(url)
        dispatch(funckActions.fetchedDestData(res.data))
    }catch(err){
        dispatch(funckActions.fetchedDestDataErr())
    }
    
}

export  async function getTourData(url, dispatch) {
    try{
        dispatch(funckActions.fetchingTourData())
        const res = await axios.get(url)
        dispatch(funckActions.fetchedTourData(res.data))
    }catch(err){
        dispatch(funckActions.fetchedTourDataErr())
    }
    
}