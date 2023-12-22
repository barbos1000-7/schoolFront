export const TimeOfDate = (time: string): string => {
    let diff = (Date.now() - Date.parse(time)) / (1000 * 3600 * 24)
    if (diff > 365) {
        diff = Math.ceil(diff / 365)
        if (diff == 1) {
            return diff.toString() + ' год назад'
        }
        return diff.toString() + ' года назад'
    } else if (diff < 3) {
        if (diff > 2) {
            return "Позавчера"
        } else {
            if (diff < 2) {
                if (diff >= 1) {
                    return "Вчера"
                } else {
                    diff = diff * 24
                    if (diff < 1) {
                        diff = diff * 60
                        if (diff < 1) {
                            return 'менее минуты назад'
                        } else {
                            diff = Math.ceil(diff)
                            if (diff.toString().endsWith('1'))
                                return diff + ' минуту назад'
                            else
                                return diff.toString() + ' минут назад'
                        }
                    } else {
                        diff = Math.ceil(diff)
                        if (diff == 1)
                            return diff.toString() + ' час назад'
                        else if (diff > 4) {
                            return diff.toString() + ' часов назад'
                        } else
                            return diff.toString() + ' часа назад'
                    }
                }
            }
        }
    } else if (diff >= 3) {
        if (diff > 29) {
            diff = Math.ceil(diff / 30)
            if (diff == 1)
                return diff.toString() + ' месяц назад'
            else if (diff < 5)
                return diff.toString() + ' месяца назад'
            else return diff.toString() + ' месяцев назад'
        } else if (diff < 1) {
            return Math.ceil(diff).toString() + ' день назад'

        } else if (diff <= 4) {
            return Math.ceil(diff).toString() + ' дня назад'

        } else
            return Math.ceil(diff).toString() + ' дней назад'
    }


    console.log(diff)
    return 'Недавно'
}
