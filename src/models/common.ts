export type PaginationParams = {
    _limit: number,
    _page: number,
    _total: number
}
export type ListRespone<T> = {
    data: T[]
    pagination: PaginationParams,
}