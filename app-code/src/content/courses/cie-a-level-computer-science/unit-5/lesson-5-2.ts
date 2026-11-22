import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciealc-u5-lesson-5-2",
  code: "5-2",
  title: "Object-Oriented Programming in Depth",
  goal: "I CAN apply encapsulation, inheritance and polymorphism in program design.",
  standards: ["Cambridge A Level Computer Science 9618", "Paper 2: OOP"],
  vocabulary: [
    {
      term: "Class",
      definition: "Blueprint defining attributes and methods of objects.",
    },
    { term: "Object", definition: "Instance of a class." },
    {
      term: "Encapsulation",
      definition: "Bundling data and methods, restricting access.",
    },
    {
      term: "Inheritance",
      definition: "Subclass derives attributes and methods from a superclass.",
    },
    {
      term: "Polymorphism",
      definition: "Same method name, different behaviour across classes.",
    },
    {
      term: "Abstraction",
      definition: "Hiding complexity, exposing only essential features.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u5-s2-oop",
      title: "OOP pillars",
      skill: "Apply encapsulation, inheritance and polymorphism.",
      lesson: {
        sections: [
          {
            heading: "Classes and objects",
            body: "A class defines attributes (data) and methods (behaviour); objects are instances. Constructors initialise objects. Access modifiers (private, public, protected) control visibility — private attributes are accessed via getter/setter methods, enabling validation.",
          },
          {
            heading: "Encapsulation and abstraction",
            body: "Encapsulation bundles data with its methods and restricts direct access — protects data integrity. Abstraction hides implementation details, exposing only what users need — e.g., a TV remote exposes power/volume buttons, not internal circuits.",
          },
          {
            heading: "Inheritance and polymorphism",
            body: "Inheritance lets a subclass inherit attributes and methods from a superclass — 'is-a' relationship (Dog is an Animal). Subclasses can override methods for specific behaviour. Polymorphism means the same method call produces different results depending on the object's class — enabling generic code that works with any subclass.",
          },
        ],
      },
      questions: [
    {
      id: "ciealc-u5-oop-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the difference between a class and an object?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A class is a method; an object is a variable" },
          { id: "b", text: "They are the same thing" },
          { id: "c", text: "A class is an instance; an object is a blueprint" },
          {
            id: "d",
            text: "A class is the blueprint; an object is an instance",
          },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Class vs object",
            statement: "Blueprint vs instance.",
          },
        ],
        steps: [
          {
            reasoning:
              "A class is the blueprint defining attributes and methods; an object is a specific instance created from that class.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(d)** A class is the blueprint; an object is an instance",
      },
    },
    {
      id: "ciealc-u5-oop-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does encapsulation mean in OOP?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Deleting unused code" },
          {
            id: "b",
            text: "Bundling data and methods, restricting access to internals",
          },
          { id: "c", text: "Exposing all data publicly" },
          { id: "d", text: "Creating multiple copies of an object" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Encapsulation",
            statement: "Bundle + restrict access.",
          },
        ],
        steps: [
          {
            reasoning:
              "Encapsulation bundles data with methods and restricts direct access to internal state, protecting data integrity.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Bundling data and methods, restricting access to internals",
      },
    },
    {
      id: "ciealc-u5-oop-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is inheritance in OOP?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "A subclass deriving attributes and methods from a superclass",
          },
          { id: "b", text: "Storing data in arrays" },
          { id: "c", text: "Copying code between classes" },
          { id: "d", text: "Hiding implementation details" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Inheritance",
            statement: "Subclass from superclass.",
          },
        ],
        steps: [
          {
            reasoning:
              "Inheritance lets a subclass inherit attributes and methods from a superclass, forming an 'is-a' relationship.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** A subclass deriving attributes and methods from a superclass",
      },
    },
    {
      id: "ciealc-u5-oop-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is polymorphism?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Sorting data alphabetically" },
          {
            id: "b",
            text: "Same method name producing different behaviour across classes",
          },
          { id: "c", text: "Creating objects in loops" },
          { id: "d", text: "Using many data types" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Polymorphism",
            statement: "Same interface, different behaviour.",
          },
        ],
        steps: [
          {
            reasoning:
              "Polymorphism means the same method call produces different results depending on the object's actual class.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Same method name producing different behaviour across classes",
      },
    },
    {
      id: "ciealc-u5-oop-q5",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Define 'constructor' and 'access modifier'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Constructor",
            statement: "Initialises new objects.",
          },
          {
            kind: "definition",
            name: "Access modifier",
            statement: "Controls visibility.",
          },
        ],
        steps: [
          {
            reasoning:
              "A constructor is a special method that runs when an object is created, initialising its attributes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Access modifiers (private, public, protected) control which parts of a class are accessible from outside.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Constructor: init object; access modifier: visibility control.",
      },
    },
    {
      id: "ciealc-u5-oop-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why encapsulation improves program reliability.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Encapsulation benefit",
            statement: "Data protection.",
          },
        ],
        steps: [
          {
            reasoning:
              "Private attributes cannot be modified directly — only through controlled methods.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Setters can validate input, preventing invalid states (e.g., negative age).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Internal changes don't break external code — the interface stays stable.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Controlled access prevents invalid states and protects data.",
      },
    },
    {
      id: "ciealc-u5-oop-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how inheritance reduces code duplication.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Inheritance benefit",
            statement: "Reuse superclass code.",
          },
        ],
        steps: [
          {
            reasoning:
              "A superclass defines common attributes and methods once — all subclasses inherit them.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Subclasses add only their specific features — no need to rewrite shared code.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Changes to the superclass propagate to all subclasses — easier maintenance.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Write once in superclass, inherit everywhere.",
      },
    },
    {
      id: "ciealc-u5-oop-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how polymorphism enables flexible code.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Polymorphism benefit",
            statement: "Generic code for any subclass.",
          },
        ],
        steps: [
          {
            reasoning:
              "A method defined in a superclass can be overridden by subclasses with specific behaviour.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Code written for the superclass works with any subclass — no need for type-specific branches.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "New subclasses can be added without changing existing code — extensible design.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Same interface, different implementations — extensible code.",
      },
    },
    {
      id: "ciealc-u5-oop-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the 'is-a' relationship in inheritance with an example.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Is-a relationship",
            statement: "Subclass is a type of superclass.",
          },
        ],
        steps: [
          {
            reasoning:
              "A Dog 'is an' Animal — it inherits all Animal attributes and methods.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A Car 'is a' Vehicle; a SavingsAccount 'is an' Account.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The subclass adds or overrides specific behaviour while keeping the 'is-a' relationship.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Subclass is-a superclass type — e.g., Dog is an Animal.",
      },
    },
    {
      id: "ciealc-u5-oop-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which OOP concept hides implementation details from users?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Encapsulation" },
          { id: "b", text: "Polymorphism" },
          { id: "c", text: "Abstraction" },
          { id: "d", text: "Inheritance" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Abstraction",
            statement: "Hide complexity.",
          },
        ],
        steps: [
          {
            reasoning:
              "Abstraction hides implementation details, exposing only essential features to users.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** Abstraction",
      },
    },
    {
      id: "ciealc-u5-oop-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) What is method overriding? (b) How does it relate to polymorphism?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Method overriding",
            statement: "Subclass replaces superclass method.",
          },
          {
            kind: "principle",
            name: "Polymorphism link",
            statement: "Different behaviour, same call.",
          },
        ],
        steps: [
          {
            reasoning:
              "Method overriding is when a subclass provides its own version of a superclass method.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "This enables polymorphism — the same method call produces different behaviour depending on the object's class.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Overriding replaces superclass method; enables polymorphism.",
      },
    },
    {
      id: "ciealc-u5-oop-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why private attributes need getter and setter methods.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Getter/setter",
            statement: "Controlled access.",
          },
        ],
        steps: [
          {
            reasoning:
              "Private attributes cannot be accessed directly outside the class.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Getters allow read-only access; setters allow controlled modification.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Setters can validate input — e.g., reject negative values or invalid formats — protecting data integrity.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Getters/setters provide controlled, validated access to private data.",
      },
    },
    {
      id: "ciealc-u5-oop-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether inheritance is always better than composition for code reuse.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Inheritance vs composition.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: inheritance is powerful but can create rigid, fragile hierarchies.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: natural 'is-a' relationships, code reuse, polymorphism.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Disadvantages: tight coupling between classes, fragile base class problem, difficult to change hierarchy, 'is-a' may not fit all cases — composition ('has-a') is more flexible.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: use inheritance for true 'is-a' relationships; composition for 'has-a' — often combine both.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Inheritance for is-a; composition for has-a; often combined.",
      },
    },
    {
      id: "ciealc-u5-oop-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the claim that OOP is always better than procedural programming.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "OOP vs procedural.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: OOP is not universally better — it depends on problem complexity and team skills.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "OOP advantages: modularity, reusability, maintainability for complex systems with many interacting entities.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Disadvantages: more abstraction overhead, steeper learning curve, can be overkill for simple scripts or procedural tasks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: OOP suits complex systems; procedural suits simple, linear tasks — choose by problem.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "OOP for complex systems; procedural for simple tasks.",
      },
    },
    {
      id: "ciealc-u5-oop-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether making all attributes private is always good practice.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Encapsulation strictness.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: private attributes with getters/setters is good practice but has trade-offs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: controlled access, validation, flexibility to change internal representation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Disadvantages: verbosity, boilerplate code, slight performance overhead, can be over-engineered for simple data containers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: use encapsulation for critical data; allow direct access for simple internal attributes — balance protection and simplicity.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Good practice with trade-offs; balance strictness and simplicity.",
      },
    },
    {
      id: "ciealc-u5-oop-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Design a class hierarchy for a vehicle rental system and justify your choices.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Design",
            statement: "Is-a relationships.",
          },
        ],
        steps: [
          {
            reasoning:
              "Superclass Vehicle: attributes (registration, make, model, hireRate) and methods (rent, return, calculateCost).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Subclasses Car, Van, Bicycle: inherit Vehicle, add specific attributes (seats, cargoCapacity, bicycleType) and override methods if needed.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Polymorphism: a rent() method on Vehicle works for any subclass — rental system doesn't need type-specific code.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Encapsulation: private attributes with getters/setters protect vehicle data integrity.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Vehicle superclass → Car/Van/Bicycle subclasses with polymorphic rent().",
      },
    },
    {
      id: "ciealc-u5-oop-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "In OOP, what does 'private' access modifier mean?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Accessible everywhere" },
          { id: "b", text: "Accessible only within the class" },
          { id: "c", text: "Cannot be modified" },
          { id: "d", text: "Secret from documentation" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Private",
            statement: "Class-only access.",
          },
        ],
        steps: [
          {
            reasoning:
              "Private members are accessible only within the class itself — external code cannot access them directly.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Accessible only within the class",
      },
    },
    {
      id: "ciealc-u5-oop-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how abstraction differs from encapsulation.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Abstraction",
            statement: "Hide complexity, show essentials.",
          },
          {
            kind: "definition",
            name: "Encapsulation",
            statement: "Bundle data + methods, restrict access.",
          },
        ],
        steps: [
          {
            reasoning:
              "Abstraction focuses on what an object does — hides implementation details, exposing only essential features.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Encapsulation focuses on how data is protected — bundles data with methods and restricts access.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "They work together: abstraction defines the interface, encapsulation protects the implementation.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Abstraction = what it does; encapsulation = how data is protected.",
      },
    },
    {
      id: "ciealc-u5-oop-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how polymorphism enables a generic 'draw' function for shapes.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Polymorphic draw",
            statement: "One call, many behaviours.",
          },
        ],
        steps: [
          {
            reasoning:
              "A Shape superclass defines draw() as an abstract or base method.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Circle, Square, Triangle subclasses override draw() with their specific rendering.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A function that accepts a Shape can call shape.draw() — it automatically uses the correct subclass implementation.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Generic draw() call works for any shape subclass.",
      },
    },
    {
      id: "ciealc-u5-oop-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether OOP's four pillars are equally important.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Pillar importance.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: all four pillars matter but their importance varies by context.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Encapsulation and abstraction are fundamental — they protect data and simplify interfaces; without them, OOP loses its benefits.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Inheritance and polymorphism enable code reuse and flexibility but can be misused — over-inheritance creates fragile hierarchies.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: encapsulation/abstraction are essential; inheritance/polymorphism are powerful tools requiring judicious use.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "All matter; encapsulation/abstraction are foundational.",
      },
    },
      ],
    },
  ],
};
