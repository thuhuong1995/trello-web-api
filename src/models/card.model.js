import Joi from 'joi';
import { getDB } from '../config/mongoDB.js';

const cardCollectionName = 'cards'
// boards from table in db mongo
const cardCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cover: Joi.string().default(null),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
});

const validateSchema = async (data) => {
    return await cardCollectionSchema.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data);
        const result = await getDB().collection(cardCollectionName).insertOne(value)

        return result.ops[0]

    } catch (error) {
        console.log(error)
    }
}

export const ColumnModel = { createNew }