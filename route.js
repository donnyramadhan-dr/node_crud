'use strict';

const { json } = require('body-parser');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/read')
        .get(jsonku.siswa);
    
    app.route('/read/:id')
        .get(jsonku.siswaId);

    app.route('/create')
        .post(jsonku.createSiswa);   
        
    app.route('/update/:id')
        .put(jsonku.ubahSiswa);

    app.route('/delete/:id')
        .delete(jsonku.deletesiswa);
}