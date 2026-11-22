import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "ciealc-u3-lesson-3-3",
  code: "3-3",
  title: "Object-Oriented Programming Concepts",
  goal: "I CAN explain classes, objects, attributes, methods, inheritance and polymorphism.",
  standards: [
    "Cambridge A Level Computer Science 9618: programming",
    "9618: OOP",
  ],

  vocabulary: [
    {
      term: "Class",
      definition: "Blueprint/template defining object properties and methods.",
    },
    { term: "Object", definition: "Instance of a class with its own data." },
    { term: "Attribute", definition: "Data stored in an object." },
    { term: "Method", definition: "Function defined within a class." },
    {
      term: "Inheritance",
      definition: "Subclass inherits properties/methods from superclass.",
    },
    {
      term: "Polymorphism",
      definition: "Same interface, different implementations.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u3-s3-oop",
      title: "OOP concepts",
      skill: "Explain OOP principles at A Level.",
      lesson: {
        sections: [
          {
            heading: "Core concepts",
            body: "Class=blueprint; Object=instance. Attributes=data; Methods=functions. Encapsulation=hiding internal state. Inheritance=child class gets parent's properties. Polymorphism=same method name, different behaviour.",
          },
          {
            heading: "Why OOP?",
            body: "Modularity: reuse code via classes. Maintainability: change one class, affects all objects. Abstraction: hide complexity. Suitable for large, complex systems.",
          },
        ],
        keyFormulas: [
          { name: "Class", statement: "blueprint for objects" },
          { name: "Object", statement: "instance of class" },
          {
            name: "Inheritance",
            statement: "subclass gets superclass properties",
          },
        ],
        workedExample: {
          problem: "Design a Vehicle class hierarchy.",
          solution:
            "class Vehicle {speed, colour} → class Car extends Vehicle {doors} → class ElectricCar extends Car {battery}. Each inherits parent properties.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-oop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a class in OOP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A loop",
              },
              {
                id: "b",
                text: "A type of variable",
              },
              {
                id: "c",
                text: "A file",
              },
              {
                id: "d",
                text: "Blueprint/template for creating objects",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Class",
                statement: "Object blueprint.",
              },
            ],
            steps: [
              {
                reasoning: "Class defines object structure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Object blueprint",
          },
        },
        {
          id: "ciealc-u3-oop-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a class and an object?",
          response: {
            type: "open",
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
                  "Class=blueprint; object=instance created from class.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Many objects can come from one class.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Blueprint vs instance",
          },
        },
        {
          id: "ciealc-u3-oop-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is inheritance? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inheritance",
                statement: "Subclass gets parent properties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inheritance = subclass inherits superclass properties/methods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. Car inherits from Vehicle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables code reuse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Subclass inherits superclass properties",
          },
        },
        {
          id: "ciealc-u3-oop-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define class, object, attribute, method, inheritance, polymorphism, encapsulation. (b) Give an example of a class. (c) Give an example of an object. (d) What is inheritance? (e) What is polymorphism? (f) What is encapsulation? (g) Why use OOP for large projects? (h) Design a Student class with attributes and methods.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "OOP",
                statement: "Classes, objects, principles.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid class example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid object example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Subclass inherits superclass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Same interface, different implementations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Hide internal state.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Modularity, reusability, maintainability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid Student class design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "OOP concepts and design.",
          },
        },
        {
          id: "ciealc-u3-oop-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between a class and an object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are exactly the same thing" },
              {
                id: "b",
                text: "A class is a blueprint; an object is an instance created from it",
              },
              {
                id: "c",
                text: "An object is a blueprint; a class is an instance",
              },
              {
                id: "d",
                text: "A class stores data; an object stores programs",
              },
            ],
            correctChoiceId: "b",
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
                  "The class defines the structure; each object is a concrete instance of it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Blueprint vs instance",
          },
        },
        {
          id: "ciealc-u3-oop-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A class Student has been defined and a program creates 3 objects from it. How many instances of the class exist? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Instantiation",
                statement: "Each new object is one instance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 objects created = 3 instances.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciealc-u3-oop-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does encapsulation mean in OOP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Bundling data and methods together while hiding internal state",
              },
              { id: "b", text: "Making every attribute public" },
              { id: "c", text: "Deleting unused methods" },
              { id: "d", text: "Copying all code into one file" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encapsulation",
                statement: "Hide internal state, expose controlled access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Encapsulation keeps an object's data private and accessed through methods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Hide internal state",
          },
        },
        {
          id: "ciealc-u3-oop-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A class hierarchy is Vehicle → Car → ElectricCar, where each class extends the previous one. How many levels does the hierarchy have? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inheritance levels",
                statement: "Count each class in the chain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vehicle, Car and ElectricCar = 3 levels.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciealc-u3-oop-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between an attribute and a method in a class.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attribute vs method",
                statement: "Data vs behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An attribute is a data value stored by the object (e.g. name, speed).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A method is a function defining behaviour the object can perform.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Attribute=data; method=behaviour",
          },
        },
        {
          id: "ciealc-u3-oop-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does polymorphism mean in OOP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All code must be written twice" },
              { id: "b", text: "Objects cannot share attributes" },
              { id: "c", text: "Every class must have identical methods" },
              {
                id: "d",
                text: "The same method name can behave differently in different classes",
              },
            ],
            correctChoiceId: "d",
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
                  "Different classes can respond to the same method call in their own way.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Same method, different behaviour",
          },
        },
        {
          id: "ciealc-u3-oop-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A class Dog has 4 attributes and 3 methods. A program creates 2 objects from this class. How many attribute values are stored across both objects in total? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Object state",
                statement: "Each object stores its own attribute values.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2 objects × 4 attributes = 8 attribute values.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciealc-u3-oop-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain one benefit of using inheritance in a class hierarchy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inheritance benefit",
                statement: "Reuse code and model real-world relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subclasses automatically get the superclass's attributes and methods, avoiding duplication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It models real-world 'is-a' relationships and simplifies maintenance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Code reuse and natural modelling",
          },
        },
        {
          id: "ciealc-u3-oop-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a method of a class?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The class name itself" },
              {
                id: "b",
                text: "A function defined inside the class that operates on its objects",
              },
              { id: "c", text: "A variable storing a value" },
              { id: "d", text: "A comment in the code" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Method",
                statement: "Function defining object behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Methods are the behaviours an object can perform.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Function inside the class",
          },
        },
        {
          id: "ciealc-u3-oop-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many core OOP principles are named in the lesson: encapsulation, inheritance, polymorphism and abstraction? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OOP principles",
                statement:
                  "Encapsulation, inheritance, polymorphism, abstraction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4 principles are named.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciealc-u3-oop-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design a class hierarchy for shapes (e.g. Circle, Rectangle, Triangle) that supports a polymorphic area() method. Explain how your design works.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "OOP design",
                statement: "Base class + subclasses + polymorphic methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Define a Shape superclass holding common attributes such as name or colour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subclasses Circle, Rectangle and Triangle inherit from Shape and store their own dimensions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each subclass implements its own area() method, so the same call computes different formulae per shape.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shape base class; subclasses override area()",
          },
        },
        {
          id: "ciealc-u3-oop-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is instantiation in OOP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sorting a list of objects" },
              { id: "b", text: "Deleting a class definition" },
              { id: "c", text: "Encrypting object data" },
              { id: "d", text: "Creating an object (instance) from a class" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Instantiation",
                statement: "Creating an object from a class.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Instantiation produces a concrete object based on the class blueprint.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Creating an object from a class",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-oop-notes",
      title: "OOP — notes",
      summary:
        "Class=blueprint, object=instance. Attributes=data, methods=functions. Inheritance=reuse; polymorphism=flexibility.",
      sections: [
        {
          heading: "Key idea",
          body: "OOP structures code around objects mirroring real-world entities.",
        },
        {
          heading: "Inheritance",
          body: "Subclasses extend superclasses — avoids code duplication.",
        },
      ],
    },
  ],
};
