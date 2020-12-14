/**
 * 判断类型
 * @param {*} value 入参
 * @returns {String} 返回值
 */
function typeOf(value) {
    if (value !== value) {
        return 'NaN'
    }
    return Object.prototype.toString.call(value).replace(/(^\[Object )([a-z]+)(\])$/i, '$2')
}
/**
 * 是否是Object类型
 * @param {*} value 入参
 * @returns {Boolean} 返回值
 */
function isObject(value) {
    return typeOf(value) === 'Object'
}
/**
 * 是否是Array类型
 * @param {*} value 入参
 * @returns {Boolean} 返回值
 */
function isArray(value) {
    return typeOf(value) === 'Array'
}

/**
 * 是否是Function类型
 * @param {*} value 入参
 * @returns {Boolean} 返回值
 */
function isFunction(value) {
    return typeOf(value) === 'Function'
}

export { typeOf, isObject, isArray, isFunction }
