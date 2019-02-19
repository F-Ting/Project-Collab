const app = require('../app')
const chai = require('chai')
  , chaiHttp = require('chai-http');
const models = require('../server/models');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing GET requests', () => {
    //This is needed to ensure jest doesn't hang
    beforeEach(() => { 
        models.sequelize.sync().then(()=>{ models.sequelize.close(); }) 
    });

    it('Root should return status 200', async () => {
        const response = await chai.request(app).get('/')
        expect(response).to.have.status(200);
    });
})
