import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "el7-u1-lesson-1-3",
  code: "1-3",
  title: "Comparing Texts and Purposes",
  goal: "I CAN compare texts on the same topic and analyse how purpose and audience shape writing.",
  standards: ["Edexcel KS3 English Language — Reading"],
  vocabulary: [
    {
      term: "Purpose",
      definition:
        "The writer's goal — to inform, persuade, entertain, instruct.",
    },
    {
      term: "Audience",
      definition:
        "The intended reader — affects tone, vocabulary and structure.",
    },
    {
      term: "Register",
      definition: "The level of formality — formal, informal, neutral.",
    },
    {
      term: "Tone",
      definition:
        "The writer's attitude — humorous, serious, sarcastic, enthusiastic.",
    },
  ],
  concepts: [
    {
      id: "el7-u1-purpose",
      title: "Purpose and Audience",
      skill:
        "Analyse how a writer's purpose and target audience shape their choices.",
      lesson: {
        sections: [
          {
            heading: "Purpose shapes everything",
            body: "A text's **purpose** determines its language, structure and style. To **inform**: clear, factual, organised. To **persuade**: emotive, argumentative, evidence-based. To **entertain**: vivid, imaginative, engaging. To **instruct**: step-by-step, precise, unambiguous.\n\n**Audience** shapes register: children get simple vocabulary and examples; experts get technical terms and assumed knowledge; general public gets balanced explanations. Misjudging audience loses readers.",
          },
          {
            heading: "Comparing texts",
            body: "When comparing texts on the same topic: identify **similarities** (same facts, same purpose) and **differences** (different angles, audiences, tones, structures).\n\nExample: two articles about climate change — a scientific journal (formal, data-heavy, cautious) vs a teen magazine (informal, emotive, simplified). Same topic, completely different treatment because purpose and audience differ.",
          },
        ],
        keyFormulas: [
          {
            name: "Purpose → style",
            statement:
              "Inform=factual, persuade=emotive, entertain=vivid, instruct=precise.",
          },
          {
            name: "Audience → register",
            statement: "Expert=technical, general=balanced, children=simple.",
          },
        ],
        workedExample: {
          problem:
            "Compare a formal report and a blog post about the same school trip.",
          solution:
            "Report: factual, structured, third person. Blog: personal, informal, first person, emotive. Same events, different purpose/audience.",
        },
      },
      questions: [
        {
          id: "el7-u1-purpose-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does audience affect a writer's choices?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only matters for fiction" },
              { id: "b", text: "Only affects font size" },
              {
                id: "c",
                text: "It determines vocabulary, tone and complexity",
              },
              {
                id: "d",
                text: "It doesn't — writers write the same for everyone",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Audience effect",
                statement:
                  "Audience determines language level, tone, examples.",
              },
            ],
            steps: [
              {
                reasoning: "Audience shapes vocabulary, tone, complexity.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Vocabulary, tone, complexity",
            commonErrors: ["Audience irrelevant view."],
          },
        },
        {
          id: "el7-u1-purpose-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the likely purpose of a set of instructions for assembling flat-pack furniture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Purpose identification",
                statement:
                  "Instructions aim to enable the reader to complete a task.",
              },
            ],
            steps: [
              { reasoning: "Purpose: instruct.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Features: step-by-step, precise, sequential.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear identification.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "To instruct — enable reader to assemble furniture correctly.",
            commonErrors: ["Generic 'to inform'.", "No features."],
          },
        },
        {
          id: "el7-u1-purpose-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might the same news story be written differently in a tabloid vs broadsheet?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Audience and purpose",
                statement:
                  "Different audiences → different treatment of same facts.",
              },
            ],
            steps: [
              {
                reasoning: "Tabloid: sensational, emotive, shorter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Broadsheet: detailed, formal, analytical.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Audience expectations differ.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer:
              "Different audiences expect different styles — tabloid sensationalises, broadsheet analyses.",
            commonErrors: ["Facts differ view.", "No audience link."],
          },
        },
        {
          id: "el7-u1-purpose-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two texts describe the same music festival.",
          parts: [
            {
              label: "a",
              prompt:
                "Text A is a festival review in a magazine; Text B is the official festival programme. Compare their purposes.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two differences in language you would expect.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how audience shapes each text.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Purpose and audience",
                statement:
                  "Review=entertain/persuade; programme=inform/instruct.",
              },
            ],
            steps: [
              {
                reasoning: "Review: entertain + evaluate + persuade.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Programme: inform + instruct attendees.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Purposes clearly distinguished.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Review: subjective, emotive, descriptive.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Programme: factual, structured, practical.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Language differences identified.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Review targets general readers/fans.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "Programme targets attendees needing info.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "(a) entertain/evaluate vs inform/instruct (b) subjective vs factual (c) fans vs attendees",
            commonErrors: ["Same purpose assumed.", "No audience analysis."],
          },
        },
      ],
    },
    {
      id: "el7-u1-context",
      title: "Context and Cultural Awareness",
      skill:
        "Consider how historical, social and cultural context affects meaning in texts.",
      lesson: {
        sections: [
          {
            heading: "Context matters",
            body: "Texts are products of their **time, place and culture**. A novel written in 1850 reflects Victorian values; a poem from the Blitz reflects wartime experience; a modern meme reflects digital culture. Understanding context deepens interpretation.\n\n**Contextual clues**: language choices, references, assumptions, values expressed. What was normal then may seem strange now — and vice versa.",
          },
          {
            heading: "Applying context",
            body: "When analysing older texts: consider what the writer knew, what was acceptable, what debates were current. When comparing across time: track how attitudes change — gender roles, race, class, technology.\n\n**Cultural awareness**: avoid imposing modern values anachronistically, but do recognise problematic elements. Critical reading balances historical understanding with contemporary evaluation.",
          },
        ],
        keyFormulas: [
          {
            name: "Context dimensions",
            statement: "Historical, social, cultural, technological.",
          },
          {
            name: "Anachronism",
            statement:
              "Judging past texts by modern standards without context.",
          },
        ],
        workedExample: {
          problem:
            "A 1950s textbook says 'A woman's place is in the home.' How to respond?",
          solution:
            "Contextualise: reflects 1950s gender norms; evaluate critically as outdated but historically revealing.",
        },
      },
      questions: [
        {
          id: "el7-u1-context-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'context' in text analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot summary" },
              { id: "b", text: "Just the setting" },
              {
                id: "c",
                text: "The time, place, culture and circumstances of writing",
              },
              { id: "d", text: "The author's biography" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context",
                statement:
                  "Time, place, culture, circumstances shaping the text.",
              },
            ],
            steps: [
              {
                reasoning: "Context = circumstances of production.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Time, place, culture, circumstances",
            commonErrors: ["Only setting."],
          },
        },
        {
          id: "el7-u1-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might attitudes in an old text seem strange to modern readers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Changing attitudes",
                statement:
                  "Social values evolve — old texts reflect old norms.",
              },
            ],
            steps: [
              {
                reasoning: "Values change over time.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Old text reflects its era's norms.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Modern readers judge by current standards.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Social values evolve — old texts express attitudes normal in their era but strange now.",
            commonErrors: ["Text is 'wrong' view.", "No change recognition."],
          },
        },
        {
          id: "el7-u1-context-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is 'anachronism' and why is it a problem in analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anachronism",
                statement:
                  "Applying modern standards to historical texts without context.",
              },
            ],
            steps: [
              {
                reasoning: "Defined: judging past by present standards.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Distorts historical understanding.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Prevents fair evaluation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Context enables balanced judgement.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Anachronism = judging historical texts by modern values — distorts understanding; context enables fair evaluation.",
            commonErrors: ["Vague definition.", "No consequence."],
          },
        },
        {
          id: "el7-u1-context-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 1940s film shows women only in domestic roles.",
          parts: [
            {
              label: "a",
              prompt: "Explain how historical context affects interpretation.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest how a modern critic might evaluate it.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Discuss the balance between context and criticism.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Contextual criticism",
                statement:
                  "Understand era's norms while evaluating critically.",
              },
            ],
            steps: [
              {
                reasoning: "1940s gender roles were restrictive/normalised.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Film reflects its era's values.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Context explains but doesn't excuse.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "Modern critic: recognise historical accuracy.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Critic: note limited representation.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "Critic: evaluate as historical artefact vs timeless art.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "Balance: contextual understanding + critical evaluation.",
                marks: 2,
                markCode: "AO4",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "(a) reflects era's norms (b) historical accuracy + limited representation (c) understand + critique",
            commonErrors: ["Either excuse or condemn only.", "No balance."],
          },
        },
      ],
    },
  ],
};
