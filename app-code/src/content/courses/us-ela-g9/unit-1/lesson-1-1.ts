import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const STATION: TextExtract = {
  title: "The Platform",
  author: "Written for Akademik Space",
  text: "Ines had promised herself she would not cry at the station. She stood on the platform in her good coat, the one her mother had pressed that morning, and counted the rivets in the iron post beside her. Twelve. Her brother Tomas leaned against the post with his duffel bag between his boots, whistling a tune that kept losing its way.\n\n'You'll write,' she said.\n\n'Every week.' He grinned, but he checked the clock above the ticket window before he said it. 'The army doesn't leave much time for letters, but I'll find some.'\n\nWhen the train arrived, he lifted her off her feet in a hug so brief that her shoes barely left the ground. Then he was climbing the steps, and she was suddenly talking very fast about the garden, the dog, the leaking tap that he had promised to fix before he left and had not.\n\n'Ines.' He stopped in the doorway. 'The tap. Leave it. Dad will want something to do.'\n\nShe nodded. The whistle blew. Through the window she watched him take a seat and look straight ahead, not at her, his hand pressed flat against his coat pocket as though checking that something was still there. Only when the train had dwindled to a thread of smoke did she notice that she was still holding his scarf, and that it was warm.",
};

const MAP: TextExtract = {
  title: "The Mapmaker",
  author: "Written for Akademik Space",
  text: "Every evening, Odile watched her father redraw the coastline of the island. The sea took a little more of it each winter, and each spring he inked a new edge on the great map that hung in the village hall, erasing the beaches where children had once played. The villagers stopped looking at the map. 'Why keep a record of what we're losing?' the baker asked.\n\nOdile's father only said, 'A map that lies is worse than none.'\n\nThe year the storms came early, the harbor board needed to decide where to rebuild the sea wall. Nobody could agree. Some pointed to old photographs; others to memory. Finally the mayor sighed and unrolled her father's map, with its forty years of patient corrections, each one dated in the margin. In an hour the argument was over. The wall would go where the land had stopped retreating.\n\nAfterward, the baker brought a loaf to the mapmaker's door. 'I thought you were only recording the sorrow,' he said. 'It turns out you were building the way forward.'\n\nOdile's father shrugged and returned to his desk. There was a new corner to ink in.",
};

