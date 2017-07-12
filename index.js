module.exports = function (options) {
  this.decorate('addAsync', function (pattern, handler) {
    return this.add(pattern, function (msg, reply) {
      Promise.resolve(msg).then(handler).then(function (result) {reply(null, result)}).catch(reply)
    })
  })

  this.decorate('actAsync', function (msg) {
    const seneca = this
    return new Promise(function (resolve, reject) {
      seneca.act(msg, function (err, result) {
        if (err) reject(err)
        else resolve(result)
      })
    })
  })
}