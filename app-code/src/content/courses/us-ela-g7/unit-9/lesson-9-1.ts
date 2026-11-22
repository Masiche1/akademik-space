import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const REVDRAFT: TextExtract = {
  title: "Student Draft: Needing Revision",
  author: "Written for Akademik Space",
  text: "Dogs are good pets. They are loyal and fun. My dog is named Max and he is very cute. He likes to play fetch and he also likes to sleep. Sometimes he barks at the mailman. Dogs need to be walked every day. They also need food and water. Taking care of a dog is a big responsibility. You have to feed them and take them to the vet. But dogs are worth it because they love you. In conclusion, dogs make great pets for many reasons.",
};

export const lesson91: Lesson = {
  id: "ela7-u9-lesson-9-1",
  code: "9-1",
  title: "Revision: Strengthening Ideas and Organization",
  goal: "I CAN revise drafts to strengthen ideas, improve organization, and add depth.",
  standards: ["W.7.5", "W.7.5a", "W.7.5b", "W.7.5c"],
  vocabulary: [
    {
      term: "Revision",
      definition:
        "Rethinking and improving the content, organization, and style of a draft.",
    },
    {
      term: "Editing",
      definition: "Correcting grammar, punctuation, spelling, and conventions.",
    },
    {
      term: "Draft",
      definition: "A first or early version of writing that will be revised.",
    },
    { term: "Thesis", definition: "The main argument or claim of an essay." },
    {
      term: "Topic sentence",
      definition: "The first sentence of a paragraph stating its main idea.",
    },
    {
      term: "Transitions",
      definition: "Words or phrases that connect ideas and show relationships.",
    },
  ],
  concepts: [
    {
      id: "ela7-u9-revise",
      title: "Revision vs editing",
      skill:
        "Distinguish revision (content/organization) from editing (conventions) and apply both.",
      lesson: {
        sections: [
          {
            heading: "What revision changes",
            body: "**Revision** improves the *ideas* and *structure*: Does the thesis match the content? Are paragraphs organized logically? Is there enough evidence? Are transitions clear? Does the conclusion wrap up the argument? Revision asks 'Is this the best version of my ideas?'",
          },
          {
            heading: "What editing changes",
            body: "**Editing** fixes the *surface errors*: grammar, punctuation, spelling, capitalization. 'Their/there/they're' mistakes, comma splices, run-ons, misspellings. Editing asks 'Is this technically correct?' Do revision first, then edit — you don't want to perfect sentences you'll delete.",
          },
        ],
        keyFormulas: [
          {
            name: "Revision",
            statement:
              "Improve content, organization, ideas — 'Is this the best version?'",
          },
          {
            name: "Editing",
            statement:
              "Fix grammar, punctuation, spelling — 'Is this technically correct?'",
          },
          {
            name: "Order",
            statement:
              "Revise first, then edit — don't polish what you'll cut.",
          },
        ],
        workedExample: {
          problem:
            "The dog essay has 'Dogs are good pets. They are loyal and fun.' Is this a revision or editing problem?",
          solution:
            "Revision — 'Dogs are good pets' is vague and unsupported. A revision would add specifics: 'Dogs are loyal companions who provide emotional support and encourage daily exercise.' Editing wouldn't fix vagueness.",
        },
      },
      questions: [
        {
          id: "ela7-u9-revise-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVDRAFT,
          stem: "What is the main difference between revision and editing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're the same thing" },
              { id: "b", text: "Revision is only for teachers" },
              {
                id: "c",
                text: "Editing improves ideas; revision fixes grammar",
              },
              {
                id: "d",
                text: "Revision improves ideas and organization; editing fixes grammar and conventions",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revision vs editing",
                statement: "Content vs conventions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revision = big-picture improvements; editing = surface-level corrections.",
                evidence: "Revision: Strengthening Ideas and Organization",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Revision improves ideas/organization; editing fixes grammar/conventions.",
            commonErrors: [
              "Thinking they're interchangeable — they serve different purposes.",
            ],
          },
        },
        {
          id: "ela7-u9-revise-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REVDRAFT,
          stem: "Identify three revision problems in the draft (not editing errors).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Revision analysis",
                statement: "Find content and organization weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vague thesis: 'Dogs are good pets' — no specific claim or reasons.",
                evidence: "Dogs are good pets. They are loyal and fun.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "No organization: facts are listed randomly — loyalty, cuteness, walking, vet visits all mixed.",
                evidence: "He likes to play fetch and he also likes to sleep.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "No evidence or examples: 'loyal and fun' asserted but never shown or explained.",
                evidence: "Sometimes he barks at the mailman.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Vague thesis, no organization (random facts), no evidence/examples — revision problems, not just editing errors.",
            commonErrors: [
              "Listing spelling/grammar issues — those are editing, not revision.",
            ],
          },
        },
        {
          id: "ela7-u9-revise-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REVDRAFT,
          stem: "Revise the opening paragraph of the draft to have a stronger thesis and topic sentence. Show your revision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis strengthening",
                statement: "Make claims specific and arguable.",
              },
              {
                kind: "skill",
                name: "Topic sentences",
                statement: "Each paragraph needs a clear main idea.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Original thesis is vague: 'Dogs are good pets.' Needs specificity and reasons.",
                evidence: "Dogs are good pets. They are loyal and fun.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Stronger thesis: 'Dogs make excellent companions because they provide loyal emotional support, encourage daily exercise, and teach responsibility.'",
                evidence: "They are loyal and fun",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Topic sentence should preview the paragraph's focus: 'Dogs are loyal companions who provide emotional support and encourage daily exercise.'",
                evidence: "My dog is named Max",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The revision should be specific, arguable, and set up evidence to follow.",
                evidence: "Dogs need to be walked every day",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example revision: 'Dogs make excellent companions because they provide loyal emotional support, encourage daily exercise, and teach responsibility. My dog Max is a perfect example — he's loyal, playful, and has taught me what it means to care for another living thing.'",
            commonErrors: ["Keeping 'Dogs are good pets' — still too vague."],
          },
        },
        {
          id: "ela7-u9-revise-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REVDRAFT,
          parts: [
            {
              label: "a",
              prompt:
                "Name one editing error in the draft (not a revision problem).",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Correct it and explain why it's an editing issue.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Editing identification",
                statement: "Surface-level errors are editing issues.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'My dog is named Max and he is very cute' — comma splice or run-on.",
                evidence: "My dog is named Max and he is very cute",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Fix: 'My dog is named Max, and he is very cute.' Comma splice is an editing error — technical punctuation issue, not a content problem.",
                evidence: "and he is very cute",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Comma splice or run-on. (b) 'My dog is named Max, and he is very cute.' — punctuation error is editing, not revision.",
            commonErrors: [
              "Calling a vague thesis an 'editing error' — that's revision.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u9-revise2",
      title: "Organization and transitions",
      skill:
        "Improve paragraph organization and use transitions to connect ideas.",
      lesson: {
        sections: [
          {
            heading: "Paragraph organization",
            body: "Each paragraph should have **one main idea** (topic sentence), **supporting details** (evidence/examples), and possibly a **concluding sentence**. The dog essay mixes loyalty, playfulness, walking, and vet visits randomly — better organization groups related ideas: paragraph 1 = companionship/loyalty, paragraph 2 = health/exercise, paragraph 3 = responsibility.",
          },
          {
            heading: "Transitions",
            body: "**Transitions** connect ideas: addition ('also', 'furthermore'), contrast ('however', 'but'), cause-effect ('therefore', 'as a result'), sequence ('first', 'then'), example ('for example', 'such as'). 'Dogs are loyal. However, they also require work.' The transition signals the relationship between ideas.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph structure",
            statement: "Topic sentence → supporting details → conclusion.",
          },
          {
            name: "Grouping ideas",
            statement: "Related ideas belong in the same paragraph.",
          },
          {
            name: "Transition types",
            statement: "Addition, contrast, cause-effect, sequence, example.",
          },
        ],
        workedExample: {
          problem: "How would you reorganize the dog essay?",
          solution:
            "Paragraph 1: companionship and loyalty ('Dogs are loyal companions...'). Paragraph 2: health and exercise ('Dogs need daily walks...'). Paragraph 3: responsibility and commitment ('Taking care of a dog is a big responsibility...'). Each paragraph has one focus.",
        },
      },
      questions: [
        {
          id: "ela7-u9-revise2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVDRAFT,
          stem: "What organizational problem does the draft have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sentences are too short" },
              { id: "b", text: "The paragraphs are too long" },
              { id: "c", text: "There are too many transitions" },
              {
                id: "d",
                text: "Ideas are mixed randomly without grouping related points",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Organization",
                statement: "Group related ideas together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Loyalty, cuteness, walking, vet visits are all mixed in one paragraph — no grouping by topic.",
                evidence: "He likes to play fetch and he also likes to sleep.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Ideas are mixed randomly — loyalty, play, walking, vet visits all in one paragraph.",
            commonErrors: [
              "Thinking length is the issue — organization is about grouping, not length.",
            ],
          },
        },
        {
          id: "ela7-u9-revise2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REVDRAFT,
          stem: "Add three transitions to improve flow between the draft's ideas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transitions",
                statement: "Connect ideas with signal words.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Addition: 'Also, dogs need to be walked every day.'",
                evidence: "Dogs need to be walked every day",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contrast: 'However, taking care of a dog is a big responsibility.'",
                evidence: "But dogs are worth it",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'For example, my dog Max barks at the mailman every day.'",
                evidence: "Sometimes he barks at the mailman",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example transitions: 'Also' for addition, 'However' for contrast, 'For example' for illustration.",
            commonErrors: [
              "Using transitions that don't match the relationship — 'however' needs contrast.",
            ],
          },
        },
        {
          id: "ela7-u9-revise2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REVDRAFT,
          stem: "Rewrite the draft with improved organization — group related ideas into separate paragraphs with topic sentences and transitions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph organization",
                statement: "One idea per paragraph.",
              },
              {
                kind: "skill",
                name: "Topic sentences",
                statement: "Each paragraph needs a clear focus.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Paragraph 1: companionship — 'Dogs are loyal companions who provide emotional support.'",
                evidence: "Dogs are good pets. They are loyal and fun.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Paragraph 2: health/exercise — 'Dogs need daily exercise and proper care.'",
                evidence: "Dogs need to be walked every day",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Paragraph 3: responsibility — 'Taking care of a dog is a commitment.'",
                evidence: "Taking care of a dog is a big responsibility",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Use transitions between paragraphs: 'Additionally', 'However', 'In conclusion'.",
                evidence: "But dogs are worth it",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Dogs are loyal companions who provide emotional support. My dog Max is playful and affectionate, always greeting me at the door.\n\nAdditionally, dogs need daily exercise and proper care. They must be walked regularly and taken to the vet.\n\nHowever, this responsibility is worth it because dogs offer unconditional love.'",
            commonErrors: [
              "Keeping all ideas in one paragraph — grouping is essential.",
            ],
          },
        },
        {
          id: "ela7-u9-revise2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REVDRAFT,
          parts: [
            {
              label: "a",
              prompt:
                "Write a topic sentence for a paragraph about dog health and exercise.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Add two supporting details for that paragraph.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentences",
                statement: "Clear main idea + support.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'Dogs need daily exercise and regular veterinary care to stay healthy.'",
                evidence: "Dogs need to be walked every day",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Details: 'Dogs should be walked at least twice daily' and 'annual vet checkups catch health problems early.'",
                evidence: "They also need food and water",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Dogs need daily exercise and regular veterinary care to stay healthy.' (b) 'Walked twice daily' and 'annual vet checkups.'",
            commonErrors: [
              "Topic sentence that's too vague — 'Dogs are good' doesn't focus the paragraph.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u9-revise3",
      title: "Adding depth and evidence",
      skill:
        "Revise drafts by adding specific evidence, examples, and analysis.",
      lesson: {
        sections: [
          {
            heading: "From vague to specific",
            body: "'Dogs are loyal' → 'Dogs are loyal — my dog Max waits by the door every afternoon when I come home from school, tail wagging.' Specific examples and details make claims believable. 'Dogs are good pets' → 'Dogs provide companionship, encourage exercise, and teach responsibility — three benefits that improve quality of life.'",
          },
          {
            heading: "Evidence types in revision",
            body: "Add: **examples** ('For example, Max greets me at the door'), **statistics** ('Studies show dog owners walk 30% more'), **expert testimony** ('Veterinarians recommend daily exercise'), **anecdotes** ('Last summer, Max pulled me through a thunderstorm'). Each type supports claims differently.",
          },
        ],
        keyFormulas: [
          {
            name: "Vague → specific",
            statement:
              "'Dogs are loyal' → 'Max waits by the door every afternoon.'",
          },
          {
            name: "Evidence types",
            statement: "Examples, statistics, expert testimony, anecdotes.",
          },
          {
            name: "Analysis",
            statement: "Explain what evidence proves, not just what it says.",
          },
        ],
        workedExample: {
          problem:
            "How would you strengthen 'Dogs are good pets' with evidence?",
          solution:
            "'Dogs are good pets because they provide emotional support — studies show interaction with dogs reduces stress hormones. For example, my dog Max has been my comfort during difficult times. Additionally, dogs encourage daily exercise, which benefits both pet and owner.'",
        },
      },
      questions: [
        {
          id: "ela7-u9-revise3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REVDRAFT,
          stem: "What does 'Dogs are loyal and fun' lack as evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it's clear" },
              { id: "b", text: "A question mark" },
              { id: "c", text: "Specific examples or proof" },
              { id: "d", text: "Too many words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence",
                statement: "Claims need support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Loyal and fun' is asserted but never shown — needs examples or proof.",
                evidence: "Dogs are loyal and fun",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Specific examples or proof — the claim is asserted without support.",
            commonErrors: [
              "Thinking the claim is self-evident — 'loyal' needs demonstration.",
            ],
          },
        },
        {
          id: "ela7-u9-revise3-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: REVDRAFT,
          stem: "Add two pieces of evidence to support 'Dogs are loyal.' Use different evidence types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence addition",
                statement: "Support claims with varied proof.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Example: 'My dog Max greets me at the door every day, tail wagging — that's loyalty in action.'",
                evidence: "Dogs are loyal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Statistic/expert: 'A 2020 study found that 95% of dog owners report their pets recognize them and show affection.'",
                evidence: "and fun",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Anecdote: 'During the storm last week, Max stayed by my side the whole time — he didn't leave.'",
                evidence: "They are loyal",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example evidence: 'Max greets me daily' (example) + '95% of owners report affection' (statistic) + 'Max stayed during storm' (anecdote).",
            commonErrors: [
              "Adding evidence that doesn't support 'loyal' — must connect to the claim.",
            ],
          },
        },
        {
          id: "ela7-u9-revise3-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: REVDRAFT,
          stem: "Revise the sentence 'Dogs are good pets' into a well-supported claim with evidence and analysis. Show your revision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim strengthening",
                statement: "Make claims specific and supported.",
              },
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Introduce, state, and analyze evidence.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Strengthen claim: 'Dogs make excellent companions because they provide loyalty, encourage exercise, and teach responsibility.'",
                evidence: "Dogs are good pets",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add evidence: 'For example, my dog Max greets me at the door every afternoon, and studies show dog owners walk 30% more than non-owners.'",
                evidence: "They are loyal and fun",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add analysis: 'This suggests dogs offer both emotional and physical benefits — companionship and health.'",
                evidence: "My dog is named Max",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The revision should have claim + evidence + explanation of what evidence proves.",
                evidence: "Dogs need to be walked every day",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Dogs make excellent companions because they provide loyalty, encourage exercise, and teach responsibility. For example, my dog Max greets me at the door every afternoon, and studies show dog owners walk 30% more than non-owners. This suggests dogs offer both emotional and physical benefits.'",
            commonErrors: [
              "Adding evidence without analysis — 'studies show' needs 'this suggests'.",
            ],
          },
        },
        {
          id: "ela7-u9-revise3-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: REVDRAFT,
          parts: [
            {
              label: "a",
              prompt: "Identify a vague claim in the draft.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Revise it with specific evidence and analysis.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vague claim revision",
                statement: "Replace assertions with supported claims.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'Dogs are worth it' — vague, doesn't explain why.",
                evidence: "But dogs are worth it",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Revise: 'Dogs are worth the responsibility because the companionship and unconditional love they provide outweigh the daily effort.'",
                evidence: "because they love you",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Dogs are worth it' — vague. (b) 'Dogs are worth the responsibility because companionship and unconditional love outweigh the daily effort.'",
            commonErrors: [
              "Revising but keeping it vague — 'Dogs are great' is still unsupported.",
            ],
          },
        },
      ],
    },
  ],
};
