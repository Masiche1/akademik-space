import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipg-u1-lesson-1-1",
  code: "1-1",
  title: "Stage 1 — Asking Questions and Finding Information",
  goal: "I CAN ask questions about a topic and find simple information from provided sources.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 1: research", "Cambridge Primary Global Perspectives 0838 strand: Research"],
  stage: 1,
  vocabulary: [
    { term: "Research", definition: "Finding out information about a topic." },
    { term: "Question", definition: "Something you want to find out." },
    { term: "Source", definition: "Where information comes from — book, picture, person." },
    { term: "Topic", definition: "The subject you are finding out about." },
    { term: "Fact", definition: "Something true that can be checked." },
    { term: "Answer", definition: "What you find out from research." },
  ],
  concepts: [
    {
      id: "cipg-u1-s1-research",
      title: "Asking questions and finding information",
      skill: "Form simple research questions and gather information at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Why research?",
            body: "Global Perspectives starts with curiosity — asking questions about the world around us. Good research begins with a clear question: 'What do pandas eat?' or 'Why is the sky blue?'",
          },
          {
            heading: "Finding information",
            body: "At Stage 1, sources are provided — picture books, simple texts, websites chosen by your teacher. Look at pictures, listen to words, and record what you find using simple charts or drawings.",
          },
        ],
        keyFormulas: [
          { name: "Research question", statement: "clear question about a topic" },
          { name: "Source", statement: "where information comes from" },
        ],
        workedExample: {
          problem: "Topic: 'Our school garden'. Write one research question and name a source.",
          solution: "Question: 'What plants grow in our garden?' Source: look at the garden itself / a picture book about plants.",
        },
      },
      questions: [
        {
          id: "cipg-u1-rq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Finding out information about a topic"
                    },
                    {
                              "id": "b",
                              "text": "Writing a story"
                    },
                    {
                              "id": "c",
                              "text": "Drawing pictures"
                    },
                    {
                              "id": "d",
                              "text": "Playing a game"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Research",
                              "statement": "Finding information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research = gathering information on a topic.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Finding information"
},
        },
        {
          id: "cipg-u1-rq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one good research question about animals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research questions",
                              "statement": "Clear, focused questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear question, e.g. 'What do rabbits eat?'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "About animals specifically.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. 'What do rabbits eat?'"
},
        },
        {
          id: "cipg-u1-rq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a source? Name two simple sources a Stage 1 child could use for research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sources",
                              "statement": "Information origins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Source = where information comes from.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Two valid: picture book, provided website, teacher, picture cards.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. book + picture cards"
},
        },
        {
          id: "cipg-u1-rq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define research. (b) What is a research question? (c) Write a research question about your school. (d) Name three sources you could use. (e) What is a fact? (f) How would you record what you find at Stage 1? (g) Why is asking questions important? (h) Design a mini-research plan: topic, question, source, recording method.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research basics",
                              "statement": "Questions, sources, recording."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Finding information on a topic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Clear question you want answered.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid school-related question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three sources: book, website, person.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Checkable true information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Pictograms, drawings, simple charts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Curiosity leads to learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Coherent mini-plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Research questions, sources, recording, planning."
},
        },
        {
          id: "cipg-u1-rq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a fact?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true that can be checked"
                    },
                    {
                              "id": "b",
                              "text": "A guess you have not checked"
                    },
                    {
                              "id": "c",
                              "text": "A story someone made up"
                    },
                    {
                              "id": "d",
                              "text": "An opinion about something"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fact",
                              "statement": "True, checkable information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fact = true information that can be checked.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Something true that can be checked"
},
        },
        {
          id: "cipg-u1-rq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things you need before you start researching a topic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Starting research",
                              "statement": "Topic and sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. a clear topic/question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. sources to look at.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. topic + sources"
},
        },
        {
          id: "cipg-u1-rq-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Your topic is 'My favourite food'. Write one research question about it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research questions",
                              "statement": "Clear, focused questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid question, e.g. 'Why do I like pizza?' or 'Where does rice come from?'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Question is about favourite food.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. 'Where does rice come from?'"
},
        },
        {
          id: "cipg-u1-rq-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a research question and an answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Question vs answer",
                              "statement": "Question asks; answer tells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A question is what you want to find out.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "An answer is what you find out from sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: 'What do pandas eat?' → 'bamboo'.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Question asks; answer tells what you found"
},
        },
        {
          id: "cipg-u1-rq-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important for a research topic to be clear and focused? Give an example of a topic that is too broad.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Focused topics",
                              "statement": "Clear topics give clear answers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A focused topic is easier to research and record.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Broad topic = too much information to cover.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid broad example, e.g. 'Animals' instead of 'Pandas'.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Focused = easier; broad topic example given"
},
        },
        {
          id: "cipg-u1-rq-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best research question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Are animals nice?"
                    },
                    {
                              "id": "b",
                              "text": "What do pandas eat?"
                    },
                    {
                              "id": "c",
                              "text": "Tell me everything"
                    },
                    {
                              "id": "d",
                              "text": "I like zoo animals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Research questions",
                              "statement": "Clear, focused questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Best question is clear and focused on one thing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "What do pandas eat?"
},
        },
        {
          id: "cipg-u1-rq-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Plan a mini-research project on 'Weather in our town'. Write: (a) your topic, (b) one research question, (c) two sources you could use, (d) how you will record what you find.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research planning",
                              "statement": "Topic, question, sources, recording."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Topic stated clearly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid weather question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two valid sources, e.g. weather chart + teacher.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Simple recording method, e.g. pictogram or drawing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Topic, question, sources, recording method."
},
        },
        {
          id: "cipg-u1-rq-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Your teacher gives you a picture book about butterflies. List two things you can do with it to find information for your research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Using sources",
                              "statement": "Read, look at pictures, note facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. read the words in the book.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. look at the pictures carefully.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. write or draw what you find.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. ask the teacher questions about it.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Read, look at pictures, record, ask teacher"
},
        },
        {
          id: "cipg-u1-rq-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A friend says 'Research is just looking at pictures'. Explain why good research needs more than just looking at pictures.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Research depth",
                              "statement": "Questions, sources, recording."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research starts with a clear question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "You use more than one source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "You record what you find.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "You check that information is a fact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear reasoning linking to the friend's claim.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Question, sources, recording, checking facts"
},
        },
        {
          id: "cipg-u1-rq-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) What is a source? (b) Give three different sources you could use. (c) What makes information a 'fact'? (d) How could you record your findings simply? (e) Why is recording important? (f) What should you do if two sources disagree?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research basics",
                              "statement": "Sources, facts, recording, checking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Where information comes from.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three sources: book, website, person, pictures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) True and can be checked.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Drawings, pictograms, simple charts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) So you can remember and share what you found.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Check more sources or ask the teacher.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sources, facts, recording, checking."
},
        },
        {
          id: "cipg-u1-rq-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Mia wants to research 'Sharks'. Her plan: (1) topic 'Animals', (2) question 'Are sharks scary?', (3) only source is one cartoon website, (4) she will not write anything down. For each part, say what is good or could be better.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluating research",
                              "statement": "Focused topic, clear question, good sources, recording."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(1) 'Animals' is too broad; 'Sharks' is better.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(2) Question should ask for facts, not feelings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(3) One cartoon website is not enough; use more reliable sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(4) She must record findings with drawings or notes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear judgement of each part.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Suggests improvements for the plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Topic too broad; weak question; few sources; no recording."
},
        },
        {
          id: "cipg-u1-rq-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define research and fact. (b) Write a clear research question about a topic you choose. (c) Name two reliable sources for your question. (d) How will you record what you find? (e) What will you do if your sources disagree? (f) How will you know your answer is a fact? (g) How will you share your findings? (h) What is the most important thing to remember about research?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Full research cycle",
                              "statement": "Question → sources → record → check → share."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Research=finding information; fact=checkable truth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Clear, focused question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two appropriate sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Pictogram, drawing or chart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Check more sources or ask teacher.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) It can be checked and is true.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Talk, show pictures or draw findings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Start with a clear question.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Full research cycle understood."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-rq-notes",
      title: "Asking questions — notes",
      summary: "Research = asking questions + finding information from sources. Record simply: drawings, pictograms.",
      sections: [
        { heading: "Key idea", body: "Start with a clear question, then gather information." },
        { heading: "Stage 1", body: "Use provided sources; record with pictures and simple charts." },
      ],
    },
  ],
};
