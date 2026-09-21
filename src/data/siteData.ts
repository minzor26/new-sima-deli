export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  note?: string;
  image?: string;
  subItems?: { name: string; price?: string; description?: string }[];
}

export interface RetailLocation {
  name: string;
  address: string;
  cityArea: string;
  mapQuery: string;
}

export const RESTAURANT_INFO = {
  name: "Sima Deli",
  tagline: "Persisk Deli & Restaurang i hjärtat av Stockholm",
  storySnippet: "Välkommen in och upplev mammas persiska mat i en varm och hemtrevlig atmosfär. Ät här eller take-away.",
  address: {
    street: "Valhallavägen 120",
    postalCode: "114 41",
    city: "Stockholm",
    country: "Sverige"
  },
  phone: "08-660 36 35",
  phoneRaw: "+4686603635",
  email: "info@simadeli.com",
  hours: [
    { days: "Måndag", time: "Stängt" },
    { days: "Tisdag – Fredag", time: "10:00 – 19:00" },
    { days: "Lördag – Söndag", time: "10:00 – 17:00" }
  ],
  socials: {
    instagram: "https://www.instagram.com/sima_deli/",
    facebook: "https://www.facebook.com/Simadeli/"
  },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.4427073079903!2d18.08067311566534!3d59.34225761702853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d468270e1a3%3A0x64c20c6ff22d4877!2sSima%20Deli!5e0!3m2!1sen!2sin!4v1586447068184!5m2!1sen!2sin",
  bookingEmbedUrl: "https://module.lafourchette.com/sv_SE/module/443651-88852",
  bookingDirectUrl: "https://module.lafourchette.com/sv_SE/module/443651-88852"
};

export const DELIVERY_PARTNERS = [
  {
    id: "wolt",
    name: "Wolt",
    description: "Snabb hemleverans direkt till dörren i hela Stockholm.",
    url: "https://wolt.com/en/swe/stockholm/restaurant/sima-deli",
    accent: "#009DE0",
    badge: "Rekommenderad"
  },
  {
    id: "foodora",
    name: "Foodora",
    description: "Beställ enkelt via Foodora-appen eller webben.",
    url: "https://www.foodora.se/restaurant/s5hz/sima-deli",
    accent: "#D60265",
    badge: "Populär"
  },
  {
    id: "ubereats",
    name: "Uber Eats",
    description: "Få din persiska favoritmat levererad med Uber Eats.",
    url: "https://www.ubereats.com/se/stockholm/food-delivery/sima-deli/pBEYZ_HZRgWyxgSeqmf14Q",
    accent: "#06C167",
    badge: "Smidigt"
  },
  {
    id: "simaexpress",
    name: "Sima Express",
    description: "Vår egen leveranstjänst. Lanseras inom kort.",
    url: "/sima-express/",
    accent: "#c6a04a",
    badge: "Kommer snart",
    isInternal: true
  }
];

export const NAV_LINKS = [
  { name: "Om Oss", path: "/om-oss/" },
  { name: "Meny", path: "/meny/" },
  { name: "Catering", path: "/catering/" },
  { name: "Sima Deli matlådor", path: "/sima-deli-matlador/" },
  { name: "Hemleverans", path: "/hemleverans/" },
  { name: "Kontakt", path: "/kontakt/" }
];

export const MENU_CATEGORIES = [
  "Alla",
  "Varma persiska rätter",
  "Mazeh-tallrik",
  "Sallader",
  "Wraps",
  "Tillbehör & Mazeh",
  "Persisk frukost",
  "Något sött",
  "Drycker"
];

