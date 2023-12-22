import {AxiosError} from 'axios';
import {BackendError} from "@/entities/quest/questThunks";

export const getErrorMessage = (error: unknown | AxiosError<BackendError>) => {
    return (
        (error as AxiosError<BackendError>).response?.data.message ||
        'Неизвестная ошибка на сервере...'
    );
};
