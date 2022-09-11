const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// const corsOptions = {
//     origin: '*',
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

const multipartMidleware = multipart({uploadDir: './uploads'});
app.post('/upload',multipartMidleware,(req,res) =>{
    const files = req.files;
    console.log(files);
    res.json({message:files});
})

app.use((err,req,res,next)=> res.json({
    error: err.message
}));

app.get('/downloadPdf',(req,res)=>{
    res.download('./uploads/0EGIlePNyg_Iv9fdRiUpVqzN.pdf');
});

app.get('/downloadExcel',(req,res)=>{
    res.download('./uploads/0EGIlePNyg_Iv9fdRiUpVqzN.pdf');
});

app.listen(8000, () => {
    console.log('Servidor porta 8000')
})