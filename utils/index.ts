export const getDomain = () => {
  return new URL(process.env.NODE_ENV === 'production'
    ? 'https://discover-coffee-shops-one.vercel.app/'
    : 'http://localhost:3000'
  )
}