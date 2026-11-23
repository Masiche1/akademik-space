import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "el8-u10-lesson-10-2",
  code: "10-2",
  title: "Analysing a Play",
  goal: "I CAN analyse how playwrights use dialogue, stage directions, entrances and exits, and dramatic structure to create character and tension.",
  standards: ["KS3 Reading", "KS3 AO1", "KS3 AO2"],
  
  vocabulary: [
    { term: "Dialogue", definition: "The spoken words of characters in a play." },
    { term: "Subtext", definition: "What characters really mean beneath the surface of their words." },
    { term: "Stage direction", definition: "Instructions in brackets telling actors how to move, speak or react." },
    { term: "Dramatic irony", definition: "When the audience knows something a character does not." },
    { term: "Rising action", definition: "The sequence of events that builds tension toward the climax." },
    { term: "Climax", definition: "The turning point or most intense moment of a play." },
    { term: "Entrance/exit", definition: "A character coming on or leaving stage — often signals change." },
  ],
  concepts: [
    {
      id: "el8-u10-dialogue-stagecraft",
      title: "Dialogue and stagecraft",
      skill: "Analyse how dialogue, subtext and stage directions reveal character and create effects.",
      lesson: {
        sections: [
          {
            heading: "Dialogue reveals character",
            body: "What characters say — and how — shows who they are. Short, clipped lines suggest anger or urgency; long speeches suggest control or evasion. Word choice, dialect and interruptions all characterise. Listen for **subtext**: what is really being said beneath the words? 'I'm fine' said while turning away means the opposite.",
          },
          {
            heading: "Stage directions",
            body: "Stage directions in brackets or italics are the playwright's instructions: movements ('crosses to window'), tone ('sighs'), pauses ('a beat'), and sound or lighting cues. They are not optional decoration — they tell actors and directors how the moment should feel, and they often carry meaning the dialogue cannot.",
          },
          {
            heading: "Entrances, exits and pauses",
            body: "A character's **entrance** or **exit** marks a shift — a new voice enters the argument, or a departure changes the power balance. **Pauses** (a beat, a silence) build tension: the audience waits for what comes next. Who speaks last in a scene often holds the power.",
          },
        ],
        keyFormulas: [
          { name: "Subtext", statement: "What is meant beneath what is said." },
          { name: "Stage direction function", statement: "Shows how a line should be delivered or how the moment should feel." },
          { name: "Power in dialogue", statement: "Last speaker, interruptions and silences reveal power." },
        ],
        workedExample: {
          problem: "Analyse the characterisation in this exchange: 'A: You forgot again. B: I said I was sorry. A: Sorry doesn't fix it.'",
          solution: "A's short sentences and repetition ('again') show frustration and that this is a recurring problem; B's single defensive line ('I said I was sorry') shows guilt but also that the apology is not enough; A's final line rejects the apology — subtext: the relationship is strained and trust is broken.",
        },
      },
      questions: [
        {
          id: "el8-u10-dialogue-stagecraft-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is subtext in a play?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The stage directions in brackets"
                    },
                    {
                              "id": "b",
                              "text": "What characters really mean beneath their words"
                    },
                    {
                              "id": "c",
                              "text": "The playwright's name"
                    },
                    {
                              "id": "d",
                              "text": "A type of dialogue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subtext",
                              "statement": "Meaning beneath the surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtext is the unstated meaning behind dialogue — what is really meant.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Meaning beneath the words.",
          "commonErrors": [
                    "Confusing subtext with stage directions."
          ]
},
        },
        {
          id: "el8-u10-dialogue-stagecraft-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the stage direction '(a beat)' tell the actor to do, and why might a playwright use it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stage direction",
                              "statement": "Instructions for actors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'(A beat)' means pause briefly — a short silence.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It builds tension or lets a moment land before the next line.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A brief pause; used to create tension or let a moment resonate.",
          "commonErrors": [
                    "Saying it means 'stop acting' or 'end scene'."
          ]
},
        },
        {
          id: "el8-u10-dialogue-stagecraft-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "In the play extract, how does RAVI's dialogue change after reading the poster? Quote his words before and after.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue and character",
                              "statement": "Words and tone reveal change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Before: dismissive and self-deprecating — 'I'm tone deaf', 'Acting isn't singing.'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "After reading 'or': hesitant at first — '...Or act convincingly.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Then decisive: 'Thursday, then' and 'Deal' — his doubt turns to commitment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Before he dismisses the idea ('I'm tone deaf'); after Lena points out 'or', he hesitates then commits — 'Thursday, then', 'Deal' — showing doubt turning to determination.",
          "commonErrors": [
                    "Quoting without analysing the change.",
                    "Missing the hesitation in '...Or act convincingly.'"
          ]
},
        },
        {
          id: "el8-u10-dialogue-stagecraft-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Explain the effect of the stage directions '(RAVI takes the poster. A beat.)' and '(RAVI nods, then smiles for the first time.)'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Stage directions",
                              "statement": "Physical actions and pauses carry meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Takes the poster' is a physical action showing RAVI is checking Lena's claim — he verifies before believing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'A beat' after he reads it creates a pause for realisation — the audience waits for his decision.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Nods, then smiles for the first time' shows acceptance and new confidence — a physical turning point.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The 'for the first time' emphasises that the smile marks a genuine change in RAVI's attitude.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poster-taking and pause show RAVI verifying and realising; the nod and first smile mark his acceptance — stage directions make the internal change visible.",
          "commonErrors": [
                    "Describing the actions without explaining their effect.",
                    "Missing 'for the first time' as significant."
          ]
},
        },
        {
          id: "el8-u10-dialogue-stagecraft-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Analyse how the playwright uses dialogue and stage directions together to show RAVI's change of heart.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue and stagecraft combined",
                              "statement": "Words plus actions show change."
                    },
                    {
                              "kind": "technique",
                              "name": "Subtext",
                              "statement": "Hesitation and short lines reveal doubt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RAVI's early lines are short, dismissive and self-deprecating ('I'm tone deaf'), showing resistance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lena's correction ('or', 'Look') gives him the evidence to reconsider — dialogue drives the turn.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The stage directions enact the change physically: taking the poster, the beat of realisation, the first smile.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "His hesitant '...Or act convincingly' shows doubt cracking before 'Thursday, then' shows commitment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final 'Deal' and joke about feeding him lines show relaxed confidence — the change is complete.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: playwright uses both channels so the audience sees and hears the transformation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Analyses dialogue and stagecraft together across the arc."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Covers both but links them partially."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Describes change without analysing craft."
                    }
          ],
          "finalAnswer": "Dialogue shows resistance turning to commitment; stage directions make the realisation physical — together they dramatise RAVI's change of heart.",
          "commonErrors": [
                    "Analysing only dialogue or only stage directions.",
                    "Missing the hesitation in '...Or'."
          ]
},
        },
        {
          id: "el8-u10-dialogue-stagecraft-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Answer all parts of this question about the play extract.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what RAVI initially believes about the auditions and why.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how Lena persuades RAVI, referring to her dialogue and the stage directions.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a short continuation (8-10 lines) of the scene showing the two friends preparing for the auditions. Include at least two stage directions.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Character and persuasion",
                              "statement": "Beliefs, objections and persuasion drive scenes."
                    },
                    {
                              "kind": "skill",
                              "name": "Playwriting",
                              "statement": "Dialogue plus stage directions create playable drama."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "RAVI believes he cannot audition because he thinks singing is essential and he is 'tone deaf'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "He also believes acting and singing are 'different' skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lena counters his misconception directly: 'You can act, though.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "She provides evidence by reading the poster aloud — 'or' and 'act convincingly' — proving his objection is wrong.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Her command 'Look' and the physical action of him taking the poster make the proof tangible.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "She then offers practical support ('I'll help you rehearse'), removing his fear of failure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Continuation has dialogue between the two friends about preparing.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Includes at least two stage directions in brackets.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Dialogue shows their new confidence and friendship.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Stage directions add meaning (movement, pause, expression).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The scene has a mini-arc or clear purpose.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Format follows play conventions (character names, dialogue, directions).",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Playable continuation with dialogue, stage directions and clear purpose."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Continuation present; some conventions or directions missing."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Minimal or unclear continuation."
                    }
          ],
          "finalAnswer": "(a) He thinks he cannot audition because singing is required and he is tone deaf. (b) Lena corrects the 'or', shows the poster and offers to help rehearse. (c) A short playable continuation.",
          "commonErrors": [
                    "Missing that Lena's 'Look' plus the poster action makes the proof visual.",
                    "A continuation written as prose, not play format."
          ],
          "examinerNote": "Part (c) is marked for playwriting craft (AO4)."
},
        },
      ],
    },
    {
      id: "el8-u10-dramatic-structure",
      title: "Dramatic structure and tension",
      skill: "Analyse how rising action, climax, suspense and dramatic irony build tension in a play.",
      lesson: {
        sections: [
          {
            heading: "The shape of drama",
            body: "Most plays move through **exposition** (introducing characters and situation), **rising action** (events that complicate the situation), **climax** (the turning point of highest tension), **falling action** and **resolution**. Not every play follows this exactly, but tension usually builds toward a peak and then releases. Watch where the tension rises and falls.",
          },
          {
            heading: "Building suspense",
            body: "Playwrights create suspense through **pauses**, **interruptions**, **withheld information**, and characters entering or leaving at key moments. A character who almost speaks but doesn't; a door that opens but nobody enters; a line cut off mid-sentence — all make the audience lean forward. The audience's knowledge gap (they know something a character doesn't) is **dramatic irony**, which adds a second layer of tension.",
          },
          {
            heading: "Entrances, exits and power",
            body: "Who is on stage and who has left shapes the scene's power. A character's exit can signal defeat or escape; an entrance can interrupt an argument or deliver news. The **last line** of a scene or act often lands the emotional blow or sets up the next problem.",
          },
        ],
        keyFormulas: [
          { name: "Dramatic arc", statement: "Exposition → rising action → climax → falling action → resolution." },
          { name: "Suspense tools", statement: "Pauses, interruptions, withheld information, entrances/exits." },
          { name: "Dramatic irony", statement: "Audience knows what a character does not." },
        ],
        workedExample: {
          problem: "Map the dramatic structure of 'The Auditions' scene.",
          solution: "Exposition: poster establishes auditions Thursday and RAVI's fear. Rising action: Lena corrects his objection ('or'), he verifies by taking the poster. Climax: '...Or act convincingly. Thursday, then.' — the decision point. Falling action/resolution: Lena offers help, RAVI smiles and jokes — tension releases into friendship.",
        },
      },
      questions: [
        {
          id: "el8-u10-dramatic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the climax of a play?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The first scene"
                    },
                    {
                              "id": "b",
                              "text": "The most intense turning point"
                    },
                    {
                              "id": "c",
                              "text": "The last line"
                    },
                    {
                              "id": "d",
                              "text": "The stage directions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Climax",
                              "statement": "Peak of tension and turning point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The climax is the most intense moment where the central conflict turns.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The most intense turning point.",
          "commonErrors": [
                    "Confusing climax with ending."
          ]
},
        },
        {
          id: "el8-u10-dramatic-structure-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is dramatic irony? Give an example from everyday life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dramatic irony",
                              "statement": "Audience knows what a character does not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dramatic irony is when the audience knows something a character does not.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: a character confidently gives wrong directions while the audience knows the right ones; or a surprise party the guest does not expect.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Audience knows more than a character; e.g. a surprise party the guest does not expect.",
          "commonErrors": [
                    "Describing verbal irony (sarcasm) instead."
          ]
},
        },
        {
          id: "el8-u10-dramatic-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "In the play extract, where does the tension peak and how do you know? Refer to the stage directions and dialogue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dramatic structure",
                              "statement": "Tension builds to a peak then releases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tension peaks at RAVI's decision: '...Or act convincingly. (beat) Thursday, then.'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The '(beat)' stage direction suspends the moment — the audience waits for his answer.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "His hesitant '...' shows doubt cracking; 'Thursday, then' is the decisive turn — the climax.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The tension peaks at '...Or act convincingly. Thursday, then' — the beat and hesitation mark the decision point, the scene's climax.",
          "commonErrors": [
                    "Choosing the ending smile; the climax is the decision, not the resolution."
          ]
},
        },
        {
          id: "el8-u10-dramatic-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Explain how the playwright builds tension in the lead-up to RAVI's decision. Refer to Lena's dialogue and the stage directions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Suspense building",
                              "statement": "Pauses, withheld info, physical action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lena withholds the key word until the right moment — 'or' — making the correction land harder.",
                              "evidence": "The auditions say 'or'",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Her command 'Look' directs attention, making the audience wait for what RAVI will see.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The stage direction '(RAVI takes the poster. A beat.)' suspends action — the pause stretches the tension.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "RAVI's hesitant '...' before repeating the phrase shows his internal struggle, keeping the audience uncertain.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Lena withholds 'or', commands 'Look', and the poster action plus beats suspend the moment — the audience waits through RAVI's hesitation for his decision.",
          "commonErrors": [
                    "Saying 'it is tense' without specific craft."
          ]
},
        },
        {
          id: "el8-u10-dramatic-structure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Analyse the dramatic structure of the scene: how does it move from exposition to resolution?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Dramatic arc",
                              "statement": "Exposition, rising action, climax, resolution."
                    },
                    {
                              "kind": "technique",
                              "name": "Tension and release",
                              "statement": "Build then resolve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exposition: the poster and RAVI's objection establish the situation and conflict.",
                              "evidence": "Must be able to sing",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rising action: Lena's correction and RAVI's verification complicate his objection.",
                              "evidence": "Able to sing or act convincingly",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Climax: 'Thursday, then' — the decision point where tension peaks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Falling action: Lena offers help, removing RAVI's fear of failure.",
                              "evidence": "I'll help you rehearse lines",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Resolution: the smile and joke release tension into friendship and confidence.",
                              "evidence": "smiles for the first time",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: a compact arc where a small obstacle is overcome — the structure mirrors the theme of encouragement.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Maps the full arc with evidence and a judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Identifies most stages; partial evidence."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple description; little structure."
                    }
          ],
          "finalAnswer": "Exposition (poster, objection) → rising action (correction, verification) → climax (decision) → falling action (offer of help) → resolution (smile, joke).",
          "commonErrors": [
                    "Missing the falling action.",
                    "Calling the smile the climax."
          ]
},
        },
        {
          id: "el8-u10-dramatic-structure-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "SCENE: The school hall, evening. Two students, RAVI and LENA, stand by a poster reading 'School Play Auditions Thursday'.\n\nRAVI (reading the poster): 'Lead role. Must be able to sing.' Singing? I'm tone deaf.\nLENA: You can act, though.\nRAVI: Acting isn't singing. It's different.\nLENA: The auditions say 'or'. 'Able to sing or act convincingly.' Look.\n(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then.\nLENA: I'll help you rehearse lines. I've done the workshop before.\n(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Answer all parts of this question about the play's dramatic structure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the five stages of a typical dramatic arc.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the audience's knowledge differs from RAVI's at the moment he reads the poster.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a short scene (8-10 lines) that builds suspense using a pause, an interruption and a withheld piece of information.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Dramatic arc",
                              "statement": "Exposition to resolution."
                    },
                    {
                              "kind": "technique",
                              "name": "Suspense",
                              "statement": "Pauses, interruptions, withheld info."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Exposition, rising action, climax, falling action, resolution.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The audience sees the poster's full text including 'or' before RAVI processes it — they know the audition is possible for him.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "RAVI reads only 'Must be able to sing' and concludes he cannot audition — the audience knows he is wrong.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "This gap creates dramatic irony: we watch him argue against something we know is false.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lena's correction releases the irony — once RAVI sees 'or', audience and character share knowledge again.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Scene has characters and dialogue in play format.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Includes a pause (a beat or silence) that builds tension.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Includes an interruption that shifts the scene.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Withholds a piece of information from the audience or characters for suspense.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The suspense has a purpose and the scene resolves or ends on a hook.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Stage directions are used appropriately.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Playable scene using all three suspense devices with purpose."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Scene present with some suspense devices."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Minimal scene; devices missing."
                    }
          ],
          "finalAnswer": "(a) Exposition, rising action, climax, falling action, resolution. (b) Audience knows 'or' is on the poster; RAVI does not — dramatic irony. (c) A suspenseful short scene.",
          "commonErrors": [
                    "Confusing dramatic irony with coincidence.",
                    "A scene with no actual suspense device."
          ],
          "examinerNote": "Part (c) is marked for dramatic craft (AO4)."
},
        },
      ],
    },
  ],

};
