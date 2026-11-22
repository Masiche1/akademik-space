import type { Lesson } from "../../../types.ts";

export const lesson301: Lesson = {
  id: "edxbtecit-u3-lesson-3-1",
  code: "3-1",
  title: "Website Planning and Design",
  goal: "I CAN plan and design a website including structure, navigation and wireframes.",
  standards: [
    "BTEC L3 National Information Technology — Unit 3: Website Development",
  ],
  vocabulary: [
    {
      term: "Wireframe",
      definition:
        "A basic visual guide showing page layout and element placement without styling.",
    },
    {
      term: "Site map",
      definition:
        "A hierarchical diagram showing all pages and their relationships.",
    },
    {
      term: "User experience (UX)",
      definition:
        "How users feel when interacting with a website — ease, efficiency, satisfaction.",
    },
    {
      term: "User interface (UI)",
      definition:
        "The visual elements users interact with — buttons, forms, menus, colours.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u3-l1-planning",
      title: "Website Planning",
      skill: "Plan a website's purpose, audience, content and structure.",
      lesson: {
        sections: [
          {
            heading: "Planning fundamentals",
            body: "Effective websites start with clear planning: **purpose** (what the site must achieve — sell products, share information, provide service), **target audience** (who will use it — their needs, devices, expectations), and **content** (what information/features are needed).\n\n**Goals and objectives** should be SMART — specific, measurable, achievable, relevant, time-bound. A business site might aim for online sales; a school site for parent communication. Understanding user needs drives all design decisions.",
          },
          {
            heading: "Structure and navigation",
            body: "**Site maps** show page hierarchy — typically home → main sections → detail pages. Keep structure shallow (3 clicks max to any page). **Navigation menus** should be consistent, clear and predictable — users should always know where they are and how to get back.\n\n**Information architecture** organises content logically — grouping related content, using clear labels. Breadcrumbs show location within hierarchy. Search functionality helps users find content quickly in larger sites.",
          },
        ],
        keyFormulas: [
          {
            name: "Planning steps",
            statement: "Purpose → audience → content → structure → design.",
          },
          {
            name: "Navigation principle",
            statement: "Consistent, clear, predictable — max 3 clicks.",
          },
        ],
        workedExample: {
          problem: "Plan a website for a local bakery.",
          solution:
            "Purpose: showcase products + take orders. Audience: local customers. Pages: Home, Menu, About, Contact/Order. Structure: simple, mobile-friendly, clear ordering process.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u3-l1-planning-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should be defined FIRST when planning a website?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hosting provider" },
              { id: "b", text: "Purpose and audience" },
              { id: "c", text: "Programming language" },
              { id: "d", text: "Colour scheme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning first",
                statement: "Purpose and audience drive all design decisions.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose/audience must come before design.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Purpose and audience",
            commonErrors: ["Starting with design details."],
          },
        },
        {
          id: "edxbtecit-u3-l1-planning-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why consistent navigation is important for UX.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Navigation consistency",
                statement:
                  "Users learn patterns — consistency reduces cognitive load and prevents disorientation.",
              },
            ],
            steps: [
              {
                reasoning: "Users learn where things are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces confusion/disorientation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improves task completion rates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consistent navigation lets users learn the site — reducing confusion and improving task completion.",
            commonErrors: ["Only aesthetic view.", "No UX benefit."],
          },
        },
        {
          id: "edxbtecit-u3-l1-planning-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse why understanding the target audience is critical to website design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Audience-centred design",
                statement:
                  "Design must match user needs, skills, devices and expectations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different audiences need different features/content.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Device/accessibility needs vary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Skill level affects complexity choices.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Audience determines content, features, complexity and accessibility — mismatched design fails users.",
            commonErrors: ["Generic design view.", "No audience factors."],
          },
        },
        {
          id: "edxbtecit-u3-l1-planning-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A university wants a website for prospective students.",
          parts: [
            {
              label: "a",
              prompt: "Identify three key pages needed.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest two design features important for this audience.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why mobile-friendliness matters here.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Audience-specific design",
                statement:
                  "Prospective students are research-heavy, mobile-heavy, comparison-shopping.",
              },
            ],
            steps: [
              {
                reasoning: "Page 1 e.g. courses/programmes.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Page 2 e.g. fees/funding.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Page 3 e.g. apply/contact.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Feature 1: search/filter courses.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Feature 2: virtual tour/student stories.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Features match research needs.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Students research on phones.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Mobile = majority traffic.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) courses/fees/apply (b) search+virtual tour (c) students use mobile heavily",
            commonErrors: ["Generic pages.", "No audience focus."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u3-l1-design",
      title: "Visual Design and Accessibility",
      skill:
        "Describe visual design principles and accessibility requirements for websites.",
      lesson: {
        sections: [
          {
            heading: "Visual design principles",
            body: "**Layout**: grid systems organise content — whitespace improves readability. **Colour**: consistent palette, sufficient contrast (WCAG requires 4.5:1 for text). **Typography**: readable fonts, appropriate sizes, consistent hierarchy (headings → body).\n\n**Images/media**: optimise for web (compressed, correct format), use alt text for accessibility, lazy loading for performance. **Consistency**: same navigation, button styles, colour usage across all pages builds trust and learnability.",
          },
          {
            heading: "Accessibility",
            body: "**WCAG (Web Content Accessibility Guidelines)** ensures sites usable by people with disabilities: sufficient colour contrast, keyboard navigation, screen reader compatibility (semantic HTML, alt text), captions for video, resizable text.\n\nAccessibility benefits everyone — clear navigation helps all users, captions help in noisy environments, good contrast helps in sunlight. Legal requirements (Equality Act) may mandate accessibility for public services.",
          },
        ],
        keyFormulas: [
          {
            name: "WCAG contrast",
            statement: "4.5:1 ratio for normal text, 3:1 for large text.",
          },
          {
            name: "Design principles",
            statement:
              "Layout, colour, typography, consistency, accessibility.",
          },
        ],
        workedExample: {
          problem: "Why is alt text important beyond accessibility?",
          solution:
            "Alt text describes images for screen readers AND displays when images fail to load — serving multiple purposes.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u3-l1-design-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "WCAG requires what minimum contrast ratio for normal text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2:1" },
              { id: "b", text: "10:1" },
              { id: "c", text: "7:1" },
              { id: "d", text: "4.5:1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WCAG contrast",
                statement: "4.5:1 for normal text ensures readability.",
              },
            ],
            steps: [
              { reasoning: "WCAG requires 4.5:1.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(d)** 4.5:1",
            commonErrors: ["Guessing ratio."],
          },
        },
        {
          id: "edxbtecit-u3-l1-design-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways consistent design improves user experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Design consistency",
                statement:
                  "Predictable patterns reduce learning effort and build trust.",
              },
            ],
            steps: [
              {
                reasoning: "Users learn patterns once — applies everywhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consistency builds trust/professionalism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces errors/navigation time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consistency lets users apply learned patterns — reducing errors, speeding navigation and building trust.",
            commonErrors: ["Only aesthetic.", "No UX benefit."],
          },
        },
        {
          id: "edxbtecit-u3-l1-design-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse why accessibility benefits all users, not just disabled users.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Universal design",
                statement:
                  "Accessibility features help everyone in different contexts.",
              },
            ],
            steps: [
              {
                reasoning: "Clear navigation helps everyone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Captions help in noisy environments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Good contrast helps in sunlight/bright conditions.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Accessibility features benefit all — captions help noisy environments, contrast helps sunlight, clear navigation helps everyone.",
            commonErrors: ["Only disabled view.", "No universal benefits."],
          },
        },
        {
          id: "edxbtecit-u3-l1-design-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A website uses light grey text on white background and tiny fonts.",
          parts: [
            {
              label: "a",
              prompt: "Identify two accessibility problems.",
              marks: 2,
            },
            { label: "b", prompt: "Suggest two specific fixes.", marks: 3 },
            {
              label: "c",
              prompt: "Explain who is most affected by these issues.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accessibility issues",
                statement:
                  "Low contrast and small text fail WCAG — exclude users with visual impairments and older users.",
              },
            ],
            steps: [
              {
                reasoning: "Problem 1: insufficient contrast.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Problem 2: text too small.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Fix 1: darker text/higher contrast.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Fix 2: larger font size/relative units.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Fix 3: test with accessibility tools.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Affected: visually impaired users.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Affected: older users/presbyopia.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Affected: users in bright environments.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) contrast+size (b) darker text+larger font (c) visual/older/bright-env users",
            commonErrors: [
              "No WCAG reference.",
              "Only visual impairment mentioned.",
            ],
          },
        },
      ],
    },
  ],
};
