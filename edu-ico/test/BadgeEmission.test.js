const BadgeEmission = artifacts.require('BadgeEmission');
const Badge = artifacts.require('Badge');

const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();


  contract('BadgeEmission', function ([_, wallet, investor1, investor2]) {
    beforeEach(async function() {
      // deploy token
      this.identifier = 111;
      this.name = 'course';

      this.badge = await Badge.new(this.identifier, this.name, wallet)
      this.badgeEmission = await BadgeEmission.new(this.identifier, this.name, wallet)
    })

    describe('badge emission', function () {
      it('can emmit', async function () {
        await this.badgeEmission.assignBadge(this.badge.address, wallet)
      })
    });



});
