import type { Example, ExampleQuery } from "./type"
import { api } from "@/lib/api-client"

export default function ExampleApi() {
  const getAll = (query?: ExampleQuery): Promise<Example> => {
    return api.get("test", {
      params: query,
    })
  }

  const get = (id: number): Promise<Example> => {
    return api.get(`example/${id}`)
  }

  const post = (payload: Partial<Example>): Promise<Example> => {
    return api.post(`example`, payload)
  }

  const put = (id: number, payload: Partial<Example>): Promise<Example> => {
    return api.put(`example/${id}`, payload)
  }

  const remove = (id: number): Promise<void> => {
    return api.delete(`example/${id}`)
  }

  return {
    getAll,
    get,
    post,
    put,
    remove,
  }
}
