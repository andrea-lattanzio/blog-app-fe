import { User } from "../auth.service.interfaces";
import { Chapter } from "./chapter.interface";

export interface Article {
    id: string;
    title: string;
    likes: number;
    description : string;
    tag : string;
    updatedAt : Date;
    author?: User;
    chapters?: Chapter[];
}