export interface BaseRequest {
    body?: string | any,
    query?: string | any,
    params?: string | any,
    ip?: string | any,
    method?: string | any,
    path?: string | any,
    url?: string | any,
    headers?: {
        'Content-Type'?: string | any,
        Referer?: string | any,
        'User-Agent'?: string | any,
        Authorization?: string | any
    }
}