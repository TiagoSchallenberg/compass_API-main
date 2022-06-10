const express = require('express')
const categoryROTAS = require('./categoryROTAS')
const productROTAS = require('./productROTAS')

const rotas = (app) => {
    app.use(
        express.json(),
        categoryROTAS,
        productROTAS
    )
}

module.exports = rotas