const postReducer = (state=[], action) => {
    switch(action.type){
        case 'AÑADIR_POST':
            return state.concat([action.data]);
        default:
            return state;
    }
};

export default postReducer;