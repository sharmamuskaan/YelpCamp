// instead of try catch we can use this for async errors
module.exports = func => {
    return (req, res, next) => {
        func (req, res, next).catch(next);
    }
}