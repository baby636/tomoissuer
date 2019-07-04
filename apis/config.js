'use strict'
const express = require('express')
const config = require('config')
const router = express.Router()

router.get('/', async function (req, res, next) {
    let appConfig = {}
    appConfig.blockchain = config.get('blockchain')
    let tomoscanUrl = config.get('tomoscanUrl')
    if (tomoscanUrl[tomoscanUrl.length - 1] === '/') {
        tomoscanUrl = tomoscanUrl.substr(0, tomoscanUrl.length - 1)
    }
    appConfig.tomoscanUrl = tomoscanUrl
    let tomowallet = config.get('tomowalletUrl')
    if (tomowallet[tomowallet.length - 1] === '/') {
        tomowallet = tomowallet.substr(0, tomowallet.length - 1)
    }
    appConfig.tomowalletUrl = tomowallet
    return res.json(appConfig)
})

module.exports = router
