const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state, // copy the current state
        supplies: state.supplies + 15, // increase supplies by 15
        distance: state.distance, // distance remains unchanged
        days: state.days + 1 // add 1 day
      }
    }
    case 'travel': {
      const days = action.payload; // take the number of days from the action
      const newSupplies = state.supplies - (20 * days); // decrease supplies by 20 per day
      if (newSupplies < 0) {
        return state;
      }

      return {
        ...state, // copy the current state
        supplies: newSupplies, // decrease supplies
        distance: state.distance + (10 * days), // increase distance by 10 km for each day
        days: state.days + days // add the number of days
      }
    }
    case 'tippedWagon': {
      return {
        ...state, // copy the current state
        supplies: state.supplies - 30, // decrease supplies by 30
        distance: state.distance,  // distance remains unchanged
        days: state.days + 1 // add 1 day to the current state
      }
    }
    default: {
      return state; // return the current state if the action is unrecognized
    }
  }
}
// Initialize the initial state
let wagon = reducer(undefined, {});
console.log(wagon)

// Travel for 1 day
wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon)

// Gather supplies
wagon = reducer(wagon, {type: 'gather'});
console.log(wagon)

// Tip the wagon
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon)

// Travel for 3 days
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon)

// Try to travel for another 3 days, but supplies are insufficient
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon)
