import { Injectable } from "@angular/core";
import fakeArticles from "../../../assets/data/articles/angularArticles";

@Injectable({
    providedIn: 'root'
})
export class FakeArticleService {
    constructor() { }

    getArticles() {
        return fakeArticles;
    }

    getArticleById(id: string) {
        return fakeArticles.find(article => article.id === id);
    }

    getArticleByTitle(title: string) {
        return fakeArticles.find(article => article.title === title);
    }
}