const express = require('express');
const users = require('./MOCK_DATA.json'); 
const app = express();
const port = 4000;

// Rest API Points 

app.get('/user', (req, res) => {
    const html = `
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    
    `
    return res.send(html);
 });

 app.get('/api/user', (req, res) => {
   
   return res.json(users);
});


// Dynamic Path Parameters

app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user =  users.find((user)=> user.id===id);
    return res.json(user);
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});

// post method

app.post('/api/user/',(req,res)=>{
    return res.json({
        status:'pending '
    })
});

app.patch('/api/user/:id',(req,res)=>{
    // Edit the user id and details

    return res.json({
        status:'pending '
    })
});


app.delete('/api/user/',(req,res)=>{
    return res.json({
        status:'pending '
    })
});

app.route('/api/user/').get((req,res)=>{
    const id = Number(req.params.id);
    const user =  users.find((user)=> user.id===id);
    return res.json(user);
}).put((req,res)=>{
    
})