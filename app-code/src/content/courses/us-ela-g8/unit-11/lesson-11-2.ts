import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const UNRELIABLE: TextExtract = {
  title: "First-Person Narration: The Collector",
  author: "Written for Akademik Space",
  text: "I collect things that others throw away. It's not stealing — it's rescuing. When I found the painting in the alley, it was leaning against a dumpster, damaged but beautiful. The woman who threw it out clearly didn't appreciate what she had. I took it home, cleaned it carefully, and now it hangs in my study where it belongs.\n\nPeople say I'm eccentric. They don't understand that I'm preserving beauty that would otherwise be lost. My neighbors think I'm strange for keeping the old bicycle, the broken clock, the faded photographs. But someone has to save these things from oblivion. I'm not a thief — I'm a guardian of forgotten treasures.",
};

const UNRELIABLE2: TextExtract = {
  title: "Narrator's Self-Justification",
  author: "Written for Akademik Space",
  text: "The painting wasn't really stolen — it was abandoned. There's a difference. When someone throws something away, they've given up ownership. I merely gave it a second chance. My neighbors don't understand my mission. They see a man collecting trash; I see a curator preserving history. Every item in my collection has a story — the bicycle belonged to a champion racer, the clock ticked through three generations, the photographs captured moments no one else valued.\n\nI keep careful records of everything I 'rescue.' Date acquired, original owner (when known), condition found, restoration notes. This isn't hoarding — it's stewardship. The line between collector and thief is thin, but I walk it carefully.",
};

