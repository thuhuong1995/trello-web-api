import Joi from 'joi';
import { getDB } from '../config/mongoDB.js';

const columnCollectionName = 'columns'
// boards from table in db mongo
const columnCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cardOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
});

const validateSchema = async (data) => {
    return await columnCollectionSchema.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data);
        const result = await getDB().collection(columnCollectionName).insertOne(value)

        return result.ops[0]

    } catch (error) {
        console.log(error)
    }
}

export const ColumnModel = { createNew }