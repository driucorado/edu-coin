const BasicCourse = artifacts.require('Course');
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();


  contract('BaseCourse', function ([_, wallet, investor1, investor2]) {
    beforeEach(async function() {
      // deploy token
      this.value = 10;
      this.name = 'course';

      this.course = await BasicCourse.new(this.value,this.name)
    })

      describe('enroll student', function () {
        it('can enroll student', async function () {
          await this.course.enrollStudent(wallet)
          const student = await this.course.students(wallet)
          assert.isTrue(student)
        });

        it('can unroll student', async function () {
          await this.course.enrollStudent(wallet)
          await this.course.unrollStudent(wallet)
          const student = await this.course.students(wallet)
          assert.isTrue(!student)
        });
      });

      describe('active course', function () {
        it('can active course', async function () {
            await this.course.active();
        });

        it('can disable course', async function () {
            await this.course.disable();
        });
      });
});
