import { User } from "../auth.service.interfaces";
import { Chapter } from "./chapter.interface";

export interface Article {
    id: string;
    title: string;
    description: string;
    tag: string;
    updatedAt: Date;
    author?: User;
    liked: boolean;
    views: number;
    _count?: { likes: number };
    chapters?: Chapter[];
}