export const lesson112: Lesson = {
  id: "ela8-u11-lesson-11-2",
  code: "11-2",
  title: "Point of View and Unreliable Narration",
  goal: "I CAN analyze point of view and identify unreliable narrators in literary texts.",
  standards: ["RL.8.6", "RL.8.9", "RL.8.1", "RL.8.4"],
  vocabulary: [
    {
      term: "Point of view",
      definition: "Narrative perspective — who tells the story.",
    },
    {
      term: "Unreliable narrator",
      definition: "Narrator whose account can't be fully trusted.",
    },
    { term: "First person", definition: "Narrator is character using 'I.'" },
    {
      term: "Third person limited",
      definition: "Follows one character's perspective.",
    },
    { term: "Bias", definition: "Narrator's prejudiced perspective." },
    { term: "Dramatic irony", definition: "Reader knows more than narrator." },
  ],
  concepts: [
    {
      id: "ela8-u11-pov",
      title: "Point of view analysis",
      skill:
        "Identify narrative perspective and analyze how it shapes reader understanding.",
      lesson: {
        sections: [
          {
            heading: "First-person narration",
            body: "The collector uses 'I' — we see world through his eyes, his justifications, his self-image. First-person creates intimacy but also bias — we only know what he tells us. He calls it 'rescuing' not 'stealing' — his language reveals his self-justification. We can't verify his claims — is the painting really 'abandoned'? His perspective is inherently limited and possibly unreliable.",
          },
          {
            heading: "Unreliable narrator signals",
            body: "Signs of unreliability: narrator justifies actions excessively ('It's not stealing — it's rescuing'), contradicts themselves ('not a thief — a guardian'), uses loaded language ('eccentric' vs 'strange'), shows lack of self-awareness ('I walk it carefully' while describing questionable behavior). Reader must question narrator's account — compare what he says with what he does. Dramatic irony: we may suspect he's rationalizing theft.",
          },
        ],
        keyFormulas: [
          {
            name: "First person = bias",
            statement: "Narrator's perspective is limited and possibly skewed.",
          },
          {
            name: "Justification = red flag",
            statement: "Excessive self-justification suggests unreliability.",
          },
          {
            name: "Compare words vs actions",
            statement: "What narrator says vs what they do.",
          },
          {
            name: "Dramatic irony",
            statement: "Reader may know more than narrator.",
          },
        ],
        workedExample: {
          problem: "Why might the collector be an unreliable narrator?",
          solution:
            "He calls taking abandoned items 'rescuing' not 'stealing,' justifies excessively, contradicts himself ('not a thief'), shows lack of self-awareness about questionable behavior.",
        },
      },
      questions: [
        {
          id: "ela8-u11-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: UNRELIABLE,
          stem: "What point of view does the story use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second person" },
              { id: "b", text: "First person" },
              { id: "c", text: "Third person limited" },
              { id: "d", text: "Third person omniscient" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First person",
                statement: "Narrator uses 'I.'",
              },
            ],
            steps: [
              {
                reasoning:
                  "'I collect things' — narrator is character telling own story.",
                evidence: "I collect things",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. First person.",
            commonErrors: ["Missing the 'I' — clear first-person signal."],
          },
        },
        {
          id: "ela8-u11-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: UNRELIABLE,
          stem: "Identify two signals that the narrator might be unreliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unreliable narrator",
                statement: "Recognize bias signals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Excessive justification: 'It's not stealing — it's rescuing' — protesting too much.",
                evidence: "It's not stealing — it's rescuing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Contradiction: 'not a thief — I'm a guardian' — self-contradictory framing.",
                evidence: "not a thief — I'm a guardian",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Loaded language: calls neighbors' view 'eccentric'/'strange' while seeing self as 'guardian.'",
                evidence: "eccentric... guardian",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Excessive justification ('not stealing — rescuing'). 2. Contradiction ('not a thief — guardian'). 3. Loaded language (judging others, excusing self).",
            commonErrors: [
              "Taking narrator's word — need to question his account.",
            ],
          },
        },
        {
          id: "ela8-u11-pov-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: UNRELIABLE2,
          stem: "Analyze how the narrator's self-justification reveals his unreliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrator analysis",
                statement: "How perspective reveals bias.",
              },
              {
                kind: "skill",
                name: "Self-justification",
                statement: "Protesting reveals guilt.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Repeated justification: 'not stealing,' 'not hoarding,' 'not a thief' — protesting suggests guilt.",
                evidence: "not stealing — it's rescuing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reframing: calls questionable behavior 'stewardship,' 'curator' — self-serving language.",
                evidence: "stewardship... curator",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Admission: 'line between collector and thief is thin' — he knows he's rationalizing.",
                evidence: "line between collector and thief",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Narrator repeatedly justifies ('not stealing,' 'not hoarding,' 'not a thief') — protesting suggests guilt. Reframes questionable behavior as 'stewardship.' Admits 'line between collector and thief is thin' — self-aware rationalization reveals unreliability.",
            commonErrors: [
              "Accepting narrator's framing — need to see through justification.",
            ],
          },
        },
        {
          id: "ela8-u11-pov-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: UNRELIABLE,
          parts: [
            {
              label: "a",
              prompt: "What is 'dramatic irony' in this context?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does it affect reader understanding?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dramatic irony",
                statement: "Reader knows more than narrator.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Reader may suspect he's rationalizing theft while he believes he's 'rescuing.'",
                evidence: "dramatic irony",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Creates distance — we see through his self-justification, question his account.",
                evidence: "reader knows more",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Reader suspects rationalization while narrator believes 'rescuing.' (b) Creates critical distance — we question his account.",
            commonErrors: ["Missing that reader sees through narrator."],
          },
        },
      ],
    },
    {
      id: "ela8-u11-narration",
      title: "Narration techniques and reliability",
      skill: "Analyze how narration techniques shape meaning and reader trust.",
      lesson: {
        sections: [
          {
            heading: "Narration techniques",
            body: "**Stream of consciousness**: 'I collect things that others throw away' — immediate, unfiltered thoughts. **Dialogue**: narrator quotes neighbors' reactions — 'eccentric,' 'strange' — showing others' view vs his. **Detail selection**: focuses on 'rescuing' framing, minimizes questionable aspects. **Tone**: defensive, self-justifying — 'I'm not a thief — I'm a guardian.' Techniques reveal character AND unreliability.",
          },
          {
            heading: "Reader response to unreliable narrators",
            body: "When narrator is unreliable, reader must become detective: What's really happening? Why is narrator defending themselves? What are they omitting? The collector never describes HOW he acquires items — 'found in alley' could mean took. His meticulous records ('date acquired, original owner') suggest he knows this is questionable. Reader constructs truth from gaps and contradictions.",
          },
        ],
        keyFormulas: [
          {
            name: "Techniques reveal character",
            statement: "How narrator tells story shows who they are.",
          },
          {
            name: "Gaps = clues",
            statement: "What narrator omits reveals truth.",
          },
          {
            name: "Contradictions = signals",
            statement: "Inconsistencies expose unreliability.",
          },
        ],
        workedExample: {
          problem:
            "What does the narrator omit that a reliable narrator would include?",
          solution:
            "How he actually acquires items — 'found in alley' is vague. Reliable narrator would specify circumstances; his vagueness suggests concealment.",
        },
      },
      questions: [
        {
          id: "ela8-u11-narration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: UNRELIABLE2,
          stem: "What narration technique does the collector use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Third person omniscient" },
              { id: "b", text: "Objective reporting" },
              { id: "c", text: "Stream of consciousness only" },
              { id: "d", text: "First person with self-justification" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narration technique",
                statement: "How story is told.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First person + constant self-justification ('not stealing,' 'not hoarding') — defensive narration.",
                evidence: "not stealing — it's rescuing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. First person with self-justification.",
            commonErrors: ["Missing the defensive tone — key technique."],
          },
        },
        {
          id: "ela8-u11-narration-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: UNRELIABLE2,
          stem: "What does the narrator omit that might reveal the truth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative gaps",
                statement: "Omissions reveal truth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "How he acquires items — 'found in alley' is vague; reliable narrator would specify.",
                evidence: "found in alley",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Whether items were truly abandoned vs taken — no verification.",
                evidence: "abandoned",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "His 'records' suggest he knows it's questionable — why document if truly legitimate?",
                evidence: "careful records",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Omits HOW he acquires items (vague 'found'), whether truly abandoned vs taken, and why he keeps meticulous records if legitimate — gaps suggest concealment.",
            commonErrors: [
              "Accepting narrator's account without noticing gaps.",
            ],
          },
        },
        {
          id: "ela8-u11-narration-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: UNRELIABLE,
          stem: "Analyze how the narrator's tone and word choice reveal his self-justification and unreliability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "Word choice reveals attitude.",
              },
              {
                kind: "skill",
                name: "Self-justification",
                statement: "Protesting reveals guilt.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Defensive tone: 'It's not stealing — it's rescuing' — immediate justification before accusation.",
                evidence: "not stealing — rescuing",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reframing language: 'guardian of forgotten treasures,' 'curator,' 'stewardship' — elevates questionable behavior.",
                evidence: "guardian... curator... stewardship",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Judgment of others: calls neighbors' view 'eccentric,' 'strange' — defensive of self-image.",
                evidence: "eccentric... strange",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Defensive tone ('not stealing — rescuing'), self-elevating language ('guardian,' 'curator,' 'stewardship'), judgment of others ('eccentric,' 'strange') — all reveal self-justification and unreliability.",
            commonErrors: [
              "Describing tone without connecting to unreliability.",
            ],
          },
        },
        {
          id: "ela8-u11-narration-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: UNRELIABLE2,
          parts: [
            {
              label: "a",
              prompt: "Why does the narrator keep 'careful records'?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What does this suggest about his reliability?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Detail significance",
                statement: "Small details reveal truth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Records suggest he knows behavior is questionable — legitimate collectors don't need to document 'abandoned' items so carefully.",
                evidence: "careful records",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Self-awareness of impropriety — undermines his claim of pure 'rescuing.'",
                evidence: "reliability",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Records suggest he knows it's questionable — legitimate collectors don't document so carefully. (b) Self-awareness of impropriety undermines 'rescuing' claim.",
            commonErrors: ["Taking records at face value — they reveal guilt."],
          },
        },
      ],
    },
    {
      id: "ela8-u11-comparison",
      title: "Comparing literary texts",
      skill: "Compare how different texts handle similar themes or techniques.",
      lesson: {
        sections: [
          {
            heading: "Text comparison",
            body: "When comparing texts: identify **similarities** (both explore memory, both use symbols) and **differences** (one uses first person, other third; one reliable narrator, other unreliable). The story about Rose/Maya uses third-person limited (we see both characters' growth); the collector story uses first-person unreliable (we question narrator's account). Different POVs create different reader experiences — intimacy vs distance, trust vs suspicion.",
          },
          {
            heading: "Comparative analysis",
            body: "Ask: How does POV choice affect meaning? First-person collector: reader must question his 'rescuing' narrative — creates suspicion. Third-person Rose/Maya: reader trusts narrator, focuses on emotional journey. Same theme (memory/legacy) explored differently — one through unreliable self-justification, other through reliable character development. Comparison reveals how technique shapes meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare = similarities + differences",
            statement: "What texts share and how they differ.",
          },
          {
            name: "POV affects meaning",
            statement: "Perspective shapes reader experience.",
          },
          {
            name: "Technique comparison",
            statement: "How different approaches achieve different effects.",
          },
        ],
        workedExample: {
          problem: "How do the two texts' POV choices affect reader trust?",
          solution:
            "Collector (first person): reader questions his account — suspicion. Rose/Maya (third limited): reader trusts narrator — empathy. Different POVs create different relationships with text.",
        },
      },
      questions: [
        {
          id: "ela8-u11-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: UNRELIABLE,
          stem: "How does the collector's POV differ from a typical third-person story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's more objective" },
              { id: "b", text: "It's less personal" },
              { id: "c", text: "It shows all characters' thoughts" },
              { id: "d", text: "It creates intimacy but also bias" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "POV effect",
                statement: "First person = intimate but biased.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First person creates intimacy ('I') but limits to narrator's biased perspective.",
                evidence: "I collect things",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Intimacy but bias.",
            commonErrors: [
              "Thinking first person is objective — it's inherently biased.",
            ],
          },
        },
        {
          id: "ela8-u11-comparison-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: UNRELIABLE,
          stem: "Compare how the two texts would affect reader trust differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV comparison",
                statement: "How perspective affects trust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Collector (first person): reader questions his 'rescuing' narrative — suspicion, critical distance.",
                evidence: "unreliable narrator",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rose/Maya (third limited): reader trusts narrator, focuses on emotional journey — empathy.",
                evidence: "reliable narrator",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Different POVs create different reader relationships — detective vs empathetic.",
                evidence: "reader trust",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "First-person collector creates suspicion (question his account); third-person Rose/Maya creates empathy (trust narrator). Different POVs = different reader relationships.",
            commonErrors: ["Describing POVs without comparing reader effect."],
          },
        },
        {
          id: "ela8-u11-comparison-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: UNRELIABLE,
          stem: "Write a comparison of how POV choice shapes meaning in the collector story vs a hypothetical third-person version.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV comparison",
                statement: "How perspective shapes meaning.",
              },
              {
                kind: "skill",
                name: "Hypothetical analysis",
                statement: "Consider alternative.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "First person: reader hears his justifications, sees his self-image — must question reliability.",
                evidence: "I collect things",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Hypothetical third person: narrator could reveal truths he omits — neighbors' views, actual circumstances.",
                evidence: "third person",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Meaning changes: first person = reader detective work; third person = clearer moral judgment possible.",
                evidence: "meaning changes",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'First-person narration forces readers to question the collector's self-justifying account — we become detectives, noticing gaps and contradictions. A third-person version could reveal what he omits (neighbors' perspectives, actual circumstances), allowing clearer moral judgment. POV choice determines whether readers sympathize with his 'rescuing' narrative or see through it to questionable behavior.'",
            commonErrors: ["Comparing without analyzing meaning impact."],
          },
        },
        {
          id: "ela8-u11-comparison-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: UNRELIABLE,
          parts: [
            {
              label: "a",
              prompt: "What reader role does an unreliable narrator create?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does this differ from a reliable narrator?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reader role",
                statement: "How POV affects engagement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Detective — must question account, find truth in gaps/contradictions.",
                evidence: "detective",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Reliable narrator = passive receiver; unreliable = active investigator.",
                evidence: "reliable vs unreliable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Detective — question account, find truth. (b) Reliable = passive receiver; unreliable = active investigator.",
            commonErrors: ["Thinking all narrators are equally trustworthy."],
          },
        },
      ],
    },
    {
      id: "ela8-u11-integrated-pov",
      title: "Literature exam practice",
      skill: "Apply literary analysis skills to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Exam question types",
            body: "**Theme questions**: 'What is the theme?' — cite evidence, explain universal significance. **Character questions**: 'How does X change?' — trace development with evidence. **POV questions**: 'How does POV affect meaning?' — analyze perspective and reliability. **Craft questions**: 'How does author use Y?' — identify device, explain effect. Each requires: claim → evidence → explanation → significance.",
          },
          {
            heading: "Time management for literature",
            body: "Read passage once for understanding, then again for analysis. Annotate: underline key quotes, mark theme-relevant moments, note POV signals. For essays: outline thesis first, then support with evidence from multiple elements. Don't just summarize — analyze how elements create meaning. Reserve time for revision — check evidence supports claims.",
          },
        ],
        keyFormulas: [
          {
            name: "Claim + evidence + explanation",
            statement: "Structure for literary analysis.",
          },
          {
            name: "Annotate while reading",
            statement: "Mark quotes and signals.",
          },
          { name: "Thesis first", statement: "Plan argument before writing." },
        ],
        workedExample: {
          problem:
            "How would you approach 'How does the unreliable narrator affect reader understanding'?",
          solution:
            "Claim: narrator's self-justification creates suspicion. Evidence: 'not stealing — rescuing,' 'guardian,' contradictions. Explanation: reader must question his account, find truth in gaps. Significance: transforms reading into detective work.",
        },
      },
      questions: [
        {
          id: "ela8-u11-integrated-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: UNRELIABLE,
          stem: "What should you do first when reading a literary passage for exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Memorize quotes" },
              { id: "c", text: "Skip to questions" },
              { id: "d", text: "Read for understanding, then analyze" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading strategy",
                statement: "Understand before analyzing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read for understanding first, then analyze with questions in mind.",
                evidence: "read for understanding",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Read for understanding, then analyze.",
            commonErrors: [
              "Analyzing before understanding — need context first.",
            ],
          },
        },
        {
          id: "ela8-u11-integrated-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: UNRELIABLE,
          stem: "Write a thesis for 'How does the unreliable narrator affect reader understanding?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Argument about effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim: narrator's self-justification creates suspicion and critical distance.",
                evidence: "thesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence preview: 'not stealing — rescuing,' 'guardian,' contradictions.",
                evidence: "self-justification",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Significance: reader becomes detective, questioning account.",
                evidence: "reader understanding",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              'Example: \'The collector\'s self-justifying narration — calling theft "rescuing" and himself "guardian" — creates suspicion, transforming readers into detectives who must question his account and find truth in his contradictions.\'',
            commonErrors: ["Writing summary instead of argument about effect."],
          },
        },
        {
          id: "ela8-u11-integrated-pov-q3",
          difficulty: "challenge",
          totalMarks: 9,
          extract: UNRELIABLE,
          stem: "Write a complete analytical paragraph answering 'How does the unreliable narrator affect reader understanding?' with claim, evidence, explanation, and significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complete literary analysis",
                statement: "All elements together.",
              },
              {
                kind: "skill",
                name: "Evidence-based argument",
                statement: "Support claims with text.",
              },
            ],
            levels: [
            { level: "Level 4", marks: "8-9", descriptor: "Thorough, precise response that is well supported by carefully chosen textual evidence and explains clearly how the evidence supports the point." },
            { level: "Level 3", marks: "5-7", descriptor: "Clear, adequate response with relevant evidence and some explanation of how it supports the point." },
            { level: "Level 2", marks: "3-4", descriptor: "Partial, general response with some evidence but little explanation." },
            { level: "Level 1", marks: "1-2", descriptor: "Minimal response with little or no evidence from the text." },
          ],
            steps: [
              {
                reasoning:
                  "Claim: narrator's self-justification creates suspicion and critical distance.",
                evidence: "claim",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'not stealing — rescuing,' 'guardian,' 'line between collector and thief is thin.'",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explanation: excessive justification + contradictions reveal unreliability — reader must question.",
                evidence: "explanation",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Significance: transforms reading into detective work — reader constructs truth from gaps.",
                evidence: "significance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The collector's narration creates suspicion through excessive self-justification — \"It's not stealing — it's rescuing,\" \"I'm not a thief — I'm a guardian.\" These contradictions (\"the line between collector and thief is thin\") reveal his unreliability. Readers must become detectives, questioning his account and constructing truth from what he omits. This transforms reading from passive reception to active investigation.'",
            commonErrors: [
              "Missing significance — need to explain why it matters.",
            ],
          },
        },
        {
          id: "ela8-u11-integrated-pov-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: UNRELIABLE,
          parts: [
            {
              label: "a",
              prompt: "What should you annotate while reading for exam?",
              marks: 2,
            },
            { label: "b", prompt: "Why is thesis-first important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam strategy",
                statement: "Preparation techniques.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Key quotes, theme-relevant moments, POV signals, device examples.",
                evidence: "annotate",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Prevents summary-writing — keeps analysis focused on argument.",
                evidence: "thesis first",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Key quotes, theme moments, POV signals, devices. (b) Prevents summary — keeps analysis focused.",
            commonErrors: ["Annotating randomly — need purposeful marking."],
          },
        },
      ],
    },
  ],
};
