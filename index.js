const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({ partitionKey: 'Sample partition key' }));