// ACTIONS
export const GET = 'GET'
export const GETBYID = 'GETBYID'
export const ADD = 'ADD'
export const EDIT = 'EDIT'
export const DELETE = 'DELETE'
//stretch goal const USER_LOADING = 'USER_LOADING'

const initialState = [{
    id: 1,
    potluckName: 'Admin special',
    date: 'today',
    foodList: ['rice', 'beans', 'meat'],
    location: 'Lambda',
    invited: [{
        id:1, //needed so when the list of invited is render on different text input react can use it as a key. Resolve weir rendering bugs.
        name:'Noan',
        confirmedAttendence: false,
    }, {
        id:2,
        name:'Simone',
        confirmedAttendence: false,
    }],
    myFoodList: [],
    myInvitedList: [], 
}]


export default function reducer(state = initialState, action){
    switch(action.type){
        case GET:
            return state
        case GETBYID:
            return state
        case ADD: 
        //from CreatePotluckForm: dispatch({ type: ADD, payload: resp.data })
        console.log(action.payload)
            return [
                ...state,
                action.payload
            ]
        case EDIT:
            return state
        case DELETE:
            return state
        default:
            return state
    }
}