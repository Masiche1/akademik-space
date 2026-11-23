import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "el10-u5-lesson-5-1",
  code: "5-1",
  title: "Standard English, Grammar and Punctuation",
  goal: "I CAN distinguish standard and non-standard English and apply accurate grammar and punctuation.",
  standards: ["4EA1 Paper 1", "4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO5"],
  
  vocabulary: [
    { term: "Standard English", definition: "The formally accepted variety of English used in education, media and formal writing." },
    { term: "Dialect", definition: "A regional or social variety of English with its own vocabulary and grammar." },
    { term: "Register", definition: "The level of formality appropriate to context; Standard English suits formal contexts." },
    { term: "Comma splice", definition: "Joining two complete sentences with only a comma, which is incorrect." },
    { term: "Apostrophe", definition: "Punctuation mark showing possession or contraction, as in 'it's' for 'it is'." },
    { term: "Sentence variety", definition: "Mixing simple, compound and complex sentences for effective writing." },
  ],
  concepts: [
    {
      id: "el10-u5-standard-english",
      title: "Standard and non-standard English",
      skill: "Distinguish standard and non-standard English and explain when each is appropriate.",
      lesson: {
        sections: [
          {
            heading: "What is Standard English?",
            body: "**Standard English** is the formally accepted variety used in education, exams, media and formal writing. It has agreed grammar rules: 'I did it', not 'I done it'; 'we were', not 'we was'. It is not better than other varieties — it is the variety expected in formal contexts.",
          },
          {
            heading: "Dialect and non-standard forms",
            body: "**Dialects** are regional or social varieties with their own grammar and vocabulary ('we was going', 'I done it', 'ain't'). They are not wrong; they are appropriate in informal, familiar contexts. Non-standard forms become errors only when used in contexts expecting Standard English, such as exams and formal letters.",
          },
          {
            heading: "Context decides",
            body: "The same speaker might text 'im running late' to a friend but write 'I am running late' in a job application. The choice is **register**: informal for friends, formal for authority. Exam answers and transactional writing require Standard English to be judged accurate.",
          },
        ],
        keyFormulas: [
          { name: "Standard English", statement: "The formally accepted variety required in education and formal writing." },
          { name: "Dialect", statement: "A regional/social variety; appropriate informally, not in formal contexts." },
          { name: "Register", statement: "Formality level chosen to suit audience and purpose." },
        ],
        workedExample: {
          problem: "A student writes 'Me and my friend we was going to the park' in a formal essay. Identify the non-standard features and correct them.",
          solution: "Non-standard features: 'Me and my friend' should be 'My friend and I' (subject pronoun needed); 'we was' should be 'we were' (Standard English agreement). Corrected: 'My friend and I were going to the park.' In a text message to a friend, the original might be acceptable, but in an essay Standard English is required.",
        },
      },
      questions: [
        {
          id: "el10-u5-standard-english-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses Standard English?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "We was going to the park."
                    },
                    {
                              "id": "b",
                              "text": "We were going to the park."
                    },
                    {
                              "id": "c",
                              "text": "Us was going to the park."
                    },
                    {
                              "id": "d",
                              "text": "We be going to the park."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Standard English",
                              "statement": "Formally accepted grammar required in formal contexts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'We were' is the standard past tense of 'be'; the others are non-standard.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 'We were going to the park.'",
          "commonErrors": [
                    "Choosing a dialect form as if it were standard."
          ]
},
        },
        {
          id: "el10-u5-standard-english-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between dialect and Standard English, and why dialect is not simply 'wrong'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dialect vs Standard",
                              "statement": "Both are systematic varieties; context determines appropriateness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialect is a regional/social variety with its own consistent grammar and vocabulary.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It is appropriate in informal contexts; Standard English is required in formal ones — neither is inherently superior.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Dialect and Standard English are different varieties; dialect is valid informally but not in formal writing.",
          "commonErrors": [
                    "Calling dialect ungrammatical or inferior."
          ]
},
        },
        {
          id: "el10-u5-standard-english-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes 'We was going to the park.' Correct it to Standard English and explain when the original form might be acceptable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Correcting non-standard forms",
                              "statement": "Standard English is required in formal contexts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct to 'We were going to the park.' — 'were' is the standard past of 'be'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'We was' is a dialect form, common in informal spoken and written contexts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It would be acceptable in a text to a friend but not in an exam answer or formal letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Correct to 'We were going to the park'; 'we was' is acceptable only informally.",
          "commonErrors": [
                    "Correcting without explaining context, or saying dialect is always wrong."
          ]
},
        },
        {
          id: "el10-u5-standard-english-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Job application letter",
          "author": "Student applicant",
          "source": "Transactional writing extract",
          "text": "Dear Ms Khan,\nI am writing to apply for the position of Library Assistant advertised in the Gazette. I have attached my CV and would be grateful for the opportunity to discuss my application at your convenience.\nYours faithfully,\nA. Rahman"
},
          stem: "Compare the register of the job application letter with the text message. Explain why the difference is appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Register",
                              "statement": "Formality level is chosen to suit audience and purpose."
                    },
                    {
                              "kind": "context",
                              "name": "Audience",
                              "statement": "Formal writing to employers requires Standard English."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The letter uses Standard English: complete sentences, formal vocabulary ('position', 'advertised', 'convenience').",
                              "evidence": "I am writing to apply for the position",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It follows formal conventions: 'Dear Ms Khan', 'Yours faithfully', structured paragraphs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The text message is informal: abbreviations ('im', 'ill'), no punctuation, casual apology.",
                              "evidence": "sorry im running late 4 the interview",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast is appropriate: the employer expects formal Standard English; a friend expects casual informality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Using the text-message register in the application would undermine the applicant's credibility.",
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
          "finalAnswer": "The letter's formal Standard English suits an employer; the message's informal register suits a friend. The difference is contextually appropriate.",
          "commonErrors": [
                    "Describing registers without linking them to audience and purpose."
          ]
},
        },
        {
          id: "el10-u5-standard-english-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Text message to a friend",
          "author": "Student",
          "source": "Digital communication extract",
          "text": "hi, sorry im running late 4 the interview, train is delayed. ill be there soon as i can, so sorry! a"
},
          stem: "The text message uses non-standard forms ('im', 'ill', '4'). Explain why these are acceptable here but would not be in a job application, and what this reveals about language variation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Contextual appropriateness",
                              "statement": "The same form can be right in one context and wrong in another."
                    },
                    {
                              "kind": "definition",
                              "name": "Language variation",
                              "statement": "English varies by context, audience and medium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abbreviations and missing apostrophes are normal in texting, where speed and informality are expected.",
                              "evidence": "sorry im running late",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The recipient is a friend who will understand the casual register instantly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "In a job application, such forms would signal carelessness and lack of professionalism.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This shows language is not simply correct or incorrect; appropriateness depends on context.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Speakers and writers command a range of varieties and choose the one that fits.",
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
          "finalAnswer": "Texting abbreviations are acceptable to friends but not employers; appropriateness depends on context, revealing that English varies by situation.",
          "commonErrors": [
                    "Declaring abbreviations always wrong rather than context-dependent."
          ]
},
        },
        {
          id: "el10-u5-standard-english-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Read the two extracts and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two features of Standard English in the job application letter.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify two non-standard or informal features in the text message.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why each register is appropriate for its audience.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate what would happen if the student used the text-message register in the job application.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Register appropriateness",
                              "statement": "Formality must match audience and purpose."
                    },
                    {
                              "kind": "definition",
                              "name": "Standard English",
                              "statement": "The formally accepted variety required in formal contexts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Complete, grammatically correct sentences with standard verb forms.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Formal vocabulary and conventions: 'position', 'convenience', 'Yours faithfully'.",
                              "evidence": "would be grateful for the opportunity",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Missing apostrophes and abbreviations: 'im', 'ill', '4'.",
                              "evidence": "im running late 4 the interview",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Casual tone and minimal punctuation suited to texting.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "The letter's formal register respects the employer's expectations and the seriousness of a job application.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The message's informal register suits a friend and the speed of texting.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each is appropriate because register follows audience and medium.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "The employer would likely reject it as careless and unprofessional.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "It would undermine the applicant's credibility regardless of qualifications.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "The contrast proves that accuracy and appropriateness, not just content, determine success.",
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
                              "marks": "1-2",
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
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Standard sentences and formal conventions. (b) Abbreviations and casual tone. (c) Each register suits its audience and medium. (d) Using informal register would damage credibility and likely lose the application.",
          "commonErrors": [
                    "Describing features without linking to audience.",
                    "Judging informal features as always wrong."
          ]
},
        },
      ],
    },
    {
      id: "el10-u5-grammar-punctuation",
      title: "Grammar and punctuation for accuracy",
      skill: "Apply accurate grammar and punctuation in formal writing.",
      lesson: {
        sections: [
          {
            heading: "Common grammar errors",
            body: "Watch for **subject-verb agreement** ('she was' not 'she were'), **pronoun case** ('my friend and I' not 'me and my friend' as subject), **tense consistency** and **apostrophe errors** ('its' possessive vs 'it's' = it is). Read each sentence aloud to check agreement.",
          },
          {
            heading: "Punctuation that shapes meaning",
            body: "Punctuation is not decoration; it controls meaning. 'Let's eat Grandma' vs 'Let's eat, Grandma' — the comma decides whether Grandma is dinner or a dinner guest. 'I saw the man with the telescope' is ambiguous: who had the telescope? The comma 'I saw the man, with the telescope' clarifies the speaker did. A **comma splice** joins two sentences with only a comma — fix with a full stop, semicolon or conjunction.",
          },
          {
            heading: "Checking your work",
            body: "After writing, proofread in passes: first for **spelling**, then **grammar and punctuation**, then **meaning**. Read aloud to catch errors the eye skips. In exams, accuracy in Sentence 1 builds the foundation for higher-band responses.",
          },
        ],
        keyFormulas: [
          { name: "Comma splice", statement: "Two complete sentences joined by only a comma — use a full stop, semicolon or conjunction." },
          { name: "its / it's", statement: "'its' = belonging to it; 'it's' = it is." },
          { name: "Ambiguity", statement: "Punctuation can change meaning: 'eat Grandma' vs 'eat, Grandma'." },
        ],
        workedExample: {
          problem: "Correct this sentence and explain the punctuation change: 'I saw the man with the telescope.'",
          solution: "Without punctuation the sentence is ambiguous — the man may have had the telescope. Adding commas clarifies: 'I saw the man, with the telescope.' Now the speaker is the one with the telescope. Alternatively, 'I saw the man with the telescope' could mean the man had it; context decides which meaning is intended.",
        },
      },
      questions: [
        {
          id: "el10-u5-grammar-punctuation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is punctuated correctly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Its raining, so were staying inside."
                    },
                    {
                              "id": "b",
                              "text": "It's raining, so we're staying inside."
                    },
                    {
                              "id": "c",
                              "text": "Its raining so were staying inside."
                    },
                    {
                              "id": "d",
                              "text": "It's raining so were staying inside."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "its / it's",
                              "statement": "'it's' = it is; 'its' = belonging to it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'It's' is needed for 'it is'; 'we're' for 'we are'; the comma separates the clauses.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "**(b)** It's raining, so we're staying inside.",
          "commonErrors": [
                    "Confusing 'its' and 'it's', or 'were' and 'we're'."
          ]
},
        },
        {
          id: "el10-u5-grammar-punctuation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'I like pasta, I eat it every day' is incorrect and how to fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comma splice",
                              "statement": "Two complete sentences joined by only a comma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two independent clauses ('I like pasta' / 'I eat it every day') are joined by only a comma — a comma splice.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Fix with a full stop ('I like pasta. I eat it every day'), semicolon, or conjunction ('because').",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "It is a comma splice; fix with a full stop, semicolon or conjunction.",
          "commonErrors": [
                    "Calling it correct because the ideas are related."
          ]
},
        },
        {
          id: "el10-u5-grammar-punctuation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct the errors in this sentence and name each error type: 'Me and him was going too the park its to late.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error correction",
                              "statement": "Grammar errors fall into recognisable categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Me and him' → 'He and I' (subject pronoun case).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'was' → 'were' (subject-verb agreement); 'too' → 'to' (spelling/preposition); 'its' → 'it's' (contraction).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Corrected: 'He and I were going to the park; it's too late.'",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'He and I were going to the park; it's too late.' Errors: pronoun case, agreement, spelling, apostrophe.",
          "commonErrors": [
                    "Missing the 'its/it's' or 'too/to' errors."
          ]
},
        },
        {
          id: "el10-u5-grammar-punctuation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Punctuation and meaning",
          "author": "Language exercise",
          "source": "Grammar extract",
          "text": "Let's eat Grandma.\nLet's eat, Grandma.\nI saw the man with the telescope.\nI saw the man, with the telescope."
},
          stem: "Explain how punctuation changes the meaning of the two pairs of sentences in the extract.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation and meaning",
                              "statement": "Marks control how a sentence is parsed."
                    },
                    {
                              "kind": "skill",
                              "name": "Ambiguity",
                              "statement": "Unclear punctuation creates multiple possible readings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Let's eat Grandma' reads as an instruction to eat Grandma (horror); 'Let's eat, Grandma' addresses Grandma as a dinner guest.",
                              "evidence": "Let's eat Grandma.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'I saw the man with the telescope' is ambiguous — who had the telescope?",
                              "evidence": "I saw the man with the telescope.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'I saw the man, with the telescope' clarifies the speaker had the telescope.",
                              "evidence": "I saw the man, with the telescope.",
                              "marks": 2,
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
          "finalAnswer": "Punctuation decides whether Grandma is food or guest, and who owns the telescope; marks control meaning.",
          "commonErrors": [
                    "Ignoring the semantic shift caused by the comma."
          ]
},
        },
        {
          id: "el10-u5-grammar-punctuation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss how grammatical and punctuation accuracy affects the credibility of a student's transactional writing (e.g., a letter of application).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Accuracy and credibility",
                              "statement": "Errors signal carelessness to the reader."
                    },
                    {
                              "kind": "skill",
                              "name": "Accuracy",
                              "statement": "Correct grammar and punctuation are expected in formal writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Errors such as 'their/there' confusion or comma splices make the writer seem careless.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "In a job application, accuracy errors can cost the candidate the position regardless of merit.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Correct punctuation also prevents ambiguity, ensuring the message is understood as intended.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Accuracy builds trust: a reader who sees careful writing trusts the content.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "In exams, accuracy in Sentence 1 underpins higher-band responses.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Therefore accuracy is not optional polish but a core requirement of formal transactional writing.",
                              "marks": 1,
                              "markCode": "AO4"
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
          "finalAnswer": "Accuracy errors damage credibility and can lose opportunities; correct grammar and punctuation are essential in formal writing.",
          "commonErrors": [
                    "Treating accuracy as secondary to content."
          ]
},
        },
        {
          id: "el10-u5-grammar-punctuation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "A student's draft paragraph",
          "author": "Year 10 student",
          "source": "Editing exercise",
          "text": "The essay was wrote by me last week and it was very good. Me and my friend we went to the library and done some research. Their going to help me with the presentation. Its important to revise you're notes before hand."
},
          stem: "Read the flawed paragraph and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three grammatical errors in the paragraph.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Correct the paragraph fully.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain the effect of the errors on a reader's impression.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe a proofreading strategy to avoid such errors.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading",
                              "statement": "Systematic checking catches grammar, spelling and punctuation errors."
                    },
                    {
                              "kind": "context",
                              "name": "Accuracy",
                              "statement": "Errors damage credibility in formal writing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'was wrote' → passive/verb error; should be 'was written' or 'I wrote'.",
                              "evidence": "The essay was wrote by me",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'Me and my friend' → 'My friend and I' (pronoun case).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'done' → 'did' (tense); 'Their' → 'They're' (they are); 'Its' → 'It's'; 'you're' → 'your'.",
                              "evidence": "Its important to revise you're notes",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'The essay was written by me last week and it was very good.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'My friend and I went to the library and did some research.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'They're going to help me with the presentation.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "b",
                              "reasoning": "'It's important to revise your notes beforehand.'",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "part": "c",
                              "reasoning": "Errors make the writer seem careless and undermine trust in the content.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Repeated errors suggest weak language control, lowering the overall impression.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "d",
                              "reasoning": "Proofread in passes: spelling, then grammar/punctuation, then meaning; read aloud.",
                              "marks": 1,
                              "markCode": "AO5"
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
                              "marks": "1-4",
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
                              "marks": "1-2",
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
          "finalAnswer": "(a) Verb error, pronoun case, tense and homophone errors. (b) Fully corrected paragraph. (c) Errors damage credibility. (d) Proofread in passes and read aloud.",
          "commonErrors": [
                    "Correcting some errors but missing homophones.",
                    "Not explaining the effect on the reader."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u5-standard-grammar-notes",
      title: "Standard English and accuracy — notes",
      summary: "Standard English is required in formal contexts; dialect is valid informally. Accuracy in grammar and punctuation protects credibility.",
      sections: [
        { heading: "Key idea", body: "Language varies by context; appropriateness, not inherent correctness, determines the right variety." },
        { heading: "Standard English", body: "Required in exams and formal writing; dialect and abbreviations are fine informally." },
        { heading: "Accuracy", body: "Proofread for spelling, grammar and punctuation; errors damage credibility and clarity." },
      ],
    },
  ],
};
