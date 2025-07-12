export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" },
];

export const sideNavLinks = [
  { to: "/donor", label: "Dashboard" },
  { to: "/donor/profile", label: "Profile" },
];

export const csQuestions = [
  {
    title: "What is normalization in DBMS and why is it important?",
    status: "answered",
    answers: [
      "Normalization is the process of organizing data to reduce redundancy.",
      "It helps maintain data integrity and improves efficiency by dividing tables logically.",
    ],
  },
  {
    title: "Explain the OSI model layers in Computer Networks.",
    status: "answered",
    answers: [
      "The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
      "Each layer has specific responsibilities like routing, encryption, session management, etc.",
    ],
  },
  {
    title: "What are the key differences between TCP and UDP?",
    status: "answered",
    answers: [
      "TCP is connection-oriented, reliable, and guarantees delivery. UDP is connectionless, faster, but less reliable.",
    ],
  },
  {
    title: "What is polymorphism in OOPs?",
    status: "answered",
    answers: [
      "Polymorphism allows objects to be treated as instances of their parent class.",
      "It enables method overriding and overloading in object-oriented programming.",
    ],
  },
  {
    title: "What is a deadlock in Operating Systems?",
    status: "unanswered",
    answers: [],
  },
  {
    title: "Differentiate between primary key and foreign key.",
    status: "answered",
    answers: [
      "Primary key uniquely identifies a record in a table, while a foreign key links to a primary key in another table.",
    ],
  },
  {
    title: "How does DNS work in networks?",
    status: "unanswered",
    answers: [],
  },
];
