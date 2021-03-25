const User = require("../models/User")

module.exports = {
    regis: (req, res)=>{

       res.render("register"); 
    },
    processRegister: async (req, res)=>{

        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            lastName: req.body.lastName
        })

        await newUser.save()
        
        res.redirect("/users");
    },
    users: async (req, res)=>{

        const users = await User.find()

        res.render("listado", { users } );
    },
    detail: async (req, res)=>{

        const user = await User.findOne({_id: req.params.id})

        res.render("detail", { user });
    },
    edit: async (req, res) => {

        const userFound = await User.findOne({_id: req.params.id});

        res.render("edit", { user: userFound } );
    },
    processEdit: async (req, res) =>{

        await User.findByIdAndUpdate(req.params.id ,{
            name: req.body.name,
            lastName: req.body.lastName,
            password: req.body.password,
            lastName: req.body.lastName,
            dni: req.body.dni
        })

        res.redirect("/users");
    },
    delete: async (req, res) =>{

        await User.findByIdAndDelete( req.params.id )

        res.redirect("/users");
    }

}