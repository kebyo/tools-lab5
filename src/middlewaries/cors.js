export default (req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headres', '*');

    if (req.method === 'OPTIONS'){
        res.header('Acces-Control=Allow-Methods', 'GET, PATCH, POST');
        return res.json({});
    }

    next();
}