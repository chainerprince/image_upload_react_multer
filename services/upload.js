const multer = require('multer')

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|png|jpeg|jiff)$/)) 
              return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        cb(null, true);
    
  }

const storage = multer.diskStorage({
    destination: "upload",
    limits:{
       fileSize:1000000
    },
    filename: (req,file,cb) => cb(null, new Date().toISOString().replace(/:/g,"_") + file.originalname)
})
const upload = multer({storage:storage,fileFilter:fileFilter})
module.exports = upload;
//forces