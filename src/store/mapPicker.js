import {
  NEW_QUESTION,
  SEND_ANWSER,
  SUBMIT_ANWSER
} from '../actions/constants'
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  isSended: true,
  markers: [],
  circleDistance: {}, 
  correctMarker: {},
  timeLeft: 20,
  startIn: 5,
  gameStatus: 'Bắt đầu',
  needReRender: false,
  timeOut: 10,
  notAwnCSS: {display: `inline`},
  awnCSS: {display: `none`},
  questionStatusClass: ``,
  distance: 0,
  cleanMap: true,
  clockCSS:  {display: `none`}
}

export default function mapPickerReducer (state = initialState, action) {
  console.log("Action in mapPickerReducer:", action)
  switch (action.type) {
    case NEW_QUESTION:
      return Object.assign({}, state, {
        circleDistance:{},
        isSended: false,
        correctMarker: action.data,
        gameStatus: 'Có câu hỏi mới, Xóa dữ liệu cũ',
        timeOut: 10,
        awnCSS: {display: `none`},
        notAwnCSS: {display: `inline`},
        questionStatusClass: `active`,
        cleanMap: true, 
        clockCSS:  {display: `block`}
      });
    case SUBMIT_ANWSER: 
      return Object.assign({}, state, {
        markers: action.data.pickedMarker,
        circleDistance: action.data.circleDistance,
        isSended: true,
        distance: action.data.distance,
        gameStatus: 'Gửi đáp án',
        awnCSS: {display: `inline`},
        notAwnCSS: {display: `none`},
        questionStatusClass: 'active showing-distance',
        cleanMap: false 
      })
    default:
      return state
  }
}
