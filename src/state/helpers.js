import { mapState, mapActions } from 'vuex'

export const layoutComputed = {
  ...mapState('layout', {
    layoutType: (state) => state.layoutType,
    layoutScrollable: (state) => state.layoutScrollable,
    layoutMode: (state) => state.layoutMode,
    leftSidebarType: (state) => state.leftSidebarType,
    sidebarColor: (state) => state.sidebarColor,
    layoutWidth: (state) => state.layoutWidth,
    topbar: (state) => state.topbar
  })
}


export const layoutMethods = mapActions('layout', ['changeLayoutType', 'changeLayoutMode', 'changeLayoutWidth', 'changeLeftSidebarType', 'changeTopbar', 'changeSidebarColor', 'changeLayoutPosition'])


export const todoComputed = {
  ...mapState('todo', {
    todos: (state) => state.todos
  })
}
export const todoMethods = mapActions('todo', ['fetchTodos'])