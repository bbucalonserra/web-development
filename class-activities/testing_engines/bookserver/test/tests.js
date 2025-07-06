
// import { use, expect } from 'chai'
// import chaiHttp from 'chai-http'
// const chai = use(chaiHttp)
// import { app as server } from '../server.js'; // Adjust the path as necessary


// describe('Bookstore API', () => {
//     it('should GET /books without error', () => {
//         return chai.request(server)
//             .get('/books')
//             .then((res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//             });
//     });
// });


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js'); // Adjust the path as necessary

chai.use(chaiHttp);
const expect = chai.expect;

describe('Bookstore API', () => {
    it('should GET /books without error', (done) => {
        chai.request(server)
            .get('/books')
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
