import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cieigcseict-u5-lesson-5-3",
  code: "5-3",
  title: "Web Development: HTML, CSS and Hosting",
  goal: "I CAN create web pages using HTML/CSS and explain hosting concepts.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 5: ICT applications in depth"],
  vocabulary: [
    {
      term: "HTML",
      definition: "HyperText Markup Language — structures web pages.",
    },
    {
      term: "CSS",
      definition: "Cascading Style Sheets — controls presentation.",
    },
    { term: "Tag", definition: "HTML element marker (<p>, <h1>, <a>)." },
    { term: "Web hosting", definition: "Server space storing web files." },
    { term: "Domain name", definition: "Address identifying website." },
    { term: "Hyperlink", definition: "Link between web pages." },
  ],
  concepts: [
    {
      id: "cieigcseict-u5l3-c1-html",
      title: "HTML structure and elements",
      skill: "Write basic HTML for web pages and explain key elements.",
      lesson: {
        sections: [
          {
            heading: "HTML basics",
            body: 'HTML documents have structure: `<html><head><title>...</title></head><body>...</body></html>`. Head contains metadata; body contains visible content. Common tags: `<h1>`–`<h6>` headings, `<p>` paragraphs, `<a href="url">` links, `<img src="file">` images, `<ul>/<li>` lists, `<table>` data. Tags nest properly — unclosed tags break layout.',
          },
          {
            heading: "Attributes and forms",
            body: 'Attributes modify tags: `<a href>` link target, `<img src alt>` image + description, `<input type="text">` form field. Forms: `<form action method>` with `<input>`, `<select>`, `<textarea>`, `<button>` — submit data to server (GET/POST). Valid HTML follows standards (W3C validation).',
          },
        ],
        keyFormulas: [
          { name: "HTML doc", statement: "<html><head><body>" },
          { name: "Link", statement: '<a href="URL">text</a>' },
          { name: "Image", statement: '<img src="file" alt="desc">' },
        ],
        workedExample: {
          problem:
            "Write HTML for a heading 'Welcome', paragraph 'Hello world', and link to example.com.",
          solution:
            '<h1>Welcome</h1><p>Hello world</p><a href="https://example.com">Visit Example</a>',
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "HTML stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Home Tool Markup Language" },
              { id: "b", text: "HyperText Markup Language" },
              { id: "c", text: "Hyperlink Text Mode" },
              { id: "d", text: "High Tech Modern Language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "HTML", statement: "HyperText." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** HyperText Markup Language",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between `<head>` and `<body>`?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Head vs body",
                statement: "Metadata vs content.",
              },
            ],
            steps: [
              { reasoning: "Head.", marks: 1, markCode: "M" },
              { reasoning: "Body.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Head: metadata (title, CSS links, scripts) not displayed. Body: visible page content (headings, text, images, links).",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write HTML to create a link to https://example.com with text 'Click here'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "HTML link", statement: "<a href>" },
            ],
            steps: [
              { reasoning: "Correct tag.", marks: 2, markCode: "M" },
              { reasoning: "Attributes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: '<a href="https://example.com">Click here</a>',
            commonErrors: ["Wrong syntax."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the purpose of the `alt` attribute in `<img>` tags.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Alt text", statement: "Accessibility." },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Accessibility.", marks: 1, markCode: "M" },
              { reasoning: "SEO.", marks: 1, markCode: "M" },
              { reasoning: "Fallback.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Provides text description for screen readers (accessibility), displays if image fails to load, helps search engines understand content — required for valid HTML.",
            commonErrors: ["Optional decoration."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Create an HTML form with name and email fields that submits via POST.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HTML form",
                statement: "Form structure.",
              },
            ],
            steps: [
              { reasoning: "Form tag.", marks: 2, markCode: "M" },
              { reasoning: "Inputs.", marks: 1, markCode: "M" },
              { reasoning: "Submit.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              '<form action="process.php" method="post"><input type="text" name="name"><input type="email" name="email"><button type="submit">Send</button></form>',
            commonErrors: ["No method."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does `<h1>` represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "H1", statement: "Main heading." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Hierarchy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Main page heading — largest/most important heading; h1–h6 show hierarchy (h6 smallest); should have one h1 per page for SEO/accessibility.",
            commonErrors: ["Paragraph."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tag creates a hyperlink?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "<link>" },
              { id: "b", text: "<url>" },
              { id: "c", text: "<href>" },
              { id: "d", text: "<a>" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Link tag", statement: "<a>." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** `<a>`",
            commonErrors: ["Wrong tag."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons for validating HTML code.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "HTML validation",
                statement: "Standards.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. ensures cross-browser compatibility (renders consistently) and accessibility for screen readers — invalid HTML may break in some browsers or fail accessibility checks.",
            commonErrors: ["No benefit."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain GET vs POST methods in HTML forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "GET vs POST",
                statement: "Data transmission.",
              },
            ],
            steps: [
              { reasoning: "GET.", marks: 1, markCode: "M" },
              { reasoning: "POST.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GET: data in URL, visible, bookmarked, limited size — for retrieval/search. POST: data in body, hidden, larger capacity — for forms, sensitive data, file uploads.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of HTML for modern web development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HTML eval",
                statement: "Foundation vs modern.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Modern context.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HTML5 essential foundation — semantic tags, multimedia, offline; but modern sites need CSS, JavaScript, frameworks for interactivity; HTML alone static — complementary technologies required.",
            commonErrors: ["HTML alone sufficient."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which HTML tag creates the largest heading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "<p>" },
              { id: "b", text: "<head>" },
              { id: "c", text: "<h6>" },
              { id: "d", text: "<h1>" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Headings", statement: "h1 largest." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** <h1>",
            commonErrors: ["h6 confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the HTML code for an unordered list containing two items: 'Red' and 'Blue'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "List syntax",
                statement: "<ul><li>…</li></ul>",
              },
            ],
            steps: [
              { reasoning: "Correct list tags.", marks: 1, markCode: "M" },
              { reasoning: "Both items nested correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "<ul><li>Red</li><li>Blue</li></ul>",
            commonErrors: ["Missing closing tags."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which attribute makes a link open in a new browser tab?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "target=\"_blank\"" },
              { id: "b", text: "alt=\"_blank\"" },
              { id: "c", text: "src=\"_blank\"" },
              { id: "d", text: "href=\"_blank\"" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "target attr",
                statement: "_blank = new tab.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** target=\"_blank\"",
            commonErrors: ["href confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why unclosed or incorrectly nested HTML tags can break a web page's layout.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tag nesting",
                statement: "Structure matters.",
              },
            ],
            steps: [
              { reasoning: "Nesting explained.", marks: 1, markCode: "M" },
              { reasoning: "Browser behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Example/impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "HTML relies on tags opening/closing in correct order; browsers auto-close or misinterpret broken tags, so content renders in the wrong place, styles fail to apply and the page layout breaks.",
            commonErrors: ["Browsers fix all errors."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which attribute is essential for an <img> tag to display an image file?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "title" },
              { id: "b", text: "src" },
              { id: "c", text: "alt" },
              { id: "d", text: "href" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "img src", statement: "Image source." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** src",
            commonErrors: ["alt is for accessibility."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of HTML tables for page layout in modern web development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tables eval",
                statement: "Layout vs semantic.",
              },
            ],
            steps: [
              { reasoning: "Historical use.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "M" },
              { reasoning: "Modern alternative.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tables were once used for layout before CSS — now discouraged: they mix content with presentation, are hard to make responsive and confuse screen readers; modern practice uses semantic HTML (div/section) styled by CSS, reserving tables for actual tabular data.",
            commonErrors: ["Tables still best."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u5l3-c2-css-hosting",
      title: "CSS styling and web hosting",
      skill: "Apply CSS for styling and explain web hosting infrastructure.",
      lesson: {
        sections: [
          {
            heading: "CSS basics",
            body: "CSS controls presentation: `selector { property: value; }`. Selectors: element (`p`), class (`.class`), ID (`#id`), descendant (`div p`). Properties: `color`, `font-size`, `margin`, `padding`, `background-color`, `border`. CSS can be inline, internal (`<style>`), or external (`<link>`) — external preferred for consistency and maintainability.",
          },
          {
            heading: "Web hosting and domains",
            body: "**Hosting**: server storing website files, serves to browsers — types: shared (cheap, shared resources), VPS (virtual private), dedicated, cloud. **Domain name**: human-readable address (example.com) mapped to IP via DNS. **DNS**: translates domain → IP. **Upload**: FTP/SFTP to server. **URL**: full address (protocol + domain + path).",
          },
        ],
        keyFormulas: [
          { name: "CSS rule", statement: "selector { prop: value; }" },
          { name: "External CSS", statement: '<link rel="stylesheet">' },
          { name: "DNS", statement: "Domain → IP" },
        ],
        workedExample: {
          problem: "Style all paragraphs blue, 14px font, centered.",
          solution:
            'p { color: blue; font-size: 14px; text-align: center; } — or class-based: .para { ... } applied via class="para".',
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CSS stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Computer Style System" },
              { id: "b", text: "Coded Style Sheets" },
              { id: "c", text: "Cascading Style Sheets" },
              { id: "d", text: "Creative Styling Sheets" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "CSS", statement: "Cascading Style." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cascading Style Sheets",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does CSS control?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSS role",
                statement: "Presentation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Visual presentation — colours, fonts, spacing, layout, borders; separates content (HTML) from styling (CSS) — improves maintainability.",
            commonErrors: ["Content."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why external CSS is preferred over inline CSS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External CSS",
                statement: "Maintainability.",
              },
            ],
            steps: [
              { reasoning: "Consistency.", marks: 1, markCode: "M" },
              { reasoning: "Maintenance.", marks: 1, markCode: "M" },
              { reasoning: "Bandwidth.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Single stylesheet applies to all pages — consistent styling, easier updates (change once, affects all), reduces page size/bandwidth vs repeating inline styles.",
            commonErrors: ["Inline better."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what happens when you type a domain name in a browser.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "DNS process",
                statement: "Domain → IP → server.",
              },
            ],
            steps: [
              { reasoning: "DNS lookup.", marks: 1, markCode: "M" },
              { reasoning: "Server request.", marks: 1, markCode: "M" },
              { reasoning: "Response.", marks: 1, markCode: "M" },
              { reasoning: "Render.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Browser sends DNS query → DNS resolves domain to IP → HTTP request to server → server returns HTML/CSS/JS → browser renders page.",
            commonErrors: ["Direct connection."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare shared hosting vs VPS hosting for a small business website.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hosting types",
                statement: "Shared vs VPS.",
              },
            ],
            steps: [
              { reasoning: "Shared.", marks: 1, markCode: "M" },
              { reasoning: "VPS.", marks: 1, markCode: "M" },
              { reasoning: "Cost.", marks: 1, markCode: "M" },
              { reasoning: "Recommendation.", marks: 1, markCode: "A" },
              { reasoning: "Justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shared: cheap, easy, but shared resources, limited control, other sites affect performance. VPS: dedicated resources, more control, scalable — but costs more, needs admin skills; small business → shared initially, upgrade as grows.",
            commonErrors: ["VPS always better."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'DNS'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNS",
                statement: "Domain resolution.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Function.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Domain Name System — translates human-readable domain names (example.com) to IP addresses (192.168.1.1) that computers use; distributed global database.",
            commonErrors: ["Hosting provider."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CSS selector `.class` targets:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elements with that class attribute" },
              { id: "b", text: "All elements" },
              { id: "c", text: "Tags only" },
              { id: "d", text: "Only IDs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Class selector",
                statement: "Class attr.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Class attribute",
            commonErrors: ["ID confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of using CSS classes over inline styles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "CSS classes", statement: "Reuse." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. reuse same style across many elements (consistency) and change style in one place (maintainability) — vs inline styles repeated everywhere and hard to update.",
            commonErrors: ["No benefit."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a 'domain name' and how is it different from an IP address?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain vs IP",
                statement: "Readable vs numeric.",
              },
            ],
            steps: [
              { reasoning: "Domain.", marks: 1, markCode: "M" },
              { reasoning: "IP.", marks: 1, markCode: "M" },
              { reasoning: "DNS link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Domain: human-readable name (example.com). IP: numeric address (192.168.1.1). DNS translates domain → IP so browsers can connect to correct server.",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the security risks of using shared web hosting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shared hosting risks",
                statement: "Security.",
              },
            ],
            steps: [
              { reasoning: "Risks.", marks: 1, markCode: "M" },
              { reasoning: "Mitigation.", marks: 1, markCode: "M" },
              { reasoning: "Acceptable when.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Shared server = other sites' vulnerabilities can affect yours; limited control over security settings; acceptable for small sites with good provider, but sensitive data → dedicated/VPS/cloud with own security.",
            commonErrors: ["Same as dedicated."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the CSS rule `p { color: red; }`, what does `p` represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A selector for all paragraph elements" },
              { id: "b", text: "A class name" },
              { id: "c", text: "A property" },
              { id: "d", text: "An ID" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Element selector",
                statement: "Targets tag.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Element selector",
            commonErrors: ["Property confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a CSS rule that gives all elements with class 'warning' a yellow background.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "CSS rule",
                statement: ".class { property: value; }",
              },
            ],
            steps: [
              { reasoning: "Correct class selector.", marks: 1, markCode: "M" },
              { reasoning: "Valid property and value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: ".warning { background-color: yellow; }",
            commonErrors: ["Missing dot or braces."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which CSS selector targets the element with id 'main'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "*main" },
              { id: "b", text: ".main" },
              { id: "c", text: "#main" },
              { id: "d", text: "main" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "ID selector", statement: "#id." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** #main",
            commonErrors: ["Class confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between internal and external CSS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "CSS placement",
                statement: "<style> vs <link>.",
              },
            ],
            steps: [
              { reasoning: "Internal described.", marks: 1, markCode: "M" },
              { reasoning: "External described.", marks: 1, markCode: "M" },
              { reasoning: "When each used.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Internal CSS uses a <style> block inside the HTML <head> — applies to one page only. External CSS links a separate .css file via <link> — shared across all pages, easier to maintain, preferred for multi-page sites.",
            commonErrors: ["No difference."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a full URL specify that a domain name alone does not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The server's IP address only" },
              { id: "b", text: "The file size of the page" },
              { id: "c", text: "The website's colour scheme" },
              { id: "d", text: "The protocol and the path to a specific resource" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "URL",
                statement: "Protocol + domain + path.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Protocol and path",
            commonErrors: ["Domain = URL."],
          },
        },
        {
          id: "cieigcseict-q-u5l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate cloud hosting versus dedicated hosting for a growing e-commerce business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud vs dedicated",
                statement: "Scalability vs control.",
              },
            ],
            steps: [
              { reasoning: "Cloud strengths.", marks: 1, markCode: "M" },
              { reasoning: "Dedicated strengths.", marks: 1, markCode: "M" },
              { reasoning: "Costs/risks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cloud: scalable on demand, pay-per-use, high availability, managed security — but ongoing costs and less control. Dedicated: full control, predictable performance, data isolation — but high upfront cost and needs in-house expertise; a growing shop may start cloud and move critical systems to dedicated later.",
            commonErrors: ["One always better."],
          },
        },
      ],
    },
  ],
};
