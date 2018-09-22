const EduCoin = artifacts.require('EduCoin');
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('EduCoin', accounts => {
  beforeEach(async function() {
    this.token = await EduCoin.new('eduCoin','EUC', 0)
  })

  describe('token attributes', function () {
    it('has the correct name', async function () {
      const name = await this.token.name();
      assert.equal(name, 'eduCoin')
    })

    it('has the correct symbol', async function () {
      const symbol = await this.token.symbol();
      assert.equal(symbol, 'EUC')
    })

    it('has the correct decimals', async function () {
      const decimals = await this.token.decimals();
      decimals.should.be.bignumber.equal(0)
    })
  })
})
