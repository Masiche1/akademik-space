import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "ciealc-u3-lesson-3-3",
  code: "3-3",
  title: "Object-Oriented Programming Concepts",
  goal: "I CAN explain classes, objects, attributes, methods, inheritance and polymorphism.",
  standards: ["Cambridge A Level Computer Science 9618: programming", "9618: OOP"],
  
  vocabulary: [
    { term: "Class", definition: "Blueprint/template defining object properties and methods." },
    { term: "Object", definition: "Instance of a class with its own data." },
    { term: "Attribute", definition: "Data stored in an object." },
    { term: "Method", definition: "Function defined within a class." },
    { term: "Inheritance", definition: "Subclass inherits properties/methods from superclass." },
    { term: "Polymorphism", definition: "Same interface, different implementations." },
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
          { name: "Inheritance", statement: "subclass gets superclass properties" },
        ],
        workedExample: {
          problem: "Design a Vehicle class hierarchy.",
          solution: "class Vehicle {speed, colour} → class Car extends Vehicle {doors} → class ElectricCar extends Car {battery}. Each inherits parent properties.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-oop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a class in OOP?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Blueprint/template for creating objects"
                    },
                    {
                              "id": "b",
                              "text": "A type of variable"
                    },
                    {
                              "id": "c",
                              "text": "A loop"
                    },
                    {
                              "id": "d",
                              "text": "A file"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Class",
                              "statement": "Object blueprint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Class defines object structure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Object blueprint"
},
        },
        {
          id: "ciealc-u3-oop-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a class and an object?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Class vs object",
                              "statement": "Blueprint vs instance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Class=blueprint; object=instance created from class.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Many objects can come from one class.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Blueprint vs instance"
},
        },
        {
          id: "ciealc-u3-oop-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is inheritance? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inheritance",
                              "statement": "Subclass gets parent properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inheritance = subclass inherits superclass properties/methods.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. Car inherits from Vehicle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables code reuse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Subclass inherits superclass properties"
},
        },
        {
          id: "ciealc-u3-oop-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define class, object, attribute, method, inheritance, polymorphism, encapsulation. (b) Give an example of a class. (c) Give an example of an object. (d) What is inheritance? (e) What is polymorphism? (f) What is encapsulation? (g) Why use OOP for large projects? (h) Design a Student class with attributes and methods.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "OOP",
                              "statement": "Classes, objects, principles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid class example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid object example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Subclass inherits superclass.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Same interface, different implementations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Hide internal state.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Modularity, reusability, maintainability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid Student class design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "OOP concepts and design."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-oop-notes",
      title: "OOP — notes",
      summary: "Class=blueprint, object=instance. Attributes=data, methods=functions. Inheritance=reuse; polymorphism=flexibility.",
      sections: [
        { heading: "Key idea", body: "OOP structures code around objects mirroring real-world entities." },
        { heading: "Inheritance", body: "Subclasses extend superclasses — avoids code duplication." },
      ],
    },
  ],
};
