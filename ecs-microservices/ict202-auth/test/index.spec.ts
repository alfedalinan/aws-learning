let importTest = (name, path) => {
    describe(name, () => {
        require(path);
    });
};

importTest("Authenticate", "./authenticate.spec.ts");