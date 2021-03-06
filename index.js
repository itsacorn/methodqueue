class Queue {
  /**
   * @param {Function[]} methods Methods to add to queue. 
   */
  constructor(methods) {
    this._queuedMethods = methods || []
    this._processedMethods = 0
  }
  /**
   * Run next method on queue.
   * @param {} args Arguments to pass to method.
   */
  next(...args) {
    this._processedMethods++
    return this._queuedMethods[this._processedMethods - 1](...args)
  }
  /**
   * Run previous method in queue.
   * @param {} args Arguments to pass to method.
   */
  prev(...args) {
    this._processedMethods--
    return this._queuedMethods[this._processedMethods - 1](...args)
  }
  /**
   * Run specific method.
   * @param {Number} index The index of the method to call.
   * @param {} args Arguments to pass to method.
   */
  jump(index, ...args) {
    return this._queuedMethods[index](...args)
  }
  /**
   * Add methods to queue.
   * @param {Function[]} methods
   */
  add(methods) {
    this._queuedMethods.push(...methods)
  }
  /**
   * Remove methods from queue.
   * @param {Number[]|Number} index 
   */
  remove(...index) { 
    if (typeof index == "array") {
      index.forEach(i => {
        this._queuedMethods.splice(i, 1)
      })
    } else {
      this._queuedMethods.splice(index[0], 1)
    }
  }
}
module.exports = Queue