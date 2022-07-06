import { user } from 'pg/lib/defaults';
import { createStore } from 'redux';

const initialState = {
  view: window.location.hash.slice(1),
  users: [],
  things: []
};

const store = createStore((state = initialState, action)=> { 
  if(action.type === 'DELETE_THINGS'){
    return {...state, things: state.things.filter(thing =>thing.id !== action.thing.id) };
  }
  if(action.type === 'DELETE_USERS'){
    return {...state, users: state.user.filter(user =>user.id !== action.user.id) };
  }
  if(action.type === 'SET_USERS'){
    return {...state, users: action.users }; 
  }
  if(action.type === 'SET_VIEW'){
    return {...state, view: action.view }; 
  }
  if(action.type === 'CREATE_THING'){
    return {...state, things: [...state.things, action.thing ]}; 
  }
  if(action.type === 'CREATE_USER'){
    return {...state, things: [...state.users, action.user ]}; 
  }
  return state;
});

export default store;

