export const getShortDate = (date: string) => {
  const dateString = date
  const dateParts = dateString.split('.')
  const year = parseInt(dateParts[2], 10) + 2000 // Convert YY to YYYY

  const dateObject = new Date(
    year,
    parseInt(dateParts[1], 10) - 1,
    parseInt(dateParts[0], 10),
  )

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }
  const formatter = new Intl.DateTimeFormat('ru-RU', options)

  const formattedDate = formatter.format(dateObject)
  return formattedDate
}