export const lesson11: Lesson = {
  id: "ela9-u1-lesson-1-1",
  code: "1-1",
  title: "Evidence and Theme",
  goal: "I CAN cite strong and thorough textual evidence for what a text says and implies, and analyze how a theme emerges and is refined over the course of a text to write an objective summary.",
  standards: ["RL.9-10.1", "RL.9-10.2"],
  vocabulary: [
    { term: "Thorough evidence", definition: "Enough well-chosen details, from across the text, to support a claim fully rather than a single quotation." },
    { term: "Explicit", definition: "Stated directly in the text, so that nothing has to be worked out." },
    { term: "Inference", definition: "A reasoned conclusion about what the text implies, built from several clues." },
    { term: "Theme", definition: "A message or insight about life, written as a full sentence, that a whole text develops." },
    { term: "Refine", definition: "To make an idea more precise or complex as new details and events add to or qualify it." },
    { term: "Objective summary", definition: "A brief account of the central events or ideas in your own words, free of opinion and minor detail." },
  ],
  concepts: [
    {
      id: "ela9-u1-strong-thorough-evidence",
      title: "Strong and thorough textual evidence",
      skill: "Support a claim with accurate, well-chosen evidence that covers both what the text says and what it implies.",
      lesson: {
        sections: [
          {
            heading: "Strong and thorough",
            body: "Strong evidence is specific and directly proves your claim. **Thorough** evidence goes further: it draws on more than one place in the text, so the claim does not rest on a single detail that could be a coincidence. At Grade 9, a convincing claim is usually supported by two or three pieces of evidence that work together, each short, exact, and embedded in your own sentence.",
          },
          {
            heading: "Explicit and inferred",
            body: "Some claims rest on **explicit** statements (what the narrator tells us outright). Many of the most important ones rest on **inferences**: conclusions drawn from actions, dialogue, objects, and gaps between what a character says and does. To support an inference, name the clue, state what it suggests, and show that a second clue points the same way. A claim that every clue contradicts, or that only one clue supports, is weak.",
          },
        ],
        keyFormulas: [
          { name: "Thorough evidence", statement: "Several accurate details from different parts of the text that together prove the claim." },
          { name: "Explicit versus inferred", statement: "Explicit evidence is stated; inferred evidence is implied and must be reasoned from clues." },
          { name: "Claim, evidence, reasoning", statement: "State the claim, embed a short exact quotation, then explain how it proves the claim." },
        ],
        workedExample: {
          problem: "From 'The Platform': What can you infer about how Ines feels as the train leaves? Cite thorough evidence.",
          solution: "Ines is grieving and trying not to show it. The narrator states this directly at first: she 'had promised herself she would not cry', which tells us her emotion is strong enough to need resisting. The inferred evidence builds on it. She 'counted the rivets in the iron post', a nervous way of distracting herself, and she talks 'very fast about the garden, the dog, the leaking tap', filling the silence so that she does not have to say goodbye. The last detail is the most telling: she is 'still holding his scarf, and that it was warm', which shows that she cannot let go of the closeness he has just left behind. Four details from the beginning, middle, and end all point to the same feeling, which makes the claim thorough.",
        },
      },
      questions: [
        {
          id: "ela9-u1-strong-thorough-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STATION,
          stem: "A reader claims that Tomas is anxious about leaving but is hiding it behind a cheerful manner. Which detail is the strongest evidence for this claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is 'whistling a tune that kept losing its way'." },
              { id: "b", text: "Ines stood 'in her good coat, the one her mother had pressed that morning'." },
              { id: "c", text: "Ines 'counted the rivets in the iron post beside her'." },
              { id: "d", text: "He had promised to fix 'the leaking tap' before he left." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Strongest evidence", statement: "Choose the detail that shows the claimed behavior directly and is about the right character." }],
            steps: [{ reasoning: "Cheerful whistling is his outward manner, but the tune cannot keep its shape, which suggests nerves under the surface.", evidence: "whistling a tune that kept losing its way", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)**. The whistle is cheerful on the surface but faltering, which shows hidden anxiety. (b) is background about Ines's coat, (c) shows Ines's nervousness rather than Tomas's, and (d) shows only an unfulfilled promise.",
            commonErrors: ["Choosing (c) because it shows nervousness, without noticing it is about Ines, not Tomas."],
          },
        },
        {
          id: "ela9-u1-strong-thorough-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STATION,
          stem: "Make a claim about how Ines is feeling at the station. Support it with one explicit piece of evidence and one inferred piece of evidence, and explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Explicit and inferred evidence", statement: "Explicit evidence is stated in the text; inferred evidence is a clue you must interpret." }],
            steps: [
              { reasoning: "Claim with explicit evidence: the narrator states directly that Ines is trying to hold back tears.", evidence: "she would not cry at the station", marks: 1, markCode: "AO1" },
              { reasoning: "Inferred evidence: counting small objects is a distraction technique, implying she is trying to control strong emotion.", evidence: "counted the rivets in the iron post", marks: 1, markCode: "AO1" },
              { reasoning: "Explains that the first quotation is stated outright while the second must be reasoned from her behavior.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Ines is deeply sad but trying to hide it. The narrator says directly that she 'had promised herself she would not cry', which is explicit. We have to infer from her counting 'the rivets in the iron post' that she is distracting herself from her feelings.",
            commonErrors: ["Giving two explicit quotations and no inference.", "Offering evidence with no explanation of the difference."],
          },
        },
        {
          id: "ela9-u1-strong-thorough-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STATION,
          stem: "To what extent does the passage suggest that Tomas is more worried about leaving than he admits? Use thorough textual evidence, both explicit and inferred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thorough evidence", statement: "Support the claim with several details from different parts of the text and explain what each one shows." },
              { kind: "technique", name: "Gap between speech and behavior", statement: "When a character's words and actions differ, the behavior is usually the stronger evidence of feeling." },
            ],
            steps: [
              { reasoning: "His words are confident, but he checks the time as he promises to write, suggesting he is watching the clock and dreading the departure.", evidence: "he checked the clock above the ticket window", marks: 2, markCode: "AO1" },
              { reasoning: "The hug is so short it hardly counts as a goodbye, which implies he is rushing to avoid showing emotion.", evidence: "so brief that her shoes barely left the ground", marks: 2, markCode: "AO1" },
              { reasoning: "He will not look at her and touches his pocket as if reassuring himself, hinting at a worry or keepsake he does not share.", evidence: "his hand pressed flat against his coat pocket", marks: 2, markCode: "AO1" },
              { reasoning: "Weighs the evidence: his one spoken concern is for his father, so he cares and worries, yet cannot say so about himself. Reaches a balanced judgment.", evidence: "Dad will want something to do", marks: 2, markCode: "AO1" },
            ],
            levels: levels(8),
            finalAnswer: "The passage strongly suggests that Tomas hides his worry. He promises to write but 'checked the clock' first, his hug is 'so brief that her shoes barely left the ground', and he looks 'straight ahead, not at her' with his 'hand pressed flat against his coat pocket'. His only open concern is for his father, 'Dad will want something to do', so he shows care for others while concealing his own fear.",
            commonErrors: ["Taking 'Every week' and his grin at face value.", "Using a single quotation.", "Listing quotations without saying what each implies."],
            examinerNote: "Top answers cover both stated and implied evidence and reach a judgment about 'to what extent'.",
          },
        },
        {
          id: "ela9-u1-strong-thorough-evidence-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: STATION,
          stem: "Answer all parts of this question about 'The Platform'.",
          parts: [
            { label: "a", prompt: "Cite three explicit details about what Ines does or says while Tomas is leaving.", marks: 3 },
            { label: "b", prompt: "What can you infer about the relationship between Ines and Tomas? Cite two pieces of evidence and explain each.", marks: 5 },
            { label: "c", prompt: "Evaluate the claim that the final sentence of the passage gives the strongest evidence of how Ines feels. Support your answer with thorough textual evidence from across the passage.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval and inference", statement: "Retrieve stated details for explicit questions; combine clues for inference." },
              { kind: "skill", name: "Evaluating evidence", statement: "Judge which details are strongest and justify the judgment with other evidence." },
            ],
            steps: [
              { part: "a", reasoning: "She counts the rivets.", evidence: "counted the rivets in the iron post", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She asks him to write.", evidence: "You'll write", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She talks quickly about home.", evidence: "talking very fast about the garden", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "They are close: she asks for letters and he promises weekly ones, showing mutual effort to stay connected.", evidence: "Every week", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "He understands her: he guesses she will fret about the tap and tells her to let it go, showing he knows her habits.", evidence: "The tap. Leave it.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Explanation of how the two details together show affection beneath restrained speech.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The warm scarf shows the closeness she has lost, and that she is holding it implies she cannot let go.", evidence: "still holding his scarf, and that it was warm", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Earlier explicit evidence that she resisted tears sets up the ending, where she finally feels the loss.", evidence: "promised herself she would not cry", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Her rapid talking shows grief expressed through nervous speech, an equally strong earlier clue.", evidence: "talking very fast about the garden", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Tomas's behavior is further evidence of the loss on both sides.", evidence: "look straight ahead, not at her", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Reaches a justified judgment: the ending is the strongest single detail but gains force from the earlier clues.", marks: 2, markCode: "AO1" },
            ],
            levels: levels(10, "c"),
            finalAnswer: "(a) She 'counted the rivets', says 'You'll write', and talks 'very fast about the garden'. (b) They are close and protective of each other: he promises letters 'every week' and tells her to 'Leave it' about the tap because he knows how she copes. Their affection is shown in restrained, practical talk. (c) The last sentence is the strongest single detail because the scarf 'was warm' shows the closeness she has lost and cannot let go. But it works because earlier clues prepare for it: she 'promised herself she would not cry', talks 'very fast', and watches Tomas look 'straight ahead, not at her'. The ending releases the feeling the rest of the passage suppresses, so it is strongest in combination with them.",
            commonErrors: ["In (a), giving inferences instead of stated details.", "In (b), quoting without explaining what the quotation shows.", "In (c), agreeing with the claim without testing it against other evidence."],
          },
        },
      ],
    },
    {
      id: "ela9-u1-theme-emergence",
      title: "Theme development and objective summary",
      skill: "Trace how a theme emerges and is refined by details across a text, and summarize the text objectively.",
      lesson: {
        sections: [
          {
            heading: "How a theme emerges and is refined",
            body: "A **theme** is a full-sentence insight about life, such as 'Honest records protect a community from false comfort.' Themes are not announced once; they **emerge** as characters make choices, settings change, and events test an idea. They are then **refined**: a later event may qualify, complicate, or deepen the first impression. To trace this, track a central idea from the opening, through the turning point, to the resolution, and ask what each stage adds.",
          },
          {
            heading: "Summary versus theme",
            body: "An **objective summary** reports the central events in order, in your own words, in present tense, with no opinions, quotations, or minor details. A theme interprets the events; a summary does not. A good summary names the main character, the central problem, the turning point, and the outcome, so that a reader who has not read the text understands what happens. Do not let judgment words such as 'sadly' or 'brilliantly' slip in.",
          },
        ],
        keyFormulas: [
          { name: "Theme statement", statement: "A full sentence about life, supported by the whole text, never a single word or a plot event." },
          { name: "Refinement", statement: "A later detail or event qualifies or deepens an earlier idea, making the theme more precise." },
          { name: "Objective summary", statement: "Central events in order, in your own words, present tense, with no opinion." },
        ],
        workedExample: {
          problem: "From 'The Mapmaker': State a theme and explain how it is refined as the passage develops.",
          solution: "A theme is that facing painful truths honestly makes wise action possible. At first the idea is tested by the villagers, who stop looking at the map because it only records loss; the baker's question, 'Why keep a record of what we're losing?', voices the opposing view that denial is more comfortable. The father's reply, 'A map that lies is worse than none', states the value of honesty without proving it. The storm refines the idea: the accurate map, with 'forty years of patient corrections', ends the argument 'in an hour' and shows that honesty is practical, not just principled. The baker's final words, 'you were building the way forward', complete the shift from seeing the map as sorrow to seeing it as a foundation for action.",
        },
      },
      questions: [
        {
          id: "ela9-u1-theme-emergence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MAP,
          stem: "Which statement best expresses a theme of 'The Mapmaker'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Honesty" },
              { id: "b", text: "Island coastlines change over time." },
              { id: "c", text: "Facing painful truths honestly can make wise action possible." },
              { id: "d", text: "Mapmaking is a skill passed from parent to child." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Theme", statement: "A theme is a full-sentence insight about life that the whole text supports, not a topic word or a fact in the plot." }],
            steps: [{ reasoning: "The father's honest map is first rejected as sorrowful, then used to make a sound decision, so the message is about honesty enabling action.", evidence: "building the way forward", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)**. It is a complete statement about life, supported by the whole story. (a) is only a topic word, (b) is a plot fact, and (d) is not developed.",
            commonErrors: ["Choosing a one-word topic as a theme.", "Choosing a true plot detail that does not give a message about life."],
          },
        },
        {
          id: "ela9-u1-theme-emergence-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: MAP,
          stem: "Which of the following is the best objective summary of the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Odile's father keeps correcting a map as the sea erodes the island, though villagers think it only records loss. When storms force a decision about a sea wall, his accurate map settles the dispute, and the baker admits its worth." },
              { id: "b", text: "This moving story shows how wonderful it is to be a mapmaker, and the baker is foolish for not believing in the map at first." },
              { id: "c", text: "The baker asks 'Why keep a record of what we're losing?' and later brings a loaf of bread to the mapmaker's door." },
              { id: "d", text: "Odile's father draws a map that the villagers hate, so he ignores them and the mayor uses old photographs to decide where the wall goes." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Objective summary", statement: "Include the problem, turning point, and outcome in the author's order, in your own words, with no opinion and no errors." }],
            steps: [
              { reasoning: "Covers the central problem: the father keeps correcting the map while villagers find it painful.", evidence: "The sea took a little more of it each winter", marks: 1, markCode: "AO1" },
              { reasoning: "Covers the turning point and outcome accurately and without opinion: the map settles the wall decision and the baker changes his view.", evidence: "In an hour the argument was over.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)**. It covers problem, turning point, and outcome without opinion. (b) contains opinion, (c) uses quotation and omits the key events, and (d) is inaccurate: the mayor uses the map, not photographs.",
            commonErrors: ["Choosing (b) because it sounds like a response to the story, rather than a neutral summary.", "Choosing a summary that includes a factual error."],
          },
        },
        {
          id: "ela9-u1-theme-emergence-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MAP,
          stem: "Explain how the baker's changing attitude helps the author refine the theme of the passage. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character change and theme", statement: "A character's shift in belief can show an idea being tested and then proved." },
              { kind: "skill", name: "Tracing refinement", statement: "Show how a later detail deepens or qualifies an earlier idea." },
            ],
            steps: [
              { reasoning: "The baker first voices the view that painful records are pointless, which introduces the idea to be tested.", evidence: "Why keep a record of what we're losing?", marks: 2, markCode: "AO1" },
              { reasoning: "The crisis shows the map's practical value, which contradicts the baker's earlier view.", evidence: "In an hour the argument was over.", marks: 2, markCode: "AO1" },
              { reasoning: "His final admission reframes the map from sorrow to progress, so the theme moves from honesty as principle to honesty as foundation for action.", evidence: "you were building the way forward", marks: 2, markCode: "AO1" },
            ],
            levels: levels(6),
            finalAnswer: "The baker begins by questioning the point of the map: 'Why keep a record of what we're losing?' This sets up the idea that denial is easier than honesty. When the storm forces a decision, the map ends the dispute 'in an hour', proving that honest records have practical use. The baker then admits, 'you were building the way forward', so the theme is refined from honesty as a principle into honesty as the basis for wise action.",
            commonErrors: ["Retelling the plot without linking the baker to the theme.", "Stating a theme but offering no evidence from the middle or end."],
          },
        },
        {
          id: "ela9-u1-theme-emergence-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: MAP,
          stem: "Answer all parts of this question about 'The Mapmaker'.",
          parts: [
            { label: "a", prompt: "Write an objective summary of the passage in four sentences.", marks: 4 },
            { label: "b", prompt: "How does the father's line 'A map that lies is worse than none' contribute to the development of the theme?", marks: 6 },
            { label: "c", prompt: "Analyze how the theme of the passage emerges and is refined from the opening to the final line. Use thorough textual evidence.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Objective summary", statement: "Events in order, in your own words, present tense, no opinion." },
              { kind: "skill", name: "Thematic analysis", statement: "Connect specific details to a stated theme and show how the idea develops over time." },
            ],
            steps: [
              { part: "a", reasoning: "States the setup: Odile's father redraws the map as the sea erodes the island.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "States the conflict: villagers lose interest because the map records only loss.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "States the turning point and outcome: after storms, the map settles where the sea wall goes and the baker admits its value.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Writes in own words, present tense, without opinion or quotation.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "It states the father's belief that a false picture is more dangerous than an unwelcome one.", evidence: "A map that lies is worse than none.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "It answers the baker's challenge, setting up the central tension between comfort and truth.", evidence: "Why keep a record of what we're losing?", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "It is a claim that the later events test and prove, so it begins the development of the theme.", evidence: "forty years of patient corrections", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Opening: the map erases loved places, showing the cost of honesty and why villagers turn away.", evidence: "erasing the beaches where children had once played", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Middle: the disagreement shows that memory and photographs fail, so honest records matter.", evidence: "Some pointed to old photographs; others to memory.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Turning point: the map resolves the dispute, proving its practical worth.", evidence: "The wall would go where the land had stopped retreating.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Refinement: the baker reframes the map from sorrow to progress.", evidence: "you were building the way forward", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The final line suggests the work continues, showing that honesty is an ongoing practice.", evidence: "There was a new corner to ink in.", marks: 2, markCode: "AO1" },
            ],
            levels: [...levels(6, "b"), ...levels(10, "c")],
            finalAnswer: "(a) Odile's father redraws the island's map each spring as the sea erodes the coast. The villagers lose interest because the map records only loss. After early storms, the board uses his accurate map to decide where to build the sea wall. The baker then admits that the map has been useful, not merely sad. (b) The line states his belief that false comfort is more dangerous than unwelcome truth. It answers the baker's challenge and is later proved by events. (c) The theme is that facing painful truths honestly makes wise action possible. It begins at a cost, since the map is 'erasing the beaches where children had once played'. It is tested by a dispute where memory and photographs fail, resolved when the map shows where 'the land had stopped retreating'. The baker's 'building the way forward' refines honesty from principle to foundation, and the final line shows it is ongoing work.",
            commonErrors: ["In (a), adding opinions or quoting.", "In (b), explaining the line without linking it to the rest of the passage.", "In (c), retelling events without naming the theme or showing how it changes."],
          },
        },
      ],
    },
  ],
};
