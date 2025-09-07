import { PostModel } from "@/model/posts/post-model";

export interface PostRepository {
  findAll(): Promise<PostModel[]>
  findById(id: string): Promise<PostModel>
}
