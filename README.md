Workshop 23 Warmup
=
Warmup Project for WarsawJS Workshop 23
-
[![Build Status](https://travis-ci.org/rsp/warsawjs-workshop-23-warmup.svg?branch=master)](https://travis-ci.org/rsp/warsawjs-workshop-23-warmup)
[![CircleCI](https://circleci.com/gh/rsp/warsawjs-workshop-23-warmup.svg?style=svg)](https://circleci.com/gh/rsp/warsawjs-workshop-23-warmup)
<br>
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Introduction
-
This is a fast warmup project.

The goals is not so much for everyone to finish everything on time, but to wake up and get in the coding mode.

For a start, we have a web page (`index.html` located in the `frontend` folder)
that needs to have correct headers - please run the tests to see what's wrong and fix it,
just to see how it's like to run the tests and see the results, using the instructions below.

Getting Started
-
1. Fork the project on GitHub:

![Click the Fork button](fork.png)

2. Clone your fork:
  - `git clone git@github.com:YOUR_USERNAME/warsawjs-workshop-23-warmup.git`

3. Enter the project:
  - `cd warsawjs-workshop-23-warmup`

4. Install dependencies:
  - `npm install`

5. Run the tests:
  - `npm test`
  - see below for more options

6. Implement missing features:
  - `???`

7. GOTO 5

8. Open your application:
  - `npm run start`
  - Open in browser - by default it's available at: http://localhost:3333/

9. Have fun!

Running Tests
-
Here are few different ways to run the tests:

- Fastest with a headless browser - no visible window:
  - `npm test`

- Tests with visible GUI - slower but more fun:
  - `npm run test:gui`

- First the linter and then all tests:
  - `npm run test:all`

- Just the linter:
  - `npm run lint`

All the tasks can be guessed by looking at the tests, but for simplicity, here's a quick summary:

Main Tasks
-
We need to build a single-digit calculator that works like this:

1. You select the operation by clicking `+`, `-`, `*` or `/`
2. You select the first number by clicking one digit from 0 to 9
3. You select the second number by clicking one digit from 0 to 9
4. You see a result of the correct calculation immediately after you click the second digit

The elements that need to be clicked can be anything, they can can look however you like,
they can be placed wherever you want, they only need to have **correct element IDs**
so that our testing robot knows what to click:

- the operation elements must have IDs:
  - `add`, `sub`, `mul` and `div` for addition, subtraction, multiplication and division
  - e.g. `<a href="..." id="add">[+]</a>`
- the number elements must have IDs:
  - `n0`, `n1`, `n2`, ..., `n9` for all the digits
  - e.g. `<a href="..." id="n1">1</a>`
- the result must be a text inside of an element with ID:
  - `result`
  - e.g. `<span id="result">23</span>`

Possible Solutions
-
All the tasks can be solved by either:

- completely static HTML files
- simple client-side JavaScript
- server-side generated HTML
- client-side JavaScript calling server-side API with AJAX calls

All of those ways to solve the tasks will be provided as examples after the workshops.

You can use any web framework that you want, or you can use no framework at all - it's up to you.

If you are a beginner, don't worry about the visual aspects, just try to make it working
with simple code.
For your convenience there is jQuery already installed in `frontend/lib` that you can include in your HTML
with:
- `<script src="/lib/jquery.min.js"></script>`

If you are a pro, then by all means do worry about the visual aspects and make it pretty
using a web framework that you prefer to work with, e.g. Vue, React, Angular, Ember etc.
and you'll know how to include your framework in your project.

Extra Tasks
-
For anyone who finished early there are some additional tasks:

1. Make it pretty!

2. Make sure that the code satisfies the linter and all tests pass:
  - `npm run test:all`
  - you can either follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) that is currently configured or use some other linter configuartion of your choice

3. Configure Travis CI to run your tests automatically
  - Just go to https://travis-ci.org/
  - Login with GitHub if needed
  - Click the "+" icon
  - Click "Sync account"
  - Toggle the checkbox next to your project's name<br>You'll get: https://travis-ci.org/YOUR_USERNAME/warsawjs-workshop-23-warmup
  - Push changes to your repo and Travis should start automatically<br>(or click More options / Trigger build on your project's Travis page)

4. Add correct CI status badges to the README
  - Click the badge on your project's Travis page for correct URLs

5. Deploy your application to either:
  - Heroku (click the Deploy to Heroku button above)
  - Netlify (if you only use client-side JavaScript)
  - Digital Ocean ([promo link](https://m.do.co/c/64b6b577b3de) for free 10 USD)
  - Vultr ([promo link](https://www.vultr.com/?ref=7107329) for free 10 USD)

6. Add a domain name ([promo link](http://www.dynadot.com/?s8w657UD6gy7z6h) for free 5 USD)

7. Present your application to the public after the workshops!

---

Author
-
Rafał Pocztarski - https://github.com/rsp

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
