import {create} from 'zustand';

const useStore = create(set => ({
  messager: [],
  addMessage: (message) => set((state) => ({ ...state, messager: [...state.messager]})),
  // addTodo: (text) => set((state) => ({ ...state, todos: [...state.todos, { text, completed: false }] })),
}));

export default useStore;