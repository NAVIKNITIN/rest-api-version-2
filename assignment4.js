let express = require(express);
let app = express();
app.listen(4800, () => console.log('port is working'));


let music = [{

    id:1,name:'bbnkjkljtdrgd',singer:'Rajkumar',releasedate:1992,price:100000,actors:'vishwanath' 
},
{
    id:2,name:'beykhayali',singer:'adbsma',releasedate:2019,price:123123,actors:'kachraseth' 
},
{
    id:3,name:'sadasdsa',singer:'asbdja',releasedate:2020,price:123819,actors:'munnabhaiya' 
},
{
    id:4,name:'godsplan',singer:'drake',releasedate:2020,price:1231312,actors:'kaleenbhaiya'
},
{
    id:5,name:'faded',singer:'alan walker',releasedate:'',price:12312312,actors:'guddubhaiya'
}];
app.get('/NODEJS/music',(req,res) => {
    res.send(music);
})
