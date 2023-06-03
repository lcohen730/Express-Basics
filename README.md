# Multi-Purpose Express Application
**Practical Homework for General Assembly Software Engineering Immersive**

This is my first Express homework from my software engineering immersive, practicing the basics of Express.

**Learning Objectives**
- Practice setting up express applications.
- Practice creating custom routes.
- Practice using parameters from a request.

The following routes were created for this multi-purpose Express.js application:

## Greetings

The route '/greeting' should display the greeting "Hello, You."
The route '/greeting/:name' should display the greeting "You know your way around a webpage, <name>.", where <name> is the inputed name in the URL.

## Tip Calculator

The route '/tip/:total/:percentage' should display how much you should tip based on the inputed total and percentage values in the URL.

## Magic 8 Ball

The route '/magic/:question' should display the question filled in as the paramater as well as a random "Magic 8 Ball" response.

To add spaces to the question in the URL, the user can type %20 instead.

For example, typing Will%20I%20Be%20A%20Millionaire in the question paramater will print back onto the page as Will I Be A Millionaire? along with a random "Magic 8 Ball" response to the question.

## Fibonacci

The route '/fibonacci/:number' should display to the user if the number filled in as the parameter is a Fibonacci number or not.