let state = {count: 0}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  document.body.textContent = state.count
}

function dispatch(action) {
  state = changeState(state, action)
  return state;
}

dispatch({ type: "INCREASE_COUNT" })
dispatch({ type: "INCREASE_COUNT" })
dispatch({ type: "INCREASE_COUNT" })
render();
// let state = {count: 0}
// let action = {type: 'INCREASE_COUNT'}

// changeState(state, action)
