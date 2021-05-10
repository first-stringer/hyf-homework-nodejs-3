const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000);


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]

// app.get('/users', function(req,res){
// //   res.send('NULL')
// //    res.json()
//         res.json({
//             users: mockUserData
//         })
// })

app.get('/users', function(req,res){
        res.json({
            success: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
        })
})

