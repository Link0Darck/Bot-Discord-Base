module.exports = client => {
    //catches mistakes
    process.on('unhandledRejection', (reason, p) => {
        console.log("Unhandled rejection error")
        console.log(reason, p)
    })
    process.on('uncaughtException', (err, origin) => {
        console.log("Exception error not caught")
        console.log(err, origin)
    })
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log("Exception error not caught")
        console.log(err, origin)
    })
    process.on('multipleResolves', (type, promise, reason) => {
        console.log("Multiple resolution error")
        console.log(type, promise, reason)
    })
}