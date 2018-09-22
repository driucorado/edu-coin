const EduCoinEmission = artifacts.require('EduCoinEmission');
const EduCoin = artifacts.require('EduCoin');
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('EduCoinEmission', function ([_, wallet, investor1]) {
  beforeEach(async function() {
    // deploy token
    this.name = 'eduCoin';
    this.symbol = 'EUC';
    this.decimals = 0;

    this.token = await EduCoin.new('eduCoin','EUC', 0)

    // config
    this.rate = 1;
    this.wallet = wallet;

    // deploy crowdsale
    this.emisor = await EduCoinEmission.new(this.rate, this.wallet, this.token.address)
  })

  describe('eduCoinCrowsale', function () {
    it('tracks token', async function () {
      const token = await this.emisor.token()
      token.should.equal(this.token.address)
    })

    it('tracks wallet', async function () {
      const wallet = await this.emisor.wallet()
      wallet.should.equal(this.wallet)
    })
    //
    // it('tracks rate', async function () {
    //   const rate = await this.emisor.rate()
    //   rate.should.be.bignumber(this.rate)
    // })
  })
});
