import React from 'react';
import { connect } from 'react-redux';


const Users = ({ users })=> {
  return (
    <div>
      <h1>Users</h1>
      <button>onClick={createUser}+</button>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.name }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    users: state.users
  };
  
}
const mapDispatch =(dispatch)=>{
  return{
    createUser: async()=>{
      const user = axios.post('/api/users', {name: Math.random})).data
    
  }
}
export default connect(mapStateToProps,mapDispatch)(Users);
