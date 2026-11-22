import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eiascs-u4-lesson-4-1",
  code: "4-1",
  title: "Programming Languages",
  goal: "I CAN compare programming languages and their uses.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 4 — Programming in Practice",
  ],
  vocabulary: [
    {
      term: "Low-level language",
      definition: "Close to machine code — assembly.",
    },
    {
      term: "High-level language",
      definition: "Human-readable — Python, Java.",
    },
    {
      term: "Compiler",
      definition: "Translates entire program to machine code.",
    },
    { term: "Interpreter", definition: "Executes code line by line." },
    {
      term: "Transpiler",
      definition: "Converts between high-level languages.",
    },
    { term: "Syntax", definition: "Rules of language — grammar." },
  ],
  concepts: [
    {
      id: "eiascs-u4-languages",
      title: "Programming Language Levels",
      skill: "Distinguish low-level, high-level and markup languages.",
      lesson: {
        sections: [
          {
            heading: "Language levels",
            body: "**Machine code**: binary — CPU executes directly. **Assembly**: mnemonics — ADD, MOV — close to machine. **High-level**: Python, Java, C++ — human-readable, portable.\n\n**Low-level**: fast, hardware control — but hard to write, machine-specific. **High-level**: easy to write, portable — but needs translation.",
          },
          {
            heading: "Translation",
            body: "**Compiler**: translates whole program → machine code — fast execution, finds errors early. **Interpreter**: executes line by line — slower, easier debugging. **Transpiler**: converts between high-level languages — TypeScript→JavaScript.\n\n**Choosing**: compiler for performance; interpreter for development; transpiler for language ecosystems.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Python code runs line by line. Translator type?",
          solution: "Interpreter.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-lang-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a high-level language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Machine code" },
              { id: "b", text: "Human-readable language" },
              { id: "c", text: "Assembly" },
              { id: "d", text: "Binary code" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "High-level",
                statement: "Human-readable.",
              },
            ],
            steps: [
              {
                reasoning: "High-level = readable.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Human-readable",
            commonErrors: ["Low-level confused."],
          },
        },
        {
          id: "eiascs-u4-lang-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between compiler and interpreter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Compiler vs interpreter",
                statement: "Whole vs line.",
              },
            ],
            steps: [
              {
                reasoning: "Compiler translates whole program at once.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interpreter executes line by line.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compiled = faster; interpreted = easier debugging.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Whole vs line, fast vs debuggable.",
            commonErrors: ["Same.", "Only one difference."],
          },
        },
        {
          id: "eiascs-u4-lang-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why high-level languages are popular.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "High-level benefits",
                statement: "Readable + portable.",
              },
            ],
            steps: [
              {
                reasoning: "Human-readable — easier to write and learn.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Portable — runs on different systems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Abstraction — hides hardware details.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Large libraries — reuse existing code.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Readable+portable+abstract+libraries.",
            commonErrors: ["Low-level better.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-lang-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Choose language for game development.",
          parts: [
            { label: "a", prompt: "Suggest language.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Language selection",
                statement: "Need + performance.",
              },
            ],
            steps: [
              {
                reasoning: "(a) C++ or C# — performance critical.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Python possible but slower.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Games need speed — compiled languages.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) C++ gives hardware control — graphics, physics.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) C++/C# (b) performance+control",
            commonErrors: ["Python always.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-development",
      title: "Software Development Process",
      skill: "Describe stages of software development lifecycle.",
      lesson: {
        sections: [
          {
            heading: "SDLC stages",
            body: "**Planning**: requirements, feasibility. **Analysis**: detailed requirements. **Design**: architecture, interfaces. **Implementation**: write code. **Testing**: find bugs. **Deployment**: release to users. **Maintenance**: updates, fixes.\n\n**Each stage**: has outputs, reviews, documentation — iterative process.",
          },
          {
            heading: "Methodologies",
            body: "**Waterfall**: sequential — finish one stage before next. **Agile**: iterative — develop in sprints, adapt to feedback. **Spiral**: risk-focused — prototype, evaluate, refine.\n\n**Choosing**: waterfall for clear requirements; agile for changing needs; spiral for high-risk projects.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Software developed in 2-week iterations with feedback. Methodology?",
          solution: "Agile.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-dev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the software development lifecycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stages from planning to maintenance" },
              { id: "b", text: "Writing code only" },
              { id: "c", text: "Testing only" },
              { id: "d", text: "Deployment only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SDLC",
                statement: "Planning→maintenance.",
              },
            ],
            steps: [
              { reasoning: "SDLC = all stages.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** All stages",
            commonErrors: ["Coding only."],
          },
        },
        {
          id: "eiascs-u4-dev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two SDLC stages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDLC stages",
                statement: "Planning, design, test.",
              },
            ],
            steps: [
              {
                reasoning: "Planning — requirements, feasibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Design — architecture, interfaces.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Testing — find bugs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Planning, analysis, design, implementation, testing, deployment, maintenance.",
            commonErrors: ["Only one.", "Wrong stage."],
          },
        },
        {
          id: "eiascs-u4-dev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain waterfall vs agile.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Waterfall vs agile",
                statement: "Sequential vs iterative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Waterfall: sequential stages, finish one before next.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Agile: iterative sprints, adapt to feedback.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Waterfall: good for clear requirements; rigid.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Agile: good for changing needs; flexible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sequential vs iterative.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u4-dev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company wants app with changing requirements.",
          parts: [
            { label: "a", prompt: "Suggest methodology.", marks: 4 },
            { label: "b", prompt: "Justify choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Methodology selection",
                statement: "Need + flexibility.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Agile — iterative development.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Sprints allow adaptation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Changing requirements — agile adapts.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Waterfall would fail — can't go back.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) Agile (b) adapts to changes",
            commonErrors: ["Waterfall.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-ide",
      title: "IDEs and Development Tools",
      skill: "Use IDEs and understand development tools.",
      lesson: {
        sections: [
          {
            heading: "IDE features",
            body: "**Code editor**: write code with syntax highlighting. **Debugger**: step through code, inspect variables. **Compiler/interpreter**: run code. **Version control**: track changes — Git. **Auto-complete**: suggests code. **Refactoring**: restructure code safely.\n\n**Examples**: VS Code, PyCharm, Eclipse, IntelliJ.",
          },
          {
            heading: "Version control",
            body: "**Git**: tracks file changes — commit history. **Repository**: storage for code — GitHub, GitLab. **Branch**: parallel development — merge later. **Merge**: combine changes.\n\n**Benefits**: backup, collaboration, rollback, history.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Tool that highlights syntax errors as you type. Feature?",
          solution: "IDE syntax checking.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-ide-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an IDE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Integrated development environment" },
              { id: "b", text: "Operating system" },
              { id: "c", text: "Programming language" },
              { id: "d", text: "Computer hardware" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IDE",
                statement: "Development tools.",
              },
            ],
            steps: [
              {
                reasoning: "IDE = development environment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Development environment",
            commonErrors: ["Language confused."],
          },
        },
        {
          id: "eiascs-u4-ide-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two IDE features.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IDE features",
                statement: "Editor + debugger.",
              },
            ],
            steps: [
              {
                reasoning: "Code editor — syntax highlighting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Debugger — step through code.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Auto-complete — suggests code.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Editor, debugger, auto-complete, version control.",
            commonErrors: ["Only one.", "Wrong feature."],
          },
        },
        {
          id: "eiascs-u4-ide-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain benefits of version control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Version control",
                statement: "Track + collaborate.",
              },
            ],
            steps: [
              {
                reasoning: "Track changes — history of modifications.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Backup — recover previous versions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Collaboration — multiple developers work together.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Branching — parallel development.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Track+backup+collaborate+branch.",
            commonErrors: ["No benefit.", "One benefit."],
          },
        },
        {
          id: "eiascs-u4-ide-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Team of 5 developers on same project.",
          parts: [
            { label: "a", prompt: "Recommend tools.", marks: 4 },
            { label: "b", prompt: "Explain benefits.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Team tools",
                statement: "Collaboration essential.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Git + GitHub — version control.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) IDE with collaboration — VS Code Live Share.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Avoid conflicts — merge changes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Track who changed what — accountability.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) Git+IDE (b) avoid conflicts+accountability",
            commonErrors: ["No tools.", "No benefits."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-testing",
      title: "Testing and Quality Assurance",
      skill: "Apply testing methods and ensure software quality.",
      lesson: {
        sections: [
          {
            heading: "Testing types",
            body: "**Unit testing**: test individual functions. **Integration testing**: test components together. **System testing**: test whole system. **Acceptance testing**: user acceptance. **Regression testing**: ensure changes don't break.\n\n**Test cases**: input → expected output — normal, edge, invalid cases.",
          },
          {
            heading: "Quality assurance",
            body: "**Alpha testing**: internal testing. **Beta testing**: external users. **UAT**: user acceptance testing. **Automated testing**: scripts run tests — faster, repeatable.\n\n**Quality**: correctness, reliability, usability, performance — balance all.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Test each function separately. Type?",
          solution: "Unit testing.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-test-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is unit testing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Test whole system" },
              { id: "b", text: "Performance testing" },
              { id: "c", text: "User testing" },
              { id: "d", text: "Test individual functions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unit testing",
                statement: "Individual functions.",
              },
            ],
            steps: [
              { reasoning: "Unit = individual.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Individual functions",
            commonErrors: ["System confused."],
          },
        },
        {
          id: "eiascs-u4-test-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of testing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Testing types",
                statement: "Unit, integration, system.",
              },
            ],
            steps: [
              {
                reasoning: "Unit — individual functions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Integration — components together.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "System — whole system.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Unit, integration, system, acceptance.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiascs-u4-test-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why testing is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Testing importance",
                statement: "Quality + reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Find bugs early — cheaper to fix.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ensure quality — meets requirements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Build confidence — users trust software.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevent failures — avoid crashes, data loss.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Early bugs+quality+confidence+prevention.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-test-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design test cases for login function.",
          parts: [
            { label: "a", prompt: "List test cases.", marks: 4 },
            { label: "b", prompt: "Explain coverage.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Test case design",
                statement: "Normal+edge+invalid.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Valid login — correct credentials.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Invalid login — wrong password.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Empty fields — missing input.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Special characters — edge case.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Normal, edge, invalid — comprehensive.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Covers all scenarios — high confidence.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) valid+invalid+empty+special (b) comprehensive",
            commonErrors: ["Only valid.", "No edge cases."],
          },
        },
      ],
    },
    {
      id: "eiascs-u4-evaluation",
      title: "Evaluating Software Development",
      skill: "Evaluate development approaches and tools.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "**Quality**: correctness, reliability, usability. **Efficiency**: speed, resource usage. **Maintainability**: easy to modify. **Cost**: development time, tools, maintenance. **Security**: protect against attacks.\n\n**Trade-offs**: quality vs speed; features vs simplicity; cost vs capability.",
          },
          {
            heading: "Best practices",
            body: "**Documentation**: explain code, decisions. **Code reviews**: others check code. **Testing**: comprehensive test coverage. **Version control**: track changes. **Continuous integration**: automated build/test.\n\n**Evaluation**: good development = quality + maintainable + cost-effective.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Fast development but poor quality. Evaluation?",
          solution: "Trade-off — speed vs quality.",
        },
      },
      questions: [
        {
          id: "eiascs-u4-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is code review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testing code" },
              { id: "b", text: "Writing code" },
              { id: "c", text: "Others checking code" },
              { id: "d", text: "Documenting code" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Code review",
                statement: "Others check.",
              },
            ],
            steps: [
              {
                reasoning: "Review = others check.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Others check",
            commonErrors: ["Writing confused."],
          },
        },
        {
          id: "eiascs-u4-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two software quality criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quality criteria",
                statement: "Correctness+reliability.",
              },
            ],
            steps: [
              {
                reasoning: "Correctness — does what it should.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reliability — works consistently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Usability — easy to use.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Correctness, reliability, usability.",
            commonErrors: ["Only one.", "Wrong criterion."],
          },
        },
        {
          id: "eiascs-u4-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why documentation matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Documentation",
                statement: "Understanding + maintenance.",
              },
            ],
            steps: [
              {
                reasoning: "Others understand — new developers learn.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Maintenance — modify without breaking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decisions recorded — why choices made.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces errors — clear instructions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Understand+maintain+decisions+errors.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiascs-u4-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate agile vs waterfall for school project.",
          parts: [
            { label: "a", prompt: "Compare approaches.", marks: 4 },
            { label: "b", prompt: "Recommend choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Methodology evaluation",
                statement: "Context matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Agile — flexible, iterative; waterfall — sequential, rigid.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Agile better for changing needs; waterfall for clear requirements.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) School project — likely changing requirements.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Recommend agile — adapt to feedback.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) agile flexible, waterfall rigid (b) agile recommended",
            commonErrors: ["Waterfall always.", "No context."],
          },
        },
      ],
    },
  ],
};
