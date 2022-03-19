import { describe } from "mocha";

let importTest = (name, path) => {
    describe(name, () => {
        require(path);
    });
};

describe("Run all test", () => {

    importTest("Sign Up", "./sign-up.spec.ts");
    
});