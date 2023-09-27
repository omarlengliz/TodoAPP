const request = require('supertest');
const app = require('./app');

describe("POST /todos", () => {
    describe("given a title and description ", ()=>{
       
        test("should respond with a 201 status codde ",async ()=>{
            const response =await request(app).post("/todos").send({
                title:"test",
                description:"test"
            })
            expect(response.statusCode).toBe(201)
        })

        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/todos").send({
                title:"test",
                description:"test"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
          })
        
            test("should respond with a json object containing the saved todo", async () => {   
            const response = await request(app).post("/todos").send({
                title:"test",
                description:"test"
            })
            expect(response.body).toEqual(expect.objectContaining({
                title:"test",
                description:"test"
            }))
        })
        test("response has and id", async () => {
            const response = await request(app).post("/todos").send({
                title:"test",
                description:"test"
            })
            expect(response.body._id).toBeDefined()
          })
  
    })
    describe("when the title or description ais/are missing", () => {
        test("should respond with a status code of 400", async () => {
          const bodyData = [
            {description:"test"},
            {title:"test"},
            {}
          ]
          for (const body of bodyData) {
            const response = await request(app).post("/todos").send(body)
            expect(response.statusCode).toBe(400)
          }
        })
      })
    
    })