import { sum } from "./sum"


describe("Given two numbers", () => {
    describe("When both numbers are positive", () => {
        it("Then the addition of both is returned", () => {

            // ARRANGE
            const firstNumber = 7;
            const secondNumber = 4;

            // ACT 
            const addition = sum(firstNumber, secondNumber)

            // ASSERT 
            expect(addition).toEqual(11)
        })
    })
})