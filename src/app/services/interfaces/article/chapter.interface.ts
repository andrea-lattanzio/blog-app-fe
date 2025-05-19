import { Paragraph } from "./paragraph.interface";

export interface Chapter {
    id: string;
    title: string;
    paragraphs: Paragraph[];
    articleId: string;
}