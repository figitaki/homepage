import Head from 'next/head'

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
      <title>Crowdfunding for Ganga Libaray</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/static/favicon.ico" type="type/x-icon" />
      <link rel="stylesheet" href="/static/ganga.css" />
    </Head>
    <h1>Help support the Ganga library</h1>
    <p>I'm raising money to support the Ganga library, a non-profit organization working to preserve the works of nobel lauretes.</p>
    <div className="links">
      <a href="http://www.gangalib.org/" target="new">Learn More</a>
      <a href="https://paypal.me/figitaki/10" target="new">Donate</a>
    </div>
  </main>
)
