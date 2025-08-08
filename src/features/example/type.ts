import type { Entity } from "@/types/base.type"

export type Example = Entity<{
  name: string
}>

export type ExampleQuery = {
  search: string
}
