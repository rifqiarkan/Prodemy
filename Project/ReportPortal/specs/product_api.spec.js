import * as chai from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
import supertest from "supertest";

import { schema, schemaCategories, schemaDelete } from "../schemas/product_schema.js";

chai.use(chaiJsonSchemaAjv)

const { expect } = chai
const request = supertest('https://dummyjson.com')

it('get all products', async () => {
    const res = await request.get('/products')

    expect(res.body).to.be.jsonSchema(schema)
    console.log(res.body)
})

it('get single products', async () => {
    const res = await request.get('/products/1')

    expect(res.body).to.be.jsonSchema(schema)
    console.log(res.body)
})

it('search products', async () => {
    const res = await request.get('/products/search?q=phone')

    expect(res.body).to.be.jsonSchema(schema)
    console.log(res.body)
})

it('post product', async () => {
    const res = await request
            .post('/products/add')
            .send({
                category: 'mobil'
            })
    expect(res.body).to.be.jsonSchema(schema)

    console.log(res.body)
})

it('put product', async () => {
    const res = await request
            .put('/products/1')
            .send({
                title: 'bmw'
            })
    expect(res.body).to.be.jsonSchema(schema)
    console.log(res.body)
})

it('limit and skip product', async () => {
    const res = await request
            .get('/products?limit=2&skip=2&select=title,price/')
    expect(res.body).to.be.jsonSchema(schema)
    console.log(res.body)
})

it('get all product by category', async () => {
    const res = await request
            .get('/products/categories')
    expect(res.body).to.be.jsonSchema(schemaCategories)
    console.log(res.body)
})

it('get product by category', async () => {
    const res = await request
            .get('/products/category/smartphones')
    expect(res.body).to.be.jsonSchema(schema)
    console.log(res.body)
})

it('delete product', async () => {
    const res = await request
            .delete('/products/1')
    expect(res.body).to.be.jsonSchema(schemaDelete)
    console.log(res.body)
})


   

