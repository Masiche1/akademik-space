import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ciecs-u3-lesson-3-3",
  code: "3-3",
  title: "Programming Fundamentals",
  goal: "I CAN write programs using variables, selection, iteration and functions.",
  standards: ["Cambridge IGCSE Computer Science 0478: programming", "0478 section 8: programming"],
  
  vocabulary: [
    { term: "Variable", definition: "Named storage location whose value can change." },
    { term: "Selection", definition: "Choosing which instructions run based on condition." },
    { term: "Iteration", definition: "Repeating instructions — loops." },
    { term: "Function", definition: "Named code block performing a task." },
    { term: "Parameter", definition: "Input passed to a function." },
    { term: "Return value", definition: "Result a function sends back." },
  ],
  concepts: [
    {
      id: "ciecs-u3-s3-prog",
      title: "Programming fundamentals",
      skill: "Write programs using core constructs at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Core constructs",
            body: "Every program uses: sequence (ordered steps), selection (IF/ELSE), iteration (loops), functions (reusable code). Variables store data; operators manipulate it.",
          },
          {
            heading: "Functions and scope",
            body: "Functions package reusable code: def area(w,h): return w*h. Parameters customise; return values send results. Local variables stay inside functions — prevent conflicts.",
          },
        ],
        keyFormulas: [
          { name: "Selection", statement: "IF condition THEN...ELSE..." },
          { name: "Iteration", statement: "FOR/WHILE loops" },
          { name: "Function", statement: "def name(params): return value" },
        ],
        workedExample: {
          problem: "Write Python: function is_prime(n) returning True if n is prime.",
          solution: "def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True",
        },
      },
      questions: [
        {
          id: "ciecs-u3-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three core programming constructs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hardware, software, data"
                    },
                    {
                              "id": "b",
                              "text": "Sequence, selection, iteration"
                    },
                    {
                              "id": "c",
                              "text": "Input, process, output"
                    },
                    {
                              "id": "d",
                              "text": "Variables, functions, loops"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Constructs",
                              "statement": "Seq/select/iterate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The three building blocks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sequence, selection, iteration"
},
        },
        {
          id: "ciecs-u3-pf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a parameter and a return value?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Parameter vs return",
                              "statement": "Input vs output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parameter = input to function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Return value = output/result.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Input vs output"
},
        },
        {
          id: "ciecs-u3-pf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write Python: function that returns the sum of two numbers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Functions",
                              "statement": "Parameter and return."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "def add(a,b): return a+b",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct syntax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid function.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "def add(a,b): return a+b"
},
        },
        {
          id: "ciecs-u3-pf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define variable, selection, iteration, function, parameter, return value. (b) Write def square(n). (c) What does square(5) return? (d) What is local vs global scope? (e) Why use functions? (f) Write def is_even(n) returning Boolean. (g) Can functions call functions? (h) Design a function set for a quiz game.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Programming",
                              "statement": "Constructs, functions, scope."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) def square(n): return n*n.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 25.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Local=inside; global=everywhere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) DRY, reusable, testable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) def is_even(n): return n%2==0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Yes — composition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid function set.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Programming fundamentals and functions."
},
        },
        {
          id: "ciecs-u3-pf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a variable in programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of monitor" },
              { id: "b", text: "A named storage location whose value can change" },
              { id: "c", text: "A fixed value that never changes" },
              { id: "d", text: "A network protocol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Variable", statement: "Named storage whose value can change." },
            ],
            steps: [
              { reasoning: "Variables store data that programs can update during execution.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Named storage location",
          },
        },
        {
          id: "ciecs-u3-pf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which construct lets a program choose different actions based on a condition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selection" },
              { id: "b", text: "Input" },
              { id: "c", text: "Printing" },
              { id: "d", text: "Storage" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Selection", statement: "Chooses instructions using conditions." },
            ],
            steps: [
              { reasoning: "IF/ELSE selection branches execution according to a condition.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Selection",
          },
        },
        {
          id: "ciecs-u3-pf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which construct repeats a block of instructions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Function call" },
              { id: "b", text: "Comment" },
              { id: "c", text: "Iteration" },
              { id: "d", text: "Assignment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Iteration", statement: "Repeats instructions using loops." },
            ],
            steps: [
              { reasoning: "Loops such as FOR and WHILE repeat code blocks.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Iteration",
          },
        },
        {
          id: "ciecs-u3-pf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are functions useful in programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can only be used once" },
              { id: "b", text: "They prevent all errors automatically" },
              { id: "c", text: "They remove the need for variables" },
              { id: "d", text: "They make code reusable, organised and easier to test" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Functions", statement: "Reusable code blocks improve structure." },
            ],
            steps: [
              { reasoning: "Functions package logic so it can be called repeatedly and tested separately.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Reusable, organised and testable code",
          },
        },
        {
          id: "ciecs-u3-pf-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In def add(a, b): return a + b, what are a and b called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parameters" },
              { id: "b", text: "Constants" },
              { id: "c", text: "Return values" },
              { id: "d", text: "Loops" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parameter", statement: "Input name passed to a function." },
            ],
            steps: [
              { reasoning: "a and b are parameters receiving input values when add is called.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Parameters",
          },
        },
        {
          id: "ciecs-u3-pf-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the advantage of keeping a variable local to a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can never be read" },
              { id: "b", text: "It makes the program run faster always" },
              { id: "c", text: "It avoids conflicts with variables elsewhere in the program" },
              { id: "d", text: "It stores data permanently" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Local scope", statement: "Local variables are hidden outside the function." },
            ],
            steps: [
              { reasoning: "Local scope prevents accidental changes to shared program state.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Avoids variable conflicts",
          },
        },
        {
          id: "ciecs-u3-pf-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If x = 4 and y = x * 3 + 2, what is the value of y?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 14 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Expression evaluation", statement: "Substitute then apply operations." },
            ],
            steps: [
              { reasoning: "y = 4 * 3 + 2 = 12 + 2 = 14.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "ciecs-u3-pf-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Given def double(n): return 2 * n, what does double(7) return?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 14 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Function call", statement: "Replace parameter with argument." },
            ],
            steps: [
              { reasoning: "double(7) = 2 * 7 = 14.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "ciecs-u3-pf-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Pseudocode: $count = 0$; FOR $i = 1$ TO $5$ DO IF $i$ MOD $2 = 0$ THEN $count = count + 1$. (a) How many loop iterations run? (b) What is the final value of $count$?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional loop", statement: "Count iterations and matching cases separately." },
            ],
            steps: [
              { reasoning: "The loop runs for i = 1 to 5: 5 iterations.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Even values are 2 and 4, so count = 2.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 5; (b) 2",
          },
        },
        {
          id: "ciecs-u3-pf-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the values 17 and 5: (a) What is the integer quotient when 17 is divided by 5? (b) What is the remainder?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integer operators", statement: "// gives quotient; % gives remainder." },
            ],
            steps: [
              { reasoning: "17 // 5 = 3 because 5 * 3 = 15.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "17 % 5 = 2 because 17 - 15 = 2.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 3; (b) 2",
          },
        },
        {
          id: "ciecs-u3-pf-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given def add(a, b): return a + b and def double(n): return 2 * n: (a) What does add(3, 4) return? (b) What does double(7) return? (c) What does double(add(5, 6)) return?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 14 },
              { label: "c", answer: 22 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nested functions", statement: "Evaluate inner function first." },
            ],
            steps: [
              { reasoning: "add(3, 4) = 7.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "double(7) = 14.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "add(5, 6) = 11, then double(11) = 22.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 7; (b) 14; (c) 22",
          },
        },
        {
          id: "ciecs-u3-pf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python function is_prime(n) that returns True if n is prime and False otherwise. Explain how selection, iteration and return values are used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prime function", statement: "Handle edge cases, test divisors and return Boolean." },
            ],
            steps: [
              { reasoning: "Selection handles n < 2 as not prime.", marks: 1, markCode: "M" },
              { reasoning: "Iteration tests divisors from 2 up to the square root of n.", marks: 1, markCode: "M" },
              { reasoning: "If any divisor divides n exactly, the function returns False; otherwise True.", marks: 1, markCode: "M" },
              { reasoning: "Valid Python syntax and clear use of parameters and return values are shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correct is_prime function using selection and iteration",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u3-pf-notes",
      title: "Programming — notes",
      summary: "Sequence+selection+iteration+functions = all programs. Parameters in, return values out.",
      sections: [
        { heading: "Key idea", body: "Functions enable modular, reusable, testable code." },
        { heading: "Scope", body: "Local variables protect against conflicts." },
      ],
    },
  ],
};
