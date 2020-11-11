let express = require('express');
// console.log(express);
let app = express();



app.get("/assignment4 " , (req , res) => {
    res.send("hello user");
});
app.listen(4900 , () => console.log("connected to port 4900"));