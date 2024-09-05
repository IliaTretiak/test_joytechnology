// import {create} from 'zustand';
// import {persist} from "zustand/middleware"

// let store = (set) => ({
//   messager: [],
//   // timer: [],
//   addMessage: (message, time) => {
//     set((state) => ({ 
//       ...state, 
//       messager: [...state.messager, (`${message}  ${time}`)],
//       // timer: [...state.timer, time]
//     }))},
//   correctMessage: (editer, message) => {
//     set((state) => ({ 
//       ...state, 
//       messager: state.messager.toSpliced(editer, 1, message)
//       }))},
//   removeMessage: (editer) => {
//     set((state) => ({ 
//       messager: state.messager.toSpliced(editer, 1)
//       }))},
// });
// store = persist(store, {name: "messager"})

// const useStore = create(store);

// export default useStore;

import {create} from 'zustand';
import {persist} from "zustand/middleware"

let store = (set) => ({
  messager: [
    {
      question: '',
      time: '',
    }
  ], 
  addMessage: (message, time) => {
    set((state) => ({ 
      messager: [...state.messager, 
        {
          question: message,
          time: time
        }],
  //     }))},
  // correctMessage: (editer, message) => {
  //   set((state) => ({ 
  //     messager: [...state.question, 
  //       {
  //         question: state.question.toSpliced(editer, 1, message)
  //       }
  //     ]
  //     }))},
  // removeMessage: (editer) => {
  //   set((state) => ({ 
  //     messager: [
  //       {
  //         question: state.question.toSpliced(editer, 1),
  //         time: state.time.toSpliced(editer, 1)
  //       }
  //     ]
      }))},
});
store = persist(store, {name: "message"})

const useStore = create(store);

export default useStore;



