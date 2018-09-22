const Badge = artifacts.require('Badge');
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();


  contract('Badge', function ([_, wallet, investor1, investor2]) {
    beforeEach(async function() {
      // deploy token
      this.identifier = 111;
      this.name = 'course'
      this.badge = await Badge.new(this.identifier, this.name, wallet)
    })

    describe('badge attributes', function () {
      it('has the correct name', async function () {
        const name = await this.badge.name();
        assert.equal(name, 'course')
      })
      it('has the correct holder', async function () {
        const holder = await this.badge.holder();
        assert.equal(holder, wallet)
      })
    });



});
