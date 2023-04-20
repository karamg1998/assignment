const tesseract = require("node-tesseract-ocr");

exports.extract=(req,res,next)=>{
    const config = {
       lang: "eng",
       oem: 1,
       psm: 3,
     }
     
     tesseract
       .recognize(req.file.path, config)
       .then((text) => {
         let n=text.split('\n');
         let obj={idType:'',idNumber:'',info:{
            name:'',
            fatherName:'',
            dob:''
         }
        }
       if(n[3]=='INCOME TAX DEPARTMENT')
       {
        obj.idType='pancard';
       }
       obj.idNumber=n[10].slice(0,10);
       obj.info.name=n[4];
       obj.info.fatherName=n[5];
       obj.info.dob=n[6];

       res.json(obj);
       })
       .catch((error) => {
         console.log(error.message)
       })
};