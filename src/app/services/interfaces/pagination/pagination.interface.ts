export enum ResponseStatus {
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface paginationResult<T> {
    status: ResponseStatus;
    total: number;
    page: {
        index: number;
        size: number;
        items: T[];
    }
}