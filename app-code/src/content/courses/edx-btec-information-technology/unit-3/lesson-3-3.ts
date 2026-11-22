import type { Lesson } from "../../../types.ts";

export const lesson303: Lesson = {
  id: "edxbtecit-u3-lesson-3-3",
  code: "3-3",
  title: "Scripting, Hosting and Testing",
  goal: "I CAN use client-side scripting, deploy websites and test them for functionality and accessibility.",
  standards: [
    "BTEC L3 National Information Technology — Unit 3: Website Development",
  ],
  vocabulary: [
    {
      term: "JavaScript",
      definition:
        "Programming language adding interactivity to web pages — runs in browser.",
    },
    {
      term: "DOM",
      definition:
        "Document Object Model — tree structure representing page elements JavaScript can manipulate.",
    },
    {
      term: "Web hosting",
      definition:
        "Service storing website files and making them accessible via the internet.",
    },
    {
      term: "Testing",
      definition:
        "Verifying website functionality, usability and accessibility before/after launch.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u3-l3-scripting",
      title: "Client-Side Scripting",
      skill: "Use JavaScript to add interactivity to web pages.",
      lesson: {
        sections: [
          {
            heading: "JavaScript basics",
            body: "JavaScript adds interactivity: form validation, dynamic content, animations, user input handling. It runs in the browser — **client-side** — manipulating the **DOM** (Document Object Model) which represents page elements as a tree.\n\nBasic operations: `document.getElementById()` finds elements, `.textContent`/`.innerHTML` changes content, `addEventListener()` responds to events (clicks, input). Variables store data: `let`, `const`. Functions organise reusable code: `function name() { ... }`.",
          },
          {
            heading: "Common uses",
            body: "**Form validation**: check inputs before submission — required fields, email format, password strength. **Dynamic content**: show/hide elements, update text without page reload. **Event handling**: respond to clicks, hovers, keyboard input. **Calculations**: real-time price totals, currency conversion.\n\nClient-side scripting improves UX but must be supplemented with server-side validation for security — users can bypass client-side checks.",
          },
        ],
        keyFormulas: [
          {
            name: "DOM",
            statement:
              "Tree structure of page elements JavaScript manipulates.",
          },
          {
            name: "Client vs server",
            statement: "Client-side = browser (UX); server-side = security.",
          },
        ],
        workedExample: {
          problem:
            "Write JavaScript to change a heading's text on button click.",
          solution:
            "document.getElementById('btn').addEventListener('click', () => { document.getElementById('title').textContent = 'New Title'; });",
        },
      },
      questions: [
        {
          id: "edxbtecit-u3-l3-scripting-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the DOM represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The website's database" },
              { id: "b", text: "The server configuration" },
              { id: "c", text: "The CSS stylesheet" },
              { id: "d", text: "The page structure as a tree" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DOM",
                statement: "Tree representation of page elements.",
              },
            ],
            steps: [
              {
                reasoning: "DOM = page structure tree.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Page structure tree",
            commonErrors: ["Confusing with database."],
          },
        },
        {
          id: "edxbtecit-u3-l3-scripting-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why client-side validation alone is insufficient for security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Client vs server validation",
                statement:
                  "Client-side can be bypassed — server-side validation is essential for security.",
              },
            ],
            steps: [
              {
                reasoning: "Users can disable/bypass client-side JS.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Malicious users send direct requests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Server-side validation enforces rules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Client-side validation improves UX but can be bypassed — server-side validation is essential for security.",
            commonErrors: [
              "Client-side sufficient view.",
              "No bypass mechanism.",
            ],
          },
        },
        {
          id: "edxbtecit-u3-l3-scripting-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the benefits and limitations of client-side scripting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Client-side scripting",
                statement:
                  "Improves UX with instant feedback but limited by browser and security.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: instant feedback, reduced server load, rich UX.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitations: browser-dependent, security risks, can't access server data.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Client-side scripting improves UX and reduces server load but is browser-dependent and insecure for sensitive operations.",
            commonErrors: ["One-sided.", "No limitations."],
          },
        },
        {
          id: "edxbtecit-u3-l3-scripting-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A contact form needs to validate email format before submission.",
          parts: [
            {
              label: "a",
              prompt: "Describe the client-side validation approach.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why server-side validation is also needed.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest one user feedback improvement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Form validation",
                statement:
                  "Client-side for UX, server-side for security — both needed.",
              },
            ],
            steps: [
              {
                reasoning: "Client-side: JavaScript checks format on submit.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Client-side: immediate feedback to user.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Client-side: prevents submission if invalid.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Server-side: users can bypass client checks.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Server-side: validates all submitted data.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Server-side: essential for security.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Feedback: clear error messages.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Feedback: highlight problematic fields.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) JS validation on submit (b) bypass risk+server check (c) clear errors+highlight",
            commonErrors: ["Only client-side.", "No feedback."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u3-l3-deploy",
      title: "Hosting, Testing and Deployment",
      skill:
        "Deploy websites to hosting and test them for functionality and accessibility.",
      lesson: {
        sections: [
          {
            heading: "Web hosting",
            body: "**Hosting types**: shared (multiple sites on one server — cheapest), VPS (virtual private server — dedicated resources), dedicated (whole server), cloud (scalable, pay-per-use). **Domain names**: human-readable addresses (example.com) mapped to IP addresses via DNS.\n\n**FTP/SFTP**: file transfer protocols for uploading files. **Deployment**: uploading files to server, configuring domain/DNS, SSL certificates for HTTPS security. **CDN** (Content Delivery Network): distributes content geographically for faster loading.",
          },
          {
            heading: "Testing types",
            body: "**Functional testing**: does everything work — links, forms, navigation, features. **Compatibility testing**: works across browsers/devices. **Performance testing**: load times, responsiveness under load. **Accessibility testing**: WCAG compliance — contrast, keyboard navigation, screen readers.\n\n**User acceptance testing (UAT)**: real users verify it meets requirements. **Cross-browser testing**: Chrome, Firefox, Safari, Edge. Tools: browser DevTools, Lighthouse (performance/accessibility audits), W3C validators for HTML/CSS.",
          },
        ],
        keyFormulas: [
          {
            name: "Hosting types",
            statement: "Shared, VPS, dedicated, cloud.",
          },
          {
            name: "Testing types",
            statement:
              "Functional, compatibility, performance, accessibility, UAT.",
          },
        ],
        workedExample: {
          problem: "What should be tested before launching a website?",
          solution:
            "Functionality (all features work), compatibility (browsers/devices), performance (load times), accessibility (WCAG), and user acceptance.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u3-l3-deploy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which hosting type provides dedicated resources for one site?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free hosting" },
              { id: "b", text: "Shared hosting" },
              { id: "c", text: "Blog hosting" },
              { id: "d", text: "Dedicated server" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dedicated hosting",
                statement:
                  "Whole server for one site — maximum resources/control.",
              },
            ],
            steps: [
              {
                reasoning: "Dedicated = whole server for one site.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Dedicated server",
            commonErrors: ["Confusing with VPS."],
          },
        },
        {
          id: "edxbtecit-u3-l3-deploy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why testing across multiple browsers is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross-browser testing",
                statement:
                  "Different browsers render HTML/CSS/JS differently — testing ensures consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Browsers interpret code differently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Users have different browser preferences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ensures consistent experience for all.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Browsers render differently — cross-browser testing ensures consistent experience across all user browsers.",
            commonErrors: [
              "One browser enough view.",
              "No rendering differences.",
            ],
          },
        },
        {
          id: "edxbtecit-u3-l3-deploy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of SSL certificates for websites.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SSL/HTTPS",
                statement:
                  "Encrypts data in transit — essential for security and trust.",
              },
            ],
            steps: [
              {
                reasoning: "Encrypts data between browser and server.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents interception of sensitive data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Browsers warn users on non-HTTPS sites.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "SSL/HTTPS encrypts data in transit — essential for security, user trust and browser compatibility.",
            commonErrors: ["Only technical view.", "No trust aspect."],
          },
        },
        {
          id: "edxbtecit-u3-l3-deploy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A website works perfectly on the developer's Chrome browser but fails on Safari and mobile.",
          parts: [
            { label: "a", prompt: "Identify two likely causes.", marks: 2 },
            {
              label: "b",
              prompt: "Suggest three testing steps to identify issues.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Explain how to prevent this in future.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cross-browser testing",
                statement:
                  "Test early and often across browsers/devices — don't wait until deployment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cause 1: browser-specific code/unsupported features.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 2: mobile viewport/responsive issues.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Test 1: check on Safari/Firefox/Edge.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Test 2: test on mobile devices/emulators.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Test 3: use browser DevTools device mode.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Test 4: validate HTML/CSS.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Prevent: test during development not after.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Prevent: use standard web technologies.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) browser-specific code/mobile issues (b) multi-browser+mobile+validation (c) test early+standards",
            commonErrors: ["Only Chrome tested.", "No prevention plan."],
          },
        },
      ],
    },
  ],
};
