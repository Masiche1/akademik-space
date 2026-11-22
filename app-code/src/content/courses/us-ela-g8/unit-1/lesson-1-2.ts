import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "./levels.ts";

const CONTEST: TextExtract = {
  title: "The Spelling Bee",
  author: "Written for Akademik Space",
  text: "Dani had won the school spelling bee two years in a row, and everyone expected a third victory. She stood at the microphone, the last contestant besides Owen, the new boy from the next district.\n\n'Your word is necessary,' said Mr. Alvarez.\n\nDani closed her eyes. She could see the word clearly, one collar and two sleeves, the old trick her grandmother had taught her. 'N-E-C-E-S-S-A-R-Y,' she said, and the room waited.\n\n'That is correct.'\n\nThe judges turned to Owen. His word was 'rhythm.' He stared at the ceiling for a long time. Then, in a quiet voice, he began, 'R-H...' and stopped. Dani saw his hands shake. She remembered how many times she had looked at that same ceiling, and she knew that the word was hard because it has no vowels except one that hides.\n\n'It's a Y,' she said, before she had time to think. The whole gym went silent.\n\n'Dani,' Mr. Alvarez said sharply, 'you may not speak to the contestant.'\n\nShe lifted her chin. 'I know,' she said. 'Disqualify me if you have to.'",
};

const TEMPEST: TextExtract = {
  title: "The Lighthouse Keeper's Letter",
  author: "Written for Akademik Space",
  text: "The storm announced itself at noon, not with thunder but with a hush, as though the whole sea had drawn in a breath. By evening the waves were hammering the rocks, and the lighthouse shuddered like a frightened animal.\n\nElias climbed the spiral stairs, counting each iron step, as he had done every night since his father's death. At the top he found the great lamp dark. Someone had left the window open, and rain had soaked the wicks.\n\nHe stood very still. Below him, in the churning black water, a small boat was struggling toward the shoals. Its single lantern flickered once, then went out.\n\nElias thought of his father's last words, which had never made sense: 'The light is a promise, son.' He pulled off his coat, tore it into strips, soaked them in lamp oil, and lit the strips one by one on the iron rail. The flames roared up, orange and fierce. He kept feeding them until his arms ached, until the little boat turned and slid, trembling, into the safe channel.",
};

