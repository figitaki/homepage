# homepage

This is the code that powers `figitaki.com`, built on [next.js](https://zeit.co/blog/next) and deployed to the cloud via [now](https://zeit.co/now).

## How to run

### Development

All that's needed to run this blog is:

```
npm install
npm run dev
```

Then head to `http://localhost:3000`. Changes you make to components will henceforth be reflected there in realtime.

### Deployment

All that's needed to deploy this blog to the cloud is to execute a single command ([install](https://zeit.co/now) it here)

```
now
```

When I deploy, I get a new instance of the blog at a new, immutable URL. When I browse to it and vierify it looks ok, I set up an alias targeting the production URL `figitaki.com`.

```
now alias <url> figitaki.com
```
