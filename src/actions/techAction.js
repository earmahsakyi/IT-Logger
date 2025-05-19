import { GET_TECHS, ADD_TECH ,SET_LOADING,TECHS_ERROR, DELTE_TECH} from "./types";


// Get techs from server
export const getTechs = () => async dispatch =>{
    try{
        dispatch(setLoading());
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    }
       catch(err){
        dispatch({
            type:  TECHS_ERROR,
            payload: err.response.statusText
        })

       } 
    };

// add Tech
export const addTech = (tech) => async dispatch =>{
    try{
        

        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Failed to add technician');
        }
        
        dispatch({
            type: ADD_TECH,
            payload: data
        })
    }
       catch(err){
        dispatch({
            type:  TECHS_ERROR,
            payload: err.message || 'Failed to add technician',
        })

       } 
    };
    export const deleteTech = (id) => async dispatch =>{
        try{
            
             await fetch(`/techs/${id}`,{
                method: 'DELETE'
        });
     
    
            dispatch({
                type: DELTE_TECH,
                payload: id
            })
        }
           catch(err){
            dispatch({
                type:  TECHS_ERROR,
                payload: err.response.statusText
            })
    
           } 
        };


// set Loading to true
export const setLoading = () => {
    return {
       type: SET_LOADING
       }
   };