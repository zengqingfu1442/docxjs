import { isString } from "./utils";

export type ChildType = Node | string;

export function element(ns: string, tagName: string, props?: Partial<Record<any, any>>, children?: ChildType[]) {
    var result = ns ? document.createElementNS(ns, tagName) : document.createElement(tagName);
    Object.assign(result, props);
    children && appendChildren(result, children);
    return result;
}

export function comment(text: string) {
    return document.createComment(text);
}

export function text(text: string) {
    return document.createTextNode(text);
}

export function appendChildren(elem: Node, children: (Node | string)[]) {
    children.forEach(c => elem.appendChild(isString(c) ? text(c) : c));
}

export const defaultHtml = {
    element,
    comment,
    text
}
