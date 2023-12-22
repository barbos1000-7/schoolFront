export const SubjectById = ({id}: { id: number }): string => {
    switch (id) {
        case 1:
            return 'Математика'
        case 2:
            return 'Физика'
        case 3:
            return 'Биология'
        case 4:
            return 'География'
        case 5:
            return 'Английский'
        case 6:
            return 'Информатика'
        case 7:
            return 'История'
        case 8:
            return 'Литература'
        case 9:
            return 'Обществознание'
        case 10:
            return 'ОБЖ'
        case 11:
            return 'Химия'
        default:
            return 'Предмета нет'
    }

}