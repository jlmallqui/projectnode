
const express = require('express'); 
const router = express.Router();
const commonController = require('../../controllers/common.controller');

router.get('/servicios',commonController.getServicios);
router.get('/facultades',commonController.getFacultades);
router.get('/pdf',commonController.createPDF);
router.get('/htmlpdf/:poder',commonController.gethtml);








module.exports = router;



