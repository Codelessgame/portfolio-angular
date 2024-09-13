import {Tag} from "./tag";

export interface BlogCardData {

  id: number

  date?: string
  link?: string
  tags: Tag[]

  title: string
  subtitle: string
  content: string
  image?: string
}
