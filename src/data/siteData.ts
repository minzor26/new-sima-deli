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
    name: "Zereshkpolo",
    category: "Varma persiska rätter",
    description: "Marinerad kycklingfilé i tomatsås, serveras med saffranris, zereshk (berberis bär) och pistagenötter.",
    price: "189 kr",
    image: "/images/zereshk-polo.jpg"
  },
  {
    id: "gheymeh",
    name: "Gheymeh",
    category: "Varma persiska rätter",
    description: "Köttgryta med gula linser, körsbärstomater, torkade lime, serveras med saffran ris.",
    price: "189 kr",
    image: "/images/gheymeh.jpg"
  },
  {
    id: "veg-gheymeh",
    name: "Vegan Ghymeh Bademjan",
    category: "Varma persiska rätter",
    description: "Gryta med gula linser, körsbärstomater, torkad lime och ugnsrostade auberginer serveras med saffran ris.",
    price: "189 kr",
    isVegan: true,
    note: "Vegan Friendly",
    image: "/images/vegan-gheymeh-bademjan.jpg"
  },
  {
    id: "ghormeh-sabzi",
    name: "Ghormeh-Sabzi",
    category: "Varma persiska rätter",
    description: "Köttgryta med örter, bönor och torkade lime, serveras med saffran ris.",
    price: "189 kr",
    image: "/images/ghormeh-sabzi.jpg"
  },
  {
    id: "baghali-polo",
    name: "Baghali-Polo Mahiche",
    category: "Varma persiska rätter",
    description: "Lång-kokt lammlägg serveras med saffranris med bondbönor och dill.",
    price: "259 kr",
    image: "/images/baghali-polo.jpg"
  },
  {
    id: "tahchin",
    name: "Tahchin",
    category: "Varma persiska rätter",
    description: "Marinerat kyckling i yoghurt och ägg tillagad tillsammans som en “Rice-Cake” med saffran ris, toppad med zereshk (berberis bär).",
    price: "189 kr",
    note: "Serveras endast på lördagar",
    image: "/images/tahchin.jpg"
  },
  {
    id: "zaboon",
    name: "Zaboon",
    category: "Varma persiska rätter",
    description: "Mörstekt ox-tunga tillagad i fyllig persisk kryddbuljong, serveras med färsk Sangak/Barbari bröd, citronklyftor, rödlök och Torshi.",
    price: "229 kr",
    image: "/images/zaboon.jpg"
  },
  {
    id: "veg-ghormeh-sabzi",
    name: "Veg. Ghormeh-Sabzi",
    category: "Varma persiska rätter",
    description: "Gryta med örter, bönor och torkade lime, serveras med saffran ris.",
    price: "189 kr",
    isVegan: true,
    note: "Vegan Friendly"
  },
  {
    id: "ash-reshte",
    name: "Ash Reshte",
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
    description: "Traditionell persisk köttsoppa/gryta med bönor och tomat, serveras med Sangak bröd, Doogh, färska örter och Torshi.",
    price: "249 kr",
    image: "/images/abgoosht.jpg"
  },

  // Mazeh-tallrik
  {
    id: "mazeh-tallrik",
    name: "Maze Tallrik",
    category: "Mazeh-tallrik",
    description: "Kombinera 3 valfria Mazeh från deli disken.",
    price: "189 kr",
    image: "/images/mazeh-tallrik.jpg",
    subItems: [
      { name: "Morgh", description: "Ugnsgrillad kycklingfilé" },
      { name: "Koo-koo", description: "Vegetarisk ört-omelett med Zereshk (berberis bär), örter och vitlök" },
      { name: "Olovie", description: "Kycklingröra med potatis, ägg, majonnäs, ärtor och saltgurka" },
      { name: "Baghali-Polo (vegetarisk)", description: "Saffranris med dill och bondbönor" },
      { name: "Kashke-Bademjan", description: "Ugnsrostade auberginer i röra med matlagningsyoghurt, rostad lök, färsk vitlök, valnötter, mynta" },
      { name: "Hummus (Vegan Friendly)", description: "Kikärter, tahini, olivolja, färsk vitlök och citronjuice" }
    ]
  },

  // Sallader
  {
    id: "grillad-kyckling-sallad",
    name: "Grillad Kycklingfilé Sallad",
    category: "Sallader",
    description: "Serveras med blandsallad, gurka och tomat och säsongs grönsaker. Välj mellan Fetaost och avokado eller Chevré och rödbetor.",
    price: "159 kr"
  },
  {
    id: "grillad-halloumi-sallad",
    name: "Grillad Halloumi Sallad",
    category: "Sallader",
    description: "Serveras med blandsallad, gurka och tomat och säsongs grönsaker, ugnsrostad aubergine, avokado crème, säsongens frukt.",
    price: "169 kr",
    isVegetarian: true
  },

  // Wraps
  {
    id: "panir-sabzi-wrap",
    name: "Panir Sabzi Wrap",
    category: "Wraps",
    description: "Fetaost, valnötter, mynta, gurka, tomat.",
    price: "119 kr",
    isVegetarian: true
  },
  {
    id: "koo-koo-wrap",
    name: "Koo-Koo Wrap",
    category: "Wraps",
    description: "Ört omelett med Zereshk (berberis bär), sallad, tomat, saltgurka.",
    price: "119 kr",
    isVegetarian: true
  },
  {
    id: "morgh-wrap",
    name: "Morgh Wrap",
    category: "Wraps",
    description: "Kyckling, bulgur, hummus, pickles, tomat, persilja.",
    price: "119 kr"
  },
  {
    id: "olovieh-wrap",
    name: "Olovie Wrap",
    category: "Wraps",
    description: "Kyckling röra med potatis, ägg, majonnäs, ärtor och saltgurka.",
    price: "119 kr",
    image: "/images/olovieh.jpg"
  },

  // Tillbehör & Mazeh
  {
    id: "torshi",
    name: "Torshi",
    category: "Tillbehör & Mazeh",
    description: "Sima Deli’s egna inlagda grönsaker.",
    price: "59 kr",
    isVegan: true,
    image: "/images/torshi.jpg"
  },
  {
    id: "mastokhiar",
    name: "Mastokhiar",
    category: "Tillbehör & Mazeh",
    description: "Yoghurt blandad med gurka och mynta.",
    price: "39 kr",
    isVegetarian: true
  },
  {
    id: "mastomoosir",
    name: "Mastmoosir",
    category: "Tillbehör & Mazeh",
    description: "Traditionell persisk yoghurt med vildlök och mynta.",
    price: "39 kr",
    isVegetarian: true,
    image: "/images/mastmoosir.jpg"
  },
  {
    id: "zeytoon-parvardeh",
    name: "Zeytoon Parvardeh",
    category: "Tillbehör & Mazeh",
    description: "Oliver marinerat med granatäpple, vitlök, valnötter, mynta, örter.",
    price: "49 kr",
    isVegan: true
  },
  {
    id: "salad-shirazi",
    name: "Shirazi-Sallad",
    category: "Tillbehör & Mazeh",
    description: "Tomat, gurka, rödlök, färskpressat citron juice och olivolja.",
    price: "39 kr",
    isVegan: true,
    image: "/images/shirazi-salad.jpg"
  },
  {
    id: "olovieh-skal",
    name: "Olovie",
    category: "Tillbehör & Mazeh",
    description: "Kyckling röra, potatis, ägg, majonnäs, ärtor, saltgurka.",
    price: "Liten 95 kr / Stor 179 kr",
    image: "/images/olovieh.jpg"
  },
  {
    id: "kashke-bademjan-skal",
    name: "Kashke-Bademjan",
    category: "Tillbehör & Mazeh",
    description: "Vegetarisk ugnsrostade auberginer i röra med matlagnings-yoghurt, rostad lök, färsk vitlök, valnötter och mynta.",
    price: "Liten 95 kr / Stor 179 kr",
    isVegetarian: true
  },
  {
    id: "hummus-skal",
    name: "Hummus",
    category: "Tillbehör & Mazeh",
    description: "Kikärter, tahini, olivolja, färsk vitlök och citron juice.",
    price: "Liten 89 kr / Stor 169 kr",
    isVegan: true,
    note: "Vegan Friendly"
  },
  {
    id: "koo-koo-skal",
    name: "Koo-koo",
    category: "Tillbehör & Mazeh",
    description: "Vegetarisk ört-omelett med Zereshk (berberis bär) och vitlök.",
    price: "Liten 89 kr / Stor 169 kr",
    isVegetarian: true,
    image: "/images/koo-koo.jpg"
  },

  // Persisk frukost
  {
    id: "nimro",
    name: "Nimro",
    category: "Persisk frukost",
    description: "Stekta ägg med barbari bröd.",
    price: "89 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "noon-panir",
    name: "Noon Panir",
    category: "Persisk frukost",
    description: "Bröd, fetaost, gurka, tomat.",
    price: "89 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "persisk-omelett",
    name: "Persisk Omelett",
    category: "Persisk frukost",
    description: "Ägg med färska tomater och barbari bröd.",
    price: "139 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "sobhane-tallrik",
    name: "Sobhane Tallrik",
    category: "Persisk frukost",
    description: "Smör, mascarpone, marmelad/honung, fetaost, gurka, tomater, färska örter, halvardeh, oliver och valnötter.",
    price: "149 kr",
    isVegetarian: true,
    note: "Barbari bröd ingår"
  },
  {
    id: "halim",
    name: "Halim",
    category: "Persisk frukost",
    description: "Persisk gröt (innehåller kött, vete, smör).",
    price: "119 kr",
    note: "Barbari bröd ingår"
  },
  {
    id: "extra-barbari",
    name: "Extra Barbari Bröd",
    category: "Persisk frukost",
    description: "Nybakat traditionellt persiskt barbari bröd.",
    price: "20 kr",
    isVegetarian: true
  },

  // Något sött
  {
    id: "sholeh-zard",
    name: "Sholezard",
    category: "Något sött",
    description: "Persisk rispudding smaksatt med saffran, kanel, pistagenötter, mandel och rosenblad.",
    price: "59 kr",
    isVegan: true,
    note: "Vegan Friendly",
    image: "/images/sholeh-zard.jpg"
  },
  {
    id: "baklava",
    name: "Baklava",
    category: "Något sött",
    description: "Klassisk krispig baklava (innehåller även smör och nötter).",
    price: "39 kr",
    isVegetarian: true
  },
  {
    id: "shirini",
    name: "Shirini",
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

export const FEATURED_PRODUCTS: MenuItem[] = [
  {
    id: "veg-gheymeh",
    name: "Vegan Ghymeh Bademjan",
    category: "Varma persiska rätter",
    description: "Autentisk persisk gryta med gula linser, tomatsås, torkad lime och ugnsrostad aubergine serverad med saffransris.",
    price: "189 kr",
    isVegan: true,
    note: "Populär Vegan",
    image: "/images/vegan-gheymeh-bademjan.jpg"
  },
  {
    id: "tahchin",
    name: "Tahchin",
    category: "Varma persiska rätter",
    description: "Marinerat kyckling i yoghurt och ägg tillagad som en krispig saffrans-ricecake, toppad med berberisbär.",
    price: "189 kr",
    note: "Saffransklassiker",
    image: "/images/tahchin.jpg"
  },
  {
    id: "zaboon",
    name: "Zaboon",
    category: "Varma persiska rätter",
    description: "Mörstekt ox-tunga tillagad i fyllig persisk kryddbuljong, serveras med Sangak/Barbari bröd, citron, lök och Torshi.",
    price: "229 kr",
    note: "Delikatesssoppa",
    image: "/images/zaboon.jpg"
  },
  {
    id: "mazeh-tallrik",
    name: "Maze Tallrik",
    category: "Mazeh-tallrik",
    description: "Generös tallrik kombinerad med 3 valfria Mazeh från deli-disken (t.ex. Koo-koo, Olovie och Kashke-bademjan).",
    price: "189 kr",
    note: "Mest Sålda",
    image: "/images/mazeh-tallrik.jpg"
  },
  {
    id: "olovieh-skal",
    name: "Olovie",
    category: "Tillbehör & Mazeh / Wraps",
    description: "Klassisk persisk kyckling- och potatisröra med ägg, majonnäs, grönärtor och krispig saltgurka.",
    price: "119 kr",
    note: "Signaturröra",
    image: "/images/olovieh.jpg"
  },
  {
    id: "koo-koo-skal",
    name: "Koo-koo",
    category: "Tillbehör & Mazeh",
    description: "Vegetarisk persisk ört-omelett med Zereshk (berberis bär), valnötter och vitlök.",
    price: "89 kr",
    isVegetarian: true,
    note: "Örtfavorit",
    image: "/images/koo-koo.jpg"
  },
  {
    id: "mastomoosir",
    name: "Mastmoosir",
    category: "Tillbehör & Mazeh",
    description: "Krämig persisk matlagningsyoghurt smaksatt med torkad vildlök och färsk mynta.",
    price: "39 kr",
    isVegetarian: true,
    note: "Krämigt Tillbehör",
    image: "/images/mastmoosir.jpg"
  },
  {
    id: "salad-shirazi",
    name: "Shirazi-Sallad",
    category: "Tillbehör & Mazeh",
    description: "Fint tärnad gurka, tomat och rödlök slungad med färskpressad citronsaft, jungfruolivolja och torkad mynta.",
    price: "39 kr",
    isVegan: true,
    note: "Fräsch Favorit",
    image: "/images/shirazi-salad.jpg"
  },
  {
    id: "zereshk-polo",
    name: "Zereshkpolo",
    category: "Varma persiska rätter",
    description: "Marinerad kycklingfilé i fyllig tomatsås, serveras med saffranris, zereshk berberisbär och mandel/pistage.",
    price: "189 kr",
    note: "Persisk Klassiker",
    image: "/images/zereshk-polo.jpg"
  },
  {
    id: "abgoosht",
    name: "Abgoosht",
    category: "Varma persiska rätter",
    description: "Traditionell persisk köttgryta med bönor och tomat, serverad med Sangak bröd, örter, Doogh och Torshi.",
    price: "249 kr",
    note: "Hemlagad Tradition",
    image: "/images/abgoosht.jpg"
  },
  {
    id: "torshi",
    name: "Torshi",
    category: "Tillbehör & Mazeh",
    description: "Sima Delis egna inlagda grönsaker med blomkål, morot, selleri, aubergine och persiska kryddor.",
    price: "59 kr",
    isVegan: true,
    note: "Traditionell Delikatess",
    image: "/images/torshi.jpg"
  },
  {
    id: "sholeh-zard",
    name: "Sholezard",
    category: "Något sött",
    description: "Persisk rispudding smaksatt med saffran, kanel, pistagenötter, mandel och rosenblad.",
    price: "59 kr",
    isVegan: true,
    note: "Saffransdessert",
    image: "/images/sholeh-zard.jpg"
  }
];


