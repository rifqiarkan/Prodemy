const schema = {
    type: 'object',
    properties: {
        id: { type: 'number'},
        title: { type: 'string'},
        description: { type: "string"},
        price: { type: 'number'},
        discountPercentage: { type: 'number'},
        rating: { type: 'number'},
        stock: { type: 'number'},
        brand: { type: 'string'},
        category: { type: 'string'},
        thumbnail: { type: 'string'},
        images: {
            type: 'array',
            items: { type: 'string'}
        }
    }
}

const schemaCategories = {
    type: 'array',
    items: {
        type: 'string'
    }
}

const schemaDelete = {
    type: 'object',
    properties: {
        id: { type: 'number'},
        title: { type: 'string'},
        description: { type: "string"},
        price: { type: 'number'},
        discountPercentage: { type: 'number'},
        rating: { type: 'number'},
        stock: { type: 'number'},
        brand: { type: 'string'},
        category: { type: 'string'},
        thumbnail: { type: 'string'},
        images: {
            type: 'array',
            items: { type: 'string'}
        },
        isDeleted: { type: 'boolean'},
        deletedOn: { type: 'string'}
        
    }
}
export { schema, schemaCategories, schemaDelete };