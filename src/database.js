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
exports.getOne = (resource, id) => database[resource].find(r => r.id === id);
exports.update = (resource, id, data) => {
    const index = database[resource].findIndex(r => r.id === id);
    const newItem = { ...database[resource][index], ...data };
    database[resource][index] = newItem;
};
exports.create = (resource, data) => {
    const id = database[resource].length + 1;
    const newResource = {
        id,
        ...data,
    };
    database[resource].push(newResource);
    return newResource;
};
exports.remove = (resource, id) => {
    database[resource] = database[resource].filter(r => r.id !== id);
};
