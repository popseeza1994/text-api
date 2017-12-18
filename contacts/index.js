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

///
module.exports = router