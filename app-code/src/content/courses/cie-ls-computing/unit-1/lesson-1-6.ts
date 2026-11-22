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
                              "text": "Deletes text"
                    },
                    {
                              "id": "b",
                              "text": "Saves to a file"
                    },
                    {
                              "id": "c",
                              "text": "Outputs 'Hi' to the screen"
                    },
                    {
                              "id": "d",
                              "text": "Asks for input"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cils-c-u1-py-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does name = input('Name? ') return to the program?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number"
                    },
                    {
                              "id": "b",
                              "text": "A string of whatever the user types"
                    },
                    {
                              "id": "c",
                              "text": "A list"
                    },
                    {
                              "id": "d",
                              "text": "A Boolean"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "input()",
                              "statement": "Reads user input as string."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "input() always returns text — a string.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "String"
},
        },
        {
          id: "cils-c-u1-py-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does print(3 + 4) output?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 7 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "print()",
                              "statement": "Evaluates expression then outputs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "3 + 4 = 7, printed to screen.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7"
},
        },
        {
          id: "cils-c-u1-py-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "x = 5; x = x + 2; print(x). What is printed?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 7 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Variables",
                              "statement": "Assignment updates value."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 + 2 = 7.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7"
},
        },
        {
          id: "cils-c-u1-py-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write Python code that asks the user for a number and prints double that number.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Python basics",
                              "statement": "input, int, print."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n = int(input('Number? '))",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "print(n * 2)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct syntax and indentation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Valid Python doubling program"
},
        },
        {
          id: "cils-c-u1-py-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why convert input with int() before doing maths, e.g. age = int(input('Age? '))?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Python requires it for print()"
                    },
                    {
                              "id": "b",
                              "text": "input() returns a string; int() makes it a number"
                    },
                    {
                              "id": "c",
                              "text": "int() makes the program faster"
                    },
                    {
                              "id": "d",
                              "text": "It hides the input from the user"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Type conversion",
                              "statement": "input gives string; int gives number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maths on strings fails or concatenates — convert first.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "String → number"
},
        },
        {
          id: "cils-c-u1-py-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "n = 4. What does print(n * 2 + n) output?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Expressions",
                              "statement": "Evaluate arithmetic."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 * 2 + 4 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u1-py-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A program has 'if age > 18' with no colon at the end of the line. What error occurs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "SyntaxError: expected ':'"
                    },
                    {
                              "id": "b",
                              "text": "It runs normally"
                    },
                    {
                              "id": "c",
                              "text": "NameError"
                    },
                    {
                              "id": "d",
                              "text": "ZeroDivisionError"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Syntax rules",
                              "statement": "IF lines need ':'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Missing colon is a syntax error — program won't run.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "SyntaxError: expected ':'"
},
        },
        {
          id: "cils-c-u1-py-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) What does the '#' symbol do in Python? (b) Write one line of Python with a comment. (c) Why does indentation matter inside an IF block? (d) Write Python printing 'Hello' three times using a loop. (e) What information does an error message usually give you?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Python",
                              "statement": "Comments, indentation, errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Starts a comment — ignored by Python.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) e.g. # this prints greeting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Indentation defines which lines belong to the block.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) for i in range(3): print('Hello') — correctly indented.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Error type, line number, message describing the problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Comments, indentation, loops, error reading."
},
        },
        {
          id: "cils-c-u1-py-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which symbol starts a comment in Python?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "#"
                    },
                    {
                              "id": "b",
                              "text": "//"
                    },
                    {
                              "id": "c",
                              "text": "--"
                    },
                    {
                              "id": "d",
                              "text": "*"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comment",
                              "statement": "# marks ignored text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Python comments start with #.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "#"
},
        },
        {
          id: "cils-c-u1-py-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "a = 2; b = 3. What does print(a * b + a) output?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 8 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Expressions",
                              "statement": "Evaluate arithmetic."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2 * 3 + 2 = 8.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8"
},
        },
        {
          id: "cils-c-u1-py-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does len('abc') return?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "An error"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "len()",
                              "statement": "Returns length of a string."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'abc' has 3 characters.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u1-py-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define syntax, indentation, comment. (b) Write Python asking for two numbers and printing their product. (c) What goes wrong if input is not converted to int before adding? (d) What error appears if you forget the ':' after 'if'? (e) Why put text inside quotes in print()? (f) Write a two-line Python program including one comment.",
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
                              "reasoning": "(a) All three definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid program e.g. a=int(input()); b=int(input()); print(a*b).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Strings concatenate or error instead of adding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) SyntaxError: expected ':'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Quotes mark it as literal text, not a variable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid two-line program with # comment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Python syntax, I/O, conversion, errors."
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
