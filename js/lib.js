/**
 * Adds two numbers and returns the sum.
 * @param {number|string} a
 * @param {number|string} b
 * @returns {number}
 */
const sum = (a, b) => Number(a) + Number(b);

/**
 * Raises a number to a power.
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
const pow = (x, n) => x ** n;

/**
 * Calculates the factorial of a number.
 * @param {number} n
 * @returns {number}
 */
const factorial = (n) => (n ? n * factorial(n - 1) : 1);

/**
 * Calculates the nth Fibonacci number.
 * @param {number} n
 * @returns {number}
 */
const fibonacci = (n) => (n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1);

/**
 * Removes an element from an array of strings by name.
 * @param {string[]} list
 * @param {string} name
 * @returns {string[]}
 */
const removeByName = (list, name) => list.filter(item => item !== name);

/**
 * Creates a counter function.
 * @param {number} currentCount
 * @returns {function(): number}
 */
const makeCounter = (currentCount) => () => currentCount++;

/**
 * Creates an async timeout and returns the Unix time as the timer ID.
 * @param {number} time
 * @returns {Promise<number>}
 */
const getAsyncTimerId = (time) => new Promise(resolve => setTimeout(() => resolve(Math.floor(Date.now() / 1000)), time));

/**
 * Returns a promise that multiplies the parameter after a timeout.
 * @param {number} x
 * @returns {Promise<number>}
 */
const asyncMultiply = async (x) => new Promise(resolve => setTimeout(() => resolve(2 * x), 3000));

/**
 * Sends a GET HTTP request to the server.
 * @param {string} url
 * @returns {Promise<unknown>}
 */
const httpGet = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    (xhr.status === 200) ? resolve(xhr.response) : reject(new Error(xhr.statusText));
  };

  xhr.onerror = () => reject(new Error("Network Error"));

  xhr.send();
});
