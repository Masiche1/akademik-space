import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cils-c-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 8 — Introduction to Text-Based Programming",
  goal: "I CAN write simple programs in a text language like Python.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 8,
  vocabulary: [
    { term: "Syntax", definition: "The rules of a programming language's grammar." },
    { term: "print()", definition: "Python function outputting text." },
    { term: "input()", definition: "Python function reading user input." },
    { term: "Indentation", definition: "Spaces showing code blocks — Python requires it." },
    { term: "Comment", definition: "# notes ignored by the computer." },
    { term: "Error message", definition: "Program's report of what went wrong." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s6-python",
      title: "Text-based programming basics",
      skill: "Write simple Python programs with print, input and comments at Stage 8 level.",
      lesson: {
        sections: [
          {
            heading: "From blocks to text",
            body: "Text languages like Python write instructions as words and symbols. print('Hello') outputs text; name = input('Name? ') reads input. Indentation (spaces) shows code blocks — Python requires it for IF and loops.",
          },
          {
            heading: "Reading errors",
            body: "Syntax errors show line numbers and messages: 'SyntaxError: expected ':'' means missing colon. Read the message, fix the line, rerun. Comments (#) explain code without affecting it.",
          },
        ],
        keyFormulas: [
          { name: "print()", statement: "output text" },
          { name: "input()", statement: "read user input" },
          { name: "#", statement: "comment" },
        ],
        workedExample: {
          problem: "Write Python: ask name, greet them, say their name has N letters.",
          solution: "name = input('Name? ')\nprint('Hello ' + name)\nprint('You have', len(name), 'letters')",
        },
      },
      questions: [
        {
          id: "cils-c-u1-py-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does print('Hi') do in Python?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Outputs 'Hi' to the screen"
                    },
                    {
                              "id": "b",
                              "text": "Saves to a file"
                    },
                    {
                              "id": "c",
                              "text": "Asks for input"
                    },
                    {
                              "id": "d",
                              "text": "Deletes text"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "print()",
                              "statement": "Output function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "print outputs to console.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Outputs text"
},
        },
        {
          id: "cils-c-u1-py-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is indentation in Python and why does it matter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Indentation",
                              "statement": "Code blocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spaces showing which lines belong to a block.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Python uses it for IF/loops — wrong indent = error.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Block structure; errors if wrong"
},
        },
        {
          id: "cils-c-u1-py-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write Python to ask for age, then print 'adult' if >=18 else 'minor'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Python basics",
                              "statement": "Input + IF/ELSE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "age = int(input('Age? '))",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "if age >= 18: print('adult') else: print('minor').",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct indentation shown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Valid Python with input+IF"
},
        },
        {
          id: "cils-c-u1-py-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define syntax, print(), input(), indentation, comment, error message. (b) Write Python printing your name 3 times. (c) What does # do? (d) Why convert input to int? (e) Write Python: ask 2 numbers, print sum. (f) What error if you forget ':'? (g) How do you fix an error message? (h) Write a comment explaining your code.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Python",
                              "statement": "Syntax, I/O, errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid repeat loop or 3 prints.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Comment — ignored by Python.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) input gives string; int needed for maths.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid sum program.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) SyntaxError: expected ':'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Read line number, fix syntax, rerun.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid explanatory comment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Python basics: print, input, IF, errors."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-py-notes",
      title: "Python basics — notes",
      summary: "print=output, input=read, #=comment, indentation=blocks. Read error messages for line numbers.",
      sections: [
        { heading: "Key idea", body: "Text languages need exact syntax — errors tell you where." },
        { heading: "Tip", body: "Always convert input() to int/float for maths." },
      ],
    },
  ],
};
