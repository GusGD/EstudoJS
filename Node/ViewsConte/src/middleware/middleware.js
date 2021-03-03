exports.myMiddleware = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da varaivel local';
    next()
}