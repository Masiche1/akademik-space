import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "theatre-u2-lesson-2-2",
  code: "2-2",
  title: "Character and Relationship Analysis",
  goal: "I CAN analyse characters and their relationships to understand motivation, conflict and dramatic function.",
  standards: ["Play Analysis", "Character"],
  vocabulary: [
    {
      term: "Protagonist",
      definition: "The main character whose journey the audience follows.",
    },
    {
      term: "Antagonist",
      definition: "The character or force opposing the protagonist.",
    },
    {
      term: "Motivation",
      definition: "What drives a character's actions and choices.",
    },
    {
      term: "Character arc",
      definition: "The transformation or development a character undergoes.",
    },
    {
      term: "Relationship dynamics",
      definition:
        "The patterns of interaction between characters — power, affection, conflict.",
    },
    {
      term: "Dramatic function",
      definition: "The role a character plays in advancing plot or theme.",
    },
  ],
  concepts: [
    {
      id: "theatre-u2-character-analysis",
      title: "Analysing character",
      skill:
        "Analyse characters through their motivations, actions, relationships and dramatic function.",
      lesson: {
        sections: [
          {
            heading: "Character as construction",
            body: "Characters are constructed through: **dialogue** (what they say), **action** (what they do), **others' reactions** (how they're seen), and **stage directions** (physical description). A character's words may contradict their actions — the gap reveals complexity. Analyse all channels, not just dialogue.",
          },
          {
            heading: "Motivation and arc",
            body: "**Motivation** drives action: what does the character want? Fear? Love? Power? **Character arc** is transformation: does the character change? Grow? Degenerate? A static character (unchanged) serves differently than a dynamic one (transformed). The arc reveals the play's theme — what does this character's journey say about human nature?",
          },
          {
            heading: "Dramatic function",
            body: "Every character has a function: protagonist drives the plot; antagonist creates obstacles; supporting characters reveal aspects of the protagonist or theme. Foil characters contrast with the protagonist to highlight their qualities. Not all characters need depth — some exist to serve the story's needs.",
          },
        ],
        keyFormulas: [
          {
            name: "Character channels",
            statement:
              "Dialogue + action + others' views + stage directions = full character",
          },
          {
            name: "Character analysis",
            statement: "Motivation + arc + function = understanding",
          },
        ],
        workedExample: {
          problem:
            "A character says 'I don't care' but keeps checking their phone for messages. What does this reveal?",
          solution:
            "Contradiction between words and actions reveals hidden motivation — they claim indifference but their behaviour shows obsession or anxiety. This gap between said and done is where character depth lives. The character may be self-deceiving or hiding true feelings.",
        },
      },
      questions: [
        {
          id: "theatre-u2-character-analysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A character's 'motivation' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their costume design" },
              { id: "b", text: "What drives their actions and choices" },
              { id: "c", text: "Their height and build" },
              { id: "d", text: "Their relationship to the audience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motivation",
                statement: "What drives a character's actions and choices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Motivation is what drives a character's actions and choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** What drives their actions and choices",
            commonErrors: [
              "Confusing motivation with physical description or costume.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three channels through which a playwright reveals character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character channels",
                statement:
                  "Dialogue, action, others' reactions and stage directions.",
              },
            ],
            steps: [
              {
                reasoning: "Dialogue — what the character says.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action — what the character does (often contradicts words).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Others' reactions and stage directions — how others see them and physical description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dialogue, action and others' views reveal character.",
            commonErrors: [
              "Analysing only dialogue and ignoring action or others' views.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a static and dynamic character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Static vs dynamic",
                statement:
                  "Static characters don't change; dynamic characters undergo transformation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Static characters remain essentially unchanged throughout the play.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dynamic characters undergo transformation — growth, degeneration, revelation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The choice serves different dramatic purposes — stability vs change.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: character arc reveals the play's thematic concerns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Static = unchanged; dynamic = transformed — each serves different purposes.",
            commonErrors: [
              "Assuming all characters should change or all should stay the same.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described character",
            author: "Written for Akademik Space",
            source: "Character analysis exercise",
            text: "A character insists they're 'fine' while constantly criticising others, checking their phone, and making self-deprecating jokes. When alone, they stare at old photographs. They push away anyone who tries to help.",
          },
          stem: "Analyse a described character.",
          parts: [
            {
              label: "a",
              prompt: "Identify the character's apparent motivation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify evidence of character complexity.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the character's dramatic function.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character analysis",
                statement:
                  "Contradictions between words, actions and private moments reveal depth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Motivation: hiding pain/grief, maintaining control, fear of vulnerability — any plausible motivation supported by evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Motivation identified with evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Complexity: claims 'fine' but behaviour shows distress; pushes away help — contradiction reveals depth.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Complexity convincingly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Function: represents denial/grief theme; creates tension through self-sabotage; audience empathy through private moments.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Dramatic function evaluated convincingly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Hiding pain/fear of vulnerability. (b) Words-actions contradiction. (c) Denial theme, tension creator, empathy vehicle.",
            commonErrors: [
              "Taking character's words at face value without analysing contradictions.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A character's 'arc' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their costume and physical appearance" },
              {
                id: "b",
                text: "The transformation or development they undergo",
              },
              { id: "c", text: "The number of lines they speak" },
              { id: "d", text: "Their relationship to the stage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character arc",
                statement:
                  "The transformation or development a character undergoes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Character arc is the development or transformation a character experiences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The transformation or development they undergo",
            commonErrors: [
              "Confusing character arc with physical description.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dialogue alone can mislead an analyst of character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dialogue and subtext",
                statement:
                  "Characters may say what they think others want to hear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Characters may lie, self-deceive or perform socially acceptable selves in dialogue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Actions often contradict words, revealing true feelings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: dialogue must be read alongside action and others' reactions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dialogue can be deceptive; actions and others' views reveal the truer character.",
            commonErrors: [
              "Taking dialogue at face value without cross-checking behaviour.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "When a character's actions contradict their words, what does this typically reveal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A playwright's error" },
              {
                id: "b",
                text: "Hidden motivation, self-deception or inner conflict",
              },
              { id: "c", text: "That the character is unimportant" },
              { id: "d", text: "That the play lacks realism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Words vs actions",
                statement:
                  "The gap between said and done reveals character depth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contradiction between words and actions signals hidden feelings or conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Hidden motivation, self-deception or inner conflict",
            commonErrors: [
              "Reading contradiction as inconsistency rather than depth.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the dramatic function of a 'foil' character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foil character",
                statement:
                  "A character who contrasts with the protagonist to highlight their qualities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A foil contrasts with the protagonist — different values, temperament or choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The contrast highlights the protagonist's qualities by comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can also create conflict or present alternative paths the protagonist might have taken.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: foils sharpen characterisation and thematic argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A foil contrasts with the protagonist to highlight qualities and present alternatives.",
            commonErrors: [
              "Confusing foil with antagonist — foils need not oppose the protagonist.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'static' character is one who:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaks very little" },
              {
                id: "b",
                text: "Does not change significantly throughout the play",
              },
              { id: "c", text: "Is killed early in the plot" },
              { id: "d", text: "Appears only in flashbacks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Static character",
                statement: "A character who remains essentially unchanged.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Static characters do not undergo significant change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Does not change significantly throughout the play",
            commonErrors: [
              "Confusing static with minor or supporting characters.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how other characters' reactions to a character reveal information about them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Others' reactions",
                statement:
                  "How others treat and describe a character reveals their reputation and nature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Others' behaviour toward a character reveals their reputation — admired, feared or despised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Their descriptions offer perspective the character cannot give themselves.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conflicting reactions reveal complexity — different characters may see them differently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: the character is constructed partly by how the community sees them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Others' reactions reveal reputation, provide external perspective and expose complexity.",
            commonErrors: [
              "Ignoring how secondary characters function as mirrors.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how stage directions — physical description and business — contribute to characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stage directions",
                statement:
                  "Physical detail and movement reveal character beyond dialogue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Physical description establishes appearance, status and first impressions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stage business — gestures, posture, habits — reveals temperament and inner state non-verbally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contradictions between directions and dialogue deepen character — e.g. nervous habits contradicting confident words.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Directors and actors interpret these cues, so directions shape but don't fix performance.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: stage directions are a distinct channel of character construction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stage directions reveal character through appearance, movement and non-verbal behaviour.",
            commonErrors: [
              "Treating stage directions as mere logistics rather than characterisation.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The protagonist's typical dramatic role is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provide comic relief" },
              {
                id: "b",
                text: "Drive the main plot and whose journey the audience follows",
              },
              { id: "c", text: "Represent the villain's allies" },
              { id: "d", text: "Narrate the stage directions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protagonist",
                statement:
                  "The main character whose journey the audience follows.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The protagonist drives the central plot and carries the audience's attention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Drive the main plot and whose journey the audience follows",
            commonErrors: [
              "Confusing protagonist with antagonist or narrator.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a character's motivation shapes their choices and the plot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motivation",
                statement: "What a character wants drives what they do.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Motivation — desire, fear, duty, love — determines which options a character pursues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conflicting motivations generate the choices that drive plot events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When motivation is unclear or changes, it signals character development or deception.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: analysing motivation explains why characters act as they do.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Motivation drives choices; conflicting wants generate plot.",
            commonErrors: [
              "Describing actions without identifying the want behind them.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q14",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described character",
            author: "Written for Akademik Space",
            source: "Character analysis exercise",
            text: "A character volunteers to help everyone, remembers every detail about others' lives, and never asks for anything in return. When thanked, they deflect with jokes. In private, they destroy letters they wrote but never sent.",
          },
          stem: "Analyse a described character.",
          parts: [
            {
              label: "a",
              prompt: "Identify the character's apparent motivation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify evidence of hidden depth or contradiction.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the character's likely dramatic function.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character analysis",
                statement:
                  "Public behaviour and private moments together reveal true character.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Motivation: need for connection or self-worth through helping others; possibly guilt or loneliness — supported by evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Motivation convincingly identified with textual evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Contradiction: public generosity vs private self-sabotage (destroying unsent letters) — suggests unexpressed needs or past rejection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Depth convincingly identified through words-actions contrast.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Function: embodies theme of self-sacrifice vs self-worth; creates pathos; may catalyse others' realisations.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Dramatic function convincingly evaluated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Need for connection through helping. (b) Public generosity vs private self-sabotage. (c) Self-sacrifice theme, pathos, catalyst.",
            commonErrors: [
              "Reading only the public persona without the private contradiction.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A character who remains unchanged throughout a play may serve to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Highlight the change in other characters by contrast",
              },
              { id: "b", text: "Provide the main plot" },
              { id: "c", text: "Act as the antagonist" },
              { id: "d", text: "Deliver the denouement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Static character function",
                statement:
                  "Unchanging characters highlight transformation in others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A static character's constancy throws dynamic characters' change into relief.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Highlight change in others by contrast",
            commonErrors: ["Assuming static characters lack dramatic purpose."],
          },
        },
        {
          id: "theatre-u2-character-analysis-q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define the 'dramatic function' of a character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic function",
                statement:
                  "The role a character plays in advancing plot or theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dramatic function is what a character does for the play — advancing plot, embodying theme, creating conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Functions include protagonist, antagonist, foil, catalyst or comic relief.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Not every character needs psychological depth; some exist to serve the story.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dramatic function = the role a character plays in advancing plot or theme.",
            commonErrors: ["Expecting every character to have equal depth."],
          },
        },
        {
          id: "theatre-u2-character-analysis-q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how character complexity is created through internal contradiction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Character complexity",
                statement: "Contradictory impulses make characters feel human.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complex characters hold conflicting desires — love and duty, ambition and guilt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The playwright exposes contradictions through gaps between words, actions and private moments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Contradiction creates uncertainty — the audience cannot predict or fully know the character.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This uncertainty mirrors real human psychology, generating empathy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: contradiction, not consistency, produces believable depth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Internal contradiction creates complexity by making characters unpredictable and human.",
            commonErrors: [
              "Valuing consistency over productive contradiction.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analysing a character through dialogue alone risks missing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The play's genre" },
              { id: "b", text: "Their actions, others' reactions and subtext" },
              { id: "c", text: "The theatre's location" },
              { id: "d", text: "The author's nationality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Character channels",
                statement:
                  "Full character requires dialogue, action, others' views and directions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dialogue alone misses actions, others' perspectives and non-verbal cues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Their actions, others' reactions and subtext",
            commonErrors: [
              "Treating dialogue as the sole source of character information.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why both a character's public behaviour and private moments matter to analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Public vs private",
                statement:
                  "Private moments reveal what public behaviour conceals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Public behaviour shows the social self — how the character wants to be seen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Private moments show the unguarded self — true feelings without performance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The gap between them reveals what the character is hiding and why.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: both are needed — one alone gives a partial, possibly false picture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Public behaviour shows the performed self; private moments reveal the real self.",
            commonErrors: [
              "Analysing only public interactions and missing private revelation.",
            ],
          },
        },
        {
          id: "theatre-u2-character-analysis-q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate how characterisation serves a play's theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Characterisation and theme",
                statement: "Characters embody and test the play's ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Characters personify themes — a greedy character embodies greed as a human problem, not an abstraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Their choices under pressure test the theme — does the play argue greed is punished or tolerated?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Character arcs show whether the theme is confirmed, subverted or complicated.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Weak characterisation reduces theme to assertion; strong characterisation makes it felt.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: characterisation is how theme becomes dramatic experience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Characterisation embodies and tests theme through choices, arcs and outcomes.",
            commonErrors: [
              "Separating character analysis from thematic analysis.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u2-relationships",
      title: "Relationships and conflict",
      skill:
        "Analyse character relationships and how conflict drives dramatic action.",
      lesson: {
        sections: [
          {
            heading: "Relationship dynamics",
            body: "Relationships are the engine of drama: **conflict** between characters creates tension; **alliances** create support; **betrayals** create shock; **romance** creates hope or tragedy. Analyse relationships through: power dynamics (who dominates?), history (what's their past?), and current state (are they close, distant, hostile?).",
          },
          {
            heading: "Conflict types",
            body: "**Interpersonal conflict** — between characters. **Internal conflict** — within a character (desire vs duty). **Societal conflict** — character vs society. The most powerful drama combines levels: a character torn between love and duty (internal) who must choose between two lovers (interpersonal) in a society that forbids it (societal).",
          },
          {
            heading: "Relationship development",
            body: "Relationships change through the play: allies become enemies, enemies reconcile, lovers separate. Track the arc: how does each relationship begin, develop, transform? The final relationship state reveals the play's resolution — what does the ending say about human connection?",
          },
        ],
        keyFormulas: [
          {
            name: "Relationship analysis",
            statement:
              "Power + history + current state = relationship understanding",
          },
          {
            name: "Conflict levels",
            statement: "Interpersonal + internal + societal = layered drama",
          },
        ],
        workedExample: {
          problem:
            "Two characters start as rivals but end as allies. What dramatic function does this relationship arc serve?",
          solution:
            "The arc shows character development — both must overcome prejudice or misunderstanding. It provides hope or commentary on reconciliation. The relationship change mirrors thematic concerns — perhaps the play argues that understanding can bridge divides.",
        },
      },
      questions: [
        {
          id: "theatre-u2-relationships-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In drama, 'conflict' most commonly refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A loud argument" },
              {
                id: "b",
                text: "The struggle between characters, within a character, or against society",
              },
              { id: "c", text: "A stage fight" },
              { id: "d", text: "A technical problem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict",
                statement:
                  "Struggle between characters, within a character, or against society.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conflict is struggle at interpersonal, internal or societal levels.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The struggle between characters, within a character, or against society",
            commonErrors: ["Reducing conflict to loud arguments only."],
          },
        },
        {
          id: "theatre-u2-relationships-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three types of conflict in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict types",
                statement: "Interpersonal, internal and societal conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Interpersonal — conflict between characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Internal — conflict within a character (desire vs duty).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Societal — conflict between character and society/institutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interpersonal, internal and societal conflict create layered drama.",
            commonErrors: [
              "Identifying only interpersonal conflict and ignoring other levels.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how relationship dynamics reveal character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationship dynamics",
                statement:
                  "How characters treat each other reveals their personalities and values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "How a character treats others reveals their values — kindness, cruelty, indifference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Power dynamics in relationships show status and control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Relationship changes reveal character development.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: characters are defined as much by relationships as by solo moments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Relationship dynamics reveal character values, status and development.",
            commonErrors: [
              "Analysing characters in isolation without their relationships.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described relationship",
            author: "Written for Akademik Space",
            source: "Relationship analysis",
            text: "Two sisters: the elder is responsible and controlling; the younger is rebellious and secretive. They haven't spoken in months but are forced to cooperate for their mother's care. Conversations are polite but loaded with old grievances.",
          },
          stem: "Analyse the relationship between two described characters.",
          parts: [
            {
              label: "a",
              prompt: "Describe the relationship's current state.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify the source of conflict or tension.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate how the relationship serves the drama.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationship analysis",
                statement:
                  "Power dynamics, history and current state create dramatic tension.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Current state: estranged but forced proximity — polite surface, underlying tension.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State accurately described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Source of tension: old grievances, control vs rebellion, forced cooperation creating conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Conflict source convincingly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Serves drama by creating sustained tension, forcing characters to confront history, providing emotional stakes.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Dramatic function evaluated convincingly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Estranged but forced proximity. (b) Old grievances and control dynamic. (c) Sustained tension and emotional stakes.",
            commonErrors: [
              "Describing relationship without analysing its dramatic function.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Power dynamics within a relationship refer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How loudly characters speak" },
              { id: "b", text: "Who dominates, controls or depends on whom" },
              { id: "c", text: "The physical distance between them" },
              { id: "d", text: "Their ages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Power dynamics",
                statement:
                  "Patterns of dominance, control and dependence between characters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Power dynamics describe who holds control or influence in the relationship.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Who dominates, controls or depends on whom",
            commonErrors: [
              "Confusing power dynamics with volume or physical proximity.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a relationship's shared history affects its current interaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationship history",
                statement: "Past events shape present behaviour and subtext.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shared history — past conflicts, betrayals, affection — colours every present interaction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Characters reference or avoid the past, creating subtext beneath current dialogue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: current state cannot be understood without its history.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "History creates subtext and explains present behaviour.",
            commonErrors: [
              "Analysing interactions as if the characters have no past.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Internal conflict' in drama means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fight between two characters on stage" },
              {
                id: "b",
                text: "A struggle within a single character, such as desire versus duty",
              },
              { id: "c", text: "A dispute with society's rules" },
              { id: "d", text: "A technical failure during performance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal conflict",
                statement:
                  "A struggle within a character between competing impulses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal conflict is within one character — e.g. desire vs duty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A struggle within a single character",
            commonErrors: [
              "Confusing internal conflict with interpersonal conflict.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how betrayal functions as a dramatic device in relationships.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Betrayal",
                statement:
                  "Violation of trust creates shock, re-evaluation and new conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Betrayal violates established trust, producing shock and re-evaluation of the betrayer and the relationship.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It forces characters to choose sides, revealing loyalties and values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It generates new conflicts and often drives the plot toward crisis or climax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: betrayal is a concentrated source of dramatic tension.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Betrayal creates shock, exposes loyalties and drives plot toward crisis.",
            commonErrors: [
              "Treating betrayal as mere plot surprise without relational consequence.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Interpersonal conflict in drama is conflict:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Within a single character's mind" },
              { id: "b", text: "Between characters" },
              { id: "c", text: "Between a character and a storm" },
              { id: "d", text: "Between the audience and actors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interpersonal conflict",
                statement: "Conflict between characters.",
              },
            ],
            steps: [
              {
                reasoning: "Interpersonal conflict occurs between characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Between characters",
            commonErrors: ["Confusing interpersonal with internal conflict."],
          },
        },
        {
          id: "theatre-u2-relationships-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how alliance and conflict can coexist within the same relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed dynamics",
                statement:
                  "Relationships often combine support and opposition simultaneously.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Characters can be allies on one issue and opponents on another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shared goals can coexist with personal rivalry or old grievances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This ambiguity creates rich tension — the audience cannot predict behaviour.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: real relationships are rarely purely friendly or hostile.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Relationships can combine alliance and conflict, creating unpredictable tension.",
            commonErrors: [
              "Reducing relationships to single labels like 'friends' or 'enemies'.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a relationship's arc through a play can mirror the play's thematic development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationship arc and theme",
                statement:
                  "Relationship change enacts the play's argument about human connection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relationships begin, develop and transform — tracking this arc parallels the plot's movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The final state of the relationship embodies the theme — e.g. reconciliation argues for understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When relationships fail to change, the theme may be pessimistic — connection is impossible.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Relationship dynamics make abstract themes concrete and emotional.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: relationship arcs are the theme made interpersonal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Relationship arcs embody the theme — their final state argues the play's position on connection.",
            commonErrors: [
              "Describing relationship changes without linking them to theme.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Societal conflict in drama involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two characters arguing" },
              {
                id: "b",
                text: "A character struggling against society, institutions or norms",
              },
              { id: "c", text: "A character's private doubts" },
              { id: "d", text: "A stage accident" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Societal conflict",
                statement:
                  "Conflict between a character and society or its institutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Societal conflict pits a character against social norms, laws or institutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** A character struggling against society or its norms",
            commonErrors: [
              "Confusing societal conflict with interpersonal conflict.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how subtext operates in dialogue between characters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Subtext",
                statement: "What is meant beneath what is said.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Characters often say one thing while meaning another — politeness masking hostility, jokes masking pain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subtext arises from relationship history and power dynamics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The audience reads between lines, creating dramatic irony when they know more than characters.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: subtext makes dialogue layered and reveals relationship truths.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Subtext is meaning beneath speech, shaped by history and power.",
            commonErrors: [
              "Analysing only literal dialogue and missing implied meaning.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q14",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described relationship",
            author: "Written for Akademik Space",
            source: "Relationship analysis exercise",
            text: "A mentor and protégé: the mentor once saved the protégé's career but now fears being replaced. They praise each other publicly while undermining each other privately. The protégé's loyalty is genuine but increasingly divided.",
          },
          stem: "Analyse the described relationship.",
          parts: [
            {
              label: "a",
              prompt: "Describe the power dynamic between the two characters.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify the source of underlying tension.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the relationship's dramatic function.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationship analysis",
                statement:
                  "Power, history and hidden motives create layered tension.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mentor holds formal power (saved career) but protégé holds future power (replacement threat) — shifting balance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Power dynamic accurately described with evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Tension: gratitude vs rivalry; public praise vs private sabotage; mentor's fear of obsolescence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Tension source convincingly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Function: embodies theme of legacy and jealousy; creates sustained dramatic irony; forces protégé's loyalty into crisis.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Function convincingly evaluated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Mentor's formal power vs protégé's rising power. (b) Gratitude-rivalry and public-private split. (c) Legacy theme, irony, loyalty crisis.",
            commonErrors: [
              "Missing the gap between public and private behaviour.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A relationship that begins in hostility and ends in reconciliation most likely suggests a theme of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inevitability of conflict" },
              {
                id: "b",
                text: "The possibility of understanding overcoming division",
              },
              { id: "c", text: "The superiority of one character" },
              { id: "d", text: "The randomness of events" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationship arc and theme",
                statement:
                  "Movement from hostility to reconciliation argues for understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reconciliation after hostility embodies the theme that understanding can bridge divides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Understanding overcoming division",
            commonErrors: [
              "Describing the arc without extracting its thematic argument.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the three levels of conflict in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict levels",
                statement: "Interpersonal, internal and societal conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Interpersonal — conflict between characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Internal — conflict within a character (desire vs duty).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Societal — conflict between character and society or institutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Interpersonal, internal and societal conflict.",
            commonErrors: ["Omitting one level or merging two."],
          },
        },
        {
          id: "theatre-u2-relationships-q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how 'forced proximity' — characters compelled to stay together — creates dramatic tension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forced proximity",
                statement:
                  "Compelled closeness prevents avoidance and intensifies conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Characters who might avoid each other are trapped together — conflict cannot be postponed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Every interaction carries accumulated tension; small incidents escalate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Forced proximity also creates opportunities for forced honesty or unexpected intimacy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The audience watches a pressure cooker — tension is structural, not dependent on plot events.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Conclusion: constraint itself generates drama.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Forced proximity prevents avoidance, intensifying and sustaining conflict.",
            commonErrors: [
              "Describing the situation without analysing its tension mechanism.",
            ],
          },
        },
        {
          id: "theatre-u2-relationships-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "The final state of relationships at a play's end typically reveals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The playwright's favourite actor" },
              {
                id: "b",
                text: "The play's resolution and thematic position on human connection",
              },
              { id: "c", text: "The length of the performance" },
              { id: "d", text: "The cost of the production" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ending relationships",
                statement:
                  "Final relationship states embody the play's resolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "How relationships end embodies the play's verdict on connection and its resolution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The play's resolution and position on human connection",
            commonErrors: ["Ignoring relationships when analysing the ending."],
          },
        },
        {
          id: "theatre-u2-relationships-q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how shifts in power within a relationship create drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Power shifts",
                statement:
                  "Changing dominance destabilises relationships and generates conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When power shifts — the subordinate gains leverage — established patterns break.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The formerly dominant character may resist, producing conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shifts reveal true loyalties and force renegotiation of the relationship.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: instability in power dynamics is a reliable engine of tension.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Power shifts destabilise relationships, forcing conflict and renegotiation.",
            commonErrors: ["Treating power as fixed rather than dynamic."],
          },
        },
        {
          id: "theatre-u2-relationships-q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate how relationship dynamics can reveal character more effectively than solo scenes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Relationships reveal character",
                statement: "We see who people are by how they treat others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solo scenes show what characters say about themselves; relationships show how they actually behave toward others.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Treatment of others — kindness, cruelty, indifference — exposes values words may hide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Power dynamics and subtext in relationships reveal self-awareness the character may lack.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "However, solo private moments can reveal truths relationships conceal — both are needed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: relationships are often the most revealing channel, but not the only one.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Relationships reveal character through behaviour toward others, though private moments also matter.",
            commonErrors: [
              "Claiming relationships are the only or always best channel.",
            ],
          },
        },
      ],
    },
  ],
};
