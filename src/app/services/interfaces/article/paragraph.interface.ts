import { CodeSection } from "./codesection.interface";

export interface Paragraph {
    id: string;
    text: string;
    chapterId: string;
    codeSections: CodeSection[];
}