import {globalState} from '../component';

function ExtractMakanan(value, param) {
  if (param === 'morning') {
    return value.makanan_pagi;
  }else if(param == 'afternoon'){
    return value.makanan_siang;
  }else if(param === 'night'){
    console.log(value.makanan_malam);
  }else{
    var temp = value.makanan_pagi.concat(value.makanan_siang);
    return temp.concat(value.makanan_malam);
  }
}

// Reducer
const MakananReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'INCREAMENT':
      return {
        ...state,
        counter: action.value,
      };

    case 'ADD_FOOD':
      return {
        ...state,
        all_makanan: ExtractMakanan(action.value, 'all'),
        makanan_pagi: ExtractMakanan(action.value, 'morning'),
        makanan_siang: ExtractMakanan(action.value, 'afternoon'),
        makanan_malam: ExtractMakanan(action.value, 'night'),
        finish_loaded: true,
      };

    case "LOGIN" :
      return {
        ...state,
        customer: action.value
      }
      
    default:
      return {
        ...state,
      };
  }
  return state;
};

export {MakananReducer};
