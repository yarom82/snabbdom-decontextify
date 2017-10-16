import { selectorParser } from 'snabbdom-selector'
import { VNode } from 'snabbdom/vnode'

const decontextify = (vnode: VNode): VNode => {
  return {
    children: vnode.children ? vnode.children.map(decontextify) : undefined,
    data: Object.create(null),
    elm: undefined,
    key: vnode.key,
    sel: vnode.sel ? selectorParser(vnode).tagName : undefined,
    text: vnode.text
  }
}

export default decontextify
