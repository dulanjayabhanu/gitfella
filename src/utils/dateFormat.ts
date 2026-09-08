import type { DateStyle } from "@/types/DateStyle.ts"

const dateFormat = (date: string, dateStyle: DateStyle): string => {
  let dateTimeFormatOption: Intl.DateTimeFormatOptions

  switch (dateStyle) {
    case "SHORT":
      dateTimeFormatOption = {
        dateStyle: 'short'
      }
      break
    case "LONG":
      dateTimeFormatOption = {
        dateStyle: 'long'
      }
      break
    case "FULL":
      dateTimeFormatOption = {
        dateStyle: 'full'
      }
      break
    case "WITH_TIME":
      dateTimeFormatOption = {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
      break
    default:
      dateTimeFormatOption = {
        dateStyle: 'long'
      }
  }

  return new Intl.DateTimeFormat("en-US", dateTimeFormatOption)
    .format(new Date(date))
}

export default dateFormat