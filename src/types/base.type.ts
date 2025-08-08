export interface BaseEntity {
  id: number
}

export type Entity<T> = BaseEntity & T

export type BaseResponse<T> = {
  count: number
  results: T
}
