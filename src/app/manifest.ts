export default function manifest() {
  return {
    name: 'Usman Zafar - Portfolio',
    short_name: 'Usman Portfolio',
    description: 'Portfolio of Usman Zafar - AI/ML Developer & Computer Science Student',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf7f2',
    theme_color: '#c1521f',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
