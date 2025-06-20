export interface ArticleTitleConfiguration {
    font: string;
    title: string;
    subtitle: string;
    color: string;
}

export const react: ArticleTitleConfiguration = {
    font: "space",
    title: "React",
    subtitle: "React is a powerful JavaScript library, created by Facebook. It is very popular in component - based web apps.This section will explore React's main concepts and best practices.",
    color: "#61dbfb"
}

export const angular: ArticleTitleConfiguration = {
    font: "roboto",
    title: "Angular",
    subtitle: "Angular is a comprehensive JavaScript framework, maintained by Google. It's widely used for enterprise-grade applications. This section will dive into Angular's core principles and best practices.",
    color: "#c7102d"
}

export const node: ArticleTitleConfiguration = {
    font: "dmMono",
    title: "Node.js",
    subtitle: "Node.js is a JavaScript runtime environment, built on Chrome's V8 engine. It's ideal for scalable server-side applications. This section will cover Node.js-based frameworks like Express and NestJS.",
    color: "#77ba26"
}

export const ARTICLE_TITLE_CONFIGS: Record<string, ArticleTitleConfiguration> = {
    react,
    angular,
    node
};

