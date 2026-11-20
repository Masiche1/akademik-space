import type { Lesson } from "../../../types.ts";

export const lesson125: Lesson = {
  id: "ciealc-u1-lesson-1-5",
  code: "1-5",
  title: "Encryption and Data Security",
  goal: "I CAN explain encryption methods and their role in data security.",
  standards: ["Cambridge A Level Computer Science 9618: data security", "9618: encryption"],
  
  vocabulary: [
    { term: "Encryption", definition: "Scrambling data so only authorised parties read it." },
    { term: "Cipher", definition: "Algorithm for encrypting/decrypting data." },
    { term: "Symmetric encryption", definition: "Same key encrypts and decrypts." },
    { term: "Asymmetric encryption", definition: "Public key encrypts, private key decrypts." },
    { term: "Public key", definition: "Key shared openly for encryption." },
    { term: "Private key", definition: "Secret key for decryption." },
  ],
  concepts: [
    {
      id: "ciealc-u1-s5-enc",
      title: "Encryption",
      skill: "Explain symmetric vs asymmetric encryption at A Level.",
      lesson: {
        sections: [
          {
            heading: "Symmetric encryption",
            body: "Same key encrypts and decrypts — fast but key distribution problem: how to share key securely? Used for bulk data encryption.",
          },
          {
            heading: "Asymmetric encryption",
            body: "Public key encrypts, private key decrypts — solves key distribution. Slower but secure. Used for key exchange, digital signatures, HTTPS.",
          },
        ],
        keyFormulas: [
          { name: "Symmetric", statement: "same key both ways" },
          { name: "Asymmetric", statement: "public encrypts, private decrypts" },
        ],
        workedExample: {
          problem: "Why does HTTPS use both symmetric and asymmetric encryption?",
          solution: "Asymmetric establishes secure connection (key exchange); symmetric encrypts bulk data (faster).",
        },
      },
      questions: [
        {
          id: "ciealc-u1-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is encryption?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Scrambling data so only authorised parties read it"
                    },
                    {
                              "id": "b",
                              "text": "Deleting files"
                    },
                    {
                              "id": "c",
                              "text": "A type of virus"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Encryption",
                              "statement": "Data scrambling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Encryption protects data confidentiality.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data scrambling"
},
        },
        {
          id: "ciealc-u1-en-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between symmetric and asymmetric encryption?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Symmetric vs asymmetric",
                              "statement": "Same vs different keys."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Symmetric=same key; asymmetric=public/private pair.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Symmetric faster; asymmetric solves key distribution.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Same key vs key pair"
},
        },
        {
          id: "ciealc-u1-en-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does HTTPS use both symmetric and asymmetric encryption?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "HTTPS",
                              "statement": "Hybrid encryption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asymmetric for secure key exchange.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Symmetric for fast bulk data encryption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Combines security and speed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Asymmetric=key exchange; symmetric=data"
},
        },
        {
          id: "ciealc-u1-en-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define encryption, cipher, symmetric, asymmetric, public key, private key. (b) What is symmetric encryption? (c) What is asymmetric encryption? (d) What is the key distribution problem? (e) How does asymmetric solve it? (f) Why is asymmetric slower? (g) What is a digital signature? (h) Explain how HTTPS establishes a secure connection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Encryption",
                              "statement": "Symmetric vs asymmetric."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Same key encrypts/decrypts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Public encrypts, private decrypts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Sharing symmetric key securely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Public key can be shared openly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Complex math operations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Encrypted hash proving authenticity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Asymmetric handshake→symmetric session.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Encryption methods and security."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-en-notes",
      title: "Encryption — notes",
      summary: "Symmetric=fast same key; asymmetric=secure key pair. HTTPS uses both for speed+security.",
      sections: [
        { heading: "Key idea", body: "Asymmetric solves key distribution; symmetric handles bulk data." },
        { heading: "HTTPS", body: "Asymmetric handshake → symmetric session encryption." },
      ],
    },
  ],
};
