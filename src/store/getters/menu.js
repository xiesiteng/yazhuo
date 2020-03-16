import { links } from '@/router/router.js'
const meunList = () => {
    let R = traverse(links)
    return R
}
export default meunList
function traverse(node) {
    node.forEach((i, index) => {
        if (i.asideMenu) {
            let r = i.children.filter(e => {
                return e.asideMenu
            })
            i.children = r
        }
    })
    console.log(node)
    return node
}
