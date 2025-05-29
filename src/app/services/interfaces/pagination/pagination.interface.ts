export enum ResponseStatus {
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface PaginatedResult<T> {
    status: ResponseStatus;
    total: number;
    page: {
        index: number;
        size: number;
        items: T[];
    }
}

export interface PaginationQueryDto {
  page?: number;
  size?: number;
}