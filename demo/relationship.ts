const keys = ["a", "b", "c"];
const values = [[1, 2, 3], [2, 3, 4]];

function createRelationship(keys, value) {
    return keys.reduce((iterationResult, currentKey, index) => {
        Reflect.set(iterationResult, currentKey, value[index]);
        return iterationResult;
    }, {});
};

function multipleRelationships(keys, values) {
    return values.map(value => createRelationship(keys, value));
}
const result = multipleRelationships(keys, values);
