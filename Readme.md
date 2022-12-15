# String Calculator Testing with Jest

This project is a simple String Calculator written in JavaScript to Test The Required Test Cases with Jest .

this Task is a part of my internship at <a href="https://www.foothillsolutions.com">Foothill Technology Solutions, LLC.</a>

## Test Cases :

- Create a simple String calculator with a method int Add(string numbers) The method can take 0, 1 or 2 numbers,
  and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2" .
- Allow the Add method to handle an unknown amount of numbers.
- Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. if there are multiple negatives, show all of them in the exception message .
- Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2 .


## Installation

Clone this repository to get started :

<a href="https://github.com/AsadThafer/String-Calculator">Source Code</a>

## Prerequisites

In order to use this project, you will need to have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)

## Installing

To install the dependencies, run the following command:

```
npm install
```

## Usage

To run the tests, use the following command:

```
npm run test String_calculator.test.js
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
