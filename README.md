
# URL Shortener
Application made using NodeJS, ExpressJS and MongoDB.

## User stories
From: https://github.com/paulotokimatu/fcc-url_shortener.git
- I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
- If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
- When I visit that shortened URL, it will redirect me to my original link.

## Deploying
1. `git clone https://github.com/paulotokimatu/fcc-url_shortener.git`
2. `cd fcc-url_shortener`
3. `npm install`
4. Set up .env variables with MongoDB path
5. `node app.js`