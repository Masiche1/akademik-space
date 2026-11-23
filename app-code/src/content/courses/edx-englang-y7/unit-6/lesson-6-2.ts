import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "el7-u6-lesson-6-2",
  code: "6-2",
  title: "Analysing Drama",
  goal: "I CAN analyse dramatic devices, dialogue, stagecraft and character relationships in plays.",
  standards: ["Edexcel KS3 English Language — Reading: drama analysis", "Key Stage 3 reading: drama conventions"],
  
  vocabulary: [
    { term: "Stage direction", definition: "Instructions in brackets describing action, setting or delivery." },
    { term: "Soliloquy", definition: "A speech where a character speaks thoughts aloud, alone on stage." },
    { term: "Aside", definition: "A remark by a character meant for the audience, not other characters." },
    { term: "Dramatic irony", definition: "When the audience knows something characters don't." },
    { term: "Subtext", definition: "The underlying meaning beneath the literal words spoken." },
    { term: "Conflict", definition: "The struggle driving drama — character vs character, self or society." },
  ],
  concepts: [
    {
      id: "el7-u6-dram-devices",
      title: "Dramatic devices and stagecraft",
      skill: "Identify and analyse soliloquy, aside, stage directions and dramatic irony.",
      lesson: {
        sections: [
          {
            heading: "Key dramatic devices",
            body: "Drama is written to be **performed** — analyse it as such:\n\n- **Stage directions**: instructions in brackets — '[He storms out]' tells us emotion and action beyond dialogue\n- **Soliloquy**: character speaks thoughts aloud alone — 'To be or not to be' — reveals inner conflict directly\n- **Aside**: character addresses audience directly — '[Aside to audience] I can't believe this' — creates intimacy or irony\n- **Dramatic irony**: audience knows more than characters — we know the murderer is in the room but characters don't\n- **Foreshadowing**: hints of future events",
          },
          {
            heading: "Why devices matter",
            body: "Dramatic devices control what the audience knows and feels:\n\n- Soliloquy gives us access to thoughts characters hide from others\n- Aside breaks the fourth wall, creating complicity between character and audience\n- Dramatic irony creates tension — we watch characters walk into danger\n- Stage directions show what dialogue can't: a pause, a gesture, a tone\n\nAsk: What does this device reveal? How does it position the audience?",
          },
        ],
        keyFormulas: [
          { name: "Soliloquy", statement: "Character speaks thoughts aloud alone — reveals inner state." },
          { name: "Dramatic irony", statement: "Audience knows what characters don't — creates tension." },
          { name: "Stage direction", statement: "Bracketed instructions shaping performance." },
          { name: "Aside", statement: "Character addresses audience directly." },
        ],
        workedExample: {
          problem: "In a play, a character says '[Aside] He's lying through his teeth' while smiling at another character. What's happening?",
          solution: "The aside reveals the character's true thoughts to the audience while they pretend to agree — creating dramatic irony and showing the character is two-faced.",
        },
      },
      questions: [
        {
          id: "el7-u6-dd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a soliloquy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A speech to the audience"
                    },
                    {
                              "id": "b",
                              "text": "A character speaking thoughts aloud while alone"
                    },
                    {
                              "id": "c",
                              "text": "A stage direction"
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
                              "name": "Soliloquy",
                              "statement": "Alone speech revealing inner thoughts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soliloquy = alone on stage, speaking thoughts aloud; aside = to audience during scene.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A character speaking thoughts aloud while alone",
          "commonErrors": [
                    "Confusing soliloquy with aside."
          ]
},
        },
        {
          id: "el7-u6-dd-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is dramatic irony? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dramatic irony",
                              "statement": "Audience knows more than characters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dramatic irony = audience knows something characters don't.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: audience knows the butler stole the jewels but characters suspect the maid.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Effect: creates tension and anticipation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Audience knows more than characters — creates tension as we watch them make mistakes.",
          "commonErrors": [
                    "Confusing with verbal irony."
          ]
},
        },
        {
          id: "el7-u6-dd-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Meeting",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "[Enter JAMES and MRS CLARKE]\n\nJAMES: I hear you're looking for a new manager.\nMRS CLARKE: Yes, the last one was... unreliable.\n[Aside to audience: She's looking at me!]\n\nJAMES: [Smiling] How fortunate. I might be available."
},
          stem: "Analyse the effect of Mrs Clarke's aside in this extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Aside",
                              "statement": "Direct address to audience reveals true thoughts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aside identified: '[Aside to audience: She's looking at me!]'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Aside reveals her real excitement/intention — she's considering him for the job.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Creates dramatic irony: audience knows she's interested but James doesn't (yet).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: audience becomes complicit — we share her secret.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The aside reveals Mrs Clarke's true interest, creating dramatic irony and drawing the audience into her secret.",
          "commonErrors": [
                    "Treating aside as normal dialogue."
          ]
},
        },
        {
          id: "el7-u6-dd-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Meeting",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "[Enter JAMES and MRS CLARKE]\n\nJAMES: I hear you're looking for a new manager.\nMRS CLARKE: Yes, the last one was... unreliable.\n[Aside to audience: She's looking at me!]\n\nJAMES: [Smiling] How fortunate. I might be available."
},
          stem: "How do stage directions shape our understanding of the characters in this extract?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Stage directions",
                              "statement": "Bracketed instructions reveal emotion, action and subtext."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'[Enter JAMES and MRS CLARKE]' establishes scene and characters.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "'[Aside to audience...]' reveals Mrs Clarke's hidden excitement — stage direction exposes subtext.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'[Smiling]' on James's line shows he's confident/pleased — or perhaps suspicious.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Directions add layers dialogue alone can't convey.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: audience sees what characters might hide — dramatic tension.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Stage directions reveal hidden emotions — Mrs Clarke's aside excitement and James's smile add subtext beyond the words.",
          "commonErrors": [
                    "Ignoring stage directions as mere instructions."
          ]
},
        },
        {
          id: "el7-u6-dd-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Meeting",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "[Enter JAMES and MRS CLARKE]\n\nJAMES: I hear you're looking for a new manager.\nMRS CLARKE: Yes, the last one was... unreliable.\n[Aside to audience: She's looking at me!]\n\nJAMES: [Smiling] How fortunate. I might be available."
},
          stem: "Compare the effect of dialogue vs stage direction in revealing character — which is more powerful here and why?",
          parts: [
          {
                    "label": "a",
                    "prompt": "What does the dialogue alone reveal?",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "What do stage directions add?",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue vs direction",
                              "statement": "Words + performance cues = layered characterisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialogue: polite, professional exchange; 'unreliable' hints at past problems.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "James's 'How fortunate' sounds modest but could be confident.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Aside reveals Mrs Clarke's true excitement — hidden from James.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "'[Smiling]' adds confidence/smugness to James's modest words.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Directions create dramatic irony — audience sees what dialogue hides.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Dialogue analysis with subtext.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Surface dialogue only.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No dialogue analysis.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Stage directions analysed with dramatic effect.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial direction analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No direction analysis.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Stage directions are more revealing — they expose Mrs Clarke's hidden excitement and James's confidence, creating dramatic irony.",
          "commonErrors": [
                    "Treating dialogue as the only source of meaning."
          ]
},
        },
        {
          id: "el7-u6-dd-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Meeting",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "[Enter JAMES and MRS CLARKE]\n\nJAMES: I hear you're looking for a new manager.\nMRS CLARKE: Yes, the last one was... unreliable.\n[Aside to audience: She's looking at me!]\n\nJAMES: [Smiling] How fortunate. I might be available."
},
          stem: "Write a full analysis of this dramatic extract.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify all dramatic devices used.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how each device shapes audience understanding.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the extract's effectiveness as drama.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Drama analysis mastery",
                              "statement": "Devices + audience effect + evaluation = complete analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Devices identified: aside, stage directions, dialogue, ellipsis ('...'), pause.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Aside effect: reveals hidden thoughts, creates dramatic irony.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Stage direction effect: '[Smiling]' adds subtext to James's modesty.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Ellipsis 'unreliable...' suggests hesitation or distaste.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Evaluation: extract effectively establishes character and tension through minimal means.",
                              "marks": 3,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All devices identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Two devices.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Fewer than two.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Device effects analysed with audience positioning.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Partial analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Minimal analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Critical evaluation of dramatic effectiveness.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial evaluation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No evaluation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Efficient dramatic extract — aside creates irony, stage directions add subtext, ellipsis signals distaste.",
          "commonErrors": [
                    "Listing devices without analysing effect."
          ]
},
        },
      ],
    },
    {
      id: "el7-u6-dialogue",
      title: "Dialogue, subtext and character",
      skill: "Analyse what characters say vs what they mean, and how dialogue reveals relationships and conflict.",
      lesson: {
        sections: [
          {
            heading: "Subtext in dialogue",
            body: "Characters rarely say exactly what they mean — **subtext** is the gap between words and intentions.\n\n'I'm fine' often means 'I'm not fine'. 'That's an interesting choice' might mean 'I disagree'.\n\nTo find subtext: What does the character want? What are they avoiding saying? What does the audience know that other characters don't?",
          },
          {
            heading: "Conflict and relationships",
            body: "Drama is driven by **conflict** — internal (character vs self), interpersonal (character vs character) or external (character vs society/fate).\n\nDialogue reveals relationships through:\n- **Power dynamics**: who interrupts, who commands, who pleads\n- **Formality levels**: 'Shut up' vs 'I would prefer you didn't'\n- **Evasion**: characters avoiding the real issue\n- **Shared history**: references to past events\n\nAsk: What does this exchange reveal about who has power? What aren't they saying?",
          },
        ],
        keyFormulas: [
          { name: "Subtext", statement: "What characters mean vs what they say." },
          { name: "Conflict types", statement: "Internal, interpersonal, external." },
          { name: "Power in dialogue", statement: "Who controls the conversation reveals status." },
        ],
        workedExample: {
          problem: "Character A: 'You always do this.' Character B: 'I suppose you're right.' What's the subtext?",
          solution: "A is frustrated and blaming; B is passive-aggressive or resigned — 'I suppose' signals reluctant agreement, not genuine acceptance.",
        },
      },
      questions: [
        {
          id: "el7-u6-dg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is subtext in drama?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The stage directions"
                    },
                    {
                              "id": "b",
                              "text": "The meaning beneath the literal words"
                    },
                    {
                              "id": "c",
                              "text": "The plot summary"
                    },
                    {
                              "id": "d",
                              "text": "The character's name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subtext",
                              "statement": "Underlying meaning beneath spoken words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtext = what's implied vs what's said.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The meaning beneath the literal words",
          "commonErrors": [
                    "Confusing with stage direction."
          ]
},
        },
        {
          id: "el7-u6-dg-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What are the three main types of conflict in drama?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conflict types",
                              "statement": "Internal, interpersonal, external."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal: character vs self.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Interpersonal: character vs character.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "External: character vs society/fate/nature.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Internal (self), interpersonal (others), external (society/fate).",
          "commonErrors": [
                    "Only listing one type."
          ]
},
        },
        {
          id: "el7-u6-dg-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Argument",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "SARA: You said you'd call. You always say you'll call.\nTOM: I was busy.\nSARA: [Quietly] I know. I'm just tired of waiting.\nTOM: I'm here now. Isn't that enough?"
},
          stem: "Analyse the subtext in this exchange — what are the characters really saying?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Subtext analysis",
                              "statement": "Gap between words and intentions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sara's 'I'm tired of waiting' = she's hurt by repeated disappointment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Tom's 'Isn't that enough?' = defensive, feels unappreciated.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both avoid direct confrontation — underlying issue is trust/communication.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'[Quietly]' stage direction shows Sara's hurt is controlled, not angry.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Sara is hurt by broken promises; Tom is defensive — both avoid direct conflict about trust.",
          "commonErrors": [
                    "Taking dialogue literally."
          ]
},
        },
        {
          id: "el7-u6-dg-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Argument",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "SARA: You said you'd call. You always say you'll call.\nTOM: I was busy.\nSARA: [Quietly] I'm just tired of waiting.\nTOM: I'm here now. Isn't that enough?"
},
          stem: "How does the power dynamic shift during this exchange? Who controls the conversation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Power in dialogue",
                              "statement": "Who leads, interrupts, pleads reveals status."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sara opens with accusation — initially holds moral high ground.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Tom's short 'I was busy' is dismissive — tries to shut down.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sara's '[Quietly]' shows restraint — shifts from anger to hurt, gaining sympathy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Tom's 'Isn't that enough?' is defensive and self-centred — loses ground.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Power shifts: Sara's quiet hurt is more powerful than Tom's defensiveness.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Sara gains power through quiet hurt; Tom loses it through defensive dismissiveness.",
          "commonErrors": [
                    "Assuming the louder character has power."
          ]
},
        },
        {
          id: "el7-u6-dg-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Argument",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "SARA: You said you'd call. You always say you'll call.\nTOM: I was busy.\nSARA: [Quietly] I'm just tired of waiting.\nTOM: I'm here now. Isn't that enough?"
},
          stem: "Rewrite one line of dialogue to change the power dynamic — show how a single word can shift control.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose a line to rewrite.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Rewrite it to shift power.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the effect of your change.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue rewriting",
                              "statement": "Word choice controls power and subtext."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line chosen (e.g. Tom's 'I'm here now. Isn't that enough?').",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Rewrite shifts power, e.g. 'I'm here now. What more do you want?' (more defensive) or 'I'm sorry. You're right.' (concedes).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Effect explained: word choice changes who appears stronger.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Line chosen and rewritten.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No line chosen.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Rewrite shifts power clearly.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Rewrite doesn't shift power.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Effect explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'I'm sorry. You're right.' — Tom concedes, Sara gains full power.",
          "commonErrors": [
                    "Rewriting without changing power dynamics."
          ]
},
        },
        {
          id: "el7-u6-dg-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Argument",
          "author": "Written for Akademik Space",
          "source": "Original play extract",
          "text": "SARA: You said you'd call. You always say you'll call.\nTOM: I was busy.\nSARA: [Quietly] I'm just tired of waiting.\nTOM: I'm here now. Isn't that enough?"
},
          stem: "Write a full analysis of this dialogue extract.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the main conflict.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Analyse the subtext in each character's lines.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how the extract builds tension.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue analysis mastery",
                              "statement": "Conflict + subtext + tension = complete analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conflict identified: interpersonal — broken promise/trust issue.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sara's subtext: hurt, disappointment, need for reliability.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Tom's subtext: defensiveness, feeling unappreciated, avoidance.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Tension built through: short lines, '[Quietly]' direction, unanswered questions, power shift.",
                              "marks": 4,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Conflict correctly identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No conflict identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Subtext analysed for both characters.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Subtext for one character.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Surface reading only.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No subtext.",
                              "part": "b"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Tension mechanisms identified and explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Partial tension analysis.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Minimal analysis.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No analysis.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Interpersonal conflict over broken promises; Sara's quiet hurt vs Tom's defensiveness builds escalating tension.",
          "commonErrors": [
                    "Missing subtext.",
                    "Not analysing tension-building techniques."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u6-drama-notes",
      title: "Analysing drama — notes",
      summary: "Drama is performance: analyse stage directions, soliloquy, aside, dramatic irony, subtext and power in dialogue.",
      sections: [
        { heading: "Device checklist", body: "Soliloquy (alone, thoughts aloud), aside (to audience), stage directions (brackets), dramatic irony (audience knows more), ellipsis (pause/hesitation)." },
        { heading: "Subtext", body: "What characters mean vs what they say. 'I'm fine' often means 'I'm not fine'. Look for what they're avoiding." },
        { heading: "Power in dialogue", body: "Who interrupts, commands, pleads or goes quiet reveals status. Quiet hurt can be more powerful than loud anger." },
        { heading: "Conflict types", body: "Internal (self), interpersonal (others), external (society/fate). Drama needs conflict to drive action." },
      ],
    },
  ],
};
