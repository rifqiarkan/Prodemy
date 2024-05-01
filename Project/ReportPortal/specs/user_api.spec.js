import * as chai from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
import supertest from "supertest";

import schemaUser  from "../schemas/user_schema.js";

chai.use(chaiJsonSchemaAjv)

const { expect } = chai
const request = supertest('https://dummyjson.com')

it('get 1 user', async () => {
    const res = await request.get('/users/1')

    expect(res.body).to.be.jsonSchema(schemaUser)
    console.log(res.body)
})