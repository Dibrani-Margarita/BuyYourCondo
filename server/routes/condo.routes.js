const condoController = require('../controllers/condo.controller');

module.exports = (app) => {
    app.get('/api/condos', condoController.getCondos);
    app.get('/api/condos/:id', condoController.getCondoById);
    app.post('/api/condos', condoController.createCondo);
    app.put('/api/condos/:id', condoController.updateCondo);
    app.delete('/api/condos/:id', condoController.deleteCondo);
}