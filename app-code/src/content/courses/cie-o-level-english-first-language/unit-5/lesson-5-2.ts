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
              { id: "a", text: "The main character's introduction" },
              {
                id: "b",
                text: "The point of highest tension or turning point",
              },
              { id: "c", text: "The first paragraph" },
              { id: "d", text: "The ending" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-fl-pc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'exposition' in a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main conflict" },
              { id: "b", text: "The final resolution" },
              { id: "c", text: "The introduction of characters and setting" },
              { id: "d", text: "The highest point of tension" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exposition",
                statement:
                  "The opening that introduces characters, setting and situation.",
              },
            ],
            steps: [
              {
                reasoning: "Exposition = introduction of characters and setting.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The introduction of characters and setting",
            commonErrors: ["Confusing exposition with climax."],
          },
        },
        {
          id: "cie-ol-fl-pc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes 'rising action'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The quiet opening of the story" },
              { id: "b", text: "A list of characters" },
              { id: "c", text: "The final paragraph" },
              { id: "d", text: "A series of events that escalate toward the climax" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rising action",
                statement:
                  "Events that build tension and complicate the conflict toward the climax.",
              },
            ],
            steps: [
              {
                reasoning: "Rising action = escalating events.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A series of events that escalate toward the climax",
            commonErrors: ["Confusing rising action with exposition."],
          },
        },
        {
          id: "cie-ol-fl-pc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why reveal character through dialogue rather than description alone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character through dialogue",
                statement:
                  "Speech reveals personality, attitude and relationships dynamically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "What a character says and how they say it shows their mind.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Dialogue also reveals relationships and lets character emerge in action.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Dialogue reveals personality and relationships dynamically, making characters feel real.",
            commonErrors: ["Saying dialogue is 'more interesting' without mechanism."],
          },
        },
        {
          id: "cie-ol-fl-pc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a character's 'want' drive the plot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Character motivation",
                statement:
                  "A clear desire gives the character goals that generate conflict and action.",
              },
            ],
            steps: [
              {
                reasoning: "The want defines what the character is trying to achieve.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Obstacles to the want create conflict.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pursuing the want produces the events of the plot.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The want sets goals; obstacles create conflict; pursuit generates plot events.",
            commonErrors: ["Describing events without linking them to motivation."],
          },
        },
        {
          id: "cie-ol-fl-pc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how action and choices make a character believable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character through action",
                statement:
                  "What a character does reveals personality more convincingly than description.",
              },
            ],
            steps: [
              {
                reasoning: "Actions demonstrate traits concretely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Difficult choices reveal values and priorities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Readers infer personality themselves, which feels real.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of believability.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Actions and choices demonstrate traits concretely, letting readers infer a real personality.",
            commonErrors: ["Listing traits without showing them through action."],
          },
        },
        {
          id: "cie-ol-fl-pc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'resolution' of a narrative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sudden twist" },
              { id: "b", text: "The opening scene" },
              { id: "c", text: "How the conflict is settled" },
              { id: "d", text: "The middle of the story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resolution",
                statement: "The part where the conflict is settled or concluded.",
              },
            ],
            steps: [
              {
                reasoning: "Resolution = conflict settled.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** How the conflict is settled",
            commonErrors: ["Confusing resolution with climax."],
          },
        },
        {
          id: "cie-ol-fl-pc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should events in rising action be causally linked?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each event causes the next, building logic and tension" },
              { id: "b", text: "Readers prefer lists of events" },
              { id: "c", text: "It saves the writer time" },
              { id: "d", text: "There is no reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cause and effect",
                statement:
                  "Each event should result from the previous one, building tension logically.",
              },
            ],
            steps: [
              {
                reasoning: "Causality builds logic and tension.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Each event causes the next, building logic and tension",
            commonErrors: ["Choosing 'no reason' — causality is essential."],
          },
        },
        {
          id: "cie-ol-fl-pc-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ways a writer can reveal a character's personality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character revelation",
                statement:
                  "Action, dialogue, thoughts and choices all reveal personality.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of action, dialogue, interior thought, choices.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both correctly identified as revelation methods.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Action, dialogue, thoughts or choices.",
            commonErrors: ["Listing adjectives instead of methods."],
          },
        },
        {
          id: "cie-ol-fl-pc-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can the setting reflect a character's internal state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pathetic fallacy",
                statement:
                  "External surroundings can mirror or contrast a character's feelings.",
              },
            ],
            steps: [
              {
                reasoning: "Stormy weather can echo inner turmoil.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Calm settings can heighten tension by contrast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The mirror deepens the reader's understanding of the character.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Setting can mirror inner feelings or contrast them, deepening characterisation.",
            commonErrors: ["Describing setting without linking it to character."],
          },
        },
        {
          id: "cie-ol-fl-pc-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plotting a story about a broken promise.",
          parts: [
            { label: "a", prompt: "State the central conflict.", marks: 2 },
            { label: "b", prompt: "Give two rising-action events.", marks: 2 },
            { label: "c", prompt: "Describe the climax.", marks: 2 },
            { label: "d", prompt: "Describe the resolution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Narrative planning",
                statement: "Conflict+escalation+climax+resolution=complete plot.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A clear struggle, e.g. guilt vs self-preservation.",
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
                reasoning: "First escalating event.",
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
                part: "c",
                reasoning: "The decisive turning point.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Identifiable as climax.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "How the conflict is settled.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Resolution satisfies the arc.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) clear conflict (b) two escalating events (c) turning point (d) settled conflict",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Conflict clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two events.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Climax named.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Resolution given.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Events that do not escalate or cause each other."],
          },
        },
        {
          id: "cie-ol-fl-pc-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Characterisation.",
          parts: [
            { label: "a", prompt: "Define 'protagonist'.", marks: 1 },
            { label: "b", prompt: "Name two ways to reveal character.", marks: 2 },
            { label: "c", prompt: "Explain 'show don't tell' for character.", marks: 3 },
            { label: "d", prompt: "Plan a simple character arc.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Characterisation",
                statement: "Protagonist+revelation+show don't tell+arc.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The main character the story follows.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two of action, dialogue, thoughts, choices.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Both correctly named.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Reveal traits through action rather than adjectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reader infers personality themselves.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A change over the story, e.g. fear to confidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Change linked to plot events.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Coherent arc.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) main character (b) two methods (c) action over adjectives (d) change linked to plot",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two methods.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Show-don't-tell clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Coherent arc.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No change.", part: "d" },
            ],
            commonErrors: ["Describing traits as adjectives rather than showing them."],
          },
        },
        {
          id: "cie-ol-fl-pc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how internal conflict can drive a narrative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Internal conflict",
                statement:
                  "A struggle within the character creates tension and motivates choices.",
              },
            ],
            steps: [
              {
                reasoning: "Internal conflict is a struggle within the character.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It forces difficult choices that reveal character.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The tension sustains interest even without external action.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Internal conflict forces choices, reveals character and sustains tension.",
            commonErrors: ["Confusing internal with external conflict."],
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
              { id: "a", text: "The story is told in second person" },
              { id: "b", text: "Multiple characters narrate" },
              { id: "c", text: "The author speaks directly to the reader" },
              { id: "d", text: "A character tells the story using 'I'" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-fl-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'third-person limited' narration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story is told in second person" },
              { id: "b", text: "All characters' thoughts are revealed" },
              { id: "c", text: "The author speaks directly to the reader" },
              { id: "d", text: "The story follows one character's perspective closely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Third-person limited",
                statement:
                  "Narration stays close to one character's perspective and knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Limited = one character's viewpoint.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The story follows one character's perspective closely",
            commonErrors: ["Confusing with omniscient narration."],
          },
        },
        {
          id: "cie-ol-fl-pt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which technique most directly creates suspense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme in narration" },
              { id: "b", text: "Alphabetical lists" },
              { id: "c", text: "Withholding a key piece of information" },
              { id: "d", text: "Long descriptive paragraphs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense",
                statement:
                  "Withholding information makes the reader anticipate possible outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Withheld info = reader uncertainty = suspense.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Withholding a key piece of information",
            commonErrors: ["Confusing suspense with surprise."],
          },
        },
        {
          id: "cie-ol-fl-pt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a first-person narrator be 'unreliable'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Unreliable narrator",
                statement:
                  "A first-person narrator may misunderstand events or have biased motives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The narrator sees only their own perspective and may misjudge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Gaps between what they say and what happens create doubt.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Limited perspective and possible bias mean the narrator's account may not be fully trustworthy.",
            commonErrors: ["Assuming first-person narrators always tell the truth."],
          },
        },
        {
          id: "cie-ol-fl-pt-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does sentence length affect pace in a tense scene?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pacing",
                statement:
                  "Short sentences speed up and feel urgent; long sentences slow down.",
              },
            ],
            steps: [
              {
                reasoning: "Short sentences create urgency and punch.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Long sentences allow reflection or build-up.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Controlling the mix controls the scene's pace.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Short sentences speed up and feel urgent; long ones slow down; the mix controls pace.",
            commonErrors: ["Not linking sentence length to pace."],
          },
        },
        {
          id: "cie-ol-fl-pt-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how ending paragraphs on 'hooks' controls tension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Hooks",
                statement:
                  "Ending a paragraph on an unresolved point makes the reader continue.",
              },
            ],
            steps: [
              {
                reasoning: "A hook withholds resolution at the paragraph's end.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It creates a pull to the next paragraph.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Repeated hooks sustain tension across the text.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Hooks withhold resolution, pulling the reader forward and sustaining tension.",
            commonErrors: ["Ending paragraphs on a closed, resolved note."],
          },
        },
        {
          id: "cie-ol-fl-pt-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'pacing' mean in narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The size of the font" },
              { id: "b", text: "The length of dialogue" },
              { id: "c", text: "The number of pages" },
              { id: "d", text: "The speed and rhythm at which events unfold" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pacing",
                statement: "The speed and rhythm at which a narrative unfolds.",
              },
            ],
            steps: [
              {
                reasoning: "Pacing = speed/rhythm of events.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The speed and rhythm at which events unfold",
            commonErrors: ["Confusing pacing with plotting."],
          },
        },
        {
          id: "cie-ol-fl-pt-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why use short sentences at a climactic moment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They feel urgent and punchy" },
              { id: "b", text: "They are longer and detailed" },
              { id: "c", text: "They are easier to spell" },
              { id: "d", text: "They rhyme with each other" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence length",
                statement:
                  "Short sentences feel urgent and emphasise key moments.",
              },
            ],
            steps: [
              {
                reasoning: "Short = urgent/punchy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** They feel urgent and punchy",
            commonErrors: ["Thinking length doesn't affect effect."],
          },
        },
        {
          id: "cie-ol-fl-pt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two reasons for choosing third-person omniscient narration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Omniscient narration",
                statement:
                  "It can move between characters' minds and offer a wider perspective.",
              },
            ],
            steps: [
              {
                reasoning: "It can reveal multiple characters' thoughts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It offers a broader, flexible perspective on events.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Multiple minds and a wider, flexible perspective.",
            commonErrors: ["Saying it is 'better' without reasons."],
          },
        },
        {
          id: "cie-ol-fl-pt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can a writer create tension by letting the reader know more than the character?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic irony",
                statement:
                  "When the reader knows something a character doesn't, anticipation builds.",
              },
            ],
            steps: [
              {
                reasoning: "The reader sees danger the character cannot.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This creates anticipation about how events will unfold.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The gap between knowledge and innocence sustains tension.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The reader's extra knowledge creates anticipation and sustained tension.",
            commonErrors: ["Thinking only the character's ignorance matters, not the reader's knowledge."],
          },
        },
        {
          id: "cie-ol-fl-pt-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A character is hiding a secret.",
          parts: [
            { label: "a", prompt: "Choose a point of view and justify it.", marks: 2 },
            { label: "b", prompt: "Give two techniques to create tension.", marks: 2 },
            { label: "c", prompt: "Write a 'hook' ending for a paragraph.", marks: 2 },
            { label: "d", prompt: "Explain one pacing choice you would make.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice and tension",
                statement: "POV+techniques+hooks+pacing=tension control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A justified choice, e.g. first person for secrecy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Justification linked to the secret.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "First tension technique, e.g. withholding info.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Second technique, e.g. short sentences or hooks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "An unresolved closing line.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates a pull to continue.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A pacing choice, e.g. slow the reveal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect on tension explained.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) justified POV (b) two techniques (c) unresolved hook (d) pacing choice",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "POV justified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Hook given.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Resolved ending.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Pacing explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Techniques named without explaining their effect on tension."],
          },
        },
        {
          id: "cie-ol-fl-pt-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Narrative voice.",
          parts: [
            { label: "a", prompt: "Define first-person narration.", marks: 1 },
            { label: "b", prompt: "Contrast it with third-person limited.", marks: 2 },
            { label: "c", prompt: "Explain how a narrator can be unreliable.", marks: 3 },
            { label: "d", prompt: "Rewrite a sentence in two different voices.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative voice",
                statement: "Definition+contrast+unreliability+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A character narrates using 'I'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "First person = immediate 'I'; third limited = 'he/she' close to one mind.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear contrast drawn.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Limited knowledge or biased perspective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Gap between what is said and what is true.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Effect on the reader explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Two distinct voice rewrites.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Voices clearly differentiated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Controlled and effective.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) 'I' narrator (b) immediate vs close third (c) limited/biased knowledge (d) two voices",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Contrast clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Unreliability explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two distinct voices.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Assuming narration is always truthful."],
          },
        },
        {
          id: "cie-ol-fl-pt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how point of view shapes the reader's sympathy for characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV and sympathy",
                statement:
                  "The chosen voice controls how close the reader feels to a character.",
              },
            ],
            steps: [
              {
                reasoning: "First person creates intimacy and direct access to feelings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Third person can create distance or objectivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The voice filters events through a particular perspective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "POV controls intimacy and perspective, shaping how much sympathy the reader feels.",
            commonErrors: ["Discussing POV without linking it to reader response."],
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
