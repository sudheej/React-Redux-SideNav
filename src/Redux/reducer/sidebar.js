export const sidebarReducer = (state = {expanded : true },action) => {
 switch (action.type) {
     case 'EXPAND':
        return { ...state,expanded: true}
     case 'COLLAPSE':
        return { ...state,expanded: false}
    default:
        return state;   
 }
}

//return Object.assign({}, state, {expanded: false})
