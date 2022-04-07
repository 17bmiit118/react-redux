const secondReducer = (state=0,action)=>{
    if(action.type==='checkBalance'){
        return state + 5;
    }
    else if(action.type==='checkStatus'){
        return state - 5;
    }
    else
    {
        return state;
    }
}

export default secondReducer;