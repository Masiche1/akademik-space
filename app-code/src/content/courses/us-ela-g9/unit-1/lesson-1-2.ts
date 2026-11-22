import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const LIGHTHOUSE: TextExtract = {
  title: "The Keeper's Daughter",
  author: "Written for Akademik Space",
  text: "Thea had been taught to love the lighthouse, so she hid her resentment the way her father hid the cracks in the lamp room: with fresh paint. Each night she climbed the ninety-one steps to help him trim the wick, and each night she said, 'It's an honor,' in a voice polished smooth from use.\n\nHer father, Captain Aldous Reeve, ran the tower like a ship. He rose at four, ate standing, and spoke of the sea as an enemy he had never quite beaten. Yet on the evening a fishing boat failed to return, it was Thea who found him on the gallery, bareheaded in the wind, gripping the rail with a hand that would not stop shaking.\n\n'Go inside,' he said, without turning. 'You'll catch cold.'\n\n'You'll catch it first.' She stayed. After a long time she said, in a voice she did not recognize as her own, 'We could ring the fog bell. They might hear it.'\n\nHe turned then, and she saw that his face, which she had spent years learning to fear, was only tired. 'The bell is for fog,' he said. But he was already moving toward the stairs, and she understood, without being told, that she had been right, and that he would never say so.",
};

const LETTERS: TextExtract = {
  title: "Departure Gate",
  author: "Written for Akademik Space",
  text: "The airport at dawn was a hive of fluorescent hum and rolling suitcases. Marcus sat among them like a stone in a stream, his boarding pass folded into a tight square. Around him the world flowed: a toddler wailed, an announcement crackled, a businessman barked into a phone about quarterly figures.\n\nHe had chosen the window seat on the right side of the plane, the side that would not face the city. It was a small mercy, and he held it tightly. Twelve years of that city were packed in two bags, and the zipper of the larger one was straining like a held breath.\n\nA gate agent called his row. He rose slowly, as though the air had thickened. At the jet bridge he paused, one hand on the cold metal frame, and for a moment the whole bright, noisy terminal seemed to lean toward him, asking him to stay. Then he stepped forward, and the door of the plane swallowed him whole.",
};

