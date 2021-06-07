export default (req, res, next) => {
    const error = new Error('Not found');
    console.log(error);

    res.status(404).json({
        error: error.message,
    });
};
