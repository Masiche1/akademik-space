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
                              "text": "Sequence, selection, iteration"
                    },
                    {
                              "id": "b",
                              "text": "Input, process, output"
                    },
                    {
                              "id": "c",
                              "text": "Variables, functions, loops"
                    },
                    {
                              "id": "d",
                              "text": "Hardware, software, data"
                    }
          ],
          "correctChoiceId": "a"
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
