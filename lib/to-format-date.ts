import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { ko } from 'date-fns/locale'

const toFormatDate = (date: string, setFormat: string) => {
  return format(parseISO(date), setFormat, { locale: ko })
}

export default toFormatDate
