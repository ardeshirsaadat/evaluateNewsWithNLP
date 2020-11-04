# Project Instructions

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

## Setting up the API

The MeaningCloud API is for performing a detailed multilingual sentiment analysis of texts from different sources.
The text provided is analyzed to determine if it expresses a positive/negative/neutral sentiment; to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

### Step 1: Signup for an API key

First, you will need to go [here](https://www.meaningcloud.com/developer/create-account). Signing up will get you an API key.

### Step 2: Environment Variables

Next we need to declare our API keys, which will look something like this:

```
// set API credentias
var meaningCloud = {
  application_key: "your-key"
};
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow us to use environment variables we set in a new file
- [ ] Create a new `.env` file in the root of your project
- [ ] Go to your .gitignore file and add `.env` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:

```
API_KEY=**************************
```

- [ ] Add this code to the very top of your server/index.js file:

```
const dotenv = require('dotenv');
dotenv.config();
```

- [ ] Reference variables you created in the .env file by putting `process.env` in front of it, an example might look like this:

```
console.log(`Your API key is ${process.env.API_KEY}`);
```

```
// set API credentials
//   just make sure to make that change universally!
var textapi = {
  application_key: process.env.API_KEY
});
```

### Step 3: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://www.meaningcloud.com/developer/apis).

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

## After the MeaningCloud API

Once you are hooked up to the MeaningCloud API, you are most of the way there!.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers.
- Test that the site is now available even when you stop your local server

## Deploying

A great step to take with your finished project would be to deploy it!,checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
