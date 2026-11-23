import type { Lesson } from "../../../types.ts";

export const lesson272: Lesson = {
  id: "ecs10-u7-lesson-7-2",
  code: "7-2",
  title: "Encryption and Authentication",
  goal: "I CAN explain encryption, hashing and authentication methods and how they protect data and verify identity.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Cybersecurity"],
  
  vocabulary: [
    { term: "Encryption", definition: "Converting data into ciphertext using a key so only authorised parties can read it." },
    { term: "Symmetric encryption", definition: "Encryption using the same key for both encryption and decryption." },
    { term: "Asymmetric encryption", definition: "Encryption using a public key to encrypt and a private key to decrypt." },
    { term: "Hashing", definition: "One-way function producing a fixed-length digest; cannot be reversed to the original." },
    { term: "Digital signature", definition: "Encrypted hash verifying a message's integrity and sender's identity." },
    { term: "Multi-factor authentication", definition: "Requiring two or more verification factors to confirm identity." },
    { term: "Biometric", definition: "Authentication using physical characteristics such as fingerprint or face." },
  ],
  concepts: [
    {
      id: "ecs10-u7-encryption-hashing",
      title: "Encryption and hashing",
      skill: "Distinguish symmetric, asymmetric encryption and hashing and explain how they protect confidentiality and integrity.",
      lesson: {
        sections: [
          {
            heading: "Encryption",
            body: "**Encryption** converts plaintext into unreadable **ciphertext** using an algorithm and a **key**. **Symmetric encryption** uses the same secret key to encrypt and decrypt — fast but both parties must share the key securely. **Asymmetric encryption** uses a **public key** (shared openly, encrypts) and a **private key** (kept secret, decrypts) — slower but solves the key-exchange problem. Encrypted data is useless to an eavesdropper without the key.",
          },
          {
            heading: "Hashing and digital signatures",
            body: "A **hash function** produces a fixed-length **digest** from any input — changing one character changes the digest completely, and it cannot be reversed. Passwords are stored as hashes so a database leak does not reveal them. A **digital signature** is created by encrypting (or signing) a message's hash with the sender's private key; the receiver verifies it with the public key, proving the message is unchanged (**integrity**) and genuinely from the sender (**non-repudiation**).",
          },
        ],
        keyFormulas: [
          { name: "Symmetric", statement: "same key encrypts and decrypts" },
          { name: "Asymmetric", statement: "public key encrypts, private key decrypts" },
          { name: "Hash", statement: "input → fixed-length digest; irreversible; tiny change → totally different digest" },
          { name: "Digital signature", statement: "hash + sender's private key → verifies integrity and identity" },
        ],
        workedExample: {
          problem: "Alice wants to send a confidential contract to Bob over the internet. Explain how encryption protects it.",
          solution: "Alice encrypts the contract using Bob's public key (asymmetric encryption). Only Bob's private key can decrypt it, so anyone intercepting the ciphertext cannot read it. Bob decrypts with his private key. Alternatively, they could agree a symmetric key via asymmetric exchange, then use fast symmetric encryption for the bulk data.",
        },
      },
      questions: [
        {
          id: "ecs10-u7-encryption-hashing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In symmetric encryption, how many keys are used?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two — a public and a private key"
                    },
                    {
                              "id": "b",
                              "text": "One — the same key encrypts and decrypts"
                    },
                    {
                              "id": "c",
                              "text": "Three — one per letter"
                    },
                    {
                              "id": "d",
                              "text": "None — encryption needs no key"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Symmetric encryption",
                              "statement": "Same key for encryption and decryption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Symmetric encryption uses one shared secret key; asymmetric uses a key pair.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) One key",
          "commonErrors": [
                    "Confusing symmetric with asymmetric encryption."
          ]
},
        },
        {
          id: "ecs10-u7-encryption-hashing-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Compare symmetric and asymmetric encryption in terms of keys used and speed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Symmetric vs asymmetric",
                              "statement": "One shared key vs key pair; fast vs slower."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Symmetric uses one shared secret key for both encryption and decryption.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Asymmetric uses a public key to encrypt and a private key to decrypt.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Symmetric is faster and better for bulk data; asymmetric is slower but solves key distribution.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Symmetric = one key, fast; asymmetric = key pair, slower but solves key exchange.",
          "commonErrors": [
                    "Saying asymmetric is faster — it is slower but more convenient for key sharing."
          ]
},
        },
        {
          id: "ecs10-u7-encryption-hashing-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how hashing protects user passwords stored in a database.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Password hashing",
                              "statement": "Store digest, not plaintext; cannot reverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When a user sets a password, the system stores only its hash digest, never the plaintext.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "At login, the entered password is hashed and compared with the stored digest.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "If the database is stolen, attackers get hashes which cannot be reversed to passwords.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identical passwords produce identical hashes, so attackers can still guess using precomputed tables — salting mitigates this.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Passwords stored as irreversible hashes; login compares hash of input with stored hash.",
          "commonErrors": [
                    "Claiming hashing is encryption — hashing cannot be decrypted."
          ]
},
        },
        {
          id: "ecs10-u7-encryption-hashing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two friends want to chat privately using only symmetric encryption, but they have never met and share no secret key.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the key-distribution problem they face.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how asymmetric encryption solves this problem.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Key exchange",
                              "statement": "Symmetric needs a shared key; asymmetric provides secure key exchange."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Symmetric encryption requires both parties to hold the same secret key.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sending the key over the internet risks interception — the very problem encryption is meant to solve.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Meeting in person may be impossible, so they need a secure way to agree a key.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each generates a key pair: a public key shared openly and a private key kept secret.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "One friend encrypts a symmetric session key with the other's public key.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only the private key holder can decrypt it, so the session key is exchanged securely and fast symmetric encryption can then be used.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) shared key cannot be sent safely (b) asymmetric exchange of a symmetric session key.",
          "commonErrors": [
                    "Saying they should just email the key — it would be intercepted."
          ]
},
        },
        {
          id: "ecs10-u7-encryption-hashing-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A software company signs its updates with a digital signature so users can verify them.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a digital signature is created and what it proves.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why a digital signature also proves the sender's identity and prevents denial.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Digital signature",
                              "statement": "Signed hash verifying integrity and authenticity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A hash of the update is generated, then encrypted with the company's private key.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The receiver decrypts the signature with the company's public key and hashes the update.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "If the hashes match, the update is unchanged — proving integrity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only the holder of the private key could have created the signature.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The public key is linked to the company's verified identity (certificate).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Because the signature cannot be created by anyone else, the company cannot later deny sending it — non-repudiation.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "A changed update produces a different hash, so tampering is detected.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) signed hash proves integrity (b) private key proves identity; cannot be denied — non-repudiation.",
          "commonErrors": [
                    "Confusing encryption with signing — signing uses the private key, not the public key."
          ]
},
        },
        {
          id: "ecs10-u7-encryption-hashing-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hospital must protect patient records sent to specialists and verify the records have not been altered.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define encryption, cipher and key.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Recommend an encryption approach for sending many large files and justify your choice.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how hashing and digital signatures together confirm the records are genuine and unchanged.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Encryption terms",
                              "statement": "Plaintext → ciphertext via cipher + key."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Encryption converts data into an unreadable form (ciphertext).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "A cipher is the algorithm performing the encryption.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "A key is the secret value the cipher uses; without it ciphertext cannot be decrypted.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use asymmetric encryption to exchange a symmetric session key securely.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Then encrypt the large files with fast symmetric encryption.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Justification: asymmetric alone is too slow for bulk data; symmetric alone cannot exchange the key safely.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "A hash of the record is signed with the sender's private key.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Receiver verifies the signature with the public key and compares hashes — match proves authenticity and integrity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any alteration changes the hash, so tampering is detected.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) encryption/cipher/key definitions (b) hybrid: asymmetric key exchange + symmetric bulk (c) signed hash proves authenticity + integrity.",
          "commonErrors": [
                    "Recommending asymmetric for everything — too slow for large files."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u7-auth-access",
      title: "Authentication and access control",
      skill: "Compare authentication factors and access-control methods and explain how firewalls and permissions protect systems.",
      lesson: {
        sections: [
          {
            heading: "Authentication",
            body: "**Authentication** verifies a user's identity before granting access. Three factor types: **knowledge** (password, PIN), **possession** (smart card, phone, token) and **inherence** (biometrics — fingerprint, face, iris). **Single-factor** uses one type; **multi-factor authentication (MFA)** requires two or more, so a stolen password alone is not enough. Biometric templates must be stored securely; they cannot be 'reset' like a password if compromised. Strong, unique passwords and password managers reduce risk.",
          },
          {
            heading: "Access control and firewalls",
            body: "**Access control** decides what an authenticated user may do. **Permissions** typically include read, write and execute. The **principle of least privilege** grants only the minimum access needed for a task. A **firewall** filters network traffic using rules — blocking or allowing packets based on source, destination, port or protocol. Hardware firewalls protect whole networks; software firewalls protect individual devices. Firewalls cannot stop attacks that use permitted traffic, such as phishing emails.",
          },
        ],
        keyFormulas: [
          { name: "MFA", statement: "two or more of: knowledge, possession, inherence" },
          { name: "Least privilege", statement: "grant minimum access needed" },
          { name: "Firewall", statement: "filters traffic by rules (source, destination, port, protocol)" },
        ],
        workedExample: {
          problem: "A bank wants customers to prove identity more strongly than a password alone. Suggest a method and justify it.",
          solution: "Use MFA: password (knowledge) plus a one-time code sent to the customer's phone (possession). Even if a password is phished, the attacker lacks the second factor, so account takeover is much harder.",
        },
      },
      questions: [
        {
          id: "ecs10-u7-auth-access-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does multi-factor authentication (MFA) require?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A longer password"
                    },
                    {
                              "id": "b",
                              "text": "Two or more verification factors"
                    },
                    {
                              "id": "c",
                              "text": "A fingerprint only"
                    },
                    {
                              "id": "d",
                              "text": "A hardware firewall"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MFA",
                              "statement": "Two or more authentication factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MFA combines e.g. password + phone code, or password + fingerprint.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Two or more factors",
          "commonErrors": [
                    "Confusing MFA with a stronger single password."
          ]
},
        },
        {
          id: "ecs10-u7-auth-access-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two advantages of MFA over using a password alone.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MFA benefits",
                              "statement": "Compromising one factor is not enough."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If a password is phished or guessed, the attacker still lacks the second factor (e.g. phone code).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It protects against credential stuffing and password reuse attacks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It significantly reduces the chance of unauthorised account access.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Stolen password alone insufficient; blocks credential reuse; far stronger account protection.",
          "commonErrors": [
                    "Saying MFA makes passwords longer — it adds factors, not length."
          ]
},
        },
        {
          id: "ecs10-u7-auth-access-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A system uses three authentication methods: a password, a fingerprint scan and a smart card. Classify each as a knowledge, possession or inherence factor and explain one benefit and one drawback of biometrics.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Auth factors",
                              "statement": "Knowledge, possession, inherence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Password = knowledge; smart card = possession; fingerprint = inherence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefit: cannot be forgotten, lost or easily shared like a password.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Drawback: biometric data is permanent — if compromised it cannot be reissued like a password.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Also biometric systems can produce false accepts/rejects and raise privacy concerns.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Password=knowledge, card=possession, fingerprint=inherence; biometrics convenient but irreversible if stolen.",
          "commonErrors": [
                    "Calling a fingerprint 'something you know'."
          ]
},
        },
        {
          id: "ecs10-u7-auth-access-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A hospital IT system gives every staff member full administrator rights 'to avoid problems'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the principle of least privilege and why this setup violates it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe three permission levels that could be assigned instead and when each is appropriate.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Least privilege",
                              "statement": "Grant only the minimum access needed."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Least privilege means users get only the access required for their role.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Full admin rights far exceed what most staff need.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "One compromised or careless account can then damage the whole system.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Read — view records without changing them (most clinical staff viewing notes).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Write — create/edit records (doctors, administrators entering data).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Execute/admin — install software or change system settings (IT staff only).",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) least privilege violated — excess admin rights increase risk (b) read/write/execute matched to role.",
          "commonErrors": [
                    "Granting admin 'to be safe' — it increases the damage of any breach."
          ]
},
        },
        {
          id: "ecs10-u7-auth-access-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A small business connects its office network to the internet and installs a hardware firewall.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a firewall decides which traffic to allow or block.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare a hardware firewall with a software firewall and state one limitation of firewalls.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Firewall",
                              "statement": "Filters network traffic by rules."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The firewall applies rules based on source/destination IP, port and protocol.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Packets matching allow rules pass; others are blocked or dropped.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It sits between the internal network and the internet, inspecting incoming/outgoing traffic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hardware firewall protects the whole network at the router; software firewall protects one device.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hardware is independent of any single computer; software travels with the device.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Limitation: cannot inspect encrypted content or stop permitted traffic like phishing emails and malware downloads.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) rule-based packet filtering (b) hardware=network-wide, software=per-device; cannot stop permitted malicious traffic.",
          "commonErrors": [
                    "Claiming firewalls stop all attacks — they only filter traffic."
          ]
},
        },
        {
          id: "ecs10-u7-auth-access-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A university is redesigning access to its exam results portal.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three authentication factor types and give one example of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of requiring MFA for exam results.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the use of fingerprint biometrics for this system.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Auth factors",
                              "statement": "Knowledge, possession, inherence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Knowledge — something you know (password, PIN).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Possession — something you have (phone, smart card, token).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Inherence — something you are (fingerprint, face, iris).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Any valid example for each factor type.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "A phished password alone cannot access results — attacker also needs the second factor.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Protects against credential reuse from other breached sites.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Gives students confidence their sensitive results are secure.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Convenient and hard to forget or share.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "But biometric data is sensitive, cannot be reset if leaked, and may raise privacy/accuracy concerns.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Best combined with a second factor and secure template storage rather than used alone.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) knowledge/possession/inherence + examples (b) blocks password-only attacks (c) convenient but sensitive data — use with MFA.",
          "commonErrors": [
                    "Recommending biometrics alone — they should complement, not replace, other factors."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u7-crypto-notes",
      title: "Encryption and authentication — notes",
      summary: "Symmetric vs asymmetric encryption, hashing, digital signatures, MFA and access control.",
      sections: [
        { heading: "Encryption", body: "Symmetric = one shared key (fast); asymmetric = public/private key pair (secure key exchange)." },
        { heading: "Hashing", body: "One-way digest used for passwords and digital signatures; proves integrity." },
        { heading: "Access control", body: "MFA uses two+ factors; least privilege grants minimum access; firewalls filter traffic." },
      ],
    },
  ],
};