export const MENU_ITEMS: MenuItem[] = [
  // Varma persiska rätter
  {
    id: "zereshk-polo",
    name: "ZERESHK-POLO BA MORGH",
    category: "Varma persiska rätter",
    description: "Marinerad kycklingfilé i tomatsås, serveras med saffranris, zereshk (berberis bär).",
    price: "189 kr"
  },
  {
    id: "gheymeh",
    name: "GHEYMEH",
    category: "Varma persiska rätter",
    description: "Köttgryta med gula linser, körsbärstomater, torkade lime, serveras med saffran ris.",
    price: "189 kr",
    image: "/images/gheymeh.jpg"
  },
  {
    id: "veg-gheymeh",
    name: "VEG. GHEYMEH – Bademjan",
    category: "Varma persiska rätter",
    description: "Gryta med gula linser, körsbärstomater, torkad lime och ugnsrostade auberginer serveras med saffran ris.",
    price: "189 kr",
    isVegan: true,
    note: "Vegan Friendly"
  },
  {
    id: "ghormeh-sabzi",
    name: "GHORMEH-SABZI",
    category: "Varma persiska rätter",
    description: "Köttgryta med örter, bönor och torkade lime, serveras med saffran ris.",
    price: "189 kr",
    image: "/images/ghormeh-sabzi.jpg"
  },
  {
    id: "baghali-polo",
    name: "BAGHALI-POLO MAHICHE",
    category: "Varma persiska rätter",
    description: "Lång-kokt lammlägg serveras med saffranris med bondbönor och dill.",
    price: "259 kr",
    image: "/images/baghali-polo.jpg"
  },
  {
    id: "tahchin",
    name: "TAHCHIN",
    category: "Varma persiska rätter",
    description: "Marinerat kyckling i yoghurt och ägg tillagad tillsammans som en “Rice-Cake” med saffran ris, toppad med zereshk (berberis bär).",
    price: "189 kr",
    note: "Serveras endast på lördagar"
  },
  {
    id: "veg-ghormeh-sabzi",
    name: "VEG. GHORMEH-SABZI",
    category: "Varma persiska rätter",
    description: "Gryta med örter, bönor och torkade lime, serveras med saffran ris.",
    price: "189 kr",
    isVegan: true,
    note: "Vegan Friendly"
  },
  {
    id: "ash-reshte",
    name: "ASH RESHTE",
    category: "Varma persiska rätter",
    description: "Vegetarisk ört soppa med bönor och nudlar.",
    price: "119 kr",
    isVegetarian: true,
    image: "/images/ash-reshte.jpg"
  },
  {
    id: "abgoosht",
    name: "Abgoosht",
    category: "Varma persiska rätter",
    description: "Traditionell köttsoppa med bönor och tomat, serveras med Sangak bröd och färska örter.",
    price: "249 kr"
  },

  // Mazeh-tallrik
  {
    id: "mazeh-tallrik",
    name: "MAZEH-TALLRIK",
    category: "Mazeh-tallrik",
    description: "Kombinera 3 valfria Mazeh från deli disken.",
    price: "189 kr",
    subItems: [
      { name: "MORGH", description: "Ugns grillad kycklingfilé" },
      { name: "KOO-KOO", description: "Vegetarisk ört omelett med Zereshk (berberis bär), örter och vitlök" },
      { name: "OLOVIEH", description: "Kyckling röra med potatis, ägg, majonnäs, ärtor och saltgurka" },
      { name: "BAGHALI-POLO (vegetarisk)", description: "Saffran ris med dill och bondbönor" },
      { name: "KASHKE-BADEMJAN", description: "Ugnsrostade auberginer i röra med matlagnings- yoghurt, rostad lök, färsk vitlök, valnötter, mynta" },
      { name: "HUMMUS (Vegan Friendly)", description: "Kikärter, tahini, olivolja, färsk vitlök och citron juice" }
    ]
  },

  // Sallader
  {
    id: "grillad-kyckling-sallad",
    name: "GRILLAD KYCKLINGFILÉ SALLAD",
    category: "Sallader",
    description: "Serveras med blandsallad, gurka och tomat och säsongs grönsaker. Välj mellan Fetaost och avokado eller Chevré och rödbetor.",
    price: "159 kr"
  },
  {
    id: "grillad-halloumi-sallad",
    name: "GRILLAD HALLOUMI SALLAD",
    category: "Sallader",
    description: "Serveras med blandsallad, gurka och tomat och säsongs grönsaker, ugnsrostad aubergine, avokado crème, säsongens frukt.",
    price: "169 kr",
    isVegetarian: true
  },

  // Wraps
  {
    id: "panir-sabzi-wrap",
    name: "PANIR SABZI WRAP",
    category: "Wraps",
    description: "Fetaost, valnötter, mynta, gurka, tomat.",
    price: "119 kr",
    isVegetarian: true
  },
  {
    id: "koo-koo-wrap",
    name: "KOO-KOO WRAP",
    category: "Wraps",
    description: "Ört omelett med Zereshk (berberis bär), sallad, tomat, saltgurka.",
    price: "119 kr",
    isVegetarian: true
  },
  {
    id: "morgh-wrap",
    name: "MORGH WRAP",
    category: "Wraps",
    description: "Kyckling, bulgur, hummus, pickles, tomat, persilja.",
    price: "119 kr"
  },
  {
    id: "olovieh-wrap",
    name: "OLOVIEH WRAP",
    category: "Wraps",
    description: "Kyckling röra med potatis, ägg, majonnäs, ärtor och saltgurka.",
    price: "119 kr"
  },

  // Tillbehör & Mazeh
  {
    id: "torshi",
    name: "TORSHI",
    category: "Tillbehör & Mazeh",
    description: "Sima Deli’s egna inlagda grönsaker.",
    price: "59 kr",
    isVegan: true
  },
  {
    id: "mastokhiar",
    name: "MASTOKHIAR",
    category: "Tillbehör & Mazeh",
    description: "Yoghurt blandad med gurka och mynta.",
    price: "39 kr",
    isVegetarian: true
  },
  {
    id: "mastomoosir",
    name: "MASTOMOOSIR",
    category: "Tillbehör & Mazeh",
    description: "Yoghurt med vildlök.",
    price: "39 kr",
    isVegetarian: true
  },
  {
    id: "zeytoon-parvardeh",
    name: "ZEYTOON PARVARDEH",
    category: "Tillbehör & Mazeh",
    description: "Oliver marinerat med granatäpple, vitlök, valnötter, mynta, örter.",
    price: "49 kr",
    isVegan: true
  },
  {
    id: "salad-shirazi",
    name: "SALAD SHIRAZI",
    category: "Tillbehör & Mazeh",
    description: "Tomat, gurka, rödlök, färskpressat citron juice och olivolja.",
    price: "39 kr",
    isVegan: true
  },
  {
    id: "olovieh-skal",
    name: "OLOVIEH",
    category: "Tillbehör & Mazeh",
    description: "Kyckling röra, potatis, ägg, majonnäs, ärtor, saltgurka.",
    price: "Liten 95 kr / Stor 179 kr"
  },
  {
    id: "kashke-bademjan-skal",
    name: "KASHKE-BADEMJAN",
    category: "Tillbehör & Mazeh",
    description: "Vegetarisk ugnsrostade auberginer i röra med matlagnings-yoghurt, rostad lök, färsk vitlök, valnötter och mynta.",
    price: "Liten 95 kr / Stor 179 kr",
    isVegetarian: true
  },
  {
    id: "hummus-skal",
    name: "HUMMUS",
    category: "Tillbehör & Mazeh",
    description: "Kikärter, tahini, olivolja, färsk vitlök och citron juice.",
    price: "Liten 89 kr / Stor 169 kr",
    isVegan: true,
    note: "Vegan Friendly"
  },
  {
    id: "koo-koo-skal",
    name: "KOO-KOO",
    category: "Tillbehör & Mazeh",
    description: "Vegetarisk ört-omelett med Zereshk (berberis bär) och vitlök.",
    price: "Liten 89 kr / Stor 169 kr",
    isVegetarian: true
  },

  // Persisk frukost
  {
    id: "nimro",
    name: "NIMRO",
    category: "Persisk frukost",
    description: "Stekta ägg med barbari bröd.",
    price: "89 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "noon-panir",
    name: "NOON PANIR",
    category: "Persisk frukost",
    description: "Bröd, fetaost, gurka, tomat.",
    price: "89 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "persisk-omelett",
    name: "PERSISK OMELETT",
    category: "Persisk frukost",
    description: "Ägg med färska tomater och barbari bröd.",
    price: "139 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "sobhane-tallrik",
    name: "SOBHANE TALLRIK",
    category: "Persisk frukost",
    description: "Smör, mascarpone, marmelad/honung, fetaost, gurka, tomater, färska örter, halvardeh, oliver och valnötter.",
    price: "149 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "halim",
    name: "HALIM",
    category: "Persisk frukost",
    description: "Persisk gröt (innehåller kött, vete, smör).",
    price: "119 kr",
    note: "Barbari bröd ingår"
  },
  {
    id: "extra-barbari",
    name: "Extra Barbari bröd",
    category: "Persisk frukost",
    description: "Nybakat traditionellt persiskt barbari bröd.",
    price: "20 kr",
    isVegetarian: true
  },

  // Något sött
  {
    id: "sholeh-zard",
    name: "SHOLEH ZARD",
    category: "Något sött",
    description: "Rispudding smaksatt med saffran, kanel, riven mandel.",
    price: "59 kr",
    isVegan: true,
    note: "Vegan Friendly"
  },
  {
    id: "baklava",
    name: "BAKLAVA",
    category: "Något sött",
    description: "Klassisk krispig baklava (innehåller även smör och nötter).",
    price: "39 kr",
    isVegetarian: true
  },
  {
    id: "shirini",
    name: "SHIRINI",
    category: "Något sött",
    description: "Persiska kakor (innehåller även smör och nötter).",
    price: "39 kr",
    isVegetarian: true
  },

  // Drycker
  {
    id: "kaffe-special",
    name: "Kaffe & Varm Dryck",
    category: "Drycker",
    description: "Noga utvalda varma drycker och traditionellt persiskt te.",
    subItems: [
      { name: "Espresso", price: "35 kr" },
      { name: "Dubbel Espresso", price: "39 kr" },
      { name: "Cappuccino", price: "45 kr" },
      { name: "Café Latte", price: "45 kr" },
      { name: "Kaffe", price: "39 kr" },
      { name: "Varm Choklad", price: "39 kr" },
      { name: "Chai ghand-pahlu", price: "39 kr" },
      { name: "Chai Nabat (te med sockerklubba)", price: "49 kr" },
      { name: "Ört-te (med sockerklubba)", price: "49 kr" }
    ]
  },
  {
    id: "kalla-drycker",
    name: "Kalla Drycker & Juice",
    category: "Drycker",
    description: "Traditionella persiska svalkande drycker och färsk juice.",
    subItems: [
      { name: "Doogh (innehåller yoghurt och mynta)", price: "39 kr" },
      { name: "Granatäpple juice", price: "39 kr" },
      { name: "Apelsin Juice", price: "39 kr" },
      { name: "Läsk", price: "39 kr" }
    ]
  }
];

