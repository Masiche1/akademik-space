import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "./levels.ts";

const NIGHT_A: TextExtract = {
  title: "The Night Shift (version 1)",
  author: "Written for Akademik Space",
  text: "The bakery lights come on at three in the morning. By four, Tomas has the first trays in the oven. By five, the street smells of warm bread, and the early buses begin to rumble past.\n\nHe works alone, and he likes it that way. At six, the first customers arrive, and Tomas hands over their loaves with a nod. By seven, the shelves are bare. He turns the sign to Closed, sweeps the floor, and walks home through the bright, busy streets while the rest of the town is just beginning its day.",
};

const NIGHT_B: TextExtract = {
  title: "The Night Shift (version 2)",
  author: "Written for Akademik Space",
  text: "Tomas wiped the flour from his hands and counted the trays: twelve, as always. He did not tell the customers that his mother had once stood at this same oven, or that he had been born upstairs. 'Your usual?' he asked a woman in a gray coat, and she smiled as though he had given her a gift.\n\nThen the door opened and a man in a suit walked in. 'Mr. Reyes? I represent the company that owns this building.' He laid an envelope on the counter. 'The lease will not be renewed.'\n\nTomas looked at the oven. He looked at the envelope. Then he picked up a loaf, still warm, and held it out. 'Have some bread,' he said. 'It is the last of the morning batch.'",
};

const HEROES: TextExtract = {
  title: "The Heron and the Fox",
  author: "Written for Akademik Space",
  text: "Mara had heard the old story a hundred times: a fox invites a heron to dinner and serves soup on a flat plate, so the heron, with her long, thin beak, goes hungry. The heron then invites the fox and serves her meal in a tall, narrow jar. The fox leaves with an empty stomach.\n\nIn Mara's version, the story happened in her middle school cafeteria. Her friend Kenji had laughed when she tripped carrying her tray, and he had told the whole table. For a week she thought of ways to answer him. She planned to leave him out of the group project. She planned to make a joke about his stutter.\n\nOn Friday, she sat down across from him. 'You know,' she said, 'the heron got her revenge, but nobody ate that night.' She slid half her sandwich across the table. 'I'm tired of being hungry. Are we done?'\n\nKenji blinked, then slowly grinned. 'Yeah,' he said. 'We're done.'",
};

