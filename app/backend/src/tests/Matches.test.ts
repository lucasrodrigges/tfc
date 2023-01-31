import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import * as jwt from '../JWT';
import MatchesModel from '../database/models/MatchesModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes das rotas matches', () => {
  const matchesArr = [{
		id: 1,
		homeTeamId: 16,
		homeTeamGoals: 1,
		awayTeamId: 8,
		awayTeamGoals: 1,
		inProgress: false,
		homeTeam: {
			teamName: "São Paulo"
		},
		awayTeam: {
			teamName: "Grêmio"
		}
	},
	{
		id: 2,
		homeTeamId: 9,
		homeTeamGoals: 1,
		awayTeamId: 14,
		awayTeamGoals: 1,
		inProgress: true,
		homeTeam: {
			teamName: "Internacional"
		},
		awayTeam: {
			teamName: "Santos"
		}
	}]

  const matchesTrueArr = [{
		id: 2,
		homeTeamId: 9,
		homeTeamGoals: 1,
		awayTeamId: 14,
		awayTeamGoals: 1,
		inProgress: true,
		homeTeam: {
			teamName: "Internacional"
		},
		awayTeam: {
			teamName: "Santos"
		}
	}]

  const matchesFalseArr = [{
		id: 1,
		homeTeamId: 16,
		homeTeamGoals: 1,
		awayTeamId: 8,
		awayTeamGoals: 1,
		inProgress: false,
		homeTeam: {
			teamName: "São Paulo"
		},
		awayTeam: {
			teamName: "Grêmio"
		}
	}]

  afterEach(()=>{
    (MatchesModel.findAll as sinon.SinonStub).restore();
  })

  it('Testa rota GET /matches', async () => {
    sinon
    .stub(MatchesModel, 'findAll')
    .resolves(matchesArr as any)

    const res = await chai.request(app).get('/matches').send()
    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal(matchesArr)

  });

  it('Testa rota GET /matches com filtro inProgress true', async () => {
    sinon
    .stub(MatchesModel, 'findAll')
    .resolves(matchesTrueArr as any)

    const res = await chai.request(app).get('/matches?inProgress=true').send()
    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal(matchesTrueArr)
  });

  it('Testa rota GET /matches com filtro inProgress false', async () => {
    sinon
    .stub(MatchesModel, 'findAll')
    .resolves(matchesFalseArr as any)

    const res = await chai.request(app).get('/matches?inProgress=false').send()
    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal(matchesFalseArr)
  });
});
