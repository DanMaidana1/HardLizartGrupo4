let homePage = require('./homePage')
let contacto = require('./contacto')

let movies = homePage.leerJSON()

module.exports = {
    homePage : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){

    },
    contacto : function(req,res){
        res.write(`${contacto.texto}`)
        res.end()

    }
}