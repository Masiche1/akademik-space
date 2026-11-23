import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "el8-u8-lesson-8-1",
  code: "8-1",
  title: "Effective Speaking",
  goal: "I CAN use voice, pace, volume and body language to deliver a clear and confident spoken message.",
  standards: ["KS3 English Language", "KS3 Spoken Language and Audience"],
  
  vocabulary: [
    { term: "Pace", definition: "The speed at which someone speaks." },
    { term: "Volume", definition: "How loud or quiet the voice is." },
    { term: "Pitch", definition: "How high or low the voice sounds." },
    { term: "Tone", definition: "The attitude or emotion conveyed by the voice." },
    { term: "Articulation", definition: "How clearly words are pronounced." },
    { term: "Filler words", definition: "Empty words such as 'um' and 'like' used to fill pauses." },
    { term: "Eye contact", definition: "Looking at the audience to build connection and confidence." },
    { term: "Gesture", definition: "Hand and arm movements that emphasise or illustrate what is said." },
    { term: "Posture", definition: "The way the body is held while speaking or listening." },
  ],
  concepts: [
    {
      id: "el8-u8-vocal-delivery",
      title: "Voice and delivery",
      skill: "Control pace, volume, pitch, tone and articulation to make speech clear and engaging.",
      lesson: {
        sections: [
          {
            heading: "The voice as a tool",
            body: "Your voice carries more than words. **Pace** (speed), **volume** (loudness), **pitch** (high or low) and **tone** (attitude) all shape how listeners receive your message. Speaking too quickly loses the audience; too slowly bores them. Varying pace and volume keeps attention — slow down for important points, speed up for energy.",
          },
          {
            heading: "Clarity and fillers",
            body: "**Articulation** means pronouncing words clearly. Mumbling or swallowing word endings makes speech hard to follow. **Filler words** like 'um', 'er' and 'like' fill pauses but distract listeners; a short silent pause is more confident than a filler. Practise pausing instead of filling.",
          },
          {
            heading: "Matching voice to message",
            body: "A story needs expressive pitch and pace; a formal announcement needs steady volume and clear articulation. Match your voice to your purpose: excitement calls for energy and variety, sympathy for a softer tone. Monotone delivery — one pitch and pace throughout — makes even good content dull.",
          },
        ],
        keyFormulas: [
          { name: "Pace", statement: "Speed of speech — vary it for emphasis." },
          { name: "Volume", statement: "Loudness — project to the back of the room." },
          { name: "Pitch", statement: "High or low voice — vary it to avoid monotone." },
          { name: "Filler words", statement: "'um', 'er', 'like' — replace with pauses." },
        ],
        workedExample: {
          problem: "A speaker says 'um so like the thing is... basically we er need more time' in a class assembly. Identify three delivery problems and fixes.",
          solution: "Problems: filler words ('um', 'like', 'er') distract; vague wording ('the thing', 'basically') weakens the message; likely rushed or hesitant pace. Fixes: pause silently instead of filling; name the point clearly ('We need more time'); slow down and use steady volume on the key phrase.",
        },
      },
      questions: [
        {
          id: "el8-u8-vocal-delivery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'pace' in speaking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How loud the voice is"
                    },
                    {
                              "id": "b",
                              "text": "How fast or slow someone speaks"
                    },
                    {
                              "id": "c",
                              "text": "The words chosen"
                    },
                    {
                              "id": "d",
                              "text": "The accent used"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pace",
                              "statement": "The speed at which someone speaks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pace refers to speed of delivery, not volume, word choice or accent.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** How fast or slow someone speaks.",
          "commonErrors": [
                    "Confusing pace with volume — pace is about speed."
          ]
},
        },
        {
          id: "el8-u8-vocal-delivery-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two problems caused by filler words like 'um' and 'like', and give one fix.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Filler words",
                              "statement": "Fillers distract listeners and weaken confidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem: fillers distract the audience and break the flow of the message.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Fix: replace fillers with a short silent pause, or rehearse the opening so the first words are secure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Fillers distract listeners and make the speaker seem hesitant; the fix is to pause silently or rehearse key phrases.",
          "commonErrors": [
                    "Saying fillers are 'fine' — they are natural but become a problem when overused."
          ]
},
        },
        {
          id: "el8-u8-vocal-delivery-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how varying pace and volume can keep an audience's attention, with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vocal variety",
                              "statement": "Changes in pace and volume signal importance and prevent monotony."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: constant pace and volume make speech monotonous and listeners drift.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Varying pace — slowing for key points, speeding for build-up — creates rhythm and emphasis.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: a storyteller slows and lowers volume at a tense moment, then speeds up for the resolution.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Varying pace and volume creates rhythm: slowing down and lowering volume for important or tense moments draws listeners in, while steady or faster delivery carries momentum.",
          "commonErrors": [
                    "Describing what pace and volume are without explaining their effect on listeners."
          ]
},
        },
        {
          id: "el8-u8-vocal-delivery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student is giving a talk about a charity event. Describe how they could adjust their tone, pitch and pace for three different moments: the introduction, a sad story about the cause, and the final call to action.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone matching purpose",
                              "statement": "Voice should shift with the emotional purpose of each section."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction: warm, upbeat tone; moderate pitch and steady pace to welcome and orientate the audience.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sad story: softer volume, lower pitch, slower pace to create empathy and give the story weight.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Call to action: stronger volume, higher pitch on key words, purposeful pauses to build urgency and conviction.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Introduction: warm and steady to welcome; story: soft, low and slow for empathy; call to action: louder, higher and punctuated by pauses for urgency.",
          "commonErrors": [
                    "Using one delivery style throughout without matching tone to each section's purpose."
          ]
},
        },
        {
          id: "el8-u8-vocal-delivery-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why articulation and clear pronunciation matter in speech, and describe two ways a speaker can improve them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Articulation",
                              "statement": "Clear pronunciation ensures the message is understood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: mumbling or swallowing word endings makes speech hard to follow, especially for listeners at the back.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improvement 1: practise speaking more slowly — speed often causes swallowed sounds.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improvement 2: exaggerate mouth movements when practising, or record yourself and listen back to find unclear words.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improvement 3: pause rather than rush — clarity beats speed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Link between clear delivery and audience comprehension is explained, not just stated.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear explanation plus two developed improvement strategies."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Reason explained with one clear strategy."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Strategies listed without reasons."
                    }
          ],
          "finalAnswer": "Articulation ensures listeners can hear every word; improve it by slowing down, exaggerating mouth movements when practising, and recording yourself to spot unclear words.",
          "commonErrors": [
                    "Suggesting 'speak louder' as the fix — volume does not solve mumbled word endings."
          ]
},
        },
        {
          id: "el8-u8-vocal-delivery-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about vocal delivery.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define four of these terms: pace, volume, pitch, tone, articulation.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why filler words are a problem and give two strategies for reducing them.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Plan the vocal delivery for a two-minute speech announcing a school talent show: describe the voice you would use for the opening, the middle acts, and the finale.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Voice features",
                              "statement": "Pace, volume, pitch, tone and articulation are the tools of vocal delivery."
                    },
                    {
                              "kind": "technique",
                              "name": "Vocal planning",
                              "statement": "Delivery should be planned to match the purpose of each part of a speech."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pace: speed of speech; volume: loudness; pitch: high or low; tone: attitude/emotion; articulation: clarity of pronunciation. Any four defined accurately.",
                              "marks": 4,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fillers distract listeners and make speech seem hesitant and unprepared.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Strategy 1: rehearse openings and transitions so there are no gaps to fill.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Strategy 2: replace the filler with a silent pause; practise pausing comfortably.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Opening: warm, welcoming tone with steady volume and moderate pace to grab attention.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Middle acts: energetic, varied pace and pitch to keep energy up between acts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Finale: building volume and slower, dramatic pauses for the climax.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The plan clearly maps vocal choices to the emotional arc of the event.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Detailed vocal plan covering all three sections with clear purpose."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Plan covers the sections but with limited vocal detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Vague or incomplete plan."
                    }
          ],
          "finalAnswer": "(a) Four accurate definitions. (b) Fillers distract and seem hesitant; reduce them by rehearsing transitions and using silent pauses. (c) Warm steady opening, energetic varied middle, building dramatic finale.",
          "commonErrors": [
                    "In (a), defining tone as 'volume' — they are different features.",
                    "In (c), describing content rather than vocal delivery."
          ]
},
        },
      ],
    },
    {
      id: "el8-u8-body-language",
      title: "Body language",
      skill: "Use posture, gesture, eye contact and positioning to support and strengthen spoken messages.",
      lesson: {
        sections: [
          {
            heading: "Posture and stance",
            body: "**Posture** is how you hold your body. Standing tall with shoulders back signals confidence; slouching or fidgeting signals nerves. Plant your feet shoulder-width apart for a stable stance. Small movements are fine — pacing or rocking constantly distracts the audience and signals anxiety.",
          },
          {
            heading: "Gesture and facial expression",
            body: "**Gestures** — hand and arm movements — should emphasise or illustrate what you say: a counting gesture for a list, open palms for honesty, a pointed finger for emphasis. Keep gestures above waist height and within the space in front of you. Your **facial expression** should match your words; smiling when delivering bad news sends mixed messages.",
          },
          {
            heading: "Eye contact and positioning",
            body: "**Eye contact** connects you with listeners and shows confidence. Scan the whole audience rather than staring at one person or at your notes. Position yourself where everyone can see you — centre stage, not hiding behind a lectern or screen. Face the audience when speaking; turning to look at a board makes you hard to hear and read.",
          },
        ],
        keyFormulas: [
          { name: "Posture", statement: "Tall, stable stance signals confidence." },
          { name: "Gesture", statement: "Hand movements that emphasise or illustrate the message." },
          { name: "Eye contact", statement: "Looking at the audience to build connection." },
          { name: "Positioning", statement: "Centre, visible, facing the audience." },
        ],
        workedExample: {
          problem: "A presenter hides behind a podium, reads every word from a sheet, and never looks up. List four body-language improvements.",
          solution: "Step out from behind the podium so the audience can see you; look up and make eye contact in different parts of the room; use open gestures to emphasise points; hold the notes at waist height and glance at them rather than reading.",
        },
      },
      questions: [
        {
          id: "el8-u8-body-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does good posture while speaking signal to an audience?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Boredom"
                    },
                    {
                              "id": "b",
                              "text": "Confidence and control"
                    },
                    {
                              "id": "c",
                              "text": "Anger"
                    },
                    {
                              "id": "d",
                              "text": "Illness"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Posture",
                              "statement": "How the body is held — tall and stable signals confidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An upright, stable stance reads as confident and in control; slouching reads as nervous or uninterested.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Confidence and control.",
          "commonErrors": [
                    "Choosing (a) — posture signals attitude, not boredom."
          ]
},
        },
        {
          id: "el8-u8-body-language-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of how gestures can support a spoken message.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Gesture",
                              "statement": "Hand movements emphasise or illustrate spoken points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Example: counting on fingers when listing three reasons.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: open palms when making an honest or welcoming point, or a clear pointing gesture for emphasis.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Counting on fingers for a list; open palms for honesty or a pointed gesture for emphasis.",
          "commonErrors": [
                    "Describing gestures that contradict the words, such as crossed arms while welcoming people."
          ]
},
        },
        {
          id: "el8-u8-body-language-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why eye contact matters when speaking to a group, and describe how to do it well.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Eye contact",
                              "statement": "Looking at listeners builds connection and confidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: eye contact connects the speaker with listeners and makes them feel addressed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Done well: scan different sections of the audience rather than staring at one person or at notes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Done well: hold each person's gaze for a moment, then move on; use it during key points, not constantly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Eye contact makes listeners feel included and shows confidence; do it by scanning the room and holding each gaze briefly rather than staring at notes or one person.",
          "commonErrors": [
                    "Saying 'look at the audience' without explaining how — scanning vs staring matters."
          ]
},
        },
        {
          id: "el8-u8-body-language-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A presenter stands behind a lectern, reads from notes without looking up, and fidgets with a pen. Analyse the effect of each of these three habits on the audience, and give one improvement for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Body language effects",
                              "statement": "Each physical habit sends a signal to the audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Behind a lectern: creates a barrier and hides the speaker's presence; improvement — step to the side or in front when not using notes.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reading without eye contact: disconnects the audience and suggests the speaker is unprepared; improvement — look up between points and scan the room.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fidgeting with a pen: signals nervousness and distracts listeners; improvement — put the pen down or hold it still, and plant feet for a stable stance.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The lectern creates a barrier; reading without eye contact disconnects; fidgeting signals nerves. Fix by stepping forward, scanning the audience, and standing still with hands relaxed.",
          "commonErrors": [
                    "Listing problems without linking each to its effect on the audience."
          ]
},
        },
        {
          id: "el8-u8-body-language-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between effective and distracting body language, giving three examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Effective vs distracting",
                              "statement": "Body language supports the message only when it reinforces it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective examples: open palms showing honesty, purposeful gestures emphasising key words, eye contact building connection.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Distracting examples: pacing constantly, fidgeting with objects, arms crossed while claiming openness.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The difference: effective body language reinforces the spoken message; distracting body language competes with it for the audience's attention.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Three accurate examples of each with a clear principle explaining the difference."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Examples given but the distinguishing principle is unclear."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Few or inaccurate examples."
                    }
          ],
          "finalAnswer": "Effective body language reinforces the message (open palms, purposeful gestures, eye contact); distracting body language competes with it (pacing, fidgeting, crossed arms).",
          "commonErrors": [
                    "Listing habits without explaining why they help or hinder."
          ]
},
        },
        {
          id: "el8-u8-body-language-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question about body language.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define 'gesture', 'eye contact', 'posture' and 'positioning'.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why a speaker should avoid pacing or rocking while talking.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Plan the body language for a five-minute presentation to the school: describe your stance, gestures, eye contact and positioning for the introduction and the main body.",
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
                              "name": "Body language terms",
                              "statement": "Gesture, eye contact, posture and positioning each send signals to listeners."
                    },
                    {
                              "kind": "technique",
                              "name": "Stillness and movement",
                              "statement": "Controlled stillness conveys confidence; constant movement distracts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Gesture: hand/arm movements emphasising the message; eye contact: looking at listeners to connect; posture: how the body is held; positioning: where the speaker stands relative to the audience.",
                              "marks": 4,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Constant pacing or rocking signals nervousness and gives the audience something distracting to watch.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A stable planted stance reads as confident and keeps attention on the words.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Introduction: upright stance, welcoming open gesture, eye contact sweeping the room, positioned centre and visible.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Main body: purposeful gestures for key points, sustained eye contact with different sections, still and stable between gestures.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The plan links each body-language choice to its intended effect on the audience.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Detailed, purposeful plan covering all elements for both sections."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Plan covers the sections with some detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Vague or incomplete plan."
                    }
          ],
          "finalAnswer": "(a) Four accurate definitions. (b) Pacing/rocking signals nerves and distracts; a stable stance conveys confidence. (c) Confident centred stance, welcoming then purposeful gestures, scanning eye contact, stillness between points.",
          "commonErrors": [
                    "In (c), describing gestures without linking them to specific points in the presentation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u8-speaking-notes",
      title: "Effective speaking — notes",
      summary: "Voice (pace, volume, pitch, tone, articulation) and body (posture, gesture, eye contact, positioning) are the tools of confident delivery.",
      sections: [
        { heading: "Voice", body: "Vary pace and volume for emphasis; slow down for key points; replace filler words with pauses." },
        { heading: "Body", body: "Stand tall and still; use purposeful gestures; scan the audience with eye contact; stay visible and facing forward." },
        { heading: "Key point", body: "Delivery should match the purpose of each part of the speech." },
      ],
    },
  ],
};
