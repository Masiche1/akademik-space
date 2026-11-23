import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "ecs11-u11-lesson-11-1",
  code: "11-1",
  title: "How the Internet Works",
  goal: "I CAN explain the client-server model, describe HTTP and HTTPS, and explain the roles of DNS, hosting and browsers.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — The wider world: how the internet works"],
  
  vocabulary: [
    { term: "Client-server model", definition: "Clients such as browsers send requests; servers process them and send responses." },
    { term: "HTTP", definition: "HyperText Transfer Protocol — the request-response protocol used to transfer web pages." },
    { term: "HTTPS", definition: "HTTP secured with TLS encryption, indicated by a padlock in the browser." },
    { term: "DNS", definition: "Domain Name System — translates domain names into IP addresses." },
    { term: "IP address", definition: "A numerical label identifying a device or server on a network." },
    { term: "Web hosting", definition: "A service that stores web files on a server so they can be accessed over the internet." },
    { term: "Browser", definition: "Client software that requests, receives and renders web pages." },
  ],
  concepts: [
    {
      id: "ecs11-u11-net-foundations",
      title: "Client-server, DNS and protocols",
      skill: "Describe how data travels across the internet using the client-server model, DNS and HTTP/HTTPS.",
      lesson: {
        sections: [
          {
            heading: "Client-server communication",
            body: "The internet uses the client-server model: a client (usually a web browser on a user's device) sends a request for a resource, and a server processes the request and sends back a response. Requests and responses travel over the internet through routers and networks.\n\nHTTP (HyperText Transfer Protocol) is the standard protocol for transferring web pages. HTTPS adds TLS encryption so data exchanged cannot be read or tampered with by others — browsers show a padlock for HTTPS sites.",
          },
          {
            heading: "DNS and addresses",
            body: "Every server has an IP address — a numerical label such as 93.184.216.34. DNS (Domain Name System) translates human-readable domain names like www.example.com into the IP address of the server hosting the site. Without DNS, users would have to memorise IP addresses.\n\nWhen a user types a URL, the browser first uses DNS to find the server's IP address, then sends an HTTP/HTTPS request to that address.",
          },
        ],
        keyFormulas: [
          { name: "Client-server", statement: "Client sends request → server sends response" },
          { name: "DNS", statement: "Domain name → IP address lookup" },
          { name: "HTTP / HTTPS", statement: "Web request-response protocol; HTTPS adds TLS encryption" },
        ],
        workedExample: {
          problem: "A user types https://www.example.com into a browser. Describe what happens.",
          solution: "DNS resolves www.example.com to the server's IP address; the browser sends an HTTPS GET request; the server returns HTML/CSS files; TLS encrypts the exchange; the browser renders the page.",
        },
      },
      questions: [
        {
          id: "ecs11-u11-net-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does DNS stand for and what does it do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Domain Name System — translates domain names into IP addresses"
                    },
                    {
                              "id": "b",
                              "text": "Digital Network Service — encrypts web traffic"
                    },
                    {
                              "id": "c",
                              "text": "Data Name Storage — stores web pages"
                    },
                    {
                              "id": "d",
                              "text": "Direct Network Switch — routes packets"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNS",
                              "statement": "Domain name to IP address resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNS = Domain Name System; it maps domain names to IP addresses.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Domain Name System — translates domain names to IP addresses"
},
        },
        {
          id: "ecs11-u11-net-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three differences between HTTP and HTTPS.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "HTTP vs HTTPS",
                              "statement": "HTTPS adds TLS encryption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HTTPS encrypts the data exchanged so it cannot be read in transit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "HTTPS authenticates the server's identity using certificates.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "HTTPS prevents tampering with the data during transfer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "HTTPS = encrypted, authenticated, tamper-proof version of HTTP."
},
        },
        {
          id: "ecs11-u11-net-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the client-server model as used when loading a web page.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Client-server",
                              "statement": "Request-response communication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The client (browser) sends a request for a resource such as a web page.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The server receives the request and processes it.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The server sends a response containing the page files, which the browser renders.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Client requests → server responds with the requested resources."
},
        },
        {
          id: "ecs11-u11-net-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the steps that occur from the moment a user types a URL into a browser until the page is displayed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Web request lifecycle",
                              "statement": "DNS → request → response → render."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNS translates the domain name in the URL into the server's IP address.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The browser sends an HTTP/HTTPS request to that IP address.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The server processes the request and returns a response with the page files.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The browser receives the files and renders them as a visible web page.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "DNS lookup → request → response → browser renders."
},
        },
        {
          id: "ecs11-u11-net-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bank's customers complain that the padlock sometimes disappears when they pay online.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what the padlock indicates and why it matters for payments.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two possible causes of a missing padlock and how the bank should respond.",
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
                              "name": "HTTPS trust",
                              "statement": "Padlock = encrypted, authenticated connection."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The padlock shows the connection uses HTTPS — data is encrypted and the server is authenticated.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Without it, card details could be intercepted or the site could be a fake.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The payment page may load over plain HTTP — a mixed-content problem.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The certificate may have expired, or a redirect drops HTTPS.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The bank should fix the page to use HTTPS everywhere and warn customers to check the padlock.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) padlock = HTTPS encryption + authentication (b) mixed content, expired cert; enforce HTTPS site-wide"
},
        },
        {
          id: "ecs11-u11-net-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An online shop's website sometimes takes a long time to load, and customers worry about entering card details.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons why HTTPS is essential for an online shop.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe what DNS does for the shop and what happens if it fails.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Distinguish the responsibilities of the client and the server in this scenario.",
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
                              "name": "Web security and roles",
                              "statement": "HTTPS protects data; DNS finds servers; client/server split duties."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "HTTPS encrypts card details in transit so they cannot be intercepted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It authenticates the server so customers can be sure they reached the real shop.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "It builds customer trust — browsers flag non-HTTPS sites as unsafe.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "DNS translates the shop's domain name into the IP address of its server.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without it, users could not find the server using the domain name.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "If DNS fails, the site becomes unreachable by name even though the server is still running.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Customers could only reach it by typing the raw IP address.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The client (browser) sends requests and renders the pages.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "The server stores the site files and product database and sends responses.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Processing power and storage live on the server; display happens on the client.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) encrypts payments, authenticates shop, builds trust (b) DNS maps name to IP; failure blocks access by name (c) client renders/requests, server stores/responds"
},
        },
      ],
    },
    {
      id: "ecs11-u11-web-access",
      title: "Hosting, browsers and web addresses",
      skill: "Explain web hosting, browser functions and the relationship between domain names, DNS and IP addresses.",
      lesson: {
        sections: [
          {
            heading: "Hosting and browsers",
            body: "Web hosting is a service that stores a website's files on a server connected to the internet, so anyone can request them. A web server is a powerful computer running server software that responds to HTTP/HTTPS requests.\n\nA browser is client software that sends requests, receives files and renders them as pages. Browsers also manage features such as bookmarks, tabs, cookies and history.",
          },
          {
            heading: "Names versus numbers",
            body: "A URL (Uniform Resource Locator) identifies a web resource, typically written as protocol://domain/path, e.g. https://www.example.com/about. The domain name is the human-friendly part.\n\nIP addresses are numbers that identify machines on a network; domain names exist because numbers are hard to remember. DNS bridges the two, translating names to IP addresses. Many websites share hosting through virtual hosting, where one server hosts many domains.",
          },
        ],
        keyFormulas: [
          { name: "URL", statement: "protocol :// domain / path" },
          { name: "Domain vs IP", statement: "Name for humans, number for machines; DNS links them" },
          { name: "Hosting", statement: "Files stored on a server, delivered on request" },
        ],
        workedExample: {
          problem: "Why does a web address contain both a domain name and, behind the scenes, an IP address?",
          solution: "The domain name is easy for humans to remember and type; the IP address is what the network machinery actually uses to locate the server. DNS translates one into the other.",
        },
      },
      questions: [
        {
          id: "ecs11-u11-web-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a web browser?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Software that stores web pages on a server"
                    },
                    {
                              "id": "b",
                              "text": "Client software that requests, receives and displays web pages"
                    },
                    {
                              "id": "c",
                              "text": "A type of web server"
                    },
                    {
                              "id": "d",
                              "text": "A protocol for transferring files"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Browser",
                              "statement": "Client software for viewing the web."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A browser requests resources and renders them as pages.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Client software that requests, receives and displays web pages"
},
        },
        {
          id: "ecs11-u11-web-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define web hosting and state what it provides for a website.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Web hosting",
                              "statement": "Storage and delivery of site files on a server."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Web hosting is a service that stores a website's files on an internet-connected server.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It keeps the files available so visitors can request them at any time.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It delivers the files over the internet in response to browser requests.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Storing and serving website files on a server."
},
        },
        {
          id: "ecs11-u11-web-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between an IP address and a domain name.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "IP address vs domain",
                              "statement": "Numbers for machines, names for humans."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An IP address is a numerical label identifying a machine on a network.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A domain name is a human-readable name such as www.example.com.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "DNS translates between them so users can type names while machines use numbers.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "IP = numeric machine address; domain = readable name resolved by DNS."
},
        },
        {
          id: "ecs11-u11-web-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Break down the URL https://www.museum.org/exhibits and explain each part.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "URL structure",
                              "statement": "protocol://domain/path"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "https is the protocol — the secure version of HTTP.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "www.museum.org is the domain name identifying the site.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "/exhibits is the path to a specific resource on the site.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Together they tell the browser which secure server and which page to request.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "https = protocol, www.museum.org = domain, /exhibits = path."
},
        },
        {
          id: "ecs11-u11-web-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A photographer wants to show her portfolio online to potential clients.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what web hosting provides for her portfolio site.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how a visitor's browser retrieves a photo page from her site.",
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
                              "name": "Publishing a website",
                              "statement": "Hosting stores files; browsers retrieve them."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hosting stores her HTML, images and CSS files on an always-on server.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "This makes the portfolio reachable by anyone on the internet at any time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The visitor's browser uses DNS to find the hosting server's IP address.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "It sends an HTTP/HTTPS request for the portfolio page.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The server responds with the files, which the browser renders as the page.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) stores and serves files 24/7 (b) DNS → request → response → render"
},
        },
        {
          id: "ecs11-u11-web-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A museum wants visitors anywhere in the world to view its online exhibits.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what a web host must provide for global visitors.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe three functions a visitor's browser performs when viewing an exhibit page.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how the museum's domain name is linked to the server's IP address, and why both are needed.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Global web delivery",
                              "statement": "Reliable hosting, capable browsers, DNS bridging names and numbers."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Reliable always-on servers storing the exhibit files.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Enough bandwidth and uptime so visitors worldwide can connect.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "HTTPS certificates so connections are secure and trusted.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sends HTTP/HTTPS requests for the page and its resources.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Receives and interprets the returned HTML, CSS and images.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Renders the result on screen and manages features like cookies and history.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The domain name (e.g. museum.org) is registered to the museum and easy to remember.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "The server has an IP address used by the network machinery.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "DNS records map the domain name to that IP address.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both are needed: names for humans, numbers for machines.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) uptime, bandwidth, HTTPS (b) request, receive/render, manage state (c) domain for humans, IP for machines, DNS maps them"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u11-internet-notes",
      title: "How the Internet Works — notes",
      summary: "Clients request, servers respond; DNS maps names to IPs; HTTPS encrypts; hosting stores the files.",
      sections: [
        { heading: "Key idea", body: "The client-server model underpins the web: browsers request, servers respond." },
        { heading: "Naming", body: "Domain names are human-readable; IP addresses identify machines; DNS translates between them." },
        { heading: "Security", body: "HTTPS adds TLS encryption and server authentication — look for the padlock." },
      ],
    },
  ],
};
