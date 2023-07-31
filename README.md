# HSO-Tech-test

## Overview
This repo contains cypress tests that are testing a saucelabs url, testing the top 3 areas of the application.

## Getting started
1. Install node.js from https://nodejs.org/en/download
2. To install all the necessary depedencies first clone this repo locally and then run `npm install` to install everything you need.


The following are the versions of the dependancies that the tests have successfully ran on, it is recommended you use these versions:

    Node: 16.10.0
    cypress: 12.17.0
    mochawesome: 7.1.3,
    mochawesome-merge: 4.3.0,
    mochawesome-report-generator: 6.2.0

## Running the tests
Once you have all the dependencies installed to run the tests put `npm run test:report` into your console.
This will run the 3 tests from this repo, it will generate a report for each spec file in the `cypress/reports`, and in a separate folder called mochawesome-report, it will create a combined report in html and JSON and in PDF format (note: these are gitignored).