import Head from 'next/head'

const SocialLink = ({ href, src, alt, color }) => (
  <li style={{ color }}>
    <a href={href}>
      <img src={src} width="24px" height="24px" alt={alt} />
    </a>
  </li>
)

const socialLinks = [
  { alt: 'Twitter', src: '/static/twitter.svg', href: 'https://twitter.com/figitaki', color: '#1da1f2' },
  { alt: 'Medium', src: '/static/medium.svg', href: 'https://medium.com/@figitaki', color: '#00ab6c' },
  { alt: 'LinkedIn', src: '/static/linkedin.svg', href: 'https://linkedin.com/in/cjanecka', color: '#0077b5' },
  { alt: 'GitHub', src: '/static/github.svg', href: 'https://github.com/figitaki', color: '#333' },
  { alt: 'SoundCloud', src: '/static/soundcloud.svg', href: 'https://soundcloud.com/figitaki', color: '#ff8800' },
]

export default () => (
  <main>
    <Head>
      <title>Carey Janecka &mdash; Developer. Designer. Artist.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/static/favicon.ico" type="type/x-icon" />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <h1>Carey Janecka</h1>
    <h2>Developer. Designer. Artist.</h2>
    <ul className="social-links">
      {socialLinks.map((link) =>
        <SocialLink {...link} />
      )}
    </ul>
  </main>
)
