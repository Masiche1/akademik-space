import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "el10-u4-lesson-4-2",
  code: "4-2",
  title: "Structure and Delivery in Speech",
  goal: "I CAN explain how speakers structure spoken texts and use delivery to hold an audience's attention.",
  standards: ["4EA1 Paper 1", "4EA1 Spoken Language", "4EA1 AO1", "4EA1 AO2", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Discourse marker", definition: "A word or phrase that signals structure, such as 'first', 'now' or 'finally'." },
    { term: "Signposting", definition: "Telling the audience where you are in the speech, such as 'three things'." },
    { term: "Pace", definition: "The speed of delivery; slowing down marks important points." },
    { term: "Pause", definition: "A deliberate silence that builds anticipation or separates ideas." },
    { term: "Vocal variety", definition: "Changes in volume, pitch and speed that emphasise meaning." },
    { term: "Eye contact", definition: "Looking at listeners to build connection and gauge reactions." },
  ],
  concepts: [
    {
      id: "el10-u4-spoken-structure",
      title: "Structuring a spoken text",
      skill: "Analyse how speakers use openings, signposting and discourse markers to organise speech.",
      lesson: {
        sections: [
          {
            heading: "Openings and signposting",
            body: "Speakers must orient listeners quickly because, unlike readers, listeners cannot turn back. Effective openings **greet** ('good afternoon'), **state the topic** and **signpost the structure**: 'three things: first... second... third'. Signposting tells the audience what is coming and what has passed.",
          },
          {
            heading: "Discourse markers",
            body: "Markers such as 'first', 'now, moving on to', 'finally, before I finish' and 'so that is' guide the listener through the speech. They act like signposts on a journey. Repeating the structure at the end ('why it matters, what we can do, and my part') reinforces it in memory.",
          },
          {
            heading: "Closings",
            body: "A strong closing **summarises** the key points, returns to the opening idea, and often ends with a question or call to action. 'Any questions?' invites participation. The summary at the end of the plastic-pollution speech ('So that is plastic pollution') mirrors the promised structure, giving listeners a satisfying finish.",
          },
        ],
        keyFormulas: [
          { name: "Signposting", statement: "Announcing the structure ('three things: first...') orients listeners." },
          { name: "Discourse marker", statement: "'First', 'now', 'finally', 'so that is' — signals movement through the speech." },
          { name: "Circular structure", statement: "Ending by repeating the opening structure reinforces memory." },
        ],
        workedExample: {
          problem: "How does the presenter structure the opening of the plastic-pollution speech?",
          solution: "The speaker opens with a greeting ('good afternoon everyone'), immediately states the topic and promises a clear structure: 'three things: first, why plastic pollution matters; second, what we can do; and third, what I have done myself'. Discourse markers ('first', 'now, moving on to', 'finally, before I finish') move the audience through each section, and the closing ('So that is plastic pollution') mirrors the promised three-part structure so listeners can recall it easily.",
        },
      },
      questions: [
        {
          id: "el10-u4-spoken-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Opening of a class presentation",
          "author": "Year 10 student presenter",
          "source": "Spoken language script",
          "text": "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?"
},
          stem: "What does the phrase 'three things: first... second... third' do in the speech?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It lists the names of three students"
                    },
                    {
                              "id": "b",
                              "text": "It signposts the structure of the speech"
                    },
                    {
                              "id": "c",
                              "text": "It gives three statistics about pollution"
                    },
                    {
                              "id": "d",
                              "text": "It asks the audience a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Signposting",
                              "statement": "Announcing the structure so listeners know what is coming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The phrase tells listeners the speech will cover three numbered points.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** It signposts the structure.",
          "commonErrors": [
                    "Reading it as content rather than structural guidance."
          ]
},
        },
        {
          id: "el10-u4-spoken-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "Opening of a class presentation",
          "author": "Year 10 student presenter",
          "source": "Spoken language script",
          "text": "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?"
},
          stem: "Explain the function of the discourse markers 'first', 'now, moving on to' and 'finally, before I finish'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Discourse markers",
                              "statement": "Words that signal movement through a spoken text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They mark transitions between sections so listeners can follow the structure.",
                              "evidence": "now, moving on to what we can do",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Finally, before I finish' signals the last section and prepares listeners for the close.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The markers guide listeners through the speech's sections and signal the ending.",
          "commonErrors": [
                    "Listing markers without explaining their structural function."
          ]
},
        },
        {
          id: "el10-u4-spoken-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Opening of a class presentation",
          "author": "Year 10 student presenter",
          "source": "Spoken language script",
          "text": "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?"
},
          stem: "How does the closing of the speech ('So that is plastic pollution...') reinforce the structure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Circular structure",
                              "statement": "Repeating the opening structure at the end aids recall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker recaps all three promised points in order: 'why it matters, what we can do, and my part'.",
                              "evidence": "why it matters, what we can do, and my part",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This mirrors the opening signpost, so the audience hears the structure completed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The recap gives a satisfying, memorable finish rather than a abrupt stop.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The closing repeats the promised three-part structure, giving listeners a clear, memorable summary.",
          "commonErrors": [
                    "Describing the recap without linking it to the opening signpost."
          ]
},
        },
        {
          id: "el10-u4-spoken-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Opening of a class presentation",
          "author": "Year 10 student presenter",
          "source": "Spoken language script",
          "text": "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?"
},
          stem: "Analyse how the speaker uses signposting and discourse markers to keep listeners oriented throughout the speech.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Signposting",
                              "statement": "Announcing structure helps listeners who cannot re-read."
                    },
                    {
                              "kind": "skill",
                              "name": "Spoken structure",
                              "statement": "Markers compensate for the linear nature of speech."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening states the topic and the number of points: 'three things: first... second... third'.",
                              "evidence": "three things: first, why plastic pollution matters",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each section begins with a clear marker: 'first', 'now, moving on to', 'finally, before I finish'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "These markers are essential because listeners cannot flick back; they must always know where they are.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A statistic ('eight million tonnes... every year') is introduced with 'as you can see', tying evidence to the current point.",
                              "evidence": "As you can see on this slide",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The summary at the end closes the loop, confirming that all promised sections were delivered.",
                              "evidence": "So that is plastic pollution",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "The speaker's consistent signposting and discourse markers keep listeners oriented in a linear medium and deliver a complete, memorable structure.",
          "commonErrors": [
                    "Listing markers without explaining why spoken texts need them."
          ]
},
        },
        {
          id: "el10-u4-spoken-structure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Opening of a class presentation",
          "author": "Year 10 student presenter",
          "source": "Spoken language script",
          "text": "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?"
},
          stem: "How does the speaker combine verbal signposting with visual support ('this slide') to structure the presentation? What does this reveal about spoken presentations?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Multimodal presentation",
                              "statement": "Speeches combine words, visuals and delivery."
                    },
                    {
                              "kind": "context",
                              "name": "Spoken vs written",
                              "statement": "Listeners need more explicit guidance than readers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker points to the slide ('as you can see on this slide') while giving the statistic, linking words and image.",
                              "evidence": "As you can see on this slide",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The visual supports the statistic ('eight million tonnes') so listeners grasp scale without processing long sentences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Verbal signposting ('first', 'moving on') tells listeners when the visual or point changes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This shows spoken presentations rely on multiple channels: words alone are not enough for a live audience.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The combination reduces the cognitive load on listeners, who can watch while listening.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Verbal markers and visual cues work together to guide listeners; spoken presentations need more explicit scaffolding than written texts.",
          "commonErrors": [
                    "Treating the slide reference as incidental rather than part of the structure."
          ]
},
        },
        {
          id: "el10-u4-spoken-structure-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Opening of a class presentation",
          "author": "Year 10 student presenter",
          "source": "Spoken language script",
          "text": "Right, good afternoon everyone. Today I am going to talk about three things: first, why plastic pollution matters; second, what we can do about it; and third, what I have done myself. So, let's begin with why it matters.\n\nAs you can see on this slide, eight million tonnes of plastic enter the ocean every year. That is roughly a rubbish lorry full every minute. Now, moving on to what we can do. There are three practical steps...\n\nFinally, before I finish, here is what I have done. Last month I organised a litter pick that collected two hundred bags of rubbish. So that is plastic pollution — why it matters, what we can do, and my part. Any questions?"
},
          stem: "Read the presentation script and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the topic and promised structure announced in the opening.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify three discourse markers used to move between sections.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Analyse how the closing summarises the speech.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate how effectively the structure would help a live audience follow the presentation.",
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
                              "name": "Signposting",
                              "statement": "Explicit structure guides listeners through speech."
                    },
                    {
                              "kind": "skill",
                              "name": "Spoken structure",
                              "statement": "Markers, openings and closings organise a linear text."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Topic: plastic pollution.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Structure: three points — why it matters, what we can do, what the speaker has done.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'first' introduces section one.",
                              "evidence": "first, why plastic pollution matters",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'now, moving on to' signals the second section.",
                              "evidence": "now, moving on to what we can do",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'finally, before I finish' signals the last section and the close.",
                              "evidence": "finally, before I finish",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "The summary lists the three points in order: 'why it matters, what we can do, and my part'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It mirrors the opening promise, confirming the structure was delivered.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "'So that is' acts as a final discourse marker signalling completion.",
                              "evidence": "So that is plastic pollution",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The structure is highly effective for a live audience because every section is announced and recapped.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Listeners cannot re-read, so the explicit guidance is essential and well executed.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Plastic pollution; three points — why it matters, what we can do, what the speaker has done. (b) 'first', 'now, moving on to', 'finally, before I finish'. (c) The closing recaps the three promised points in order. (d) The structure is very effective for a live audience.",
          "commonErrors": [
                    "Listing markers without noting their function.",
                    "Missing the mirror between opening promise and closing summary."
          ]
},
        },
      ],
    },
    {
      id: "el10-u4-delivery",
      title: "Delivery and non-verbal communication",
      skill: "Analyse how pace, pause, vocal variety, gesture and eye contact shape a speech.",
      lesson: {
        sections: [
          {
            heading: "Pace, pause and emphasis",
            body: "**Pace** is the speed of speaking. Slowing down signals importance; speeding up can show excitement or nervousness. A **pause** before a key point builds anticipation. **Vocal variety** — changes in volume, pitch and speed — stops a speech sounding flat and keeps attention.",
          },
          {
            heading: "Body language",
            body: "**Eye contact** with listeners builds connection and shows confidence; staring at notes does the opposite. **Gestures** emphasise points and add energy. **Posture** and movement across the stage show engagement. In the examiner's notes, Speaker B's pauses, varied voice and gestures make the delivery engaging, while Speaker A's fast, quiet reading of notes is dull.",
          },
          {
            heading: "Timing",
            body: "Finishing at the allotted time shows planning. Speaker B 'finished at exactly the allotted time', suggesting rehearsal and control. Running over or finishing far too early suggests poor preparation. Delivery is part of the message: the same words can persuade or fail depending on how they are performed.",
          },
        ],
        keyFormulas: [
          { name: "Pace", statement: "Slow for emphasis, faster for energy; steady pace shows control." },
          { name: "Pause", statement: "A deliberate silence builds anticipation before key points." },
          { name: "Eye contact", statement: "Looking at listeners builds connection; reading notes breaks it." },
          { name: "Vocal variety", statement: "Changes in volume, pitch and speed prevent a flat delivery." },
        ],
        workedExample: {
          problem: "Compare the two deliveries described in the examiner's notes.",
          solution: "Speaker A delivers quickly and quietly while reading notes, finishing early — this suggests nervousness or poor preparation and disengages the audience. Speaker B slows for key points, pauses before new ideas, varies her voice and uses gestures; finishing exactly on time shows rehearsal and control. The same content would land very differently: B's delivery emphasises and involves, A's merely transmits.",
        },
      },
      questions: [
        {
          id: "el10-u4-delivery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Two descriptions of a speech delivery",
          "author": "Examiner's observation notes",
          "source": "Spoken language observation",
          "text": "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time."
},
          stem: "According to the examiner's notes, which speaker finishes at exactly the allotted time?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speaker A"
                    },
                    {
                              "id": "b",
                              "text": "Speaker B"
                    },
                    {
                              "id": "c",
                              "text": "Both speakers"
                    },
                    {
                              "id": "d",
                              "text": "Neither speaker"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Timing",
                              "statement": "Finishing at the allotted time shows control and preparation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speaker B 'finished at exactly the allotted time'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Speaker B.",
          "commonErrors": [
                    "Confusing Speaker A's early finish with good timing."
          ]
},
        },
        {
          id: "el10-u4-delivery-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "Two descriptions of a speech delivery",
          "author": "Examiner's observation notes",
          "source": "Spoken language observation",
          "text": "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time."
},
          stem: "Explain the effect of Speaker B's pauses before each new idea.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pause",
                              "statement": "Deliberate silence builds anticipation and separates ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pauses signal that a new point is coming, giving listeners a moment to reset.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They create emphasis and prevent the speech from blurring into one continuous stream.",
                              "evidence": "paused before each new idea",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The pauses separate ideas and build anticipation, making each new point land more strongly.",
          "commonErrors": [
                    "Describing pauses without linking them to listener attention."
          ]
},
        },
        {
          id: "el10-u4-delivery-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two descriptions of a speech delivery",
          "author": "Examiner's observation notes",
          "source": "Spoken language observation",
          "text": "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time."
},
          stem: "How do gestures and eye contact affect the audience's experience of a speech? Refer to both speakers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Body language",
                              "statement": "Gestures and eye contact shape engagement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speaker B's hand gestures emphasise the statistics, making them more memorable.",
                              "evidence": "used hand gestures to emphasise the statistics",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Speaker A 'rarely looking up from her notes' breaks contact, making the delivery feel distant.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Eye contact and gesture together make listeners feel addressed; their absence makes them passive.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gestures and eye contact involve the audience; Speaker A's note-reading and stillness disengage them.",
          "commonErrors": [
                    "Mentioning gestures without explaining their effect on engagement."
          ]
},
        },
        {
          id: "el10-u4-delivery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two descriptions of a speech delivery",
          "author": "Examiner's observation notes",
          "source": "Spoken language observation",
          "text": "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time."
},
          stem: "Analyse how pace and vocal variety contribute to the effectiveness of Speaker B's delivery compared with Speaker A's.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vocal variety",
                              "statement": "Changes in speed, volume and pitch sustain attention."
                    },
                    {
                              "kind": "skill",
                              "name": "Delivery analysis",
                              "statement": "Delivery choices shape how the message is received."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speaker B 'slowed down for the key points', signalling importance through pace.",
                              "evidence": "slowed down for the key points",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Speaker A 'delivered quickly and quietly throughout', which flattens emphasis and suggests nerves.",
                              "evidence": "quickly and quietly throughout",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Speaker B's 'varied voice' prevents monotony; a single level of pitch would lose listeners.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast shows the same content can persuade or fail depending on delivery.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B's controlled pace and finishing exactly on time suggest rehearsal and confidence.",
                              "evidence": "finished at exactly the allotted time",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "B's varied pace and voice emphasise key points and sustain attention; A's flat, fast delivery undermines the same content.",
          "commonErrors": [
                    "Describing delivery features without comparing their effects."
          ]
},
        },
        {
          id: "el10-u4-delivery-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two descriptions of a speech delivery",
          "author": "Examiner's observation notes",
          "source": "Spoken language observation",
          "text": "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time."
},
          stem: "What do the examiner's notes suggest about the likely confidence and preparation of each speaker? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Delivery as evidence",
                              "statement": "How a speech is delivered reveals preparation and confidence."
                    },
                    {
                              "kind": "technique",
                              "name": "Non-verbal cues",
                              "statement": "Eye contact, pace and timing signal composure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speaker A finishing 'with thirty seconds to spare' suggests she did not pace her speech — poor timing control.",
                              "evidence": "thirty seconds to spare",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reading from notes throughout and rarely looking up suggests dependence on the script, possibly low confidence.",
                              "evidence": "rarely looking up from her notes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Speaker B's exact timing implies rehearsal and practiced pacing.",
                              "evidence": "finished at exactly the allotted time",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B's deliberate pauses and varied delivery show she knows her material well enough to perform it, not just read it.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall the notes contrast an unprepared, nervous delivery with a rehearsed, confident one.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Speaker A appears under-rehearsed and nervous; Speaker B appears well-prepared and confident, as shown by timing, eye contact and controlled delivery.",
          "commonErrors": [
                    "Guessing confidence without citing delivery evidence."
          ]
},
        },
        {
          id: "el10-u4-delivery-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two descriptions of a speech delivery",
          "author": "Examiner's observation notes",
          "source": "Spoken language observation",
          "text": "Speaker A delivered the speech quickly and quietly throughout, rarely looking up from her notes and finishing with thirty seconds to spare.\nSpeaker B slowed down for the key points, paused before each new idea, varied her voice and used hand gestures to emphasise the statistics; she finished at exactly the allotted time."
},
          stem: "Read the examiner's notes on the two deliveries and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three differences in the two speakers' delivery.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of Speaker B's use of pauses and varied voice.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Analyse what Speaker A's delivery suggests about her preparation and confidence.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate which delivery would be more persuasive to a live audience and why.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Non-verbal delivery",
                              "statement": "Pace, pause, gesture and eye contact shape engagement."
                    },
                    {
                              "kind": "context",
                              "name": "Confidence cues",
                              "statement": "Timing and composure signal preparation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pace: A is fast and quiet; B slows for key points.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Eye contact: A rarely looks up; B engages the audience.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Timing: A finishes thirty seconds early; B finishes exactly on time.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pauses before new ideas build anticipation and separate points.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A varied voice prevents monotony and emphasises meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Together they make B's delivery engaging and her statistics memorable.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Finishing early suggests poor pacing and rehearsal.",
                              "evidence": "thirty seconds to spare",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reading notes throughout and little eye contact suggest dependence on the script.",
                              "evidence": "rarely looking up from her notes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The quick, quiet delivery may reflect nervousness, flattening any emphasis.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "B's delivery is far more persuasive because it involves, emphasises and signals confidence.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-1",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Pace, eye contact and timing differ. (b) Pauses and vocal variety emphasise and engage. (c) A's early finish and note-reading suggest poor preparation and low confidence. (d) B's delivery is more persuasive.",
          "commonErrors": [
                    "Listing differences without effects.",
                    "Assuming fast delivery is confident rather than nervous."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u4-structure-delivery-notes",
      title: "Structure and delivery — notes",
      summary: "Speakers signpost structure with markers; delivery (pace, pause, gesture, eye contact) shapes engagement.",
      sections: [
        { heading: "Key idea", body: "Listeners cannot re-read, so spoken texts need explicit signposting and markers." },
        { heading: "Structure", body: "Openings greet and promise; discourse markers move sections; closings recap." },
        { heading: "Delivery", body: "Pace, pause, vocal variety, gestures and eye contact all affect how the message lands." },
      ],
    },
  ],
};
