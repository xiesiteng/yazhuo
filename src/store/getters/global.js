export const changeisCollapse = (state) => {
    return state.global.isCollapse
}
export const traverse = (node, name) => {
    node.forEach((i) => {
        if (i.name == name) {
            return i.name
        }
        i.children && this.traverse(i.children)
    })
}
