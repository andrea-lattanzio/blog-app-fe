import { User } from "../auth.service.interfaces";
import { Chapter } from "./chapter.interface";

export interface ArticleInterface {
    id: string;
    title : string;
    description : string;
    tag : string;
    updatedAt : Date;
    author: User;
    chapters: Chapter[];
}