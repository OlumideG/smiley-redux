const { createStore } = Redux;


const face = document.getElementById('face')

const rootReducer = (state='TIME FOR EMOJIS ', action)=>{
    switch (action.type) {
         case 'HAPPY_FACE':
          return "(◡‿◡✿)"
         case 'SAD_FACE':
          return "《〠_〠》"
         case 'ANGRY_FACE':
          return  "ಠ_ಠ"
          case 'CONFUSED_FACE':
          return "¯\_(ツ)_/¯"
        default:
          return state

  }
}

const store = Redux.createStore(rootReducer);


function render() {
    face.innerHTML = store.getState().toString()
  }

  render();
  store.subscribe(render);

 
document.getElementById('happy')
.addEventListener('click', function () {
 store.dispatch({ type: 'HAPPY_FACE' })
})

document.getElementById('sad')
.addEventListener('click', function () {
 store.dispatch({ type: 'SAD_FACE' })
})

document.getElementById('angry')
.addEventListener('click', function () {
 store.dispatch({ type: 'ANGRY_FACE' })
})

document.getElementById('confused')
.addEventListener('click', function () {
 store.dispatch({ type: 'CONFUSED_FACE' })
})


