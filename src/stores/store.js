import {create} from 'zustand';

const useStore = create(set => ({
  messager: ['Hello, World!'],
  addMessage: (message) => {
    set((state) => ({ 
      // ...state, 
      messager: [message]}))},
}));

export default useStore;
