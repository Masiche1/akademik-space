import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "cieict-u1-lesson-1-4",
  code: "1-4",
  title: "Web Authoring and Multimedia",
  goal: "I CAN create web pages and multimedia presentations using appropriate software.",
  standards: ["Cambridge IGCSE ICT 0417: web authoring and multimedia", "0417 section 5: web/multimedia"],
  
  vocabulary: [
    { term: "Web authoring", definition: "Creating web pages with HTML/CSS or tools." },
    { term: "HTML", definition: "HyperText Markup Language — structures web pages." },
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
          problem: "Create a simple web page with a heading, paragraph and link.",
          solution: "<h1>My Page</h1><p>Welcome!</p><a href='https://example.com'>Link</a> styled with CSS.",
        },
      },
      questions: [
        {
          id: "cieict-u1-wa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does HTML stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "HyperText Markup Language"
                    },
                    {
                              "id": "b",
                              "text": "High Tech Modern Language"
                    },
                    {
                              "id": "c",
                              "text": "Home Tool Markup Language"
                    },
                    {
                              "id": "d",
                              "text": "Hyperlink Text Markup"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HTML",
                              "statement": "HyperText Markup Language."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HTML = web page structure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "HyperText Markup Language"
},
        },
        {
          id: "cieict-u1-wa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between HTML and CSS?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HTML vs CSS",
                              "statement": "Structure vs style."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HTML=structure (content); CSS=style (appearance).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Separation allows consistent styling.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Structure vs style"
},
        },
        {
          id: "cieict-u1-wa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are 3 design principles for effective presentations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Presentation design",
                              "statement": "Clarity, consistency, appropriateness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consistent theme/fonts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear hierarchy, minimal text.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Appropriate media for audience.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Consistency, clarity, appropriateness"
},
        },
        {
          id: "cieict-u1-wa-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define web authoring, HTML, CSS, multimedia, presentation software, animation. (b) What does <a href> do? (c) What does <img src> do? (d) How does CSS change appearance? (e) What is multimedia? (f) When use animation in presentations? (g) What makes a web page accessible? (h) Design a 5-slide presentation on 'our school'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Web/multimedia",
                              "statement": "HTML, CSS, presentations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Creates hyperlink.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Embeds image.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Colours, fonts, layout.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Combined media types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Emphasise points, guide attention.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Alt text, contrast, structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid presentation outline.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Web authoring and multimedia creation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-wa-notes",
      title: "Web and multimedia — notes",
      summary: "HTML=structure, CSS=style. Multimedia combines text/images/audio/video for engaging content.",
      sections: [
        { heading: "Key idea", body: "Separation of structure (HTML) and style (CSS) is best practice." },
        { heading: "Design", body: "Consistency, clarity, appropriate media = effective presentations." },
      ],
    },
  ],
};
