import * as chai from "chai";
import chaiHttp = require('chai-http');
import { expressApp } from "..";

chai.use(chaiHttp);

it("Should return 200 OK", () => {
    
    return chai.request(expressApp).post('/auth').send({})
            .then((response) => {
                console.log(response.body);
                chai.expect(response.body.status).to.eql(200);
            });

});
