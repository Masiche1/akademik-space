import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const PARALLEL: TextExtract = {
  title: "Excerpt: Identifying Parallel Structure Issues",
  author: "Written for Akademik Space",
  text: "A student wrote the following in an essay about extracurricular activities.",
};

const PARALLELERR: TextExtract = {
  title: "Student Essay with Parallelism Errors",
  author: "Written for Akademik Space",
  text: "Students should join clubs because they learn teamwork, to make friends, and building leadership skills. The best activities include sports, playing music, and volunteer work. When I joined the debate team, I learned to speak confidently, how to research arguments, and listening carefully to others. Activities help students develop confidence, responsibility, and they learn to manage their time.",
};

export const lesson73: Lesson = {
  id: "ela8-u7-lesson-7-3",
  code: "7-3",
  title: "Parallel Structure and Sentence Variety",
  goal: "I CAN use parallel structure in lists and comparisons, and vary sentence structure for rhythm and emphasis.",
  standards: ["L.8.1", "L.8.1e", "L.8.1f", "L.8.3a", "L.8.5", "L.8.5a"],
  vocabulary: [
    {
      term: "Parallel structure",
      definition:
        "Using the same grammatical form for items in a series or comparison.",
    },
    {
      term: "Sentence variety",
      definition: "Mixing simple, compound, complex sentences for rhythm.",
    },
    {
      term: "Correlative conjunction",
      definition: "Pairs like not only/but also, either/or, neither/nor.",
    },
    {
      term: "Parallelism error",
      definition: "Breaking consistent grammatical form in a series.",
    },
    {
      term: "Emphasis",
      definition: "Using structure to draw attention to important ideas.",
    },
    {
      term: "Rhythm",
      definition: "Flow and pace created by sentence length variation.",
    },
  ],
  concepts: [
    {
      id: "ela8-u7-parallel",
      title: "Parallel structure",
      skill:
        "Use parallel grammatical forms in lists, comparisons, and correlative conjunctions.",
      lesson: {
        sections: [
          {
            heading: "Parallelism in lists",
            body: "Items in a series must use the **same grammatical form**: 'learn teamwork, to make friends, and building leadership' is broken — should be 'learn teamwork, make friends, and build leadership' (all verbs) or 'learning teamwork, making friends, and building leadership' (all gerunds). Test: do all items match grammatically? Nouns with nouns, verbs with verbs, phrases with phrases.",
          },
          {
            heading: "Parallelism in comparisons and conjunctions",
            body: "Comparisons need parallel structure: 'She likes reading more than to swim' → 'She likes reading more than swimming.' Correlative conjunctions (not only/but also, either/or, neither/nor) require parallel forms: 'not only learned to speak confidently but also how to research' → 'not only learned to speak confidently but also learned to research.' The second part must match the first.",
          },
        ],
        keyFormulas: [
          {
            name: "List parallelism",
            statement:
              "All items same grammatical form: verbs, nouns, or phrases.",
          },
          {
            name: "Comparison parallelism",
            statement: "Both sides of comparison use same form.",
          },
          {
            name: "Correlative parallelism",
            statement: "Both parts of not only/but also must match.",
          },
        ],
        workedExample: {
          problem:
            "Fix: 'develop confidence, responsibility, and they learn to manage their time.'",
          solution:
            "Develop confidence, responsibility, and time management skills. — all nouns now. OR: 'develop confidence, take responsibility, and manage their time' — all verbs.",
        },
      },
      questions: [
        {
          id: "ela8-u7-parallel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PARALLELERR,
          stem: "Which sentence has a parallelism error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence 1" },
              { id: "b", text: "Sentence 4" },
              { id: "c", text: "Sentence 3" },
              { id: "d", text: "Sentence 2" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallelism error",
                statement: "Broken grammatical form in series.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sentence 4 'develop confidence, responsibility, and they learn to manage' mixes noun phrase with clause — broken parallelism.",
                evidence: "develop confidence, responsibility, and they learn",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Sentence 4 — mixes noun phrases with a clause.",
            commonErrors: [
              "Missing sentence 3 — 'learn to speak, how to research, and listening' is also broken but less obvious.",
            ],
          },
        },
        {
          id: "ela8-u7-parallel-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PARALLELERR,
          stem: "Fix sentence 1 to use parallel structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parallel correction",
                statement: "Make all items match.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Original: 'learn teamwork, to make friends, and building leadership skills' — mixed forms.",
                evidence: "learn teamwork, to make friends, and building",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix option 1 (verbs): 'learn teamwork, make friends, and build leadership skills.'",
                evidence: "learn teamwork",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix option 2 (gerunds): 'learning teamwork, making friends, and building leadership skills.'",
                evidence: "building leadership skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Students should join clubs because they learn teamwork, make friends, and build leadership skills.' (or 'learning teamwork, making friends, and building leadership skills')",
            commonErrors: ["Fixing only one item — all must match."],
          },
        },
        {
          id: "ela8-u7-parallel-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PARALLEL,
          stem: "Rewrite the entire excerpt using parallel structure throughout.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive parallelism",
                statement: "Fix all series.",
              },
              {
                kind: "skill",
                name: "Consistent form",
                statement: "Maintain parallel throughout.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Sentence 1: 'learn teamwork, make friends, and build leadership skills' (verbs).",
                evidence: "learn teamwork, to make friends, and building",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence 2: 'sports, playing music, and volunteer work' → 'playing sports, playing music, and doing volunteer work' (all gerunds).",
                evidence: "sports, playing music, and volunteer work",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence 3: 'speak confidently, how to research arguments, and listening carefully' → 'speak confidently, research arguments, and listen carefully' (all verbs).",
                evidence: "speak confidently, how to research",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sentence 4: 'develop confidence, responsibility, and they learn to manage' → 'develop confidence, take responsibility, and manage their time' (all verbs).",
                evidence: "develop confidence, responsibility, and they learn",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Students should join clubs because they learn teamwork, make friends, and build leadership skills. The best activities include playing sports, playing music, and doing volunteer work. When I joined the debate team, I learned to speak confidently, research arguments, and listen carefully to others. Activities help students develop confidence, take responsibility, and manage their time.'",
            commonErrors: [
              "Fixing some but leaving others broken — check all series.",
            ],
          },
        },
        {
          id: "ela8-u7-parallel-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PARALLELERR,
          parts: [
            { label: "a", prompt: "What is parallel structure?", marks: 2 },
            {
              label: "b",
              prompt:
                "Fix 'not only learned to speak confidently but also how to research arguments.'",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parallel definition and application",
                statement: "Same form throughout.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Using same grammatical form for items in a series or comparison.",
                evidence: "parallel structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'not only learned to speak confidently but also learned to research arguments' — both parts now verbs.",
                evidence:
                  "not only learned to speak confidently but also how to research",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Same grammatical form for items in series/comparison. (b) 'not only learned to speak confidently but also learned to research arguments.'",
            commonErrors: ["Fixing only second part — both must match."],
          },
        },
      ],
    },
    {
      id: "ela8-u7-variety",
      title: "Sentence variety and rhythm",
      skill:
        "Vary sentence length and structure to create rhythm, emphasis, and readability.",
      lesson: {
        sections: [
          {
            heading: "Sentence types and rhythm",
            body: "Mix **simple** (one clause), **compound** (two independent joined by conjunction), **complex** (independent + dependent), and **compound-complex** sentences. Short sentences create punch: 'I froze.' Long sentences create flow: 'The crowd roared as the ball sailed through the air and into the net.' Vary length for rhythm — all short feels choppy, all long feels exhausting.",
          },
          {
            heading: "Emphasis through structure",
            body: "Place important ideas at sentence ends for emphasis: 'After weeks of practice, I finally rode without training wheels' — climax at end. Use fragments for dramatic effect: 'The wheel wobbled. I froze.' Front-load with dependent clauses for context: 'Although my hands shook, I pedaled forward.' Sentence variety prevents monotony and guides reader attention.",
          },
        ],
        keyFormulas: [
          {
            name: "Sentence variety",
            statement: "Mix simple, compound, complex for rhythm.",
          },
          {
            name: "Emphasis placement",
            statement: "Important ideas at end for punch.",
          },
          {
            name: "Fragment effect",
            statement: "Short fragments create dramatic tension.",
          },
          {
            name: "Dependent clause",
            statement: "Front-load context: 'Although X, Y happened.'",
          },
        ],
        workedExample: {
          problem:
            "Why does 'I rode my bike. I fell. I got back up. I rode again.' feel monotonous?",
          solution:
            "All simple sentences, same length — no rhythm. Add variety: 'I rode my bike. I fell — hard. But I got back up, dusted off, and rode again, faster this time.' Mix of short/long creates flow.",
        },
      },
      questions: [
        {
          id: "ela8-u7-variety-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PARALLEL,
          stem: "Which sentence is compound?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Students should join clubs because they learn teamwork.",
              },
              {
                id: "b",
                text: "Because students join clubs, they learn teamwork.",
              },
              { id: "c", text: "Students joining clubs learn teamwork." },
              {
                id: "d",
                text: "Students learn teamwork, and they make friends.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound sentence",
                statement: "Two independent clauses joined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option b has two independent clauses joined by 'and' — compound.",
                evidence: "Students learn teamwork, and they make friends",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Two independent clauses joined by 'and.'",
            commonErrors: [
              "Choosing (a) — that's complex (has dependent clause).",
            ],
          },
        },
        {
          id: "ela8-u7-variety-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PARALLELERR,
          stem: "Rewrite 'Students should join clubs because they learn teamwork' as a compound sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence restructuring",
                statement: "Change structure intentionally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Original is complex: 'Students should join clubs because they learn teamwork.'",
                evidence: "Students should join clubs because",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Compound version: 'Students should join clubs, and they will learn teamwork.'",
                evidence: "they learn teamwork",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Now two independent clauses joined by conjunction — different rhythm.",
                evidence: "should join clubs",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Students should join clubs, and they will learn teamwork.' — compound version creates different emphasis.",
            commonErrors: [
              "Adding 'and' without checking both sides are independent.",
            ],
          },
        },
        {
          id: "ela8-u7-variety-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PARALLEL,
          stem: "Rewrite the excerpt varying sentence length and structure for better rhythm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Mix lengths for rhythm.",
              },
              {
                kind: "skill",
                name: "Emphasis control",
                statement: "Place important ideas strategically.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Vary sentence lengths: mix short punchy with longer flowing sentences.",
                evidence: "varies sentence length",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Use fragments for emphasis: 'The best activities? Sports, music, volunteer work.'",
                evidence: "sentence variety",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning: "Place key ideas at sentence ends for emphasis.",
                evidence: "rhythm and emphasis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Students should join clubs. Why? They learn teamwork, make friends, and build leadership — skills that last. The best activities? Playing sports, playing music, doing volunteer work. When I joined the debate team, I learned to speak confidently, research arguments, and listen carefully. Activities help students develop confidence, take responsibility, and manage their time.'",
            commonErrors: ["Making all sentences long — variety means mix."],
          },
        },
        {
          id: "ela8-u7-variety-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PARALLELERR,
          parts: [
            {
              label: "a",
              prompt: "Why does sentence variety matter?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify one sentence type you could add for variety.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhythm awareness",
                statement: "Vary for readability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Prevents monotony, creates rhythm, guides reader attention.",
                evidence: "sentence variety",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Add a short fragment for emphasis: 'The best part? Making friends.'",
                evidence: "varies sentence length",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Prevents monotony, creates rhythm, guides attention. (b) Add short fragment: 'The best part? Making friends.'",
            commonErrors: [
              "Thinking variety means random changes — it's purposeful.",
            ],
          },
        },
      ],
    },
  ],
};
