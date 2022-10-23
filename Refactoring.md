# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1) Used ternary operator to improve the code readability insteaad of varous if else blocks

2) Removed the `data` variable assignment since it is used at only single place and we can directcly pass stringified value of  `event` as the argument to the create hash method

3) Created `createHash` function since it is used at multiple places

4) Created `getCandidateValue` function since it helps in readability for the nested ternary operator.

5) Added test cases to check the result based on the input values.