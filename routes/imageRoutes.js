const imageController=require('../controller/image');
const express=require('express');
const router=express.Router();
const multer=require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  });

const upload = multer({ storage: storage })

router.post('/send',upload.single('image'),imageController.extract);

module.exports=router;