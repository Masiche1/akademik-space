import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cieict-u2-lesson-2-2",
  code: "2-2",
  title: "Desktop Publishing and Layout",
  goal: "I CAN create professional page layouts using DTP software.",
  standards: [
    "Cambridge IGCSE ICT 0417: desktop publishing",
    "0417 section: DTP",
  ],

  vocabulary: [
    {
      term: "DTP",
      definition: "Desktop publishing — creating printed documents.",
    },
    { term: "Layout", definition: "Arrangement of text and images on a page." },
    { term: "Frame", definition: "Container for text or images on a page." },
    { term: "Master page", definition: "Template applied to all pages." },
    { term: "Grid", definition: "Guides aligning elements consistently." },
    {
      term: "Bleed",
      definition: "Area extending beyond trim for full-colour printing.",
    },
  ],
  concepts: [
    {
      id: "cieict-u2-s2-dtp",
      title: "Desktop publishing",
      skill: "Create page layouts at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "DTP concepts",
            body: "DTP software creates professional documents: newsletters, brochures, posters. Frames contain text/images; master pages apply consistent design; grids align elements.",
          },
          {
            heading: "Layout principles",
            body: "Visual hierarchy guides the eye: headlines > subheads > body. White space improves readability. Consistent fonts/colours build brand identity. Balance text and images.",
          },
        ],
        keyFormulas: [
          { name: "DTP", statement: "professional page layout" },
          { name: "Master page", statement: "consistent design template" },
          { name: "Grid", statement: "alignment guides" },
        ],
        workedExample: {
          problem: "Design a school newsletter front page.",
          solution:
            "Header with logo+date, 2-column body text, image box, footer with contact info. Master page for consistency.",
        },
      },
      questions: [
        {
          id: "cieict-u2-dtp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is DTP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Desktop publishing — creating printed documents",
              },
              {
                id: "b",
                text: "A programming language",
              },
              {
                id: "c",
                text: "A network protocol",
              },
              {
                id: "d",
                text: "A type of computer",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DTP",
                statement: "Desktop publishing.",
              },
            ],
            steps: [
              {
                reasoning: "DTP = page layout software.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Desktop publishing",
          },
        },
        {
          id: "cieict-u2-dtp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a master page and why use one?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Master page",
                statement: "Consistent template.",
              },
            ],
            steps: [
              {
                reasoning: "Master page = design applied to all pages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ensures consistency, saves time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistent page template",
          },
        },
        {
          id: "cieict-u2-dtp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is visual hierarchy and why does it matter in layout?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visual hierarchy",
                statement: "Guides reader's eye.",
              },
            ],
            steps: [
              {
                reasoning: "Hierarchy = importance ordering (headlines>body).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Guides reader to key information first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improves readability/comprehension.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Importance ordering for readability",
          },
        },
        {
          id: "cieict-u2-dtp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define DTP, layout, frame, master page, grid, bleed. (b) When use DTP vs word processor? (c) What is a frame? (d) What is a master page? (e) What is visual hierarchy? (f) What is white space? (g) What is bleed for? (h) Design a poster layout for a school play.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "DTP",
                statement: "Page layout principles.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) DTP for complex layouts; word processor for documents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Container for text/images.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Consistent design template.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Importance ordering.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Empty space improving readability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Full-colour edge printing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid poster layout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Desktop publishing and layout design.",
          },
        },
        {
          id: "cieict-u2-dtp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a master page in DTP software?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To convert the document to PDF",
              },
              {
                id: "b",
                text: "To apply a consistent design template to every page",
              },
              {
                id: "c",
                text: "To add animations between pages",
              },
              {
                id: "d",
                text: "To store backup copies of the document",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Master page",
                statement: "Template applied to all pages for consistency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Master pages keep headers, footers and styling consistent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistent design template",
          },
        },
        {
          id: "cieict-u2-dtp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "An A4 page is 210 mm wide. If the left and right margins are each 20 mm, how wide is the printable text area in mm?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 170,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Margins",
                statement: "Page width minus both margins.",
              },
            ],
            steps: [
              {
                reasoning: "210 - (20 + 20) = 170 mm.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "170 mm",
          },
        },
        {
          id: "cieict-u2-dtp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A newsletter has 6 pages and each page contains 3 frames (one text, one image, one caption). How many frames does the document contain in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 18,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Frames",
                statement: "Containers for text/images on a page.",
              },
            ],
            steps: [
              {
                reasoning: "6 pages x 3 frames = 18 frames.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "18 frames",
          },
        },
        {
          id: "cieict-u2-dtp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is 'bleed' used when preparing a document for professional printing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To reduce the number of pages",
              },
              {
                id: "b",
                text: "To encrypt the document file",
              },
              {
                id: "c",
                text: "To make the text bleed red for emphasis",
              },
              {
                id: "d",
                text: "To extend images/colours beyond the trim edge so none is left white after cutting",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bleed",
                statement: "Extra area beyond trim for full-colour printing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bleed prevents white edges when the page is trimmed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Avoids white edges after trimming",
          },
        },
        {
          id: "cieict-u2-dtp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do DTP designers use grids and alignment guides when laying out a page?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Grids",
                statement: "Guides for consistent alignment.",
              },
            ],
            steps: [
              {
                reasoning: "Grids align elements consistently across pages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They create visual order and professional appearance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistent alignment and visual order",
          },
        },
        {
          id: "cieict-u2-dtp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A page is 210 mm wide with left and right margins of 5 mm each. What is the width of the text area in mm?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "210 mm",
              },
              {
                id: "b",
                text: "190 mm",
              },
              {
                id: "c",
                text: "205 mm",
              },
              {
                id: "d",
                text: "200 mm",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Margins",
                statement: "Page width minus both margins.",
              },
            ],
            steps: [
              {
                reasoning: "210 - (5 + 5) = 200 mm.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "200 mm",
          },
        },
        {
          id: "cieict-u2-dtp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which correctly describes visual hierarchy in page layout?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Headline > subheading > body text, guiding the reader's eye",
              },
              {
                id: "b",
                text: "Images are always more important than text",
              },
              {
                id: "c",
                text: "Body text is the most important, headlines least",
              },
              {
                id: "d",
                text: "All text should be the same size",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visual hierarchy",
                statement: "Importance ordering for readability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Headlines attract attention first, then subheads, then body.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Headline > subheading > body",
          },
        },
        {
          id: "cieict-u2-dtp-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A poster layout uses a grid of 3 columns and 4 rows. How many grid cells does it contain?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Grid cells",
                statement: "Columns x rows.",
              },
            ],
            steps: [
              {
                reasoning: "3 x 4 = 12 cells.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "12 cells",
          },
        },
        {
          id: "cieict-u2-dtp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a designer use consistent fonts and colours throughout a multi-page document?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Consistency",
                statement: "Unified branding and readability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consistency builds a professional, recognisable identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It avoids distracting the reader and makes navigation easier.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Professional identity and readability",
          },
        },
        {
          id: "cieict-u2-dtp-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A school newsletter has 8 pages and each page contains about 150 words of body text. Approximately how many words does the newsletter contain?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1200,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Content volume",
                statement: "Pages x words per page.",
              },
            ],
            steps: [
              {
                reasoning: "8 x 150 = 1200 words.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1200 words",
          },
        },
        {
          id: "cieict-u2-dtp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which file format is most suitable for distributing a finished newsletter for professional printing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Plain text (.txt)",
              },
              {
                id: "b",
                text: "A spreadsheet (.xlsx)",
              },
              {
                id: "c",
                text: "A video file",
              },
              {
                id: "d",
                text: "PDF",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PDF",
                statement: "Fixed-layout format ideal for print distribution.",
              },
            ],
            steps: [
              {
                reasoning: "PDF preserves layout exactly for the printer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "PDF",
          },
        },
        {
          id: "cieict-u2-dtp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the steps you would take in DTP software to create a double-sided brochure for a school open day.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Brochure design",
                statement: "Plan, template, content, export.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set page size and margins, create a master page with logo, colours and consistent styling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Place text and images in frames on a grid, maintaining visual hierarchy and white space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Proofread, add bleed if needed, and export as PDF for printing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Template, frames on grid, proof and export PDF",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-dtp-notes",
      title: "DTP — notes",
      summary:
        "Frames hold content; master pages ensure consistency; visual hierarchy guides readers.",
      sections: [
        {
          heading: "Key idea",
          body: "Good layout = clear hierarchy + consistent design + balanced whitespace.",
        },
        {
          heading: "Use",
          body: "Newsletters, brochures, posters — anything needing professional layout.",
        },
      ],
    },
  ],
};
