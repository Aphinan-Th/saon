const { db } = require("./admin");
// let userList = //เอาข้อมูลไปแลดงผลที่หน้า

db.collection('user').get().then(user => 
    user.docChanges.forEach(doc =>{
        console.log(doc.data);
    })
)