import React from 'react';
import ThingForm from './ThingForm';
import { connect } from 'react-redux';

const Things = ({ things })=> {
  return (
    <div>
      <h1>Things</h1>
      <ul>
        {
          things.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name }
                <button> onClick={()=> deleteThing(thing)}</button>
              </li>
            );
          })
        }
      </ul>
      <ThingForm />
    </div>
  );
};

export default connect(
  (state)=> {
    return {
      things: state.things
    }
  },
  (dispatch)=>{
    return {
      deleteThing: async (thing)=>{
        await axios.delete(`/api/things/${thing.id}`)
      
      }
    }
  }
)(Things);
