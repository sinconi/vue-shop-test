'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH:'"https://vue-course-api.hexschool.io/"',
  //自定義路徑
  CUSTOMPATH:'"ninivue"'
})
