import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cieict-u2-lesson-2-2",
  code: "2-2",
  title: "Desktop Publishing and Layout",
  goal: "I CAN create professional page layouts using DTP software.",
  standards: ["Cambridge IGCSE ICT 0417: desktop publishing", "0417 section: DTP"],
  
  vocabulary: [
    { term: "DTP", definition: "Desktop publishing — creating printed documents." },
    { term: "Layout", definition: "Arrangement of text and images on a page." },
    { term: "Frame", definition: "Container for text or images on a page." },
    { term: "Master page", definition: "Template applied to all pages." },
    { term: "Grid", definition: "Guides aligning elements consistently." },
    { term: "Bleed", definition: "Area extending beyond trim for full-colour printing." },
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
          solution: "Header with logo+date, 2-column body text, image box, footer with contact info. Master page for consistency.",
        },
      },
      questions: [
        {
          id: "cieict-u2-dtp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is DTP?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Desktop publishing — creating printed documents"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A network protocol"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DTP",
                              "statement": "Desktop publishing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DTP = page layout software.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Desktop publishing"
},
        },
        {
          id: "cieict-u2-dtp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a master page and why use one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Master page",
                              "statement": "Consistent template."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Master page = design applied to all pages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ensures consistency, saves time.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Consistent page template"
},
        },
        {
          id: "cieict-u2-dtp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is visual hierarchy and why does it matter in layout?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visual hierarchy",
                              "statement": "Guides reader's eye."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hierarchy = importance ordering (headlines>body).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Guides reader to key information first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improves readability/comprehension.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Importance ordering for readability"
},
        },
        {
          id: "cieict-u2-dtp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define DTP, layout, frame, master page, grid, bleed. (b) When use DTP vs word processor? (c) What is a frame? (d) What is a master page? (e) What is visual hierarchy? (f) What is white space? (g) What is bleed for? (h) Design a poster layout for a school play.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "DTP",
                              "statement": "Page layout principles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) DTP for complex layouts; word processor for documents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Container for text/images.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Consistent design template.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Importance ordering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Empty space improving readability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Full-colour edge printing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid poster layout.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Desktop publishing and layout design."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-dtp-notes",
      title: "DTP — notes",
      summary: "Frames hold content; master pages ensure consistency; visual hierarchy guides readers.",
      sections: [
        { heading: "Key idea", body: "Good layout = clear hierarchy + consistent design + balanced whitespace." },
        { heading: "Use", body: "Newsletters, brochures, posters — anything needing professional layout." },
      ],
    },
  ],
};
