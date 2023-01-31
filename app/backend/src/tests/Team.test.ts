import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import TeamModel from '../database/models/TeamModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas teams', () => {
  const teamArr = [{
    id: 1,
    teamName: 'Corinthians',
  }, {
    id: 2,
    teamName: 'São Paulo',
  }]

  after(()=>{
    (TeamModel.findAll as sinon.SinonStub).restore();
    (TeamModel.findByPk as sinon.SinonStub).restore();
  })

  it('Testa rota GET /teams', async () => {
    sinon
    .stub(TeamModel, 'findAll')
    .resolves(teamArr as TeamModel[])

    const res = await chai.request(app).get('/teams').send()

    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal(teamArr)

  });

  it('Testa rota GET /teams?:id', async () => {
    sinon
    .stub(TeamModel, 'findByPk')
    .resolves(teamArr[0] as TeamModel)

    const res = await chai.request(app).get('/teams/1').send()
    
    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal(teamArr[0])
  });
});
