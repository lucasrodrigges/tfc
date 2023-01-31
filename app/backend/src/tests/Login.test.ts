import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import UserModel from '../database/models/UserModel';
import * as jwt from '../JWT';
import UserService from '../services/UserService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes de Login', () => {


  let chaiHttpResponse: Response;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc0NzkxNjcxLCJleHAiOjE2NzUwNTA4NzF9.azcA0M6aiGOFGJoCyv179DnNqzYc-VZT28PqOQRvjU0'

  before(async () => {
    sinon
      .stub(UserModel, "findOne")
      .resolves({
       id: 1,
       username: 'rodrigges',
       role: 'admin',
       email: 'lucas@gmail.com',
       password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
      } as UserModel)
      
      sinon.stub(jwt, 'createToken').returns(token)

  });

  after(()=>{
    (UserModel.findOne as sinon.SinonStub).restore();
  })

  it('Testa retorno de token ao fazer requisição correta', async () => {
    const res = await chai.request(app).post('/login').send({email: 'lucas@gmail.com',
      password: 'secret_user'})

    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal({token})
      

  });

  it('Testa retorno de token sem enviar email', async () => {
    const res = await chai.request(app).post('/login').send({ password: 'secret_user'})
    expect(res).to.have.status(400)
    expect(res.body).to.deep.equal({message: "All fields must be filled"})

  });

  it('Testa retorno de token sem enviar senha', async () => {
    const res = await chai.request(app).post('/login').send({ email: 'lucas@gmail.com'})
    expect(res).to.have.status(400)
    expect(res.body).to.deep.equal({message: "All fields must be filled"})

  });

});
