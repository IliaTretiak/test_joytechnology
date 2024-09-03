import {create} from 'zustand';

const useStore = create(set => ({
  messager: ['Hello, World!'],
  addMessage: (message) => {
    set((state) => ({ 
      ...state, 
      messager: [...state.messager, message]}))},
  correctMessage: (editer, message) => {
    set((state) => ({ 
      ...state, 
      messager: state.messager.toSpliced(editer, 1, message)
      }))},
}));


export default useStore;
