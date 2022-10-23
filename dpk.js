const crypto = require("crypto");

const getCandidateValue = (candidate) =>  {
  return typeof(candidate) !== 'string' ? JSON.stringify(candidate) : candidate;
}

const createHash = (input) => {
  return crypto.createHash("sha3-512").update(input).digest("hex");
}

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  
  
  if (event) {
    candidate = event.partitionKey ? event.partitionKey : createHash(JSON.stringify(event));
  }

  candidate =  !candidate ? TRIVIAL_PARTITION_KEY : getCandidateValue(candidate);
 
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }

  return candidate;
};

module.exports = { deterministicPartitionKey, createHash, getCandidateValue };