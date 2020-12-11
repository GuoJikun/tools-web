/**
 * 查找所有的同级元素
 * @param {HTMLElement} el 从这个元素开始查找
 * @param {Boolean} exceptMe 是否自身
 * @returns {Array}
 */
export function findBrothersElement(el, exceptMe = true) {
    const parent = el.parentElement
    const children = [...parent.children]
    return children.filter((c) => {
        if (exceptMe && c === el) {
            return false
        } else {
            return true
        }
    })
}
