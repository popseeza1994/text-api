var express = require('express')
var router = express.Router()

var Listname = [
    {id: 0, name: 'Ned Stark',  email: 'ned@winterfell.com', phone: '123-456-7890'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890'},
    {id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890'},
    {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890'},
    {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890'},
    {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890'},
    {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890',},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890'},
    {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890'},
  ];
//1. GET /contacts API to list all contacts
router.get('/contacts', (req, res) => {
    res.json(Listname)
})
//2. POST /contacts API to create new contact
router.post('/contacts', (req, res) => {
    var newListname = req.body
    if(Listname.length){
        newListname.id = Listname.length
        Listname.push(newListname)
    }
    res.json(newListname + " " + "Listname add succeed")

})

//3. GET /contact/:id API to get contact information
router.get('/contacts/:id', (req, res) => {
    var id = req.params.id
    for(var i=0 ; i<Listname.length ; i++)
    {
        if(Listname[i].id == id)
        {
            res.json(Listname[i])
        }
    }
})
//4. PUT /contact/:id API to update contact information
router.put('/contacts/:id', (req, res) => {
    var id = req.params.id
    for(var i=0 ; i<Listname.length ; i++)
    {
        if(Listname[i].id == id)
        {
                Listname[i] = req.body
                res.json("Listname Update Succeed")
        }
    }
})
//5. DELETE /contacts/:id API to remove contact from list
router.delete('/contacts/:id', (req, res) => {
    var id = req.params.id
    Listname.splice(id, 1)
    res.json("Delete Succeed ")
})
//6. GET /contacts?name= API to search contact by name
router.get('/contacts/search/:name',(req,res) => {
    var name = req.params.name
    for(var i=0 ; i<Listname.length ; i++)
    {
        if(Listname[i].name == name )
        {
            res.json(Listname[i])
        }
    }
})

module.exports = router