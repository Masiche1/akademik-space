import type { Lesson } from "../../../types.ts";

export const lesson152: Lesson = {
  id: "cie-ol-fl-lesson-5-2",
  code: "5-2",
  title: "Narrative writing",
  goal: "I CAN plan and write a narrative with character, tension and a satisfying ending.",
  standards: ["1119 Writing: narrative"],
  vocabulary: [
    { term: "Plot", definition: "The sequence of events in a story." },
    {
      term: "Rising action",
      definition: "Events that build tension toward the climax.",
    },
    {
      term: "Climax",
      definition: "The point of highest tension or turning point.",
    },
    {
      term: "Denouement",
      definition: "The resolution or winding down after the climax.",
    },
    {
      term: "First-person narrator",
      definition: "Story told by a character using 'I'.",
    },
    {
      term: "Third-person narrator",
      definition: "Story told about characters using 'he/she/they'.",
    },
    {
      term: "Tension",
      definition: "Reader suspense created by uncertainty or conflict.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-plot-character",
      title: "Plot and character",
      skill: "Construct a narrative arc and believable characters.",
      lesson: {
        sections: [
          {
            heading: "The narrative arc",
            body: "A strong plot moves through: exposition (introduce setting/characters), rising action (build problems), climax (turning point), falling action and resolution. Each event should cause the next — causality keeps readers hooked.",
          },
          {
            heading: "Character through action",
            body: "Reveal character by what they do and say, not by listing adjectives. A character who lies 'to protect someone' is more interesting than one labelled 'dishonest'. Give each main character a want and a fear.",
          },
          {
            heading: "Conflict",
            body: "Every narrative needs conflict: character vs character, character vs self, or character vs circumstance. The central conflict drives the rising action and gives the climax its force.",
          },
        ],
        keyFormulas: [
          {
            name: "Narrative arc",
            statement:
              "Exposition+rising action+climax+resolution=complete plot.",
          },
        ],
        workedExample: {
          problem: "Write the arc for a story about a lost dog.",
          solution:
            "Exposition: girl and dog at the park. Rising action: dog slips leash, search begins. Climax: found trembling in storm drain. Resolution: renewed bond and a lesson learned.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'climax' of a narrative?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The point of highest tension or turning point",
              },
              { id: "b", text: "The first paragraph" },
              { id: "c", text: "The ending" },
              { id: "d", text: "The main character's introduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement:
                  "The highest point of tension or the decisive turning point.",
              },
            ],
            steps: [
              {
                reasoning: "Climax is the peak, not the start or finish.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Highest tension or turning point",
            commonErrors: ["Confusing climax with resolution."],
          },
        },
        {
          id: "cie-ol-fl-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should characters be revealed through action rather than description alone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character through action",
                statement:
                  "What a character does reveals personality more convincingly than what the narrator states.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Actions demonstrate traits — a character who shares food shows generosity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Readers infer personality themselves, which makes the character feel real.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Action lets readers infer character, making them feel real and active.",
            commonErrors: [
              "Saying 'it is more interesting' without mechanism.",
            ],
          },
        },
        {
          id: "cie-ol-fl-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how conflict drives a narrative's rising action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Conflict",
                statement:
                  "A struggle between forces creates obstacles that escalate toward the climax.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conflict sets up a goal the character cannot easily achieve.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Each attempt to resolve it fails or complicates, raising stakes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Escalating obstacles build tension toward the climax.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear causal chain explained.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Conflict creates obstacles; each failed attempt escalates tension toward the climax.",
            commonErrors: [
              "Listing plot events without linking them to conflict.",
            ],
          },
        },
        {
          id: "cie-ol-fl-pc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Planning a narrative about a student who must give a speech.",
          parts: [
            { label: "a", prompt: "State the central conflict.", marks: 2 },
            {
              label: "b",
              prompt: "Give two events of rising action.",
              marks: 3,
            },
            { label: "c", prompt: "Describe the climax.", marks: 2 },
            {
              label: "d",
              prompt: "Explain how you would reveal the main character.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Narrative planning",
                statement:
                  "Conflict+rising action+climax+character=planned narrative.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A clear struggle, e.g. fear of public speaking vs need to succeed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Conflict stated clearly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "First escalating event, e.g. rehearsal goes badly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Second event raises stakes further.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Both build toward the climax.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "The decisive moment, e.g. stepping onto the stage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Climax identifiable as turning point.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A method: dialogue, action, thoughts or choices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Links method to a revealed trait.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Coherent characterisation plan.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) fear vs need (b) two escalating events (c) decisive moment (d) action/dialogue reveal character",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Conflict clear.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No conflict.",
                part: "a",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Two escalating events.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One event.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Turning point named.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No climax.",
                part: "c",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Method tied to trait.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Method only.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No plan.",
                part: "d",
              },
            ],
            commonErrors: ["Events that do not escalate or cause each other."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-pov-tension",
      title: "Point of view and tension",
      skill: "Choose a narrative voice and create suspense.",
      lesson: {
        sections: [
          {
            heading: "Choosing point of view",
            body: "First person ('I') gives immediacy and a subjective voice; the narrator may be unreliable. Third person limited follows one character closely; third person omniscient can move between minds. Match the voice to the story's needs.",
          },
          {
            heading: "Creating tension",
            body: "Delay information, use short sentences at key moments, end paragraphs on hooks, and withhold the outcome. Tension comes from the reader knowing less than — or more than — the character.",
          },
          {
            heading: "Pacing",
            body: "Slow down for important moments (detail, interior thought) and speed up through transitions. Sentence length controls pace: short sentences feel urgent, long ones feel reflective.",
          },
        ],
        keyFormulas: [
          {
            name: "Tension toolkit",
            statement: "Withheld info+short sentences+hooks=controlled pace.",
          },
        ],
        workedExample: {
          problem: "Make a door-opening moment tense.",
          solution:
            "Slow the approach with long sentences; at the door, use short fragments: 'The handle turned. I froze. Footsteps inside.' End the paragraph there.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'first-person narration' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A character tells the story using 'I'" },
              { id: "b", text: "The author speaks directly to the reader" },
              { id: "c", text: "Multiple characters narrate" },
              { id: "d", text: "The story is told in second person" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First-person narration",
                statement: "A character within the story narrates using 'I'.",
              },
            ],
            steps: [
              {
                reasoning: "'I' marks a character narrator.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A character tells the story using 'I'",
            commonErrors: ["Confusing with authorial voice or second person."],
          },
        },
        {
          id: "cie-ol-fl-pt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does withholding information create tension?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Withholding information",
                statement:
                  "When the reader lacks key facts, they anticipate possible outcomes — that anticipation is suspense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reader uncertainty about what will happen creates suspense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Revealing information gradually controls the pace of tension.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Unknown outcomes make the reader anticipate, which produces suspense.",
            commonErrors: [
              "Confusing tension with surprise; tension is sustained anticipation.",
            ],
          },
        },
        {
          id: "cie-ol-fl-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effects of first-person and third-person narration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Narrative voice",
                statement:
                  "First person offers immediacy and subjectivity; third person can offer distance and multiple perspectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First person: immediacy, intimacy, possible unreliability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Third person: distance, flexibility, possibly wider perspective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The choice should serve the story's purpose and tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balanced comparison with clear effects.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "First person = intimate/immediate; third person = flexible/wider.",
            commonErrors: ["Saying one is 'better' without context."],
          },
        },
        {
          id: "cie-ol-fl-pt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Voice and tension.",
          parts: [
            {
              label: "a",
              prompt: "State two effects of first-person narration.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How can a writer create tension?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does sentence length control pace?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Rewrite this flat moment tensely: 'She opened the door.'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Voice and tension",
                statement:
                  "POV effects+tension techniques+pace control+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any two of immediacy, intimacy, subjectivity, unreliability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Both effects valid.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Withhold information / delay revelation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Use short sentences or paragraph hooks at key moments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Accurate explanation of suspense.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Short sentences feel fast and urgent; long ones slow and reflective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Correctly linked to pace.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "A rewritten version slowing the approach or heightening detail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Uses pacing or withheld information effectively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "The rewrite is genuinely tense.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) immediacy+subjectivity (b) withhold info+hooks (c) length=pacing (d) tense rewrite",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Two effects.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Fewer than two.",
                part: "a",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Techniques explained.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No techniques.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Pace link clear.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Incorrect or none.",
                part: "c",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Effective tense rewrite.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Some attempt.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No rewrite.",
                part: "d",
              },
            ],
            commonErrors: [
              "Confusing tension with surprise; tension is sustained anticipation.",
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-narrative-notes",
      title: "Narrative writing — revision notes",
      summary:
        "Plot arcs, character through action, point of view and tension control.",
      sections: [
        {
          heading: "Plot",
          body: "Exposition, rising action, climax, falling action, resolution. Each event should cause the next. Conflict (character vs character/self/circumstance) drives escalation.",
        },
        {
          heading: "Character",
          body: "Reveal through action, dialogue and choices rather than stated adjectives. Give main characters a want and a fear.",
        },
        {
          heading: "Voice and tension",
          body: "First person = intimacy and possible unreliability. Third person = flexibility. Withhold information, end paragraphs on hooks, and control pace with sentence length — short sentences feel urgent.",
        },
        {
          heading: "Exam checklist",
          body: "Is there a clear conflict? Does each event escalate? Is the climax decisive? Does the resolution satisfy? Is the point of view consistent?",
        },
      ],
    },
  ],
};
