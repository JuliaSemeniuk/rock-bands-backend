const rockBands = [
  {
    id: 1,
    name: "The Beatles",
    details: {
      years: {
        start: "1960",
        end: "1970",
      },
      origin: "England",
      members: {
        present: [],
        past: [
          "John Lennon",
          "Paul McCartney",
          "George Harrison",
          "Ringo Starr",
        ],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/330px-The_Fabs.JPG",
    },
  },
  {
    id: 2,
    name: "Rolling Stones",
    details: {
      years: {
        start: "1962",
        end: "",
      },
      origin: "England",
      members: {
        present: ["Mick Jagger", "Keith Richards", "Ronnie Wood"],
        past: [
          "Brian Jones",
          "Ian Stewart",
          "Bill Wyman",
          "Charlie Watts",
          "Mick Taylor",
        ],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg/415px-The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg",
    },
  },
  {
    id: 3,
    name: "Queen",
    details: {
      years: {
        start: "1970",
        end: "",
      },
      origin: "England",
      members: {
        present: ["Brian May", "Roger Taylor"],
        past: ["Freddie Mercury", "John Deacon"],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Queen_%40_Imperial_College_campus_-_1970.jpg/1200px-Queen_%40_Imperial_College_campus_-_1970.jpg",
    },
  },
  {
    id: 4,
    name: "Guns N' Roses",
    details: {
      years: {
        start: "1985",
        end: "",
      },
      origin: "the USA",
      members: {
        present: [
          "Axl Rose",
          "Duff McKagan",
          "Slash",
          "Dizzy Reed",
          "Richard Fortus",
          "Frank Ferrer",
          "Melissa Reese",
        ],
        past: [],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GNR_London_Stadium_2017_3_%28cropped%29.jpg/450px-GNR_London_Stadium_2017_3_%28cropped%29.jpg",
    },
  },
  {
    id: 5,
    name: "AC/DC",
    details: {
      years: {
        start: "1973",
        end: "",
      },
      origin: "Australia",
      members: {
        present: [
          "Angus Young",
          "Phil Rudd",
          "Cliff Williams",
          "Brian Johnson",
          "Stevie Young",
        ],
        past: [
          "Malcolm Young",
          "Dave Evans",
          "Larry Van Kriedt",
          "Colin Burgess",
          "Rob Bailey",
          "Peter Clack",
          "Bon Scott",
          "Mark Evans",
          "Simon Wright",
          "Chris Slade",
          "Axl Rose",
        ],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/ACDC_In_Tacoma_2009.jpg/381px-ACDC_In_Tacoma_2009.jpg",
    },
  },
  {
    id: 6,
    name: "Led Zeppelin",
    details: {
      years: {
        start: "1968",
        end: "1980",
      },
      origin: "England",
      members: {
        present: [],
        past: ["Jimmy Page", "Robert Plant", "John Bonham", "John Paul Jones"],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Led_Zeppelin_acoustic_1973.jpg/330px-Led_Zeppelin_acoustic_1973.jpg",
    },
  },
  {
    id: 7,
    name: "Pink Floyd",
    details: {
      years: {
        start: "1965",
        end: "",
      },
      origin: "England",
      members: {
        present: ["David Gilmour", "Nick Mason"],
        past: ["Syd Barrett", "Roger Waters", "Richard Wright"],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg",
    },
  },
  {
    id: 9,
    name: "The Cure",
    details: {
      years: {
        start: "1978",
        end: "",
      },
      origin: "England",
      members: {
        present: [
          "Robert Smith",
          "Simon Gallup",
          "Roger O'Donnell",
          "Jason Cooper",
          "Reeves Gabrels",
        ],
        past: [
          "Michael Dempsey",
          "Matthieu Hartley",
          "Andy Anderson",
          "Phil Thornalley",
          "Lol Tolhurst",
          "Boris Williams",
          "Perry Bamonte",
          "Porl Thompson",
        ],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/The_Cure_Live_in_Singapore_2-_1st_August_2007.jpg/390px-The_Cure_Live_in_Singapore_2-_1st_August_2007.jpg",
    },
  },
  {
    id: 10,
    name: "The Who",
    details: {
      years: {
        start: "1964",
        end: "",
      },
      origin: "England",
      members: {
        present: ["Roger Daltrey", "Pete Townshend"],
        past: ["John Entwistle", "Keith Moon", "Doug Sandom", "Kenney Jones"],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Who_-_1975.jpg/433px-Who_-_1975.jpg",
    },
  },
  {
    id: 11,
    name: "Aerosmith",
    details: {
      years: {
        start: "1970",
        end: "",
      },
      origin: "the USA",
      members: {
        present: [
          "Steven Tyler",
          "Tom Hamilton",
          "Joey Kramer",
          "Joe Perry",
          "Brad Whitford",
        ],
        past: ["Ray Tabano", "Jimmy Crespo", "Rick Dufay"],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Aearosmith_Las_Vegas_20190413.jpg/450px-Aearosmith_Las_Vegas_20190413.jpg",
    },
  },
  {
    id: 12,
    name: "The Ramones",
    details: {
      years: {
        start: "1974",
        end: "1996",
      },
      origin: "the USA",
      members: {
        present: [],
        past: [
          "Joey Ramone",
          "Johnny Ramone",
          "Dee Dee Ramone",
          "Tommy Ramone",
          "Marky Ramone",
          "Richie Ramone",
          "Elvis Ramone",
          "C. J. Ramone",
        ],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ramones_Toronto_1976.jpg/330px-Ramones_Toronto_1976.jpg",
    },
  },
  {
    id: 13,
    name: "Nirvana",
    details: {
      years: {
        start: "1987",
        end: "1994",
      },
      origin: "the USA",
      members: {
        present: [],
        past: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
      },
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ramones_Toronto_1976.jpg/330px-Ramones_Toronto_1976.jpg",
    },
  },
];

exports.rockBands = rockBands;
