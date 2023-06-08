const userModel = require('../db/db-model')

const getAllUsers = async (req, res, next) => {
    try {
        const result = await userModel.readAll()
        res.status(200).json({ data: result })
    } catch (err) {
        next(err)
    }
    
}

const getUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const result = await userModel.readOne(id)
        res.status(200).json({ data: result })
    } catch (err) {
        next(err)        
    }    
}

const createUser = async (req, res, next) => {
    const { id, name } = req.body
    try {
        const result = await userModel.create({ id, name })
        res.status(201).json({ data: 'User created' })
    } catch (err) {
        next(err)
    }    
}

const deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const result = await userModel.remove(id)
        res.status(200).json({ data: `User with id ${id} has been deleted` })
    } catch (err) {
        next(err)
    }    
}

module.exports = { getAllUsers, getUser, createUser, deleteUser }