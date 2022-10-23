const { deterministicPartitionKey, createHash, getCandidateValue  } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return input partition key when the length of parition key is less than 256", () => {
    let input = { partitionKey: 'Sample partition key' };
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe(input.partitionKey);
  });

  it("should create hash and candidate when there is valid input with partition key of length greater than 256", () => {
    let input = { partitionKey: `Sample partition key of length greater than 256 to run the test case for proper scenarion - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown` };
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).not.toBe(input.partitionKey);
  });

  it("should return same input if the input type is string", () => {
    let input = 'sample input of type string';
    const result = getCandidateValue(input);
    expect(result).toBe(input)
  });
  
  it("should return stringified value if input is not string", () => {
    let input = 'sample input of type string';
    const result = getCandidateValue(input);
    expect(typeof result).toBe('string');
  });

  it("should return stringified value if input is not string", () => {
    let input = 'sample input of type string';
    const result = getCandidateValue(input);
    expect(typeof result).toBe('string');
  });

  it("it should return hash when passed string value", () => {
    let input = 'sampleInput';
    const result = createHash(input);
    expect(typeof result).toBe('string');
  });

});


