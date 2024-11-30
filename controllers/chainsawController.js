const chainsaws = require('../models/chainsaw');
const { Op } = require('sequelize');

const get = async (req, res) => {
    const { sort, filter } = req.query;

    let queryOptions = {};

    if (sort) {
        switch (sort) {
            case 'power_asc':
                queryOptions.order = [['power', 'ASC']];
                break;
            case 'power_desc':
                queryOptions.order = [['power', 'DESC']];
                break;
            case 'a-z':
                queryOptions.order = [['title', 'ASC']];
                break;
            case 'z-a':
                queryOptions.order = [['title', 'DESC']];
                break;
            default:
                break;
        }
    }

    if (filter) {
        queryOptions.where = {
            title: {
                [Op.like]: `%${filter}%`
            }
        };
    }

    try {
        const data = await chainsaws.findAll(queryOptions);
        res.status(200).json({
            status: 200,
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving chainsaw."
        });
    }
};

const getById = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await chainsaws.findByPk(id);
        if (!data) {
            return res.status(404).send({
                message: `Cannot find chainsaw with id=${id}.`
            });
        }
        res.status(200).json({
            status: 200,
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving chainsaw with id=" + id
        });
    }
};

const create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const { title, RPM, power } = req.body;

    try {
        const existingChainsaw = await chainsaws.findOne({
            where: {
                title: title,
            }
        });

        if (existingChainsaw) {
            return res.status(409).json({
                status: 409,
                message: "A chainsaw with the same title already exists."
            });
        }

        const newChainsaw = await chainsaws.create({
            title: title,
            RPM: RPM,
            power: power,
        });

        res.status(201).json(newChainsaw); // Return the created chainsaw

    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the chainsaw."
        });
    }
};

const deleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const chainsawById = await chainsaws.findByPk(id);

        if (!chainsawById) {
            return res.status(404).send({
                message: `Cannot delete chainsaw with id=${id}. chainsaw not found`
            });
        }
        await chainsawById.destroy();
        res.status(204).send(); // No content response
    } catch (err) {
        res.status(500).send({
            message: "Error deleting chainsaw with id=" + id
        });
    }
};

const update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const chainsawByID = await chainsaws.findByPk(id);

        if (!chainsawByID) {
            return res.status(404).send({
                message: `Cannot update chainsaw with id=${id}. chainsaw not found`
            });
        }

        chainsawByID.title = body.title;
        chainsawByID.RPM = body.RPM;
        chainsawByID.power = body.power;
        await chainsawByID.save();

        res.status(200).json(chainsawByID); // Return the updated chainsaw

    } catch (err) {
        res.status(500).send({
            message: "Error updating chainsaw with id=" + id
        });
    }
};

const countPrice = async (req, res) => {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).send({
            message: "Invalid input: 'ids' should be a non-empty array."
        });
    }

    try {
        const chainsaw = await chainsaws.findAll({
            where: {
                id: {
                    [Op.in]: ids
                }
            }
        });

        const totalPrice = chainsaw.reduce((sum, chainsaw) => sum + (chainsaw.power || 0), 0);

        res.status(200).json({
            status: 'success',
            totalPrice: totalPrice
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while counting the prices."
        });
    }
};

module.exports = { create, get, update, deleteById, countPrice, getById };