export const lesson12: Lesson = {
  id: "ela8-u1-lesson-1-2",
  code: "1-2",
  title: "Dialogue, Incidents and Word Choice",
  goal: "I CAN analyze how dialogue and incidents move the plot, reveal character, or lead to decisions, and how word choice shapes meaning and tone.",
  standards: ["RL.8.3", "RL.8.4"],
  vocabulary: [
    {
      term: "Dialogue",
      definition:
        "The words characters speak to each other, which can reveal personality, relationships, and conflict.",
    },
    {
      term: "Incident",
      definition:
        "A specific event in a story that moves the plot forward or changes a character.",
    },
    {
      term: "Connotation",
      definition:
        "The feelings or associations a word carries beyond its dictionary meaning.",
    },
    {
      term: "Allusion",
      definition:
        "A brief reference to a well-known person, event, story, or work that the reader is expected to recognize.",
    },
    {
      term: "Analogy",
      definition:
        "A comparison that shows a relationship between two things to explain or clarify an idea.",
    },
    {
      term: "Tone",
      definition:
        "The author's or narrator's attitude toward the subject, shown through word choice.",
    },
  ],
  concepts: [
    {
      id: "ela8-u1-dialogue-incidents",
      title: "How dialogue and incidents propel action and reveal character",
      skill:
        "Explain how a line of dialogue or an incident moves the plot, reveals a character, or leads to a decision.",
      lesson: {
        sections: [
          {
            heading: "What dialogue does",
            body: "Dialogue is never just talk. Each line can **reveal character** (how a person speaks shows their personality, pressure, or fear), **propel the action** (a statement can start a conflict or force a choice), or **provoke a decision** (another character reacts and the plot changes direction). Notice tone, word choice, and what is left unsaid. A sharp reply, a long pause, or a blunt confession can turn a scene.",
          },
          {
            heading: "How incidents shape a story",
            body: "An **incident** is a specific event, such as a mistake, a surprise, or a choice. Ask three questions: What happens? What does it show about the character? What does it cause next? Strong analysis connects the incident to a result: 'Because Dani speaks out, she risks disqualification, which shows that she values fairness over winning.' Cause and effect is the key to analyzing plot.",
          },
        ],
        keyFormulas: [
          {
            name: "Reveals character",
            statement:
              "A line or event that shows traits, values, or feelings through what a character says or does.",
          },
          {
            name: "Propels action",
            statement:
              "A line or event that causes the next events or raises the conflict.",
          },
          {
            name: "Provokes a decision",
            statement:
              "A line or event that forces a character to make a choice.",
          },
        ],
        workedExample: {
          problem:
            "From 'The Spelling Bee': How does Dani's line, 'It's a Y,' reveal her character and affect the plot?",
          solution:
            "Her line reveals that Dani cares more about fairness and compassion than about winning. She remembers how hard the word was for her, and she speaks 'before she had time to think,' which shows the act is instinctive and generous. The line also propels the action: it breaks the rules, so Mr. Alvarez reprimands her, and she must decide whether to defend or apologize. She chooses defiance with 'Disqualify me if you have to,' which shows her willingness to accept the cost of her kindness.",
        },
      },
      questions: [
        {
          id: "ela8-u1-dialogue-incidents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CONTEST,
          stem: "What is the main effect of Dani's remark, 'It's a Y,' on the plot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It introduces a new contestant." },
              {
                id: "b",
                text: "It makes Owen spell the word correctly and ends the contest.",
              },
              {
                id: "c",
                text: "It shows that Dani has forgotten how to spell 'necessary.'",
              },
              {
                id: "d",
                text: "It breaks the rules and creates a conflict between Dani and Mr. Alvarez.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cause and effect in dialogue",
                statement: "Identify what a line causes next in the plot.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Her hint violates the rule, so the judge rebukes her and she must face the consequence.",
                evidence: "you may not speak to the contestant",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Her comment directly triggers Mr. Alvarez's reprimand. The passage does not say Owen finishes (a), Dani has already spelled her word (c), and no new contestant appears (d).",
            commonErrors: [
              "Choosing (a) by assuming a result the passage never states.",
            ],
          },
        },
        {
          id: "ela8-u1-dialogue-incidents-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CONTEST,
          stem: "What does Dani's response, 'I know. Disqualify me if you have to,' reveal about her character? Support your answer with two details from the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dialogue reveals character",
                statement:
                  "Link a character's words to a trait and support it with a detail.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim: she is brave and principled, willing to accept punishment for what she thinks is right.",
                evidence: "She lifted her chin.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "She acts out of empathy, remembering her own struggle with the word.",
                evidence:
                  "She remembered how many times she had looked at that same ceiling",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "She admits she knows the rule, so her choice is deliberate, putting fairness ahead of her record.",
                evidence: "Disqualify me if you have to",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Dani is compassionate and brave. She helped Owen because she 'remembered how many times she had looked at that same ceiling,' and she accepts the consequences, saying 'Disqualify me if you have to,' with her chin lifted.",
            commonErrors: [
              "Saying only that she is 'nice' without a detail.",
              "Retelling the scene instead of explaining what it shows.",
            ],
          },
        },
        {
          id: "ela8-u1-dialogue-incidents-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CONTEST,
          stem: "Analyze how the incident in which Owen begins to spell 'rhythm' propels the plot and reveals character. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Incident and cause",
                statement:
                  "Explain what an incident shows about a character and what it causes.",
              },
              {
                kind: "technique",
                name: "Details that build tension",
                statement:
                  "Small physical details can show a character's fear and raise suspense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Owen's long pause and trembling hands show his fear, which creates tension and a need for rescue.",
                evidence: "Dani saw his hands shake.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "His unfinished spelling leaves a gap that Dani fills, so the incident directly causes her decision.",
                evidence: "R-H...' and stopped",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dani's memory of her own struggles shows her empathy and explains why she acts.",
                evidence: "She remembered how many times",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The result is a break in the rules and a silent gym, raising the stakes of her choice.",
                evidence: "The whole gym went silent.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels8(),
            finalAnswer:
              "Owen's struggle is the incident that sets Dani's decision in motion. When he starts 'R-H-Y...' and stops, and Dani sees that 'his hands shake,' the tension rises. Because she 'remembered how many times' she had struggled with the same word, her sympathy overcomes the rules, and she blurts out the hint. The result is that 'The whole gym went silent,' showing the consequences her kindness will bring.",
            commonErrors: [
              "Retelling Owen's turn without explaining its effect on Dani.",
              "Giving evidence without explanation.",
              "Ignoring cause and effect.",
            ],
          },
        },
        {
          id: "ela8-u1-dialogue-incidents-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: CONTEST,
          stem: "Answer all parts of this question about 'The Spelling Bee'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two details that show Dani is confident at the start of the passage.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "How does Mr. Alvarez's line, 'you may not speak to the contestant,' move the plot forward?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how dialogue and incidents in the passage together reveal Dani's values. Cite at least three pieces of textual evidence.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dialogue and plot",
                statement: "Explain what a line causes and what it reveals.",
              },
              {
                kind: "skill",
                name: "Evidence and explanation",
                statement:
                  "Support each point with a quotation and an explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "She has a history of winning.",
                evidence: "won the school spelling bee two years in a row",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "She spells the word calmly using a trick she trusts.",
                evidence: "the old trick her grandmother had taught her",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The line enforces the rule, creating a direct conflict between authority and Dani.",
                evidence: "sharply",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "It forces Dani to decide how to respond, leading to her defiant reply and raising the stakes of the climax.",
                evidence: "Disqualify me if you have to",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Her instant hint shows kindness that overrides her competitive instincts.",
                evidence: "before she had time to think",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Her memory reveals empathy based on shared experience.",
                evidence: "She remembered how many times",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Her calm defiance shows integrity and acceptance of consequences.",
                evidence: "She lifted her chin.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Explains how the sequence of incidents (Owen's struggle, her hint, the rebuke) shows values in action.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels8("c"),
            finalAnswer:
              "(a) She has won 'two years in a row' and spells her word using 'the old trick her grandmother had taught her.' (b) The rebuke enforces the rule and forces Dani to choose how to respond; she answers boldly, which heightens the conflict. (c) Dani values compassion and honesty over winning. She speaks 'before she had time to think' because she 'remembered how many times' she had struggled, and she accepts the risk with 'Disqualify me if you have to.' Owen's struggle, her hint, and the judge's rebuke work as a chain of incidents that show her values.",
            commonErrors: [
              "In (a), citing details from later in the passage.",
              "In (c), retelling events without explaining what they reveal.",
              "Not linking a line to its result.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u1-word-choice",
      title: "Word meanings, allusions, and tone",
      skill:
        "Determine figurative and connotative meanings, explain allusions and analogies, and analyze how word choice shapes tone.",
      lesson: {
        sections: [
          {
            heading: "Denotation, connotation, and context",
            body: "A word's **denotation** is its dictionary meaning; its **connotation** is the feeling attached to it. 'Slender' and 'scrawny' both mean thin, but one sounds admiring and the other critical. To find the meaning of an unfamiliar or figurative expression, read the surrounding sentences for clues, think about what the comparison suggests, and check that your meaning fits the context. Strong writers choose words for their connotations, so ask: why this word and not a neighbor?",
          },
          {
            heading: "Analogies, allusions, and tone",
            body: "An **analogy** compares two things to explain a relationship, such as a lighthouse and a promise. An **allusion** refers to something familiar, like a myth, a story, or a famous event, to add meaning in a few words. **Tone** is the attitude shown through diction. To analyze tone, name the attitude (for example, tense, tender, ironic) and quote the words that create it. Remember that figurative language should be explained by what it suggests, not just labeled.",
          },
        ],
        keyFormulas: [
          {
            name: "Connotation",
            statement:
              "The positive, negative, or emotional associations a word carries beyond its literal meaning.",
          },
          {
            name: "Allusion",
            statement:
              "A reference to a well-known text, myth, person, or event that adds meaning to a passage.",
          },
          {
            name: "Tone analysis",
            statement:
              "Name the tone, quote the words that create it, and explain what attitude or mood they suggest.",
          },
        ],
        workedExample: {
          problem:
            "From 'The Lighthouse Keeper's Letter': How does the phrase 'the lighthouse shuddered like a frightened animal' affect the tone?",
          solution:
            "The simile gives the lighthouse a living, helpless quality. 'Shuddered' suggests fear and weakness, and 'frightened animal' has connotations of vulnerability, which makes the storm seem overwhelming. This creates a tense, ominous tone and prepares the reader for danger. The earlier phrase 'the whole sea had drawn in a breath' builds the same suspense, since a held breath suggests something about to burst.",
        },
      },
      questions: [
        {
          id: "ela8-u1-word-choice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TEMPEST,
          stem: "In the passage, the word 'hush' in 'not with thunder but with a hush' most strongly suggests",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "that Elias has fallen asleep." },
              {
                id: "b",
                text: "a calm that feels ominous, as if something is about to happen.",
              },
              { id: "c", text: "a peaceful evening with no danger." },
              { id: "d", text: "that the sea is polluted." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Connotation in context",
                statement:
                  "A word's meaning depends on the surrounding details; here the hush is followed by a violent storm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The hush is compared to a held breath and is followed by hammering waves, so it signals coming danger.",
                evidence: "the whole sea had drawn in a breath",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)**. The surrounding description shows the quiet is the calm before a violent storm. (b) ignores the following events, and (c) and (d) are not supported.",
            commonErrors: [
              "Choosing (b) by using the everyday meaning of 'hush' and ignoring context.",
            ],
          },
        },
        {
          id: "ela8-u1-word-choice-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TEMPEST,
          stem: "Explain what the father's words, 'The light is a promise, son,' mean in the context of the whole passage. Support your answer with two details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analogy",
                statement:
                  "An analogy such as 'the light is a promise' links two ideas so that one explains the other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A promise is a commitment others depend on; the light is a duty that keeps sailors safe.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Elias understands the meaning when a boat's lantern goes out and he realizes someone relies on his light.",
                evidence: "Its single lantern flickered once, then went out.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "He sacrifices his coat to relight a fire, keeping the promise even without the lamp.",
                evidence: "tore it into strips, soaked them in lamp oil",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The father means that the lighthouse is a duty to keep people safe, like a promise others rely on. Elias understands when the boat's 'single lantern flickered once, then went out,' and he keeps the promise by burning his coat after he 'tore it into strips.'",
            commonErrors: [
              "Explaining the words only literally.",
              "Not using the details of the boat and the fire.",
            ],
          },
        },
        {
          id: "ela8-u1-word-choice-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TEMPEST,
          stem: "Analyze how the author's word choice creates a tense tone in the first two paragraphs. Use at least three examples of specific words or phrases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Diction and tone",
                statement:
                  "Specific words with strong connotations create a tone.",
              },
              {
                kind: "technique",
                name: "Personification and simile",
                statement:
                  "Giving natural or built objects living traits makes danger feel threatening.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Announced' personifies the storm, making it a deliberate threat, and the silent warning builds suspense.",
                evidence: "The storm announced itself at noon",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Hammering' is a violent verb that suggests relentless force against the rocks.",
                evidence: "the waves were hammering the rocks",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The simile makes the lighthouse seem fragile and afraid, increasing the sense of danger.",
                evidence: "shuddered like a frightened animal",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The dark lamp and soaked wicks raise a problem, which intensifies the tension.",
                evidence: "the great lamp dark",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels8(),
            finalAnswer:
              "The word choice creates a tense, foreboding tone. The storm 'announced itself,' a personification that gives it will and menace, and the quiet before it is a 'hush,' like a held breath. The waves were 'hammering,' a violent verb, and the lighthouse 'shuddered like a frightened animal,' a simile that makes even the strong tower seem helpless. Together these words make the reader feel danger closing in.",
            commonErrors: [
              "Naming techniques without explaining their effect.",
              "Saying the tone is 'scary' with no quoted words.",
              "Quoting long sections instead of precise words.",
            ],
          },
        },
        {
          id: "ela8-u1-word-choice-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: TEMPEST,
          stem: "Answer all parts of this question about 'The Lighthouse Keeper's Letter'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two words or phrases in the final paragraph that describe the fire Elias lights.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the phrase 'counting each iron step' helps to characterize Elias.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "How does word choice in the final paragraph change the tone from fear to determination? Cite at least three pieces of textual evidence.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Word choice and tone",
                statement:
                  "Strong verbs and adjectives create the tone; analyze their connotations.",
              },
              {
                kind: "skill",
                name: "Evidence and explanation",
                statement:
                  "Support each point with a quotation and an explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The flames are bold and strong.",
                evidence: "roared up",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "The color adds fierceness.",
                evidence: "orange and fierce",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Counting shows a careful, disciplined routine he keeps even under stress.",
                evidence: "counting each iron step",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The phrase 'since his father's death' connects the routine to grief and loyalty, so he is dutiful and devoted.",
                evidence: "every night since his father's death",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "'He stood very still' shows shock and fear at first.",
                evidence: "He stood very still.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Decisive verbs 'pulled,' 'tore,' 'soaked' show quick action replacing fear.",
                evidence: "pulled off his coat, tore it into strips",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The fire's description conveys power, matching his resolve.",
                evidence: "The flames roared up, orange and fierce.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Persistent effort 'until his arms ached' shows determination that wins the rescue.",
                evidence: "until his arms ached",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels8("c"),
            finalAnswer:
              "(a) The flames 'roared up' and are 'orange and fierce'. (b) Counting 'each iron step' shows a disciplined, devoted character, and the link to his father's death shows loyalty. (c) The tone begins with fearful stillness ('He stood very still') and shifts to determination as the verbs become active and forceful: he 'pulled off,' 'tore,' and 'soaked.' The fire 'roared up, orange and fierce,' matching his resolve, and 'until his arms ached' shows his persistence until the boat is safe.",
            commonErrors: [
              "In (a), choosing words about the storm.",
              "In (c), identifying techniques without explaining the shift in tone.",
              "Quoting too much text.",
            ],
          },
        },
      ],
    },
  ],
};
