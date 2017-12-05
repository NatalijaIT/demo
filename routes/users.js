module.exports = function (app) {
    var Slides = require('../controllers/controllers');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.route('/')
        .get(Slides.getIndex);
    app.route('/api')
        .get(Slides.getIndex);

    app.route('/slides')
        .get(Slides.getMedication)
        .post(Slides.addMedication);
};
