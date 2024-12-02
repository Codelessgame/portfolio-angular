import {BlogTag} from "./blog-tag";

export interface BlogPostData {

  id: number

  date?: string
  link?: string
  tags: BlogTag[]

  title: string
  content: string
  image: string
}
