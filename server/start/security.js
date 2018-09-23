const helmet = require('helmet')

module.exports = (app) => {
    app.use(helmet())
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],// eslint-disable-line
            scriptSrc: ["'self'", 'trusted-cdn.com']// eslint-disable-line
        }
    }))
}
