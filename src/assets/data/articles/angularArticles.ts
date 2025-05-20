import { Article } from "../../../app/services/interfaces/article/article.interface";
import { User } from "../../../app/services/interfaces/auth.service.interfaces";

// Mock User (for author)
const mockUser: User = {
  name: 'Jane',
  lastname: 'Doe',
  username: 'jane_doe',
  fullname: 'Jane Doe',
  created: '2025-05-01T12:00:00Z',
  email: 'jane.doe@example.com',
};

const angularArticles: Article[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    title: 'Getting Started with Angular: A Comprehensive Guide',
    description:
      'An in-depth introduction to the Angular framework, covering its core concepts and how to set up your first project.',
    tag: 'angular',
    updatedAt: new Date('2025-05-16T14:30:00Z'),
    author: mockUser,
    chapters: [
      {
        id: 'chap-2-angular',
        title: 'Setting Up Your Angular Environment',
        articleId: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
        paragraphs: [
          {
            id: 'para-2-2-angular',
            text: 'The Angular CLI is a powerful tool that helps you scaffold new projects, generate components, services, and other Angular artifacts, as well as build, test, and deploy your application. To install it, open your terminal and run the following command:',
            chapterId: 'chap-2-angular',
            codeSections: [
              {
                id: 'code-1-angular',
                language: 'bash',
                code: 'npm install -g @angular/cli',
                caption: 'Installing Angular CLI globally',
                paragraphId: 'para-2-2-angular'
              },
            ],
          },
          {
            id: 'para-2-3-angular',
            text: 'Once the CLI is installed, you can create a new Angular project by navigating to your desired directory and running:',
            chapterId: 'chap-2-angular',
            codeSections: [
              {
                id: 'code-2-angular',
                language: 'bash',
                code: 'ng new my-first-angular-app\ncd my-first-angular-app',
                caption: 'Creating a new Angular project',
                paragraphId: 'para-2-3-angular'
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '98765432-10fe-dcba-9876-543210fedcba',
    title: 'Building Server-Side Applications with Angular Universal cli tool',
    description:
      'Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance. Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance.',
    tag: 'angular',
    updatedAt: new Date('2025-05-21T15:45:00Z'),
    author: mockUser,
    chapters: [
      {
        id: 'chap-1-universal',
        title: 'Introduction to Server-Side Rendering (SSR)',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-1-1-universal',
            text: "Server-Side Rendering (SSR) is the process of rendering client-side web applications on the server and sending a fully rendered HTML page to the client's browser. This contrasts with Client-Side Rendering (CSR), where the browser downloads a minimal HTML page and then renders the content using JavaScript.",
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array

          },
          {
            id: 'para-1-2-universal',
            text: 'SSR offers several advantages, including improved SEO (search engine crawlers can index the fully rendered content), faster initial load time (users see content quicker), and better performance on devices with limited processing power.',
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array
          },
        ],
      },
      {
        id: 'chap-2-universal',
        title: 'Setting Up Angular Universal',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-2-1-universal',
            text: 'Angular Universal is the official Angular solution for server-side rendering. You can add Universal to an existing Angular CLI project using the following command:',
            chapterId: 'chap-2-universal',
            codeSections: [
              {
                id: 'code-1-universal',
                language: 'bash',
                code: 'ng add @angular/universal',
                caption: 'Adding Angular Universal to a project',
                paragraphId: 'para-2-1-universal'
              },
            ],
          },
          {
             id: 'para-2-2-universal',
             text: 'This command will add the necessary dependencies and modify your project structure to support server-side rendering.',
             chapterId: 'chap-2-universal',
             codeSections: [],
          }
        ],
      },
      {
        id: 'chap-3-universal',
        title: 'Understanding the Universal Workflow',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-3-1-universal',
            text: 'When a user requests a page, the server executes your Angular application, renders the requested component into HTML, and sends this HTML to the browser. The browser then parses and displays this static HTML, providing a faster initial view. In the background, Angular then bootstraps on the client-side, making the application interactive.',
            chapterId: 'chap-3-universal',
            codeSections: [],
          },
        ],
      },
    ],
  },
  {
    id: '98765432-10fe-dcba-9876-543210fedcba',
    title: 'Building Server-Side Applications with Angular Universal cli tool',
    description:
      'Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance. Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance.',
    tag: 'angular',
    updatedAt: new Date('2025-05-21T15:45:00Z'),
    author: mockUser,
    chapters: [
      {
        id: 'chap-1-universal',
        title: 'Introduction to Server-Side Rendering (SSR)',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-1-1-universal',
            text: "Server-Side Rendering (SSR) is the process of rendering client-side web applications on the server and sending a fully rendered HTML page to the client's browser. This contrasts with Client-Side Rendering (CSR), where the browser downloads a minimal HTML page and then renders the content using JavaScript.",
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array

          },
          {
            id: 'para-1-2-universal',
            text: 'SSR offers several advantages, including improved SEO (search engine crawlers can index the fully rendered content), faster initial load time (users see content quicker), and better performance on devices with limited processing power.',
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array
          },
        ],
      },
      {
        id: 'chap-2-universal',
        title: 'Setting Up Angular Universal',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-2-1-universal',
            text: 'Angular Universal is the official Angular solution for server-side rendering. You can add Universal to an existing Angular CLI project using the following command:',
            chapterId: 'chap-2-universal',
            codeSections: [
              {
                id: 'code-1-universal',
                language: 'bash',
                code: 'ng add @angular/universal',
                caption: 'Adding Angular Universal to a project',
                paragraphId: 'para-2-1-universal'
              },
            ],
          },
          {
             id: 'para-2-2-universal',
             text: 'This command will add the necessary dependencies and modify your project structure to support server-side rendering.',
             chapterId: 'chap-2-universal',
             codeSections: [],
          }
        ],
      },
      {
        id: 'chap-3-universal',
        title: 'Understanding the Universal Workflow',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-3-1-universal',
            text: 'When a user requests a page, the server executes your Angular application, renders the requested component into HTML, and sends this HTML to the browser. The browser then parses and displays this static HTML, providing a faster initial view. In the background, Angular then bootstraps on the client-side, making the application interactive.',
            chapterId: 'chap-3-universal',
            codeSections: [],
          },
        ],
      },
    ],
  },
  {
    id: '98765432-10fe-dcba-9876-543210fedcba',
    title: 'Building Server-Side Applications with Angular Universal cli tool',
    description:
      'Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance. Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance.',
    tag: 'angular',
    updatedAt: new Date('2025-05-21T15:45:00Z'),
    author: mockUser,
    chapters: [
      {
        id: 'chap-1-universal',
        title: 'Introduction to Server-Side Rendering (SSR)',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-1-1-universal',
            text: "Server-Side Rendering (SSR) is the process of rendering client-side web applications on the server and sending a fully rendered HTML page to the client's browser. This contrasts with Client-Side Rendering (CSR), where the browser downloads a minimal HTML page and then renders the content using JavaScript.",
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array

          },
          {
            id: 'para-1-2-universal',
            text: 'SSR offers several advantages, including improved SEO (search engine crawlers can index the fully rendered content), faster initial load time (users see content quicker), and better performance on devices with limited processing power.',
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array
          },
        ],
      },
      {
        id: 'chap-2-universal',
        title: 'Setting Up Angular Universal',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-2-1-universal',
            text: 'Angular Universal is the official Angular solution for server-side rendering. You can add Universal to an existing Angular CLI project using the following command:',
            chapterId: 'chap-2-universal',
            codeSections: [
              {
                id: 'code-1-universal',
                language: 'bash',
                code: 'ng add @angular/universal',
                caption: 'Adding Angular Universal to a project',
                paragraphId: 'para-2-1-universal'
              },
            ],
          },
          {
             id: 'para-2-2-universal',
             text: 'This command will add the necessary dependencies and modify your project structure to support server-side rendering.',
             chapterId: 'chap-2-universal',
             codeSections: [],
          }
        ],
      },
      {
        id: 'chap-3-universal',
        title: 'Understanding the Universal Workflow',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-3-1-universal',
            text: 'When a user requests a page, the server executes your Angular application, renders the requested component into HTML, and sends this HTML to the browser. The browser then parses and displays this static HTML, providing a faster initial view. In the background, Angular then bootstraps on the client-side, making the application interactive.',
            chapterId: 'chap-3-universal',
            codeSections: [],
          },
        ],
      },
    ],
  },
  {
    id: '98765432-10fe-dcba-9876-543210fedcba',
    title: 'Building Server-Side Applications with Angular Universal cli tool',
    description:
      'Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance. Learn how to use Angular Universal to render your Angular applications on the server, improving SEO and initial load performance.',
    tag: 'angular',
    updatedAt: new Date('2025-05-21T15:45:00Z'),
    author: mockUser,
    chapters: [
      {
        id: 'chap-1-universal',
        title: 'Introduction to Server-Side Rendering (SSR)',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-1-1-universal',
            text: "Server-Side Rendering (SSR) is the process of rendering client-side web applications on the server and sending a fully rendered HTML page to the client's browser. This contrasts with Client-Side Rendering (CSR), where the browser downloads a minimal HTML page and then renders the content using JavaScript.",
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array

          },
          {
            id: 'para-1-2-universal',
            text: 'SSR offers several advantages, including improved SEO (search engine crawlers can index the fully rendered content), faster initial load time (users see content quicker), and better performance on devices with limited processing power.',
            chapterId: 'chap-1-universal',
            codeSections: [], // Added empty array
          },
        ],
      },
      {
        id: 'chap-2-universal',
        title: 'Setting Up Angular Universal',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-2-1-universal',
            text: 'Angular Universal is the official Angular solution for server-side rendering. You can add Universal to an existing Angular CLI project using the following command:',
            chapterId: 'chap-2-universal',
            codeSections: [
              {
                id: 'code-1-universal',
                language: 'bash',
                code: 'ng add @angular/universal',
                caption: 'Adding Angular Universal to a project',
                paragraphId: 'para-2-1-universal'
              },
            ],
          },
          {
             id: 'para-2-2-universal',
             text: 'This command will add the necessary dependencies and modify your project structure to support server-side rendering.',
             chapterId: 'chap-2-universal',
             codeSections: [],
          }
        ],
      },
      {
        id: 'chap-3-universal',
        title: 'Understanding the Universal Workflow',
        articleId: '98765432-10fe-dcba-9876-543210fedcba',
        paragraphs: [
          {
            id: 'para-3-1-universal',
            text: 'When a user requests a page, the server executes your Angular application, renders the requested component into HTML, and sends this HTML to the browser. The browser then parses and displays this static HTML, providing a faster initial view. In the background, Angular then bootstraps on the client-side, making the application interactive.',
            chapterId: 'chap-3-universal',
            codeSections: [],
          },
        ],
      },
    ],
  },
];

export default angularArticles;