export const RETAIL_LOCATIONS: RetailLocation[] = [
  {
    name: "Caspian Deli Supermarket",
    address: "Danmarksgatan 52, 164 40 Kista",
    cityArea: "Kista",
    mapQuery: "Caspian+Deli+Supermarket+Danmarksgatan+52+Kista"
  },
  {
    name: "ICA Supermarket Skogås",
    address: "Skogåstorget 12, 142 21 Skogås",
    cityArea: "Skogås / Huddinge",
    mapQuery: "ICA+Supermarket+Skogas+Skogastorget+12"
  },
  {
    name: "ICA Kista Galleria",
    address: "Hanstavägen 55, 164 91 Kista",
    cityArea: "Kista",
    mapQuery: "ICA+Kista+Galleria+Hanstavagen+55"
  },
  {
    name: "Matvärlden Veddesta",
    address: "Nettovägen 2-4, 175 41 Järfälla",
    cityArea: "Järfälla / Veddesta",
    mapQuery: "Matvarlden+Veddesta+Nettovagen+2-4+Jarfalla"
  },
  {
    name: "Matvärlden Kungens Kurva",
    address: "Tangentvägen 14B, 141 75 Kungens Kurva",
    cityArea: "Kungens Kurva",
    mapQuery: "Matvarlden+Kungens+Kurva+Tangentvagen+14B"
  },
  {
    name: "Persmarket Solna",
    address: "Solna Centrum, 171 45 Solna",
    cityArea: "Solna",
    mapQuery: "Persmarket+Solna+Centrum"
  },
  {
    name: "ICA Kvantum Märsta",
    address: "Nymärsta torg 4, 195 30 Märsta",
    cityArea: "Märsta",
    mapQuery: "ICA+Kvantum+Marsta+Nymarsta+torg+4"
  },
  {
    name: "Matvärlden Tensta",
    address: "Tenstagången 7, 163 64 Spånga",
    cityArea: "Tensta / Spånga",
    mapQuery: "Matvarlden+Tensta+Tenstagangen+7+Spanga"
  },
  {
    name: "AM Store",
    address: "Sergels Torg 1, 111 57 Stockholm",
    cityArea: "Stockholm City",
    mapQuery: "AM+Store+Sergels+Torg+1+Stockholm"
  },
  {
    name: "Arlanda Taxi Remote",
    address: "Brovägen 1B, 190 60 Stockholm-Arlanda",
    cityArea: "Arlanda",
    mapQuery: "Brovagen+1B+Stockholm-Arlanda"
  },
  {
    name: "Hemköp Mall of Scandinavia",
    address: "Mall of Scandinavia, Råsta Strandväg 19, 169 79 Solna",
    cityArea: "Solna",
    mapQuery: "Hemkop+Mall+of+Scandinavia+Solna"
  },
  {
    name: "Iran Livs",
    address: "Hallonbergen Centrum, 174 52 Sundbyberg",
    cityArea: "Sundbyberg / Hallonbergen",
    mapQuery: "Iran+Livs+Hallonbergen+Centrum"
  }
];

export const CATERING_INFO = {
  heading: "Catering med persisk värme och smakrikedom",
  intro: "Vi tar emot beställningar från företag, privatpersoner och möjlighet till abonnering av lokal finns.",
  subtext: "Låt Sima Deli förgylla er nästa fest, företagsmiddag, födelsedag eller disputation med autentiska persiska grytor, saffransris, färgsprakande mazeh och nybakat bröd.",
  contactEmail: "info@simadeli.com",
  contactPhone: "08-660 36 35"
};
