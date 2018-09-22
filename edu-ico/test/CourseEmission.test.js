const CourseEmission = artifacts.require('CourseEmission');
const BasicCourse = artifacts.require('Course');
const BigNumber = web3.BigNumber

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('CourseEmission', function ([_, wallet, investor1, investor2]) {
  beforeEach(async function() {
    this.courseEmission = await CourseEmission.new()
    this.value = 10;
    this.name = 'course';
    this.course = await BasicCourse.new(this.value,this.name)
  })

  describe('emit course', function () {
    it('can emit course', async function () {
       const name = await this.course.name();
       await this.courseEmission.registerCourse(name, this.course.address)
    })
  });
});
