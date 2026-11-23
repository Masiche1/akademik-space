import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edm10-u5-lesson-5-2",
  code: "5-2",
  title: "Sequences",
  goal: "I CAN find the nth term of linear sequences, and use second differences to find the nth term of quadratic sequences.",
  standards: ["4MA1 2.9", "4MA1 2.10H"],
  
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a rule." },
    { term: "Term", definition: "A single number in a sequence." },
    { term: "Common difference", definition: "The amount added to each term to get the next term in a linear sequence." },
    { term: "nth term", definition: "A formula $u_n$ that gives the $n$th term of a sequence." },
    { term: "Second difference", definition: "The difference between consecutive first differences; constant for a quadratic sequence." },
    { term: "Quadratic sequence", definition: "A sequence whose nth term is a quadratic expression in $n$, e.g. $an^2+bn+c$." },
  ],
  concepts: [
    {
      id: "edm10-u5-linear-sequences",
      title: "Linear sequences and the nth term",
      skill: "Find the common difference and write the nth term of a linear sequence.",
      lesson: {
        sections: [
          {
            heading: "Term-to-term rule",
            body: "Subtract consecutive terms to find the common difference $d$. The sequence changes by the same amount each time, so the terms lie on a straight line when plotted against their position number $n$.",
          },
          {
            heading: "The nth term",
            body: "For a linear sequence, $u_n=a+(n-1)d$, where $a$ is the first term and $d$ is the common difference. Simplifying gives $u_n=dn+(a-d)$, so the coefficient of $n$ is the common difference. For $7, 11, 15, \\ldots$: $d=4$ and $a=7$, so $u_n=7+(n-1)4=4n+3$ and the 10th term is $43$.",
          },
          {
            heading: "Finding the nth term from two terms",
            body: "If you are not told the first term, use two given terms to find $d$ first. The difference in term values divided by the difference in positions gives $d$. Then use one term to find $a$, or use $u_n=u_k+(n-k)d$.",
          },
        ],
        keyFormulas: [
          { name: "nth term", statement: "$u_n=a+(n-1)d$" },
          { name: "Common difference from two terms", statement: "$d=\\frac{u_m-u_k}{m-k}$" },
        ],
        workedExample: {
          problem: "The 3rd term of a sequence is 11 and the 7th term is 27. Find the nth term.",
          solution: "$d=\\frac{27-11}{7-3}=4$. Using $u_3=11$: $a+2d=11\\Rightarrow a=3$. So $u_n=4n-1$.",
        },
      },
      questions: [
        {
          id: "edm10-u5-linseq-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of the sequence $3, 7, 11, 15, \\ldots$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$4$"
                    },
                    {
                              "id": "c",
                              "text": "$11$"
                    },
                    {
                              "id": "d",
                              "text": "$15$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Common difference",
                              "statement": "The amount added to each term to get the next."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7-3=4$.",
                              "working": "7-3=4",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $4$",
          "commonErrors": [
                    "Dividing consecutive terms instead of subtracting."
          ]
},
        },
        {
          id: "edm10-u5-linseq-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Find the 10th term of the sequence $7, 11, 15, 19, \\ldots$",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "10th term",
                              "answer": 43
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "nth term",
                              "statement": "$u_n=4n+3$ for this sequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Common difference is 4 and first term is 7, so $u_n=7+(n-1)4=4n+3$.",
                              "working": "u_n=4n+3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute $n=10$.",
                              "working": "u_{10}=43",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$43$",
          "commonErrors": [
                    "Using $u_n=4n$ and forgetting the constant."
          ]
},
        },
        {
          id: "edm10-u5-linseq-q3",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Find an expression for the nth term of the sequence $-2, 1, 4, 7, \\ldots$",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "nth term",
                              "statement": "$u_n=a+(n-1)d$ with $d=3$ and $a=-2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the common difference.",
                              "working": "1-(-2)=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute into $u_n=a+(n-1)d$.",
                              "working": "u_n=-2+(n-1)3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "u_n=3n-5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$u_n=3n-5$",
          "commonErrors": [
                    "Writing $u_n=3n-2$ by forgetting the $(n-1)$.",
                    "Sign error giving $u_n=3n+1$."
          ]
},
        },
        {
          id: "edm10-u5-linseq-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "The 3rd term of a linear sequence is 11 and the 7th term is 27. Find an expression for the nth term of the sequence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "nth term",
                              "statement": "$u_n=a+(n-1)d$."
                    },
                    {
                              "kind": "principle",
                              "name": "Difference of terms",
                              "statement": "$d=\\frac{u_m-u_k}{m-k}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the common difference from the two terms.",
                              "working": "d=\\frac{27-11}{7-3}=\\frac{16}{4}=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use $u_3=11$ to find the first term: $a+2(4)=11$.",
                              "working": "a+8=11\\Rightarrow a=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Write the nth term.",
                              "working": "u_n=3+(n-1)4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "u_n=4n-1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Check with $u_7$: $4(7)-1=27$. Correct.",
                              "working": "4(7)-1=27",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$u_n=4n-1$",
          "commonErrors": [
                    "Using $m-k=4$ terms instead of 4 positions, e.g. dividing by 3.",
                    "Finding $a=11$ instead of subtracting $2d$."
          ]
},
        },
        {
          id: "edm10-u5-linseq-q5",
          difficulty: "challenge",
          tier: "foundation",
          totalMarks: 6,
          stem: "Consider the sequence $4, 7, 10, 13, \\ldots$",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down an expression for the nth term.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the 25th term.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find which term of the sequence is equal to 100.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "nth term",
                              "statement": "$u_n=3n+1$ for this sequence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$d=3$ and $a=4$, so $u_n=4+(n-1)3$.",
                              "working": "u_n=3n+1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Simplify.",
                              "working": "3n+1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute $n=25$.",
                              "working": "u_{25}=3(25)+1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate.",
                              "working": "76",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Set $u_n=100$ and solve.",
                              "working": "3n+1=100\\Rightarrow 3n=99",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solve for $n$.",
                              "working": "n=33",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $u_n=3n+1$ (b) $76$ (c) the 33rd term",
          "commonErrors": [
                    "In (c) giving the term value 100 instead of the position $n=33$."
          ]
},
        },
        {
          id: "edm10-u5-linseq-q6",
          difficulty: "challenge",
          tier: "foundation",
          totalMarks: 9,
          stem: "A sequence begins $2, 5, 8, 11, \\ldots$",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the common difference and the first term.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find an expression for the nth term.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the 30th term.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Find which term of the sequence is equal to 92.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "nth term",
                              "statement": "$u_n=3n-1$ for this sequence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "State the common difference.",
                              "working": "d=3",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the first term.",
                              "working": "a=2",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $u_n=a+(n-1)d$.",
                              "working": "u_n=2+(n-1)3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify.",
                              "working": "u_n=3n-1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Substitute $n=30$.",
                              "working": "u_{30}=3(30)-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "89",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Set $u_n=92$.",
                              "working": "3n-1=92",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Rearrange.",
                              "working": "3n=93",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Solve.",
                              "working": "n=31",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $d=3$, $a=2$ (b) $u_n=3n-1$ (c) $89$ (d) the 31st term",
          "commonErrors": [
                    "In (d) answering 92 rather than the term number."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u5-quadratic-sequences",
      title: "Quadratic sequences",
      skill: "Use second differences to find the nth term of a quadratic sequence.",
      lesson: {
        sections: [
          {
            heading: "Spotting a quadratic sequence",
            body: "Subtract consecutive terms to get first differences. If the first differences are not constant but their differences (second differences) are constant, the sequence is quadratic and its nth term has the form $an^2+bn+c$. If the second differences are all equal to $k$, then $2a=k$, so $a=\\frac{k}{2}$.",
          },
          {
            heading: "Finding a, b and c",
            body: "Write $u_n=an^2+bn+c$ with $a$ known. Substitute $n=1,2,3$ to get three equations and solve for $b$ and $c$. For example, with $u_n=2n^2+bn+c$: $u_1=2+b+c$, $u_2=8+2b+c$. Subtracting gives $b$, then $c$ follows. Always check your formula on a later term.",
          },
          {
            heading: "A worked pattern",
            body: "Sequence $3, 9, 19, 33, 51$: first differences $6,10,14,18$; second differences $4,4,4$, so $a=2$. Then $u_1=3$: $2+b+c=3$; $u_2=9$: $8+2b+c=9$. Subtracting gives $b=0$, so $c=1$ and $u_n=2n^2+1$. Check: $u_3=18+1=19$. Correct.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic nth term", statement: "$u_n=an^2+bn+c$" },
          { name: "Second difference", statement: "constant $=2a$" },
        ],
        workedExample: {
          problem: "Find the nth term of $5, 12, 23, 38, 57$.",
          solution: "First differences: $7,11,15,19$; second differences all 4, so $a=2$. Then $2+b+c=5$ and $8+2b+c=12$, giving $b=1$, $c=2$. So $u_n=2n^2+n+2$.",
        },
      },
      questions: [
        {
          id: "edm10-u5-quadseq-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "The second differences of a quadratic sequence are all equal to 6. What is the coefficient of $n^2$ in its nth term?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$3$"
                    },
                    {
                              "id": "b",
                              "text": "$6$"
                    },
                    {
                              "id": "c",
                              "text": "$12$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{1}{3}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Second difference",
                              "statement": "For $u_n=an^2+bn+c$ the second difference is $2a$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set $2a=6$.",
                              "working": "2a=6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solve.",
                              "working": "a=3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** $3$",
          "commonErrors": [
                    "Answering 6, forgetting to halve.",
                    "Doubling to get 12."
          ]
},
        },
        {
          id: "edm10-u5-quadseq-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "For the sequence $5, 11, 19, 29, 41$, find the common second difference.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Second difference",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Second differences",
                              "statement": "Subtract terms twice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the first differences: $6, 8, 10, 12$.",
                              "working": "11-5=6,\\ 19-11=8,\\ 29-19=10,\\ 41-29=12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Find the second differences.",
                              "working": "8-6=2,\\ 10-8=2,\\ 12-10=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the common second difference.",
                              "working": "2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Stopping after first differences.",
                    "Reporting the first differences as second differences."
          ],
          "examinerNote": "The common second difference is 2."
},
        },
        {
          id: "edm10-u5-quadseq-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 4,
          stem: "Find an expression for the nth term of the sequence $3, 9, 19, 33, 51$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Second differences",
                              "statement": "Constant second difference $k$ gives $a=\\frac{k}{2}$."
                    },
                    {
                              "kind": "method",
                              "name": "Solving for b and c",
                              "statement": "Substitute $n=1$ and $n=2$ into $an^2+bn+c$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First differences are $6,10,14,18$; second differences are all 4.",
                              "working": "4,4,4\\Rightarrow 2a=4\\Rightarrow a=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Set up equations with $u_n=2n^2+bn+c$: $u_1=2+b+c=3$ and $u_2=8+2b+c=9$.",
                              "working": "2+b+c=3,\\ 8+2b+c=9",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subtract the first from the second: $6+b=6$, so $b=0$ and $c=1$.",
                              "working": "b=0,\\ c=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the nth term.",
                              "working": "u_n=2n^2+1",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$u_n=2n^2+1$",
          "commonErrors": [
                    "Using $a=4$ instead of $a=2$.",
                    "Checking only $u_1$ and never verifying a later term."
          ]
},
        },
        {
          id: "edm10-u5-quadseq-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "Find an expression for the nth term of the sequence $5, 12, 23, 38, 57$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quadratic sequence method",
                              "statement": "Second differences give $2a$; then solve for $b$ and $c$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First differences: $7, 11, 15, 19$.",
                              "working": "7,11,15,19",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second differences are all 4, so $a=2$.",
                              "working": "2a=4\\Rightarrow a=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use $u_1=5$ and $u_2=12$: $2+b+c=5$ and $8+2b+c=12$.",
                              "working": "b+c=3,\\ 2b+c=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solve: $b=1$, $c=2$.",
                              "working": "b=1,\\ c=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the nth term.",
                              "working": "u_n=2n^2+n+2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$u_n=2n^2+n+2$",
          "commonErrors": [
                    "Sign error when subtracting the equations for $b$ and $c$."
          ]
},
        },
        {
          id: "edm10-u5-quadseq-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 7,
          stem: "Consider the sequence $1, 5, 13, 25, 41$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Show that the second differences are constant, and write down their value.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write down the value of $a$ in $u_n=an^2+bn+c$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the values of $b$ and $c$, and hence write down the nth term.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Second differences",
                              "statement": "Constant second difference $=2a$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "First differences are $4, 8, 12, 16$; second differences are $4, 4, 4$ — constant.",
                              "working": "4,4,4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the value.",
                              "working": "4",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $2a=4$.",
                              "working": "a=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the value.",
                              "working": "a=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Substitute $n=1,2$ into $2n^2+bn+c$ and solve.",
                              "working": "2+b+c=1,\\ 8+2b+c=5\\Rightarrow b=-2,\\ c=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State $b$ and $c$.",
                              "working": "b=-2,\\ c=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Write the nth term.",
                              "working": "u_n=2n^2-2n+1",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) constant, $4$ (b) $a=2$ (c) $u_n=2n^2-2n+1$",
          "commonErrors": [
                    "Losing the minus sign on $b$ when solving the simultaneous equations."
          ]
},
        },
        {
          id: "edm10-u5-quadseq-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "Consider the sequence $7, 15, 27, 43, 63$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the first differences and the second differences of the sequence.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find an expression for the nth term of the sequence.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Find the 10th term of the sequence.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quadratic sequence method",
                              "statement": "Constant second difference $=2a$; then solve for $b$ and $c$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "First differences: $15-7=8$, $27-15=12$, $43-27=16$, $63-43=20$.",
                              "working": "8,12,16,20",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second differences: $12-8=4$, $16-12=4$, $20-16=4$.",
                              "working": "4,4,4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State that they are constant.",
                              "working": "\\text{constant} = 4",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $2a=4$.",
                              "working": "a=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set up equations: $u_1=2+b+c=7$ and $u_2=8+2b+c=15$.",
                              "working": "b+c=5,\\ 2b+c=7",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Solve: $b=2$, $c=3$.",
                              "working": "b=2,\\ c=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Write the nth term.",
                              "working": "u_n=2n^2+2n+3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Substitute $n=10$.",
                              "working": "u_{10}=2(100)+2(10)+3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate the terms.",
                              "working": "200+20+3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add.",
                              "working": "223",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) first differences $8,12,16,20$; second differences $4,4,4$ (b) $u_n=2n^2+2n+3$ (c) $223$",
          "commonErrors": [
                    "Using the first difference instead of the second to find $a$."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u5-sequences-notes",
      title: "Sequences — notes",
      summary: "Linear nth terms from the common difference; quadratic nth terms from constant second differences.",
      sections: [
        { heading: "Key idea", body: "Constant first difference → linear; constant second difference → quadratic with $2a$ equal to that difference." },
        { heading: "Method", body: "For quadratic sequences, fix $a$, substitute $n=1$ and $n=2$ to get two equations, solve for $b$ and $c$, then check a later term." },
        { heading: "Check", body: "Always verify the nth term on at least one term beyond those used to find it." },
      ],
    },
  ],
};
