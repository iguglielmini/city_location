const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = response.query;
        const [count] = await connection('customers').count();
        const customers = await connection('users')
        .limit(10)
        .offset((page - 1) * 10)
        .select('*');

        response.header('X-Total-Count', count['count(*)'])

        return response.json(customers);

    },

    async create(request, response){
        const { 
            first_name, 
            last_name, 
            email, 
            gender, 
            company, 
            city, 
            title, 
            lat, 
            long
        } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('customers').insert({
            id,
            first_name, 
            last_name, 
            email, 
            gender, 
            company, 
            city, 
            title, 
            lat, 
            long
        })
        return response.json({ id });
    },
    async delete(request, response){
        const { id } = request.params;

        await connection('customers').where('id', id).delete();

        return response.status(204).send();

    }
}