export const lesson12: Lesson = {
  id: "ela9-u1-lesson-1-2",
  code: "1-2",
  title: "Complex Characters and Language",
  goal: "I CAN analyze how complex characters develop, interact with others, and advance the plot or theme, and explain how figurative and connotative language builds tone.",
  standards: ["RL.9-10.3", "RL.9-10.4"],
  vocabulary: [
    {
      term: "Complex character",
      definition:
        "A character with conflicting motivations or traits who changes or reveals new sides over the course of a text.",
    },
    {
      term: "Motivation",
      definition:
        "The reason, often a want or fear, that drives a character's choices.",
    },
    {
      term: "Foil",
      definition:
        "A character who contrasts with another to highlight that character's qualities.",
    },
    {
      term: "Connotation",
      definition:
        "The feelings or associations a word carries beyond its dictionary meaning.",
    },
    {
      term: "Figurative language",
      definition:
        "Language that goes beyond literal meaning, such as simile, metaphor, and personification.",
    },
    {
      term: "Tone",
      definition:
        "The author's attitude toward the subject, created through word choice and detail.",
    },
  ],
  concepts: [
    {
      id: "ela9-u1-complex-characters",
      title: "Complex characters, interactions, and plot",
      skill:
        "Explain how a character's conflicting motivations develop, how interactions reveal them, and how they advance the plot or theme.",
      lesson: {
        sections: [
          {
            heading: "What makes a character complex",
            body: "A **complex** character is not simply good or bad. They want several things at once, and the wants conflict: duty against resentment, pride against love, fear against courage. To analyze one, name the **motivations** (what drives them), then find moments where those motivations pull in different directions. Complexity is often shown in the gap between what a character says and what they do.",
          },
          {
            heading: "Development, interaction, and purpose",
            body: "Characters **develop** when a choice or event changes how they act or how we understand them. Interactions with others are often the trigger: a conversation, a conflict, or a shared crisis. Always connect the character to the larger work. Ask what the change does: does it move the plot (a decision with consequences), or deepen the theme (an idea about duty, family, or honesty)? A strong paragraph moves from the character's motivation to a key interaction, then to its effect on plot or theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflicting motivations",
            statement:
              "A character wants two things that cannot both be satisfied, which creates internal conflict.",
          },
          {
            name: "Development",
            statement:
              "A lasting change in a character's actions, understanding, or relationships, caused by events.",
          },
          {
            name: "Foil and interaction",
            statement:
              "Another character or a conversation that contrasts with or challenges a character and reveals them.",
          },
        ],
        workedExample: {
          problem:
            "From 'The Keeper's Daughter': How does Thea develop, and how does her interaction with her father advance the theme?",
          solution:
            "Thea begins as a dutiful but resentful daughter who hides her feelings: her 'It's an honor' is 'polished smooth from use', which suggests an empty phrase repeated out of obligation. Her motivation is torn between obedience and a wish to be seen. The crisis changes this. When she finds her father on the gallery with a hand that 'would not stop shaking', she stays despite his order, then offers the idea of the fog bell in a voice 'she did not recognize as her own'. Her new confidence shows development. The interaction advances the theme about hidden love and unspoken respect: the father's face is 'only tired', not frightening, and he acts on her suggestion without admitting it, so the relationship shifts even though nothing is said aloud.",
        },
      },
      questions: [
        {
          id: "ela9-u1-complex-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIGHTHOUSE,
          stem: "Which statement best describes Thea's conflicting motivations at the beginning of the passage?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "She admires her father but wants to become a ship captain.",
              },
              {
                id: "b",
                text: "She wants to leave home but is too weak to climb the stairs.",
              },
              { id: "c", text: "She loves the sea but fears the lighthouse." },
              {
                id: "d",
                text: "She feels pressure to honor her father's work but privately resents it.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motivation",
                statement:
                  "A motivation is a want or feeling that drives choices; a complex character has several that conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "She says it is an honor, but the narrator reveals she hides resentment, so duty and resentment conflict.",
                evidence: "she hid her resentment",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Duty and hidden resentment pull in opposite directions. The other options add motives the passage never mentions.",
            commonErrors: [
              "Choosing an option that sounds plausible but is not supported by the text.",
            ],
          },
        },
        {
          id: "ela9-u1-complex-characters-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LIGHTHOUSE,
          stem: "Captain Reeve seems stern at first. Explain how the author shows a more complex side of him. Use two details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Revealing complexity",
                statement:
                  "Authors reveal hidden sides through a character's reactions under pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "He is first presented as rigid and severe, like a ship's captain, so the reader expects strength.",
                evidence: "ran the tower like a ship",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The shaking hand shows fear and vulnerability beneath his control during the crisis.",
                evidence: "a hand that would not stop shaking",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explains the contrast: severity outside, anxiety and care inside.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Captain Reeve seems stern because he 'ran the tower like a ship', but during the crisis he grips the rail 'with a hand that would not stop shaking'. The contrast shows that his toughness covers fear and concern for the lost boat.",
            commonErrors: [
              "Only describing his sternness.",
              "Naming the shaking hand without explaining what it reveals.",
            ],
          },
        },
        {
          id: "ela9-u1-complex-characters-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LIGHTHOUSE,
          stem: "How does the conversation between Thea and her father on the gallery develop both characters and advance the theme of the passage? Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Interaction reveals character",
                statement:
                  "Dialogue and reactions show how characters see each other and where they change.",
              },
              {
                kind: "skill",
                name: "Connecting to theme",
                statement:
                  "Explain what the development suggests about a larger idea.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The father hides worry behind a command, protecting his daughter and himself from showing weakness.",
                evidence: "Go inside",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Thea resists, showing new courage and a shift from obedient to self-assured.",
                evidence: "You'll catch it first.",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Her suggestion proves her competence, and his silent action acknowledges it, so the plot turns on her idea.",
                evidence: "We could ring the fog bell",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: respect and love are shown through action rather than words, since he never admits she was right.",
                evidence: "he would never say so",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: levels(8),
            finalAnswer:
              "The conversation changes both characters. Captain Reeve tells her to 'Go inside', hiding his fear behind authority, but Thea answers, 'You'll catch it first', and stays, showing new confidence. Her suggestion, 'We could ring the fog bell', moves the plot toward action, and he follows it without credit. The theme is that respect and love between them live in actions, because 'he would never say so'.",
            commonErrors: [
              "Describing the dialogue without saying what it shows.",
              "Analyzing only one character.",
              "Not linking the development to the theme.",
            ],
          },
        },
        {
          id: "ela9-u1-complex-characters-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: LIGHTHOUSE,
          stem: "Answer all parts of this question about 'The Keeper's Daughter'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two details that show Thea's attitude to her duties at the start of the passage.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What motivates Captain Reeve's order, 'Go inside'? Explain using evidence.",
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Analyze how Thea develops over the course of the passage and how that development advances the theme. Use thorough textual evidence.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Motivation",
                statement:
                  "Link a character's words to the want or fear behind them.",
              },
              {
                kind: "skill",
                name: "Development and theme",
                statement:
                  "Trace the change, then explain what it suggests about an idea.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "She hides resentment, showing duty without enthusiasm.",
                evidence: "hid her resentment",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Her repeated phrase is rehearsed, not heartfelt.",
                evidence: "polished smooth from use",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "He wants to protect Thea from the cold and from seeing his fear.",
                evidence: "You'll catch cold",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "He is anxious about the missing boat, and his shaking hand shows the emotion he is covering.",
                evidence: "a hand that would not stop shaking",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Because he does not turn, he avoids facing her, so the order serves his pride as well as her safety.",
                evidence: "without turning",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "At the start she hides her feelings, so she is passive and dutiful.",
                evidence: "It's an honor",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "In the crisis, she disobeys gently and stays, a first act of independence.",
                evidence: "She stayed.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Her unfamiliar voice shows a change in how she sees herself.",
                evidence: "a voice she did not recognize as her own",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Her fear of him turns to understanding, which shifts the relationship.",
                evidence:
                  "his face, which she had spent years learning to fear, was only tired",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Theme: understanding grows through shared crisis and unspoken acknowledgment rather than speech.",
                evidence: "she understood, without being told",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [...levels(6, "b"), ...levels(10, "c")],
            finalAnswer:
              "(a) She 'hid her resentment' and says 'It's an honor' in a voice 'polished smooth from use'. (b) He wants to protect her and to hide his fear about the missing boat: his hand 'would not stop shaking', and he speaks 'without turning', so pride and care motivate the order. (c) Thea begins as dutiful and hidden, saying 'It's an honor' without meaning it. In the crisis she stays, and speaks 'in a voice she did not recognize as her own', which marks her growth. She sees her father's face is 'only tired', and understands 'without being told' that she was right. The theme is that closeness can grow from shared action and silent respect.",
            commonErrors: [
              "In (a), quoting the father's behavior.",
              "In (b), saying he is cruel without noticing the fear.",
              "In (c), describing Thea at one moment instead of tracing change.",
            ],
          },
        },
      ],
    },
    {
      id: "ela9-u1-connotation-tone",
      title: "Figurative and connotative language and tone",
      skill:
        "Interpret figurative and connotative language and explain how word choice builds tone cumulatively.",
      lesson: {
        sections: [
          {
            heading: "Connotation and figurative meaning",
            body: "Words carry feelings. 'Strolled' and 'slunk' both mean walked, but one is relaxed and one is guilty. This is **connotation**. **Figurative language** goes further, comparing unlike things: a **simile** uses 'like' or 'as', a **metaphor** states the comparison, and **personification** gives human qualities to objects. To interpret one, ask what the two things share and which associations the author wants you to feel.",
          },
          {
            heading: "Cumulative impact and tone",
            body: "A single word rarely sets the tone alone. **Tone** emerges from the **cumulative** effect of many choices, such as the same kind of word repeated, or images that all point toward one feeling. When you write about tone, name it precisely (not just 'sad', but 'wistful' or 'oppressive'), group two or three quotations that build it, and explain what each word's associations add.",
          },
        ],
        keyFormulas: [
          {
            name: "Connotation",
            statement:
              "The emotional associations of a word beyond its literal meaning.",
          },
          {
            name: "Figurative language",
            statement:
              "Simile, metaphor, and personification, which compare or give life to create meaning beyond the literal.",
          },
          {
            name: "Cumulative impact",
            statement:
              "The combined effect of several related word choices that build a tone or mood.",
          },
        ],
        workedExample: {
          problem:
            "From 'Departure Gate': How does the author use word choice to create a tone of reluctance?",
          solution:
            "The tone is heavy and reluctant, built from several images. Marcus sits 'like a stone in a stream' while the world flows past, a simile whose connotation of weight and immovability suggests he does not want to move. His bag's zipper is 'straining like a held breath', which personifies the luggage as tense and suspended, mirroring his own anxiety. As he boards, 'the air had thickened' and the terminal 'seemed to lean toward him, asking him to stay', so even the setting seems to resist his leaving. The verb 'swallowed' in the final line has the connotation of being consumed and lost. Together these choices make the departure feel less like a journey than a loss, which creates a tone of reluctant sorrow.",
        },
      },
      questions: [
        {
          id: "ela9-u1-connotation-tone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LETTERS,
          stem: "What does the simile 'like a stone in a stream' suggest about Marcus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is hard to see in the crowd." },
              {
                id: "b",
                text: "He is calm and enjoys the movement around him.",
              },
              {
                id: "c",
                text: "He is still and unmoving while everything else rushes past, perhaps unwilling to go.",
              },
              {
                id: "d",
                text: "He is cold and unfriendly to everyone he meets.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simile",
                statement:
                  "A simile compares two things using 'like' or 'as', transferring the associations of one to the other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A stone stays fixed while water flows around it, suggesting Marcus is stuck and resistant while the world moves.",
                evidence: "like a stone in a stream",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(b)**. A stone does not move with the current, so Marcus seems fixed and reluctant. The other choices ignore the contrast between stillness and flow.",
            commonErrors: [
              "Choosing (a) because the stone is 'calm', ignoring the sense of being stuck.",
            ],
          },
        },
        {
          id: "ela9-u1-connotation-tone-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LETTERS,
          stem: "Explain the effect of the verb 'swallowed' in the final sentence, and compare it with the connotation of a neutral verb such as 'closed behind him'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Connotation",
                statement:
                  "Compare a chosen word with a neutral alternative to reveal its added meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Swallowed' suggests the plane consumes him, so the departure feels like being lost or overwhelmed.",
                evidence: "swallowed him whole",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Closed behind him' would be neutral and ordinary; 'swallowed' adds a dark, frightening tone and a sense of no return.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "'Swallowed' suggests the plane devours Marcus and that he cannot return, creating a dark, mournful tone. A neutral phrase like 'closed behind him' would only report what happened and add no feeling.",
            commonErrors: [
              "Defining the word without explaining its effect.",
              "Not comparing with the neutral version.",
            ],
          },
        },
        {
          id: "ela9-u1-connotation-tone-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LETTERS,
          stem: "Analyze how the author's word choices in the third paragraph build a cumulative tone. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cumulative effect",
                statement:
                  "Several related words and images combine to create a tone.",
              },
              {
                kind: "technique",
                name: "Personification",
                statement:
                  "Giving human qualities to a setting makes it seem to share or oppose a character's feelings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The simile of thickened air suggests physical resistance, as if staying were easier than going.",
                evidence: "as though the air had thickened",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The cold frame contrasts with the 'bright, noisy' terminal, showing a cold threshold between known and unknown.",
                evidence: "one hand on the cold metal frame",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Personification of the terminal as leaning and asking shows the setting pleading with him, which makes the tone wistful.",
                evidence: "seemed to lean toward him, asking him to stay",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The cumulative effect of the images is a tone of reluctant, aching departure.",
                evidence: "swallowed him whole",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels(8),
            finalAnswer:
              "The third paragraph builds a tone of reluctance. Marcus rises 'as though the air had thickened', suggesting something holds him back. The 'cold metal frame' marks a harsh threshold, and the terminal 'seemed to lean toward him, asking him to stay', personifying the place as pleading. His exit is final: the door 'swallowed him whole'. Together these choices create a wistful, mournful tone.",
            commonErrors: [
              "Naming devices with no effect.",
              "Choosing quotations from other paragraphs.",
              "Naming a vague tone such as 'bad'.",
            ],
          },
        },
        {
          id: "ela9-u1-connotation-tone-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: LETTERS,
          stem: "Answer all parts of this question about 'Departure Gate'.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the device in the phrase 'the zipper of the larger one was straining like a held breath'.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the connotations of 'hive' in the first sentence and what they suggest about the airport.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the author's figurative language and word choice together create the tone of the passage. Use thorough textual evidence.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Figurative language",
                statement:
                  "Identify the device, then explain what is compared and the feeling it gives.",
              },
              {
                kind: "technique",
                name: "Cumulative tone",
                statement: "Group several choices that all build one feeling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "It is a simile, since it uses 'like'.",
                evidence: "straining like a held breath",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning:
                  "It also personifies the bag as tense, giving it a human sensation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "'Hive' suggests crowded, busy, buzzing activity, like insects, which makes the airport feel impersonal.",
                evidence: "a hive of fluorescent hum",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "It also implies people moving in unison, so Marcus, who is still, stands out as separate.",
                evidence: "like a stone in a stream",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The simile of the stone shows his stillness against the flow, building isolation.",
                evidence: "like a stone in a stream",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The 'small mercy' and 'held tightly' show he clings to tiny comforts, suggesting grief.",
                evidence: "It was a small mercy, and he held it tightly",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Packed years in bags with a straining zipper show the weight of what he leaves.",
                evidence: "Twelve years of that city were packed in two bags",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The terminal personified as asking him to stay adds a wistful mood.",
                evidence: "asking him to stay",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The final verb brings the tone to a close of loss, fitting the earlier images.",
                evidence: "swallowed him whole",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: [...levels(4, "b"), ...levels(10, "c")],
            finalAnswer:
              "(a) A simile, which also personifies the zipper as holding its breath in tension. (b) 'Hive' suggests a swarm of busy, anonymous insects, making the airport crowded and impersonal, so that Marcus seems different. (c) The tone is one of wistful reluctance. Marcus is 'like a stone in a stream', unmoving while the world flows; he clings to 'a small mercy' of the seat; his twelve years strain in the bags like 'a held breath'; the terminal seems to lean 'asking him to stay'; and the door 'swallowed him whole'. Each image adds sorrow until the tone is clear.",
            commonErrors: [
              "In (a), naming only metaphor.",
              "In (b), defining 'hive' without effect.",
              "In (c), listing devices separately without linking them to tone.",
            ],
          },
        },
      ],
    },
  ],
};
