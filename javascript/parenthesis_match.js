/** 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s){
    const stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    if(s.length === 0){
        return false;
    }
    for (chars of s){
        if( chars === "(" || chars === "{" || chars === "["){
            stack.push(chars);
        }
        else {
            if (stack.length === 0 ){
                return false;
            }
            let top = stack.pop();
            if(top !== pairs[chars]){
                return false;
            }
        }
    }
    return stack.length === 0;
};


// testing parenthesis code 
const assert = require("node:assert/strict");

/**
 * Tests the isValid function against different test cases.
 */
function runTests() {

    const testCases = [
        { input: "()", expected: true, description: "Simple parentheses" },
        { input: "()[]{}", expected: true, description: "Multiple bracket types" },
        { input: "(]", expected: false, description: "Mismatched brackets" },
        { input: "([)]", expected: false, description: "Incorrect nesting" },
        { input: "([])", expected: true, description: "Correct nested brackets" },
        { input: "(((", expected: false, description: "Unmatched opening brackets" },
        { input: ")))", expected: false, description: "Unmatched closing brackets" },
        { input: "(()", expected: false, description: "Missing closing bracket" },
        { input: "{[]}", expected: true, description: "Multiple nested brackets" },
        { input: "", expected: false, description: "Empty string" },
        { input: "[", expected: false, description: "Single opening bracket" },
        { input: "]", expected: false, description: "Single closing bracket" },
        { input: "({[]})", expected: true, description: "Deep nesting" },
        { input: "((()))", expected: true, description: "Repeated nested parentheses" },
        { input: "([{}])", expected: true, description: "All bracket types nested" }
    ];

    let passed = 0;
    let failed = 0;

    for (const test of testCases) {

        const actual = isValid(test.input);

        try {
            assert.equal(actual, test.expected);

            console.log(`PASS: ${test.description}`);
            passed++;

        } catch (error) {

            console.log(`FAIL: ${test.description}`);
            console.log(`Input: ${test.input}`);
            console.log(`Expected: ${test.expected}`);
            console.log(`Actual: ${actual}`);

            failed++;
        }
    }

    console.log("\n========== TEST SUMMARY ==========");
    console.log(`Total tests: ${testCases.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
}

runTests();
