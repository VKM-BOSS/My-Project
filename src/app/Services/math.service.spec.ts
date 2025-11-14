import { MathService } from "./math.service"

//decribe is function where out test cases run.
//place f before decsribe makes it runs only than other test cases.
describe('MathService', () => {

    let service:MathService;
    //lifecyclehooks

    //runs before each test cases
    beforeEach(()=>{
        service = new MathService();
    })

    //runs after each test cases
    afterEach(()=>{

    })

    //runs before once executing all cases
    beforeAll(()=>{

    })

    //runs after once executing all cases
    afterAll(()=>{

    })


    //it - individual test

    it('is service instance created',()=>{
        expect(service).toBeTruthy();
    })
    it('adding two numbers working Correctly', () => {
        const result = service.add(20, 2);
        //excepting answer from test case
        expect(result).toEqual(22);
    })

    it('subtracting two numbers working Correctly', () => {
        const result = service.subtract(20, 2);
        //excepting answer from test case
        expect(result).toEqual(18);
    })

    it('multiply two numbers working Correctly', () => {
        const result = service.multiply(20, 2);
        //excepting answer from test case
        expect(result).toEqual(40);
    })

    it('divide two numbers working Correctly', () => {
        const result = service.divide(20, 2);
        //excepting answer from test case
        expect(result).toEqual(10);
    })

    it('divde throws error if either of value is zero',()=>{
        // const result = service.divide(20,0);
        expect(()=>service.divide(20,0)).toThrowError('Cannot divide 0 or divided by 0')
    })
})