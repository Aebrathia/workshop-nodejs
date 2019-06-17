const database = {
    rooms: [
        {
            id: 1,
            number: 101,
            type: 'Sea View',
        },
        {
            id: 2,
            number: 201,
            type: 'Land View',
        },
        {
            id: 3,
            number: 301,
            type: 'Sea View',
        },
    ],
    clients: [],
};

exports.get = resource => database[resource];
exports.getOne = (resource, id) => database[resource].filter(r => r.id === id)[0];
exports.create = (resource, data) => {
    const id = database[resource].length + 1;
    const newResource = {
        id,
        ...data,
    };
    database[resource].push(newResource);
    return newResource;
};
