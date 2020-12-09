export default (context, inject) => {
  let logger
  if (process.env.NODE_ENV !== 'production') {
    logger = (...params) => {
      console.log(`LOGGER ${process.env.NODE_ENV}:`, ...params) // eslint-disable-line no-console
    }
  } else {
    logger = () => {
      return null // noop
    }
  }
  inject('logger', logger)

  inject('formatDate', (date) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    return new Date(date).toLocaleDateString('en-US', options)
  })

  if (context) {
    return null
  } // silly but cleans up lint error
}
