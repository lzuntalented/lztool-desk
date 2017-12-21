/* 树形节点表示 */
var Node = function (type, value, children) {
  this._type = type || null
  this._value = value || null
  this._children = children || null
}

/* 枚举静态变量 */
var ConstVar = {
  type: {
    object: 'Object',
    array: 'Array',
    number: 'number',
    string: 'string'
  }
}

/* 构建树形节点结构 */
var checkJsonObj = function (obj) {
  var children = null
  var type = 'number'
  var value = null

  if (Array.isArray(obj)) { // 数组类型
    children = []
    type = 'Array'
    for (var i in obj) {
      children.push(obj[i])
    }
    html += '<div>' + type + '</div>'
  } else if (typeof obj === 'object') { // 对象类型
    type = 'Object'
    children = {}
    for (var i in obj) {
      children[i] = obj[i]
    }
    html += '<div>' + type + '</div>'
  } else if (typeof obj === 'string') {
    type = 'string'
    value = obj
  } else {
    value = obj
  }

  var node = new Node(type, value, children)
  var html = ''

  if (type === 'Object' || type === 'Array') {
    html += '<div class="lz-node">'
    html += '<i class="iconfont icon-minus expand-ctrl" expand="1"></i>'
    var str = ''
    if (type == 'Array') {
      str = '(' + node._children.length + ')'
    }
    html += '<span class="type">' + type + str + '</span>'

    html += '<ul class="children">'
    for (var i in node._children) {
      var obj = checkJsonObj(node._children[i])
      node._children[i] = obj.node

      if (type == 'Array') {
        html += '<li>' + obj.html + '</li>'
      } else {
        html += '<li><span class="key">' + i + '</span> : ' + obj.html + '</li>'
      }
    }
    html += '</ul></div>'
  } else {
    if (typeof value === 'number') {
      html += '<span class="val_string" type="' + type + '">' + value + '</span>'
    } else {
      html += '<span class="val_string" type="' + type + '">"' + value + '"</span>'
    }
    
  }

  return {
    node: node,
    html: html
  }
}
export default checkJsonObj
