import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...(state.bands), {name: action.payload, id: uuid()}] }

    case 'DELETE_BAND':
      // let idx = state.bands.findIndex(band => band.id === action.payload);
      return {bands: state.bands.filter(band => band.id !== action.payload)};
    default:
      return state;
  }
};