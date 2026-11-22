import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "cieict-u1-lesson-1-4",
  code: "1-4",
  title: "Web Authoring and Multimedia",
  goal: "I CAN create web pages and multimedia presentations using appropriate software.",
  standards: [
    "Cambridge IGCSE ICT 0417: web authoring and multimedia",
    "0417 section 5: web/multimedia",
  ],

  vocabulary: [
    {
      term: "Web authoring",
      definition: "Creating web pages with HTML/CSS or tools.",
    },
    {
      term: "HTML",
      definition: "HyperText Markup Language — structures web pages.",
    },
    { term: "CSS", definition: "Cascading Style Sheets — styles web pages." },
    { term: "Multimedia", definition: "Combined text, images, audio, video." },
    { term: "Presentation software", definition: "Creating slide shows." },
    { term: "Animation", definition: "Moving graphics or transitions." },
  ],
  concepts: [
    {
      id: "cieict-u1-s4-web",
      title: "Web authoring and multimedia",
      skill: "Create web pages and multimedia content at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Web authoring",
            body: "HTML structures content (headings, paragraphs, links, images); CSS styles it (colours, fonts, layout). Tools like WordPress or drag-and-drop editors simplify creation.",
          },
          {
            heading: "Multimedia",
            body: "Presentation software creates slides with text, images, transitions, animations. Multimedia combines text+images+audio+video. Effective design: consistent theme, clear hierarchy, appropriate media.",
          },
        ],
        keyFormulas: [
          { name: "HTML", statement: "structure: <h1>, <p>, <a>, <img>" },
          { name: "CSS", statement: "style: colours, fonts, layout" },
        ],
        workedExample: {
          problem:
            "Create a simple web page with a heading, paragraph and link.",
          solution:
            "<h1>My Page</h1><p>Welcome!</p><a href='https://example.com'>Link</a> styled with CSS.",
        },
      },
      questions: [
        {
          id: "cieict-u1-wa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does HTML stand for?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Hyperlink Text Markup",
              },
              {
                id: "b",
                text: "High Tech Modern Language",
              },
              {
                id: "c",
                text: "HyperText Markup Language",
              },
              {
                id: "d",
                text: "Home Tool Markup Language",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HTML",
                statement: "HyperText Markup Language.",
              },
            ],
            steps: [
              {
                reasoning: "HTML = web page structure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "HyperText Markup Language",
          },
        },
        {
          id: "cieict-u1-wa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between HTML and CSS?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HTML vs CSS",
                statement: "Structure vs style.",
              },
            ],
            steps: [
              {
                reasoning: "HTML=structure (content); CSS=style (appearance).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Separation allows consistent styling.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Structure vs style",
          },
        },
        {
          id: "cieict-u1-wa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are 3 design principles for effective presentations?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Presentation design",
                statement: "Clarity, consistency, appropriateness.",
              },
            ],
            steps: [
              {
                reasoning: "Consistent theme/fonts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear hierarchy, minimal text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Appropriate media for audience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Consistency, clarity, appropriateness",
          },
        },
        {
          id: "cieict-u1-wa-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define web authoring, HTML, CSS, multimedia, presentation software, animation. (b) What does <a href> do? (c) What does <img src> do? (d) How does CSS change appearance? (e) What is multimedia? (f) When use animation in presentations? (g) What makes a web page accessible? (h) Design a 5-slide presentation on 'our school'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Web/multimedia",
                statement: "HTML, CSS, presentations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Creates hyperlink.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Embeds image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Colours, fonts, layout.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Combined media types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Emphasise points, guide attention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Alt text, contrast, structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid presentation outline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Web authoring and multimedia creation.",
          },
        },
        {
          id: "cieict-u1-wa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which HTML tag is used to create a hyperlink to another page?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "<url>",
              },
              {
                id: "b",
                text: "<link>",
              },
              {
                id: "c",
                text: "<hyper>",
              },
              {
                id: "d",
                text: "<a href='...'>",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hyperlink tag",
                statement: "<a href> creates links.",
              },
            ],
            steps: [
              {
                reasoning: "<a href> is the anchor/link tag.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "<a href>",
          },
        },
        {
          id: "cieict-u1-wa-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A digital photo is 2400 pixels wide and 1600 pixels tall. How many megapixels does it contain?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3.84,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Image size",
                statement: "width x height / 1,000,000 = megapixels.",
              },
            ],
            steps: [
              {
                reasoning: "2400 x 1600 = 3,840,000 pixels = 3.84 MP.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3.84 megapixels",
          },
        },
        {
          id: "cieict-u1-wa-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A web page contains 8 images, each 250 KB, plus a 120 KB text file. What is the total size of the page content in KB?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2120,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Page weight",
                statement: "Sum all resource sizes.",
              },
            ],
            steps: [
              {
                reasoning: "8 x 250 = 2000 KB images + 120 KB text = 2120 KB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2120 KB",
          },
        },
        {
          id: "cieict-u1-wa-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of CSS in web authoring?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To create hyperlinks between pages",
              },
              {
                id: "b",
                text: "To style and format web pages (colours, fonts, layout)",
              },
              {
                id: "c",
                text: "To store data in tables",
              },
              {
                id: "d",
                text: "To compress image files",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSS",
                statement: "Cascading Style Sheets control appearance.",
              },
            ],
            steps: [
              {
                reasoning: "CSS handles colours, fonts and layout.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Styling and formatting",
          },
        },
        {
          id: "cieict-u1-wa-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between a transition and an animation in presentation software.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition vs animation",
                statement: "Between slides vs within a slide.",
              },
            ],
            steps: [
              {
                reasoning: "Transition = effect when moving between slides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Animation = movement of elements within one slide.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Transitions between slides; animations within a slide",
          },
        },
        {
          id: "cieict-u1-wa-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A 20-slide presentation must be delivered in 15 minutes. How many seconds per slide does this allow?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 45,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timing",
                statement: "Total time / number of slides.",
              },
            ],
            steps: [
              {
                reasoning: "15 min = 900 s; 900 / 20 = 45 s per slide.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "45 seconds",
          },
        },
        {
          id: "cieict-u1-wa-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is NOT a multimedia element?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Video clip",
              },
              {
                id: "b",
                text: "Audio clip",
              },
              {
                id: "c",
                text: "Interactive image",
              },
              {
                id: "d",
                text: "Plain unformatted text file",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multimedia",
                statement: "Combined text, images, audio and video.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multimedia combines media types; plain text alone is not multimedia.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Plain unformatted text file",
          },
        },
        {
          id: "cieict-u1-wa-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which software is most suitable for creating a school newsletter with a multi-column page layout?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Desktop publishing (DTP) software",
              },
              {
                id: "b",
                text: "A web browser",
              },
              {
                id: "c",
                text: "A simple text editor",
              },
              {
                id: "d",
                text: "A calculator",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "DTP",
                statement: "DTP software creates professional layouts.",
              },
            ],
            steps: [
              {
                reasoning: "DTP tools handle columns, frames and page layout.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "DTP software",
          },
        },
        {
          id: "cieict-u1-wa-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it good practice to keep HTML (structure) separate from CSS (style) when authoring web pages?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation of concerns",
                statement: "Structure vs presentation.",
              },
            ],
            steps: [
              {
                reasoning: "Allows restyling without editing content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gives consistent appearance across many pages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Easier maintenance and consistent styling",
          },
        },
        {
          id: "cieict-u1-wa-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An image 4000 pixels wide is resized to 1000 pixels wide. By what percentage was its width reduced?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 75,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Resizing",
                statement: "Reduction / original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(4000 - 1000) / 4000 x 100 = 75% reduction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cieict-u1-wa-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which image format supports transparency and is lossless, making it suitable for logos and graphics?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "TIFF only",
              },
              {
                id: "b",
                text: "PNG",
              },
              {
                id: "c",
                text: "JPEG",
              },
              {
                id: "d",
                text: "BMP only",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PNG",
                statement: "Lossless format with transparency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PNG supports an alpha channel (transparency) without lossy compression.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "PNG",
          },
        },
        {
          id: "cieict-u1-wa-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the steps you would take to create and publish a simple web page containing a heading, a paragraph, an image and a link to another site.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Web publishing",
                statement: "Author, style, test, upload.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write HTML structure: <h1> heading, <p> paragraph, <img> image, <a href> link.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Add CSS to style colours, fonts and layout; check it renders correctly in a browser.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Upload files to a web host/server (e.g. via FTP or hosting control panel) and verify the page loads.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "HTML structure + CSS style + upload and verify",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-wa-notes",
      title: "Web and multimedia — notes",
      summary:
        "HTML=structure, CSS=style. Multimedia combines text/images/audio/video for engaging content.",
      sections: [
        {
          heading: "Key idea",
          body: "Separation of structure (HTML) and style (CSS) is best practice.",
        },
        {
          heading: "Design",
          body: "Consistency, clarity, appropriate media = effective presentations.",
        },
      ],
    },
  ],
};
