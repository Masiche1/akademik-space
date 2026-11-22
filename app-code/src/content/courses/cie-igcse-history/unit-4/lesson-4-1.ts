import type { Lesson } from "../../../types.ts";

export const lesson361: Lesson = {
  id: "cieihis-u4-lesson-4-1",
  code: "4-1",
  title: "Historical Skills: Essay Writing and Structured Answers",
  goal: "I CAN write structured historical essays with clear arguments.",
  standards: ["Cambridge IGCSE History 0470", "Paper 3: essay skills"],

  vocabulary: [
    {
      term: "Essay",
      definition: "Structured written argument on historical topic.",
    },
    { term: "Introduction", definition: "Opening paragraph stating argument." },
    { term: "Body paragraphs", definition: "Supporting points with evidence." },
    { term: "Conclusion", definition: "Summary answering the question." },
    { term: "Thesis", definition: "Main argument of essay." },
    { term: "Evidence", definition: "Facts supporting argument." },
  ],
  concepts: [
    {
      id: "cieihis-u4-s1-essay",
      title: "Essay writing",
      skill: "Write structured historical essays.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Introduction: state thesis/argument. Body: each paragraph = one point + evidence + analysis. Conclusion: restate argument, answer question. PEEL structure: Point, Evidence, Explanation, Link.",
          },
          {
            heading: "Good essays",
            body: "Answer the question directly. Use specific evidence. Analyse not just describe. Consider multiple perspectives. Evaluate significance. Clear logical structure.",
          },
        ],
        keyFormulas: [
          { name: "PEEL", statement: "Point, Evidence, Explanation, Link" },
          { name: "Structure", statement: "intro→body→conclusion" },
        ],
        workedExample: {
          problem: "Write essay plan for 'Was the Cold War inevitable?'",
          solution:
            "Intro: thesis — partly inevitable. Body 1: ideological differences. Body 2: power vacuum. Body 3: could have been managed. Conclusion: structural factors made likely but not certain.",
        },
      },
      questions: [
        {
          id: "cieihis-u4-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is PEEL structure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of source",
              },
              {
                id: "b",
                text: "A map skill",
              },
              {
                id: "c",
                text: "Point, Evidence, Explanation, Link",
              },
              {
                id: "d",
                text: "A statistical method",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEEL",
                statement: "Essay paragraph structure.",
              },
            ],
            steps: [
              {
                reasoning: "PEEL = Point, Evidence, Explanation, Link.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Point, Evidence, Explanation, Link",
          },
        },
        {
          id: "cieihs-u4-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the parts of a historical essay?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Essay structure",
                statement: "Intro/body/conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction, body paragraphs, conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each serves specific purpose.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Intro, body, conclusion",
          },
        },
        {
          id: "cieihs-u4-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good historical essay?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay quality",
                statement: "Good essay features.",
              },
            ],
            steps: [
              {
                reasoning: "Answers question directly, uses evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyses not just describes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear structure, considers perspectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct answer, evidence, analysis",
          },
        },
        {
          id: "cieihs-u4-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define essay, introduction, body paragraphs, conclusion, thesis, evidence. (b) What is PEEL? (c) What are essay parts? (d) What makes good essay? (e) How do you write introduction? (f) How do you write conclusion? (g) What is thesis? (h) Write essay plan for 'Was the Cold War inevitable?'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay writing",
                statement: "Structure, skills.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Point, Evidence, Explanation, Link.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Intro, body, conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Answer, evidence, analysis, structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) State thesis/argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Restate argument, answer question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Main argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid essay plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Essay writing skills.",
          },
        },
        {
          id: "cieihs-u4-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should an essay introduction mainly do?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Give the full conclusion in advance",
              },
              {
                id: "b",
                text: "List every fact the candidate knows",
              },
              {
                id: "c",
                text: "Quote the question word for word",
              },
              {
                id: "d",
                text: "State the thesis or main argument",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction",
                statement: "States the thesis.",
              },
            ],
            steps: [
              {
                reasoning: "The introduction states the thesis/argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** State the thesis or main argument",
          },
        },
        {
          id: "cieihs-u4-es-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many elements does the PEEL paragraph structure have?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEEL",
                statement: "Point, Evidence, Explanation, Link.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PEEL has four elements: Point, Evidence, Explanation, Link.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cieihs-u4-es-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between description and analysis in a historical essay.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis vs description",
                statement: "Analysis explains significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Description recounts what happened; analysis explains why it matters or what effects it caused.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners reward analysis — evidence must be linked to the argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Analysis explains significance; description only recounts events",
          },
        },
        {
          id: "cieihs-u4-es-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest topic sentence for a body paragraph?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Historians have written about this event.",
              },
              {
                id: "b",
                text: "The treaty was signed in 1919.",
              },
              {
                id: "c",
                text: "Although the treaty addressed some grievances, it failed to solve the central problem of reparations.",
              },
              {
                id: "d",
                text: "There were many problems after the war.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Topic sentence",
                statement: "States the paragraph's argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A strong topic sentence makes an arguable point, not just a fact.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Although the treaty addressed some grievances, it failed to solve the central problem of reparations.",
          },
        },
        {
          id: "cieihs-u4-es-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Using PEEL, outline how you would structure one body paragraph arguing that economic factors caused WWII.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEEL",
                statement: "Point, Evidence, Explanation, Link.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point: economic problems (reparations, Depression) created conditions for war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence + Explanation: specific facts (hyperinflation 1923, unemployment 1930s) explained, not just listed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Link: connect back to the thesis that economic factors were a major cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Point → evidence with explanation → link to thesis",
          },
        },
        {
          id: "cieihs-u4-es-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main job of an essay conclusion?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Repeat the introduction word for word",
              },
              {
                id: "b",
                text: "Restate the thesis and answer the question directly",
              },
              {
                id: "c",
                text: "List all the sources used",
              },
              {
                id: "d",
                text: "Introduce a brand-new argument",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement: "Restates argument, answers question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The conclusion restates the argument and answers the question.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Restate the thesis and answer the question directly",
          },
        },
        {
          id: "cieihs-u4-es-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A candidate has 45 minutes to answer 3 essay questions of equal value. How many minutes should each essay take (assuming equal time)?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 15,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Divide time equally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "45 minutes divided equally by 3 essays gives 15 minutes per essay.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cieihs-u4-es-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An essay plan has 1 introduction, 4 body paragraphs and 1 conclusion. (a) How many body paragraphs are planned? (b) How many paragraphs does the essay have in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 6,
              },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay structure",
                statement: "Intro + body + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "(a) The plan has 4 body paragraphs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Total = 1 introduction + 4 body + 1 conclusion = 6 paragraphs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 4  (b) 6",
          },
        },
        {
          id: "cieihs-u4-es-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement counts as evidence rather than opinion in an essay on the Cold War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "In my view communism always fails.",
              },
              {
                id: "b",
                text: "The Truman Doctrine of 1947 committed the USA to containing communist expansion.",
              },
              {
                id: "c",
                text: "Everyone knows the USSR was evil.",
              },
              {
                id: "d",
                text: "The Cold War was definitely the worst event ever.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence",
                statement: "Specific facts supporting argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence is a specific, checkable fact; opinions cannot be verified.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** The Truman Doctrine of 1947 committed the USA to containing communist expansion.",
          },
        },
        {
          id: "cieihs-u4-es-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main parts does a standard historical essay structure have (introduction, body, conclusion)?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Essay structure",
                statement: "Intro, body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A standard essay has three parts: introduction, body, conclusion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cieihs-u4-es-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which introduction is the weakest for the question 'Was the Cold War inevitable?'",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "I will argue that the decisions of leaders mattered as much as underlying structure.",
              },
              {
                id: "b",
                text: "Although structural factors made conflict likely, the Cold War was not inevitable — diplomatic choices could have prevented it.",
              },
              {
                id: "c",
                text: "The period 1945-1991 saw intense rivalry between the USA and the USSR.",
              },
              {
                id: "d",
                text: "This essay will discuss the Cold War.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction quality",
                statement: "Must state a clear thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A good introduction states a thesis; 'this essay will discuss' gives no argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** This essay will discuss the Cold War.",
          },
        },
        {
          id: "cieihs-u4-es-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define thesis and evidence. (b) What is a topic sentence? (c) How does PEEL differ from simple description? (d) What makes an introduction effective? (e) Why is a conclusion that introduces new evidence weak? (f) Write a one-sentence thesis for 'Was decolonisation a success?' (g) Identify the PEEL element missing from: 'In 1949 China became communist. This showed Soviet influence in Asia was growing.' (h) Plan a 3-paragraph essay on 'Was WWII inevitable?'",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay writing",
                statement: "Advanced essay technique.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Thesis = main argument; evidence = supporting facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Topic sentence states the paragraph's argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) PEEL adds explanation and link to the argument, not just facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Clear thesis, context, and signposting of the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) New evidence belongs in the body — conclusions should synthesise, not add material.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Valid one-sentence thesis, e.g. 'Decolonisation achieved political independence but left many states economically dependent.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) The Explanation element is missing — the evidence is stated but not analysed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Valid plan: thesis + three supported points + conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Advanced essay writing skills.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u4-es-notes",
      title: "Essay writing — notes",
      summary:
        "PEEL=Point, Evidence, Explanation, Link. Structure: intro→body→conclusion. Answer question directly.",
      sections: [
        {
          heading: "Key idea",
          body: "Good essays have clear thesis, evidence-based arguments, logical structure.",
        },
        {
          heading: "Analysis",
          body: "Go beyond description — explain significance, evaluate perspectives.",
        },
      ],
    },
  ],
};