export const lesson13: Lesson = {
  id: "ela8-u1-lesson-1-3",
  code: "1-3",
  title: "Structure, Point of View and Sources",
  goal: "I CAN compare the structures of two texts, analyze how point of view creates suspense, humor, or dramatic irony, and explain how a modern work draws on a traditional story.",
  standards: ["RL.8.5", "RL.8.6", "RL.8.9"],
  vocabulary: [
    {
      term: "Structure",
      definition:
        "The way a text is organized, including the order of events, the shape of paragraphs, and the arrangement of scenes.",
    },
    {
      term: "Point of view",
      definition:
        "The perspective from which a story is told, such as first person or third person.",
    },
    {
      term: "Dramatic irony",
      definition:
        "A situation in which the audience or reader knows something that a character does not.",
    },
    {
      term: "Suspense",
      definition:
        "A feeling of anxious uncertainty about what will happen next.",
    },
    {
      term: "Myth",
      definition:
        "A traditional story that explains a belief, a natural event, or the actions of gods and heroes.",
    },
    {
      term: "Fable",
      definition:
        "A short traditional story, usually with animal characters, that teaches a moral lesson.",
    },
  ],
  concepts: [
    {
      id: "ela8-u1-structure-pov",
      title: "Comparing structure and analyzing point of view",
      skill:
        "Compare how two texts are organized, and explain how point of view creates dramatic irony, suspense, or humor.",
      lesson: {
        sections: [
          {
            heading: "Comparing the structures of two texts",
            body: "**Structure** is how a writer arranges a text: chronological order, flashbacks, short or long paragraphs, shifts in time, or a surprise ending. To compare two texts, identify the structural choice in each, then explain how it affects **meaning** and **style**. A text built in short, time-stamped paragraphs feels routine and calm; one built around a sudden interruption feels dramatic. The same events told in a different order create a different meaning.",
          },
          {
            heading: "Point of view and its effects",
            body: "The **point of view** controls what the reader knows. When the reader knows more than a character, the result is **dramatic irony**, which can create suspense (we fear what the character cannot see) or humor (we enjoy the character's mistake). When a narrator reveals a character's private thoughts, the reader understands motives that others miss. Ask: Who knows what? What does the reader know that the character does not? What effect does the gap create?",
          },
        ],
        keyFormulas: [
          {
            name: "Structure comparison",
            statement:
              "Name each text's structure, then explain how it changes the meaning or style.",
          },
          {
            name: "Dramatic irony",
            statement:
              "The reader knows something that a character does not, creating suspense, humor, or sadness.",
          },
          {
            name: "Point of view effect",
            statement:
              "What the narrator reveals or hides controls the reader's understanding and emotions.",
          },
        ],
        workedExample: {
          problem:
            "Compare the structures of the two versions of 'The Night Shift' and explain the effect of each.",
          solution:
            "Version 1 uses a simple time sequence: three, four, five, six, seven o'clock. The steady countdown and short sentences make the work feel calm and routine, and the ending, walking home, gives a peaceful close. Version 2 begins in the middle of a moment and builds to an interruption: the man in the suit arrives with an envelope. Instead of a routine, the structure creates tension and a turning point, and it ends on an open gesture, handing over bread. Version 1 emphasizes habit and contentment, while Version 2 emphasizes loss and character under pressure.",
        },
      },
      questions: [
        {
          id: "ela8-u1-structure-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NIGHT_A,
          stem: "Which statement best describes the structure of 'The Night Shift (version 1)'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It alternates between two characters' points of view.",
              },
              {
                id: "b",
                text: "It begins with a flashback to Tomas's childhood and ends in the present.",
              },
              {
                id: "c",
                text: "It is organized by the passing hours, from three in the morning to seven.",
              },
              {
                id: "d",
                text: "It ends with a surprising problem that the character must solve.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chronological structure",
                statement:
                  "A text arranged by time order moves through events in sequence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each paragraph moves forward by a time marker, which shows the chronological structure.",
                evidence: "By four, Tomas has the first trays in the oven.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)**. The passage moves hour by hour. There is no flashback (a), only one character (c), and the ending is calm, not a problem (d).",
            commonErrors: [
              "Choosing (d) because the other version has a surprise ending.",
            ],
          },
        },
        {
          id: "ela8-u1-structure-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NIGHT_B,
          stem: "In 'The Night Shift (version 2)', how does the arrival of the man in the suit change the direction of the passage? Support your answer with two details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Turning point",
                statement:
                  "A sudden event can change the mood and direction of a text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The mood shifts from warm routine to threat and loss.",
                evidence: "The lease will not be renewed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short, clipped sentences slow the pace and show Tomas processing the shock.",
                evidence:
                  "Tomas looked at the oven. He looked at the envelope.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The passage shifts from description to a decision, as Tomas answers with a generous act.",
                evidence: "Have some bread",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The arrival changes the mood from a warm routine to a moment of loss. The man announces 'The lease will not be renewed,' and short sentences, 'Tomas looked at the oven. He looked at the envelope,' slow the pace. Tomas then responds with the gesture 'Have some bread.'",
            commonErrors: [
              "Retelling the scene without describing the change.",
              "Ignoring sentence structure.",
            ],
          },
        },
        {
          id: "ela8-u1-structure-pov-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NIGHT_B,
          stem: "The narrator tells the reader that Tomas's mother once stood at the oven and that he was born upstairs, but he keeps this to himself. Analyze how this point of view creates dramatic irony when the man delivers the news. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic irony",
                statement:
                  "The reader knows something the characters do not, which deepens the effect of what follows.",
              },
              {
                kind: "technique",
                name: "Narrator's access",
                statement:
                  "Revealing private history lets the reader feel what other characters cannot see.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The reader learns private history that the customers and the man do not know.",
                evidence: "his mother had once stood at this same oven",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The man treats the building as property, unaware that it is Tomas's home, which sharpens the contrast.",
                evidence: "the company that owns this building",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Because the reader knows the history, the plain announcement feels cruel, and Tomas's silence speaks louder.",
                evidence: "The lease will not be renewed.",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tomas's generous gesture becomes more moving because the reader understands what he is giving up.",
                evidence: "Have some bread",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels8(),
            finalAnswer:
              "The narrator shares what the other characters do not know: Tomas 'had been born upstairs' and his mother 'had once stood at this same oven.' The man in the suit speaks only of 'the company that owns this building,' unaware of the history, so his announcement, 'The lease will not be renewed,' lands as a deep loss for the reader, even though Tomas says almost nothing. This dramatic irony makes Tomas's final offer, 'Have some bread,' more moving, since the reader knows what it costs him.",
            commonErrors: [
              "Defining dramatic irony without applying it.",
              "Retelling the plot.",
              "Using no evidence.",
            ],
          },
        },
        {
          id: "ela8-u1-structure-pov-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: NIGHT_B,
          stem: "Answer all parts of this question. Refer to 'The Night Shift (version 2)', and to 'The Night Shift (version 1)' in the lesson example where relevant.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two details in the first paragraph that the customers do not know about Tomas.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the sentence structure in 'Tomas looked at the oven. He looked at the envelope.' affects the pace of the story.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the point of view and the structure of version 2 create sympathy for Tomas. Cite at least three pieces of textual evidence.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence structure and pace",
                statement:
                  "Short, repeated sentences slow the pace and focus attention.",
              },
              {
                kind: "technique",
                name: "Dramatic irony",
                statement:
                  "The reader's extra knowledge deepens emotional response.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "His mother worked at the same oven.",
                evidence: "his mother had once stood at this same oven",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "He was born in the building.",
                evidence: "he had been born upstairs",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Two short sentences with the same pattern slow the pace, as if time stops.",
                evidence: "He looked at the envelope.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The repetition of 'looked' shows Tomas struggling to take in the news without speaking, so the reader senses his shock.",
                evidence: "Tomas looked at the oven.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Private history builds sympathy because the reader sees what the visitor cannot.",
                evidence: "he had been born upstairs",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The structure moves from warm routine to sudden loss, making the shock sharper.",
                evidence: "Then the door opened",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The cold, formal wording of the visitor contrasts with Tomas's warmth.",
                evidence: "I represent the company",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The ending, a quiet act of kindness, shows his dignity and wins admiration.",
                evidence: "It is the last of the morning batch.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels8("c"),
            finalAnswer:
              "(a) His mother 'had once stood at this same oven' and he 'had been born upstairs.' (b) The two short, parallel sentences slow the pace and show Tomas's shocked silence. (c) The narrator reveals Tomas's history, so the reader understands his loss when the visitor, who says 'I represent the company,' speaks coldly. The structure moves from a warm routine to a sudden interruption, and the ending, where Tomas offers 'the last of the morning batch,' shows dignity, which creates sympathy.",
            commonErrors: [
              "In (b), not mentioning the effect on pace.",
              "In (c), describing the plot without discussing point of view or structure.",
              "Not using evidence.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u1-traditional-sources",
      title: "How modern works draw on traditional stories",
      skill:
        "Explain how a modern text uses, transforms, or reverses themes, patterns, and details from a myth, fable, or traditional story.",
      lesson: {
        sections: [
          {
            heading: "Recognizing the source",
            body: "Many modern stories echo **myths**, **fables**, folktales, or religious stories. They may borrow a character type (the hero, the trickster), a pattern (a quest, a test, a revenge), or a situation (two characters who cannot share a meal). To recognize a source, look for familiar names, repeated patterns, or direct references. Authors may also use an **allusion**, a short reference to the older story, to bring its meaning into the new one.",
          },
          {
            heading: "Keeping, changing, or reversing",
            body: "Writers do not simply copy a traditional story; they **transform** it. Some keep the pattern but change the setting, such as a cafeteria instead of a banquet. Others change the ending, so the revenge in the original becomes forgiveness. Analyze what is kept, what is changed, and what the change suggests. Explain the effect: the new version may comment on the old message, update it for modern life, or challenge it.",
          },
        ],
        keyFormulas: [
          {
            name: "Kept",
            statement:
              "Details, patterns, or characters that the modern text borrows from the source.",
          },
          {
            name: "Changed",
            statement:
              "Details the author alters, such as setting, characters, or outcome.",
          },
          {
            name: "Effect of the change",
            statement:
              "What the change shows about the theme, the characters, or the modern world.",
          },
        ],
        workedExample: {
          problem:
            "From 'The Heron and the Fox': How does the modern story use the traditional fable, and what does it change?",
          solution:
            "Mara's story keeps the fable's pattern: one person insults another, and revenge is planned. The cafeteria setting and the friends' names update the setting for modern life. The key change is the ending: in the fable, both animals go hungry, but Mara uses the lesson, 'nobody ate that night,' to choose peace and offers half her sandwich. The change suggests that people can learn from old stories and break the cycle of revenge instead of repeating it.",
        },
      },
      questions: [
        {
          id: "ela8-u1-traditional-sources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HEROES,
          stem: "Which element of the traditional fable does Mara's story keep?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The setting of an animal dinner party." },
              { id: "b", text: "The characters of a heron and a fox." },
              {
                id: "c",
                text: "The ending in which both characters stay hungry.",
              },
              {
                id: "d",
                text: "The idea that insult leads to a plan for revenge.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kept pattern",
                statement:
                  "A modern story may keep the underlying pattern of a traditional tale while changing the surface details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mara plans ways to answer Kenji, just as the animals take turns answering insult with insult.",
                evidence: "For a week she thought of ways to answer him.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. The pattern of an insult followed by planned revenge is kept. The setting (b) and characters (c) are changed, and the ending (d) is also changed because Mara makes peace.",
            commonErrors: [
              "Choosing (d) because it repeats the lesson, without checking that Mara changes the ending.",
            ],
          },
        },
        {
          id: "ela8-u1-traditional-sources-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: HEROES,
          stem: "Explain how Mara's decision differs from the actions of the heron in the fable. Support your answer with two details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Change from source",
                statement:
                  "A modern text can reverse an old story's outcome to offer a new message.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The heron answers a trick with another trick; Mara chooses to end the conflict.",
                evidence: "Are we done?",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Mara shares food, while the heron withholds it by serving the meal in a jar.",
                evidence: "She slid half her sandwich across the table.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "She understands from the fable that revenge leaves everyone hungry.",
                evidence: "nobody ate that night",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The heron takes revenge by serving the fox a meal she cannot eat, but Mara breaks the cycle. She 'slid half her sandwich across the table' and asks 'Are we done?', using the fable's lesson that 'nobody ate that night.'",
            commonErrors: [
              "Retelling the fable without comparing.",
              "Missing that Mara changes the ending.",
            ],
          },
        },
        {
          id: "ela8-u1-traditional-sources-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: HEROES,
          stem: "Analyze how the author of 'The Heron and the Fox' draws on a traditional fable and transforms it to deliver a message about conflict. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Allusion to a source",
                statement:
                  "The modern text refers to an older story to bring its meaning into the new setting.",
              },
              {
                kind: "technique",
                name: "Transformation",
                statement:
                  "Authors keep, change, or reverse elements of a source to create a new message.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The story is built around an allusion that Mara recognizes as the key to her own situation.",
                evidence: "Mara had heard the old story a hundred times",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The setting is changed to a modern cafeteria, showing that the fable's lesson applies to everyday life.",
                evidence: "her middle school cafeteria",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "The pattern of insult and planned revenge is kept, showing the fable's temptation.",
                evidence: "She planned to leave him out of the group project.",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "The ending is changed from mutual hunger to shared food and forgiveness, which delivers the new message.",
                evidence: "I'm tired of being hungry.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels8(),
            finalAnswer:
              "The author alludes to the fable of the heron and the fox in order to make a point about conflict. Mara has 'heard the old story a hundred times,' and she sees herself in it. The setting is moved to 'her middle school cafeteria,' so the lesson feels modern, and she keeps the fable's pattern when she plans to 'leave him out of the group project.' The ending changes: where the fable ends in two hungry animals, Mara says 'I'm tired of being hungry' and shares her sandwich, showing that people can learn from old stories and choose peace.",
            commonErrors: [
              "Summarizing the fable at length.",
              "Not explaining the effect of the changes.",
              "No quotations.",
            ],
          },
        },
        {
          id: "ela8-u1-traditional-sources-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: HEROES,
          stem: "Answer all parts of this question about 'The Heron and the Fox'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two things Mara considers doing to get back at Kenji.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain what Mara means when she says, 'the heron got her revenge, but nobody ate that night.'",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "How does the modern story both use and change the traditional fable? Cite at least three pieces of textual evidence.",
              marks: 8,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Allusion",
                statement:
                  "A reference to an older story adds its meaning to the new one.",
              },
              {
                kind: "skill",
                name: "Comparing source and adaptation",
                statement:
                  "Identify what is kept and changed, and explain the effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "She thinks of leaving him out of a school project.",
                evidence: "leave him out of the group project",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "She considers mocking him publicly.",
                evidence: "make a joke about his stutter",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Revenge feels satisfying, but both characters suffer in the end, so it solves nothing.",
                evidence: "nobody ate that night",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "She applies the fable to her own conflict, arguing that continuing to fight would hurt both friends.",
                evidence: "I'm tired of being hungry.",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "The story keeps the tale's key pattern: an insult followed by a plan for payback.",
                evidence: "she thought of ways to answer him",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "The setting is updated to a school cafeteria, making the lesson relevant.",
                evidence: "her middle school cafeteria",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "The ending is reversed: sharing replaces the cycle of revenge.",
                evidence: "She slid half her sandwich across the table.",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Explains the effect: the change delivers a hopeful message that people can learn from old stories.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels8("c"),
            finalAnswer:
              "(a) She considers leaving him out of the group project and making a joke about his stutter. (b) She means that taking revenge does not help anyone: the heron's revenge leaves both hungry, just as fighting with Kenji would leave both friends worse off. (c) The story keeps the pattern of insult and planned revenge, updates the setting to a cafeteria, and reverses the ending when Mara slides 'half her sandwich across the table.' The change shows that people can use the lesson of old stories to choose peace.",
            commonErrors: [
              "In (a), choosing details from the fable.",
              "In (c), explaining only what is kept.",
              "Not stating the effect of the changes.",
            ],
          },
        },
      ],
    },
  ],
};
