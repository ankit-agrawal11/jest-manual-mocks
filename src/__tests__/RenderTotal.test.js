import { RenderTotal } from '../components/RenderTotal'
import { MathUtils } from '../utils/MathUtils';

// To use the manual mock for MathUtils. The scope is global.
jest.mock('../utils/MathUtils');


describe('RenderTotal', function() {
    it('uses manual mock for MathUtils and renders sum of two numbers', function() {
        // Calls the mocked function from MathUtils to return 23.
        expect(RenderTotal()).toEqual("The sum of 2 and 3 is: 23");
    });

    it('renders actual sum of two numbers', function() {
        // Override the manual mock
        MathUtils.addNumbers = jest.fn(() => {
            return 10;
        });

        expect(RenderTotal()).toEqual("The sum of 2 and 3 is: 10");
    });
});