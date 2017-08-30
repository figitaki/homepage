import Head from 'next/head'

export default () => (
  <main>
    <Head>
      <title>Carey Janecka &mdash; Developer. Designer. Artist.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <h1>Carey Janecka</h1>
    <h2>Developer. Designer. Artist.</h2>
    <ul className="social-links">
      <li>
        <a href="https://twitter.com/figitaki">
          <img src="/static/twitter.svg" width="24px" height="24px" alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@figitaki">
          <img src="/static/medium.svg" width="24px" height="24px" alt="Medium" />
        </a>
      </li>
      <li>
        <a href="https://github.com/figitaki">
          <img src="/static/github.svg" width="24px" height="24px" alt="GitHub" />
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/carey-janecka">
          <img src="/static/soundcloud.svg" width="24px" height="24px" alt="SoundCloud" />
        </a>
      </li>
    </ul>
  </main>
)
