const { getMean, getMedian, getMode }= require("./express");

describe("Stat Operations", () => {
    let nums = [3, 1, 2, 2, 4, 6, 9, 9, 2, 2];
    
    test("test getMean()", () => {
        let res = getMean(nums);

        expect(res).toEqual(4);
    });

    test("test getMedian()", () => {
        let res = getMedian(nums);

        expect(res).toEqual(5);
    });

    test("test getMode()", () => {
        let res = getMode(nums);

        expect(res).toEqual(2);
    });
});