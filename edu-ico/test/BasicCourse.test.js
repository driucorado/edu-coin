const BasicCourse = artifacts.require('BasicCourse');
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();


  contract('BaseCourse', function ([_, wallet, investor1, investor2]) {
    beforeEach(async function() {
      // deploy token
      this.value = 10;
      this.name = 'course';

      this.course = await BasicCourse.new(web3.toBigNumber(this.value),this.name)
    })

      describe('enroll student', function () {
        it('can enroll student', async function () {
          const isRolled = await this.course.enrollStudent(wallet)
          assert.isTrue(isRolled)
        });

        it('can unroll student', async function () {
          await this.course.enrollStudent(wallet)
          const isUnRolled = await this.course.unrollStudent(wallet)
          assert.isTrue(isUnRolled)
        });
      });

      describe('active course', function () {
        it('can active course', async function () {
            await this.course.active();
            assert.isTrue(this.course.isActive())
        });

        it('can disable course', async function () {
            await this.course.disable();
            assert.isTrue(!this.course.isActive())
        });
      });
});
