const { getOptions } = require('loader-utils')
module.exports = function(source, map) {
  this.cacheable()
  const {zh_en} = getOptions(this)
  let newSource = source
  for (const options of zh_en) {
    const [zh,en] = options
    const zhReg = new RegExp(`([\u4e00-\u9fa5])(${en})`,'g')
    const enReg = new RegExp(`([^\u4e00-\u9fa5])(${zh})`,'g')
    newSource = newSource.replace(zhReg,function(match,$1){
      return $1 + zh
    })
    newSource = newSource.replace(enReg,function(match,$1){
      return $1 + en
    })
  }
  this.callback(null, newSource, map)
}