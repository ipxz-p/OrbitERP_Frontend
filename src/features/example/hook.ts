import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import ExampleApi from "./api"
import type { Example, ExampleQuery } from "./type"

export const exampleQueryOptions = {
  all: (params?: ExampleQuery) => {
    return queryOptions({
      queryKey: ["examples", params],
      queryFn: () => ExampleApi().getAll(params),
      select: (data) => data.results,
    })
  },
  detail: (id: number) => {
    return queryOptions({
      queryKey: ["example", id],
      queryFn: () => ExampleApi().get(id),
      enabled: !!id,
    })
  },
}

export function useExample() {
  const api = ExampleApi()
  const queryClient = useQueryClient()
  function useExamples(params?: ExampleQuery) {
    return useQuery(exampleQueryOptions.all(params))
  }

  function useExampleDetail(id: number) {
    return useQuery(exampleQueryOptions.detail(id))
  }

  const createMutation = useMutation({
    mutationFn: (payload: Partial<Example>) => api.post(payload),
    onSuccess: () => {
      toast.success("create success")
      queryClient.invalidateQueries({ queryKey: ["examples"] })
    },
  })

  const editMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Partial<Example> }) =>
      api.put(id, payload),
    onSuccess: (_, { id }) => {
      toast.success("update success")
      queryClient.invalidateQueries({ queryKey: ["example", id] })
      queryClient.invalidateQueries({ queryKey: ["examples"] })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: ({ id }: { id: number }) => api.remove(id),
    onSuccess: () => {
      toast.success("delete success")
      queryClient.invalidateQueries({ queryKey: ["examples"] })
    },
  })

  return {
    useExamples,
    useExampleDetail,

    createExample: createMutation.mutate,
    editExample: editMutation.mutate,
    deleteExample: deleteMutation.mutate,

    isLoading: createMutation.isPending || editMutation.isPending || deleteMutation.isPending,
  }
}
