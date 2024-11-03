export const actions = {
    FETCHING_DEST_DATA:"FETCHING_DEST_DATA",
    FETCHED_DEST_DATA: "FETCHED_DEST_DATA",
    FETCHED_DEST_DATA_ERR:"FETCHED_DEST_DATA_ERR",

    FETCHING_TOUR_DATA:"FETCHING_TOUR_DATA",
    FETCHED_TOUR_DATA: "FETCHED_TOUR_DATA",
    FETCHED_TOUR_DATA_ERR:"FETCHED_TOUR_DATA_ERR",
}


export const funckActions = {
    fetchingDestData:()=>{
        return {
            type:actions.FETCHING_DEST_DATA,
            
        }
    },
    fetchedDestData:(payload)=>{
        return {
            type:actions.FETCHED_DEST_DATA,
            payload
        }
    },
    fetchedDestDataErr: ()=>{
        return {
            type:actions.FETCHED_DEST_DATA_ERR,
        }
    },

    fetchingTourData:()=>{
        return {
            type:actions.FETCHING_TOUR_DATA,
            
        }
    },
    fetchedTourData:(payload)=>{
        return {
            type:actions.FETCHED_TOUR_DATA,
            payload
        }
    },
    fetchedTourDataErr: ()=>{
        return {
            type:actions.FETCHED_TOUR_DATA_ERR,
        }
    }

}