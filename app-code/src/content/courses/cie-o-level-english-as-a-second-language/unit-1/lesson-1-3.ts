import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "oles-u1-lesson-1-3",
  code: "1-3",
  title: "Main ideas and supporting details",
  goal: "I CAN distinguish the main idea of a paragraph from its supporting details.",
  standards: ["1120 Reading: main idea"],
  vocabulary: [
    { term: "Main idea", definition: "The most important point a paragraph or text makes." },
    { term: "Supporting detail", definition: "Facts, examples or explanations that back up the main idea." },
    { term: "Topic sentence", definition: "A sentence, often first, that states the paragraph's main idea." },
    { term: "Gist", definition: "The general sense or essence of a text without detail." },
    { term: "Distractor", definition: "An answer choice that is true somewhere but not the main point." },
  ],
  concepts: [
    {
      id: "oles-u1-mainidea",
      title: "Finding the main idea",
      skill: "Identify the central point of a paragraph or whole text.",
      lesson: {
        sections: [
          { heading: "Main idea vs details", body: "Every paragraph usually has one main idea supported by details. The main idea answers 'what is this paragraph mostly about?' Details answer 'how do we know?' A main-idea answer must cover the whole paragraph — if it only fits one sentence, it is too narrow." },
          { heading: "How to find it", body: "Read the first and last sentences of a paragraph first — the topic sentence is often there. Then check that every other sentence supports it. For a whole text, combine the paragraph main ideas and ignore examples and repetition." },
        ],
        keyFormulas: [
          { name: "Main idea test", statement: "Must cover the whole paragraph; details only support it." },
        ],
        workedExample: {
          problem: "Paragraph: 'Exercise improves health in many ways. It strengthens the heart, helps control weight, and reduces stress.' What is the main idea?",
          solution: "Main idea: exercise improves health. The three listed benefits are supporting details.",
        },
      },
      questions: [
        {
          id: "oles-u1-mi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The main idea of a paragraph is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its most important point" },
            { id: "b", text: "Its longest sentence" },
            { id: "c", text: "Its first example" },
            { id: "d", text: "Its rarest word" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Main idea", statement: "The most important point." }], steps: [{ reasoning: "Main idea = central point of the paragraph.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Its most important point" },
        },
        {
          id: "oles-u1-mi-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a topic sentence?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Topic sentence", statement: "States the paragraph's main idea, often first." }], steps: [
            { reasoning: "A topic sentence states the main idea of the paragraph.", marks: 1, markCode: "AO2" },
            { reasoning: "It is often the first or last sentence.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "A sentence stating the paragraph's main idea, usually first or last." },
        },
        {
          id: "oles-u1-mi-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Why can a true statement still be the wrong answer to a main-idea question?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Main idea vs detail", statement: "Main idea must cover the whole paragraph." }], steps: [
            { reasoning: "A detail is true but covers only part of the paragraph.", marks: 1, markCode: "AO2" },
            { reasoning: "The main idea must include every supporting detail.", marks: 1, markCode: "AO2" },
            { reasoning: "So a narrow-but-true choice is a distractor.", marks: 1, markCode: "AO2" },
            { reasoning: "Explains the trap clearly.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "True details are too narrow — the main idea must cover the whole paragraph." },
        },
        {
          id: "oles-u1-mi-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Main idea skills review.",
          parts: [
            { label: "a", prompt: "Define main idea.", marks: 2 },
            { label: "b", prompt: "What is a topic sentence?", marks: 2 },
            { label: "c", prompt: "How do you find the main idea of a whole text?", marks: 2 },
            { label: "d", prompt: "Why are details wrong as main-idea answers?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Main idea", statement: "Central point covering the whole text; details only support." }], steps: [
            { part: "a", reasoning: "The main idea is the most important point a paragraph or text makes.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "A sentence, often first or last, stating the paragraph's main idea.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Combine the main ideas of each paragraph; ignore examples and repetition.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct method.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Details are true but cover only part of the text.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Main idea must include all details.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Names the distractor trap.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) central point (b) states paragraph idea (c) combine paragraphs (d) details too narrow",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct method.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Narrowness explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "States details are partial only.", part: "d" },
            ],
          },
        },
      ],
    },
    {
      id: "oles-u1-gist",
      title: "Gist and skimming",
      skill: "Get the general sense of a text quickly before reading in detail.",
      lesson: {
        sections: [
          { heading: "Skimming for gist", body: "Skimming means reading quickly for the general sense: read the title, first sentence of each paragraph, and any bold or numbered points. You are not studying — you are building a map of the text." },
          { heading: "When to skim", body: "Skim before answering questions so you know the topic, the order of ideas, and which paragraph probably holds each answer. Then read in detail only where needed." },
        ],
        keyFormulas: [
          { name: "Skim points", statement: "Title + first sentences + signposts = gist map." },
        ],
        workedExample: {
          problem: "A six-paragraph text is about school canteens. Paragraph 3 starts 'Prices are the biggest complaint.' Where would a question about cost be answered?",
          solution: "Paragraph 3 — the first sentence signals the topic is prices/cost.",
        },
      },
      questions: [
        {
          id: "oles-u1-gist-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Skimming is reading…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Quickly for the general sense" },
            { id: "b", text: "Every word carefully" },
            { id: "c", text: "Only the last paragraph" },
            { id: "d", text: "The questions first" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Skimming", statement: "Quick read for gist." }], steps: [{ reasoning: "Skim = fast overview, not detail.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Quickly for the general sense" },
        },
        {
          id: "oles-u1-gist-q2", difficulty: "core", totalMarks: 2,
          stem: "Which three things should you look at when skimming?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Skim targets", statement: "Title, first sentences, signposts." }], steps: [
            { reasoning: "Title, first sentence of each paragraph, and signpost/bold words.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct set of skim targets.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Title; first sentence of each paragraph; signposts or highlighted words." },
        },
        {
          id: "oles-u1-gist-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why skimming before detailed reading improves your answers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Skim benefit", statement: "Builds a map of the text before detail work." }], steps: [
            { reasoning: "Skimming reveals the topic and structure of the whole text.", marks: 1, markCode: "AO2" },
            { reasoning: "You learn which paragraph covers which idea.", marks: 1, markCode: "AO2" },
            { reasoning: "Then detailed reading is targeted — faster and more accurate.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear benefit explained.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Skimming builds a map so detailed reading is targeted and accurate." },
        },
        {
          id: "oles-u1-gist-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Gist and skimming review.",
          parts: [
            { label: "a", prompt: "Define skimming.", marks: 2 },
            { label: "b", prompt: "Name three skim targets.", marks: 3 },
            { label: "c", prompt: "What is the 'gist' of a text?", marks: 2 },
            { label: "d", prompt: "When should you skim?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Skimming", statement: "Quick read for general sense before detail." }], steps: [
            { part: "a", reasoning: "Skimming = reading quickly for the general sense, not every word.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any three: title, first sentences, signposts, bold/numbered points.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Three valid targets.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "All correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "The general sense or essence of the text without detail.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Before answering questions and before detailed reading.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct timing.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) quick read for gist (b) three targets (c) general sense (d) before questions",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three valid targets.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Two only.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct timing.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u1-1-3-notes", title: "Main ideas and gist — notes", summary: "Central points, topic sentences and skimming technique.",
      sections: [
        { heading: "Main idea vs detail", body: "The main idea covers the whole paragraph; details only support it. A true detail can still be a wrong main-idea answer." },
        { heading: "Skimming", body: "Read title + first sentences + signposts to map the text before answering. Gist = general sense without detail." },
      ] },
  ],
};
