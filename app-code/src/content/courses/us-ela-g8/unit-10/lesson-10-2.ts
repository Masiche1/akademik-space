import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const MEDIAINT: TextExtract = {
  title: "Text with Integrated Media",
  author: "Written for Akademik Space",
  text: "Article: 'The Hidden Costs of Fast Fashion'\n\nText: 'The fashion industry produces 10% of global carbon emissions — more than international flights and shipping combined. A single cotton t-shirt requires 2,700 liters of water to produce.'\n\n[Accompanying infographic shows: 85% of textiles end up in landfills; one garbage truck of clothes is burned or dumped every second]\n\nText continues: 'Consumers can reduce impact by buying secondhand, choosing quality over quantity, and supporting brands with transparent supply chains.'",
};

const SOURCES: TextExtract = {
  title: "Evaluating Sources",
  author: "Written for Akademik Space",
  text: "When researching a topic, evaluate sources by asking: Who created this? What's their purpose? Is the information current? Can claims be verified? Academic sources (.edu, peer-reviewed journals) are generally more reliable than commercial sites or anonymous blogs. Always cross-check important claims with multiple sources.",
};

export const lesson102: Lesson = {
  id: "ela8-u10-lesson-10-2",
  code: "10-2",
  title: "Integrating Text and Media",
  goal: "I CAN analyze how text and accompanying media work together to convey information and persuade.",
  standards: ["RI.8.7", "RI.8.8", "RI.8.9", "RI.8.2"],
  vocabulary: [
    {
      term: "Integrated media",
      definition:
        "Text combined with images, graphics, or data visualizations.",
    },
    {
      term: "Infographic",
      definition: "Visual representation of data and information.",
    },
    {
      term: "Text-media relationship",
      definition: "How written and visual elements complement each other.",
    },
    {
      term: "Multimodal",
      definition: "Using multiple modes (text, image, sound) to communicate.",
    },
    {
      term: "Visual argument",
      definition: "Persuasion through images and design.",
    },
    {
      term: "Data visualization",
      definition: "Presenting data through charts, graphs, images.",
    },
  ],
  concepts: [
    {
      id: "ela8-u10-media",
      title: "Text-media integration",
      skill:
        "Analyze how text and media elements work together to convey information.",
      lesson: {
        sections: [
          {
            heading: "How text and media interact",
            body: "Text and media **complement** each other: text provides explanation, media provides impact. The fast fashion article uses text for statistics ('10% of carbon emissions') and infographic for visual impact ('one garbage truck every second'). Media makes abstract concrete — '85% end up in landfills' is just a number until you see the graphic. Together they create stronger message than either alone.",
          },
          {
            heading: "Analyzing media elements",
            body: "Ask: What does the media add that text doesn't? What does text clarify that media doesn't? The infographic's 'one garbage truck every second' is more impactful than '85% landfilled' — visual makes it real. But text explains context ('why this matters'). Media can also persuade: dark colors, urgent imagery, alarming statistics create emotional response that text alone might not.",
          },
        ],
        keyFormulas: [
          {
            name: "Complementary roles",
            statement: "Text explains; media impacts.",
          },
          {
            name: "Media makes concrete",
            statement: "Visual turns abstract into tangible.",
          },
          {
            name: "Together > alone",
            statement: "Combined elements stronger than separate.",
          },
        ],
        workedExample: {
          problem:
            "How do text and infographic work together in the fast fashion article?",
          solution:
            "Text provides statistics and context; infographic visualizes impact ('one truck every second'). Media makes abstract waste tangible; text explains implications.",
        },
      },
      questions: [
        {
          id: "ela8-u10-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIAINT,
          stem: "What does the infographic add that the text alone doesn't?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Longer explanation" },
              { id: "b", text: "More statistics" },
              { id: "c", text: "Different information" },
              { id: "d", text: "Visual impact making waste tangible" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media function",
                statement: "Visual makes abstract concrete.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'One garbage truck every second' is more impactful than '85%' — visual makes waste real.",
                evidence: "one garbage truck every second",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Visual impact making waste tangible.",
            commonErrors: [
              "Thinking media just repeats text — it adds impact.",
            ],
          },
        },
        {
          id: "ela8-u10-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIAINT,
          stem: "Explain how text and media complement each other in this article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complementary analysis",
                statement: "How elements work together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Text provides statistics and context ('10% of emissions', '2700 liters').",
                evidence: "10% of global carbon emissions",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Media provides visual impact ('one truck every second') — makes abstract waste tangible.",
                evidence: "one garbage truck every second",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Together: text explains, media impacts — stronger than either alone.",
                evidence: "complement each other",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Text provides statistics/context; media provides visual impact. Together they create stronger message — explanation + emotional impact.",
            commonErrors: [
              "Analyzing elements separately without showing interaction.",
            ],
          },
        },
        {
          id: "ela8-u10-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIAINT,
          stem: "Analyze how the author uses both text and media to persuade readers about fast fashion's environmental impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multimodal persuasion",
                statement: "How combined elements convince.",
              },
              {
                kind: "skill",
                name: "Media analysis",
                statement: "Visual vs textual persuasion.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Text persuasion: statistics ('10% emissions', '2700 liters') — logical appeal with data.",
                evidence: "10% of global carbon emissions",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Media persuasion: 'one truck every second' — emotional/visual impact, makes waste feel urgent.",
                evidence: "one garbage truck every second",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Combined: logic (data) + emotion (visual) = stronger persuasion than either alone.",
                evidence: "persuade readers",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author uses text for logical persuasion (statistics) and media for emotional persuasion (visual impact). 'One truck every second' creates urgency that '85%' alone doesn't. Combined logic + emotion = stronger argument.",
            commonErrors: [
              "Analyzing text or media separately — need to show interaction.",
            ],
          },
        },
        {
          id: "ela8-u10-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIAINT,
          parts: [
            {
              label: "a",
              prompt: "What is 'multimodal' communication?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Name two modes used in this article.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multimodal",
                statement: "Multiple communication modes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Using multiple modes (text, image, sound) to communicate.",
                evidence: "multimodal",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Text (statistics, explanation) and visual (infographic showing waste).",
                evidence: "text and media",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Multiple modes (text, image, sound). (b) Text and visual infographic.",
            commonErrors: ["Only naming text — need to identify all modes."],
          },
        },
      ],
    },
    {
      id: "ela8-u10-sources",
      title: "Evaluating sources and credibility",
      skill:
        "Assess source reliability, bias, and currency when evaluating informational texts.",
      lesson: {
        sections: [
          {
            heading: "Source evaluation criteria",
            body: "Ask: **Who** created this? (expert? biased?) **What** is their purpose? (inform? persuade? sell?) **When** was it created? (current?) **Where** is it published? (.edu? .com? blog?) **Can** claims be verified? Cross-check with other sources. Academic sources (.edu, peer-reviewed) generally more reliable; commercial sites may have conflicts of interest; anonymous sources unverifiable.",
          },
          {
            heading: "Red flags",
            body: "Warning signs: no author attribution, extreme claims without evidence, emotional language, outdated information, commercial interest, lack of citations. 'Studies show' without naming study = weak. 'Everyone knows' = oversimplification. Good sources cite their evidence, acknowledge limitations, and present balanced views. Critical consumers question sources, not just accept them.",
          },
        ],
        keyFormulas: [
          {
            name: "Who/what/when/where/can",
            statement: "Five questions for source evaluation.",
          },
          {
            name: "Red flags",
            statement: "No attribution, extreme claims, emotional language.",
          },
          {
            name: "Cross-check",
            statement: "Verify important claims with multiple sources.",
          },
        ],
        workedExample: {
          problem:
            "How would you evaluate a website claiming 'miracle cure' for disease?",
          solution:
            "Red flags: extreme claim, no author credentials, likely commercial interest (selling product), no citations. Unreliable — cross-check with medical sources before believing.",
        },
      },
      questions: [
        {
          id: "ela8-u10-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOURCES,
          stem: "Which source is generally most reliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer-reviewed journal" },
              { id: "b", text: "Commercial website" },
              { id: "c", text: "Anonymous blog" },
              { id: "d", text: "Social media post" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Source reliability",
                statement: "Peer-reviewed = credible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Peer-reviewed journals have expert review — most credible.",
                evidence: "peer-reviewed",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Peer-reviewed journal.",
            commonErrors: ["Choosing (a) — anonymous sources unverifiable."],
          },
        },
        {
          id: "ela8-u10-sources-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SOURCES,
          stem: "Identify three questions to ask when evaluating a source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source evaluation",
                statement: "Systematic assessment.",
              },
            ],
            steps: [
              {
                reasoning: "Who created this? — expertise and potential bias.",
                evidence: "Who created this",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "What is their purpose? — inform, persuade, or sell?",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Can claims be verified? — cross-check with other sources.",
                evidence: "verified",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Who created it? 2. What's their purpose? 3. Can claims be verified?",
            commonErrors: [
              "Asking only one question — need multiple criteria.",
            ],
          },
        },
        {
          id: "ela8-u10-sources-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SOURCES,
          stem: "A website claims 'New study proves chocolate cures depression.' Evaluate this claim using source evaluation criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim evaluation",
                statement: "Assess credibility.",
              },
              {
                kind: "skill",
                name: "Red flag recognition",
                statement: "Identify warning signs.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Red flags: extreme claim ('cures'), likely commercial interest (chocolate), vague 'new study' without citation.",
                evidence: "cures depression",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evaluation: ask who wrote it, what's their expertise, can you find the actual study?",
                evidence: "study proves",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: treat as unreliable until verified with peer-reviewed medical sources.",
                evidence: "cross-check",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Red flags: extreme claim, commercial interest, vague citation. Evaluate: check author credentials, find actual study, cross-check with medical sources. Treat as unreliable until verified.",
            commonErrors: ["Accepting claim without verification."],
          },
        },
        {
          id: "ela8-u10-sources-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SOURCES,
          parts: [
            {
              label: "a",
              prompt: "Name two red flags for unreliable sources.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you do with important claims?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Credibility assessment",
                statement: "Question sources.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "No author attribution, extreme claims without evidence, emotional language.",
                evidence: "red flags",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Cross-check with multiple reliable sources before believing.",
                evidence: "cross-check",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) No attribution, extreme claims, emotional language. (b) Cross-check with multiple sources.",
            commonErrors: ["Trusting first source found."],
          },
        },
      ],
    },
  ],
};
