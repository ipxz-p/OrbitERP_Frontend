import type { Entity } from "@/types/base.type"

export type Example = Entity<{
  status: string
}>

export type ExampleQuery = {
  search: string
}
