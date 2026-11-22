import type { Lesson } from "../../../types.ts";

export const lesson302: Lesson = {
  id: "edxbtecit-u3-lesson-3-2",
  code: "3-2",
  title: "HTML and CSS Fundamentals",
  goal: "I CAN create basic web pages using HTML structure and CSS styling.",
  standards: [
    "BTEC L3 National Information Technology — Unit 3: Website Development",
  ],
  vocabulary: [
    {
      term: "HTML",
      definition:
        "HyperText Markup Language — structures web page content using tags.",
    },
    {
      term: "CSS",
      definition:
        "Cascading Style Sheets — controls visual presentation: colours, fonts, layout.",
    },
    {
      term: "Tag",
      definition: "HTML element marker — e.g. <h1>, <p>, <a>, <img>.",
    },
    {
      term: "Selector",
      definition: "CSS pattern targeting HTML elements to apply styles.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u3-l2-html",
      title: "HTML Structure",
      skill: "Create semantic HTML structure for web pages.",
      lesson: {
        sections: [
          {
            heading: "HTML basics",
            body: 'HTML uses **tags** to structure content: `<html>`, `<head>`, `<body>` are the main structure. `<head>` contains metadata (title, links to CSS); `<body>` contains visible content. **Block elements** (headings, paragraphs, divs) take full width; **inline elements** (links, spans, emphasis) flow within text.\n\n**Semantic HTML** uses meaningful tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` — improves accessibility and SEO. **Attributes** provide additional info: `<a href="...">` for links, `<img src="..." alt="...">` for images.',
          },
          {
            heading: "Common elements",
            body: '**Text**: `<h1>`-`<h6>` headings (hierarchical), `<p>` paragraphs, `<strong>`, `<em>`. **Links**: `<a href="url">text</a>` — `href` specifies destination. **Images**: `<img src="file.jpg" alt="description">` — `alt` required for accessibility. **Lists**: `<ul>` unordered, `<ol>` ordered, `<li>` items. **Forms**: `<form>`, `<input>`, `<button>` for user input.\n\n**Tables**: `<table>`, `<tr>`, `<th>`, `<td>` for tabular data (not layout). **Comments**: `<!-- comment -->`. HTML should be valid — matched opening/closing tags, proper nesting.',
          },
        ],
        keyFormulas: [
          {
            name: "HTML structure",
            statement: "html → head (metadata) + body (content).",
          },
          {
            name: "Semantic tags",
            statement: "header, nav, main, article, section, footer.",
          },
        ],
        workedExample: {
          problem: "Create a heading, paragraph and link in HTML.",
          solution:
            '<h1>Welcome</h1>\n<p>This is a <a href="https://example.com">link</a>.</p>',
        },
      },
      questions: [
        {
          id: "edxbtecit-u3-l2-html-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which HTML element creates a hyperlink?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "<href>" },
              { id: "b", text: "<a>" },
              { id: "c", text: "<url>" },
              { id: "d", text: "<link>" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anchor tag",
                statement: '<a href="..."> creates hyperlinks.',
              },
            ],
            steps: [
              {
                reasoning: "<a> is the hyperlink element.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** <a>",
            commonErrors: ["Confusing with <link> (CSS)."],
          },
        },
        {
          id: "edxbtecit-u3-l2-html-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the purpose of semantic HTML elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Semantic HTML",
                statement:
                  "Meaningful tags describe content purpose — improving accessibility and SEO.",
              },
            ],
            steps: [
              {
                reasoning: "Tags describe content meaning (header, nav, main).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps screen readers understand structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improves SEO/content discoverability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Semantic tags (header, nav, main) describe content purpose — helping accessibility tools and search engines understand structure.",
            commonErrors: [
              "Only styling view.",
              "No accessibility/SEO benefit.",
            ],
          },
        },
        {
          id: "edxbtecit-u3-l2-html-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse why valid HTML matters for website development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HTML validity",
                statement:
                  "Valid HTML ensures consistent rendering, accessibility and maintainability.",
              },
            ],
            steps: [
              {
                reasoning: "Browsers handle errors inconsistently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Invalid HTML breaks accessibility tools.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Harder to maintain/debug invalid code.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Valid HTML ensures consistent rendering across browsers, works with accessibility tools, and is easier to maintain.",
            commonErrors: ["Browsers fix everything view.", "No consequences."],
          },
        },
        {
          id: "edxbtecit-u3-l2-html-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a simple webpage structure with header, navigation, main content and footer.",
          parts: [
            {
              label: "a",
              prompt: "Write the HTML skeleton showing the structure.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why semantic tags were used.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Identify one accessibility benefit.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Semantic structure",
                statement:
                  "Semantic HTML describes content meaning — improving accessibility and maintainability.",
              },
            ],
            steps: [
              {
                reasoning: "Correct HTML skeleton with semantic tags.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "All major sections present.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Proper nesting/closing tags.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Semantic tags describe content meaning.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Better than generic divs for structure.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Improves maintainability/SEO.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Screen readers can navigate structure.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Accessibility benefit explained.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) semantic HTML skeleton (b) meaning+SEO (c) screen reader navigation",
            commonErrors: ["Generic divs only.", "No semantic reasoning."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u3-l2-css",
      title: "CSS Styling",
      skill:
        "Apply CSS to style HTML elements — colours, fonts, layout and positioning.",
      lesson: {
        sections: [
          {
            heading: "CSS fundamentals",
            body: "CSS uses **selectors** to target HTML elements: element (`p`), class (`.class`), ID (`#id`), and combinations. **Properties** control appearance: `color`, `background-color`, `font-size`, `font-family`, `margin`, `padding`, `border`, `width`, `height`.\n\n**Box model**: every element has content, padding (inside), border, margin (outside). **Inheritance**: some properties (font, colour) inherit from parent; others don't. **Cascade**: when multiple rules apply, specificity and order determine which wins.",
          },
          {
            heading: "Layout techniques",
            body: "**Flexbox**: one-dimensional layout — `display: flex` arranges items in row/column with alignment control. **Grid**: two-dimensional layout — `display: grid` creates rows and columns. **Positioning**: `static` (default), `relative`, `absolute`, `fixed`, `sticky`.\n\n**Responsive design**: media queries (`@media`) apply different styles for different screen sizes. Mobile-first approach designs for smallest screen then enhances for larger. CSS frameworks (Bootstrap) provide pre-built responsive components.",
          },
        ],
        keyFormulas: [
          {
            name: "Box model",
            statement: "Content → padding → border → margin.",
          },
          {
            name: "Selectors",
            statement: "Element, .class, #id — increasing specificity.",
          },
        ],
        workedExample: {
          problem: "Centre a div horizontally using flexbox.",
          solution:
            "display: flex; justify-content: center; align-items: center; on parent container.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u3-l2-css-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: 'Which selector targets an element with class "header"?',
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "#header" },
              { id: "b", text: "*header" },
              { id: "c", text: ".header" },
              { id: "d", text: "header" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSS class selector",
                statement: ".classname targets elements with that class.",
              },
            ],
            steps: [
              {
                reasoning: "Class selector uses dot prefix.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** .header",
            commonErrors: ["Confusing class vs ID."],
          },
        },
        {
          id: "edxbtecit-u3-l2-css-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the CSS box model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Box model",
                statement:
                  "Content + padding + border + margin — every element's space.",
              },
            ],
            steps: [
              {
                reasoning: "Content: actual element content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Padding/border/margin explained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects layout/spacing understanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Box model = content, padding (inside), border, margin (outside) — understanding spacing/layout.",
            commonErrors: ["No layers.", "Padding/margin confused."],
          },
        },
        {
          id: "edxbtecit-u3-l2-css-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare flexbox and grid for website layout.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flexbox vs Grid",
                statement: "Flexbox = 1D alignment; Grid = 2D layout control.",
              },
            ],
            steps: [
              {
                reasoning: "Flexbox: one-dimensional row/column.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Grid: two-dimensional rows+columns.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "When to use each.", marks: 1, markCode: "R" },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Flexbox for 1D alignment (navbars, cards); Grid for 2D page layouts — often used together.",
            commonErrors: ["One is 'better' view.", "No use cases."],
          },
        },
        {
          id: "edxbtecit-u3-l2-css-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A webpage looks broken on mobile devices.",
          parts: [
            { label: "a", prompt: "Identify two likely CSS causes.", marks: 2 },
            {
              label: "b",
              prompt: "Suggest two responsive design solutions.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why responsive design matters.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Responsive design",
                statement:
                  "Sites must adapt to different screen sizes — mobile-first approach.",
              },
            ],
            steps: [
              {
                reasoning: "Cause 1: fixed pixel widths.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 2: no media queries.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Solution 1: media queries for breakpoints.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Solution 2: relative units (%, rem, vw).",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Solution 3: flexible layouts (flex/grid).",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Majority traffic is mobile.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Google ranks mobile-friendly sites higher.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Poor mobile UX loses users.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) fixed widths/no queries (b) media queries+relative units+flex (c) mobile majority+SEO",
            commonErrors: ["Only desktop view.", "No responsive techniques."],
          },
        },
      ],
    },
  ],
};
