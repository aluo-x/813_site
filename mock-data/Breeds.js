/*
    Data from https://github.com/dariusk/corpora/blob/master/data/animals/dogs.json
 */
const dog_breeds = {
  AFFENPINSCHER: 'Affenpinscher',
  AFGHAN_HOUND: 'Afghan Hound',
  AIDI: 'Aidi',
  AIREDALE_TERRIER: 'Airedale Terrier',
  AKBASH_DOG: 'Akbash Dog',
  AKITA: 'Akita',
  ALANO_ESPANOL: 'Alano Español',
  ALASKAN_KLEE_KAI: 'Alaskan Klee Kai',
  ALASKAN_MALAMUTE: 'Alaskan Malamute',
  ALPINE_DACHSBRACKE: 'Alpine Dachsbracke',
  ALPINE_SPANIEL: 'Alpine Spaniel',
  AMERICAN_BULLDOG: 'American Bulldog',
  AMERICAN_COCKER_SPANIEL: 'American Cocker Spaniel',
  AMERICAN_ESKIMO_DOG: 'American Eskimo Dog',
  AMERICAN_FOXHOUND: 'American Foxhound',
  AMERICAN_HAIRLESS_TERRIER: 'American Hairless Terrier',
  AMERICAN_PIT_BULL_TERRIER: 'American Pit Bull Terrier',
  AMERICAN_STAFFORDSHIRE_TERRIER: 'American Staffordshire Terrier',
  AMERICAN_WATER_SPANIEL: 'American Water Spaniel',
  AUSTRALIAN_CATTLE_DOG: 'Australian Cattle Dog',
  AUSTRALIAN_KELPIE: 'Australian Kelpie',
  AUSTRALIAN_SHEPHERD: 'Australian Shepherd',
  AUSTRALIAN_SILKY_TERRIER: 'Australian Silky Terrier',
  AUSTRALIAN_STUMPY_TAIL_CATTLE_DOG: 'Australian Stumpy Tail Cattle Dog',
  AUSTRALIAN_TERRIER: 'Australian Terrier',
  BASENJI: 'Basenji',
  BASQUE_SHEPHERD_DOG: 'Basque Shepherd Dog',
  BASSET_HOUND: 'Basset Hound',
  BAVARIAN_MOUNTAIN_HOUND: 'Bavarian Mountain Hound',
  BEAGLE: 'Beagle',
  BEAGLE_HARRIER: 'Beagle-Harrier',
  BEARDED_COLLIE: 'Bearded Collie',
  BEDLINGTON_TERRIER: 'Bedlington Terrier',
  BELGIAN_SHEPHERD_DOG_GROENENDAEL: 'Belgian Shepherd Dog (Groenendael)',
  BELGIAN_SHEPHERD_DOG_LAEKENOIS: 'Belgian Shepherd Dog (Laekenois)',
  BELGIAN_SHEPHERD_DOG_MALINOIS: 'Belgian Shepherd Dog (Malinois)',
  BERGAMASCO_SHEPHERD: 'Bergamasco Shepherd',
  BERGER_BLANC_SUISSE: 'Berger Blanc Suisse',
  BERGER_PICARD: 'Berger Picard',
  BERNER_LAUFHUND: 'Berner Laufhund',
  BERNESE_MOUNTAIN_DOG: 'Bernese Mountain Dog',
  BLACK_AND_TAN_COONHOUND: 'Black and Tan Coonhound',
  BLACK_AND_TAN_VIRGINIA_FOXHOUND: 'Black and Tan Virginia Foxhound',
  BLACK_NORWEGIAN_ELKHOUND: 'Black Norwegian Elkhound',
  BLACK_RUSSIAN_TERRIER: 'Black Russian Terrier',
  BLOODHOUND: 'Bloodhound',
  BLUE_LACY: 'Blue Lacy',
  BLUE_PAUL_TERRIER: 'Blue Paul Terrier',
  BOERBOEL: 'Boerboel',
  BOHEMIAN_SHEPHERD: 'Bohemian Shepherd',
  BOLOGNESE: 'Bolognese',
  BORDER_COLLIE: 'Border Collie',
  BORDER_TERRIER: 'Border Terrier',
  BORZOI: 'Borzoi',
  BOSTON_TERRIER: 'Boston Terrier',
  BOUVIER_DES_ARDENNES: 'Bouvier des Ardennes',
  BOUVIER_DES_FLANDRES: 'Bouvier des Flandres',
  BOXER: 'Boxer',
  BRAZILIAN_TERRIER: 'Brazilian Terrier',
  BRIARD: 'Briard',
  BRIQUET_GRIFFON_VENDEEN: 'Briquet Griffon Vendéen',
  BRITTANY: 'Brittany',
  BROHOLMER: 'Broholmer',
  BRUNO_JURA_HOUND: 'Bruno Jura Hound',
  BUCOVINA_SHEPHERD_DOG: 'Bucovina Shepherd Dog',
  BULL_AND_TERRIER: 'Bull and Terrier',
  BULL_TERRIER_MINIATURE: 'Bull Terrier (Miniature)',
  BULL_TERRIER: 'Bull Terrier',
  BULLDOG: 'Bulldog',
  BULLENBEISSER: 'Bullenbeisser',
  BULLMASTIFF: 'Bullmastiff',
  BULLY_KUTTA: 'Bully Kutta',
  BURGOS_POINTER: 'Burgos Pointer',
  CAIRN_TERRIER: 'Cairn Terrier',
  CANAAN_DOG: 'Canaan Dog',
  CANADIAN_ESKIMO_DOG: 'Canadian Eskimo Dog',
  CANE_CORSO: 'Cane Corso',
  CARDIGAN_WELSH_CORGI: 'Cardigan Welsh Corgi',
  CAROLINA_DOG: 'Carolina Dog',
  CARPATHIAN_SHEPHERD_DOG: 'Carpathian Shepherd Dog',
  CATAHOULA_CUR: 'Catahoula Cur',
  CATALAN_SHEEPDOG: 'Catalan Sheepdog',
  CAUCASIAN_SHEPHERD_DOG: 'Caucasian Shepherd Dog',
  CAVALIER_KING_CHARLES_SPANIEL: 'Cavalier King Charles Spaniel',
  CENTRAL_ASIAN_SHEPHERD_DOG: 'Central Asian Shepherd Dog',
  CESKY_FOUSEK: 'Cesky Fousek',
  CESKY_TERRIER: 'Cesky Terrier',
  CHESAPEAKE_BAY_RETRIEVER: 'Chesapeake Bay Retriever',
  CHIEN_FRANCAIS_BLANC_ET_NOIR: 'Chien Français Blanc et Noir',
  CHIEN_FRANCAIS_BLANC_ET_ORANGE: 'Chien Français Blanc et Orange',
  CHIEN_FRANCAIS_TRICOLORE: 'Chien Français Tricolore',
  CHIEN_GRIS: 'Chien-gris',
  CHIHUAHUA: 'Chihuahua',
  CHILEAN_FOX_TERRIER: 'Chilean Fox Terrier',
  CHINESE_CHONGQING_DOG: 'Chinese Chongqing Dog',
  CHINESE_CRESTED_DOG: 'Chinese Crested Dog',
  CHINESE_IMPERIAL_DOG: 'Chinese Imperial Dog',
  CHINOOK: 'Chinook',
  CHIPPIPARAI: 'Chippiparai',
  CHOW_CHOW: 'Chow Chow',
  CIERNY_SERY: 'Cierny Sery',
  CIMARRON_URUGUAYO: 'Cimarrón Uruguayo',
  CIRNECO_DELL_ETNA: 'Cirneco dell\'Etna',
  CLUMBER_SPANIEL: 'Clumber Spaniel',
  COMBAI: 'Combai',
  CORDOBA_FIGHTING_DOG: 'Cordoba Fighting Dog',
  COTON_DE_TULEAR: 'Coton de Tulear',
  CRETAN_HOUND: 'Cretan Hound',
  CROATIAN_SHEEPDOG: 'Croatian Sheepdog',
  CUMBERLAND_SHEEPDOG: 'Cumberland Sheepdog',
  CURLY_COATED_RETRIEVER: 'Curly Coated Retriever',
  CURSINU: 'Cursinu',
  DACHSHUND: 'Dachshund',
  DALMATIAN: 'Dalmatian',
  DANDIE_DINMONT_TERRIER: 'Dandie Dinmont Terrier',
  DANISH_SWEDISH_FARMDOG: 'Danish Swedish Farmdog',
  DEUTSCHE_BRACKE: 'Deutsche Bracke',
  DOBERMAN_PINSCHER: 'Doberman Pinscher',
  DOGO_ARGENTINO: 'Dogo Argentino',
  DOGO_CUBANO: 'Dogo Cubano',
  DOGUE_DE_BORDEAUX: 'Dogue de Bordeaux',
  DRENTSE_PATRIJSHOND: 'Drentse Patrijshond',
  DREVER: 'Drever',
  DUNKER: 'Dunker',
  DUTCH_SHEPHERD_DOG: 'Dutch Shepherd Dog',
  DUTCH_SMOUSHOND: 'Dutch Smoushond',
  EAST_SIBERIAN_LAIKA: 'East Siberian Laika',
  EAST_EUROPEAN_SHEPHERD: 'East-European Shepherd',
  ELO: 'Elo',
  ENGLISH_COCKER_SPANIEL: 'English Cocker Spaniel',
  ENGLISH_FOXHOUND: 'English Foxhound',
  ENGLISH_MASTIFF: 'English Mastiff',
  ENGLISH_SETTER: 'English Setter',
  ENGLISH_SHEPHERD: 'English Shepherd',
  ENGLISH_SPRINGER_SPANIEL: 'English Springer Spaniel',
  ENGLISH_TOY_TERRIER_BLACK_AND_TAN: 'English Toy Terrier (Black & Tan)',
  ENGLISH_WATER_SPANIEL: 'English Water Spaniel',
  ENGLISH_WHITE_TERRIER: 'English White Terrier',
  ENTLEBUCHER_MOUNTAIN_DOG: 'Entlebucher Mountain Dog',
  ESTONIAN_HOUND: 'Estonian Hound',
  ESTRELA_MOUNTAIN_DOG: 'Estrela Mountain Dog',
  EURASIER: 'Eurasier',
  FIELD_SPANIEL: 'Field Spaniel',
  FILA_BRASILEIRO: 'Fila Brasileiro',
  FINNISH_HOUND: 'Finnish Hound',
  FINNISH_LAPPHUND: 'Finnish Lapphund',
  FINNISH_SPITZ: 'Finnish Spitz',
  FLAT_COATED_RETRIEVER: 'Flat-Coated Retriever',
  FORMOSAN_MOUNTAIN_DOG: 'Formosan Mountain Dog',
  FOX_TERRIER_SMOOTH: 'Fox Terrier (Smooth)',
  FRENCH_BULLDOG: 'French Bulldog',
  FRENCH_SPANIEL: 'French Spaniel',
  GERMAN_LONGHAIRED_POINTER: 'German Longhaired Pointer',
  GERMAN_PINSCHER: 'German Pinscher',
  GERMAN_SHEPHERD: 'German Shepherd',
  GERMAN_SHORTHAIRED_POINTER: 'German Shorthaired Pointer',
  GERMAN_SPANIEL: 'German Spaniel',
  GERMAN_SPITZ: 'German Spitz',
  GERMAN_WIREHAIRED_POINTER: 'German Wirehaired Pointer',
  GIANT_SCHNAUZER: 'Giant Schnauzer',
  GLEN_OF_IMAAL_TERRIER: 'Glen of Imaal Terrier',
  GOLDEN_RETRIEVER: 'Golden Retriever',
  GORDON_SETTER: 'Gordon Setter',
  GREAT_DANE: 'Great Dane',
  GREAT_PYRENEES: 'Great Pyrenees',
  GREATER_SWISS_MOUNTAIN_DOG: 'Greater Swiss Mountain Dog',
  GREEK_HAREHOUND: 'Greek Harehound',
  GREENLAND_DOG: 'Greenland Dog',
  GREYHOUND: 'Greyhound',
  HANOVER_HOUND: 'Hanover Hound',
  HARE_INDIAN_DOG: 'Hare Indian Dog',
  HARRIER: 'Harrier',
  HAVANESE: 'Havanese',
  HAWAIIAN_POI_DOG: 'Hawaiian Poi Dog',
  HIMALAYAN_SHEEPDOG: 'Himalayan Sheepdog',
  HOKKAIDO: 'Hokkaido',
  HOVAWART: 'Hovawart',
  HUNTAWAY: 'Huntaway',
  HYGENHUND: 'Hygenhund',
  IBIZAN_HOUND: 'Ibizan Hound',
  ICELANDIC_SHEEPDOG: 'Icelandic Sheepdog',
  INDIAN_PARIAH_DOG: 'Indian pariah dog',
  INDIAN_SPITZ: 'Indian Spitz',
  IRISH_RED_AND_WHITE_SETTER: 'Irish Red and White Setter',
  IRISH_SETTER: 'Irish Setter',
  IRISH_TERRIER: 'Irish Terrier',
  IRISH_WATER_SPANIEL: 'Irish Water Spaniel',
  IRISH_WOLFHOUND: 'Irish Wolfhound',
  ISTRIAN_COARSE_HAIRED_HOUND: 'Istrian Coarse-haired Hound',
  ISTRIAN_SHORTHAIRED_HOUND: 'Istrian Shorthaired Hound',
  ITALIAN_GREYHOUND: 'Italian Greyhound',
  JACK_RUSSELL_TERRIER: 'Jack Russell Terrier',
  KAI_KEN: 'Kai Ken',
  KAIKADI: 'Kaikadi',
  KANNI: 'Kanni',
  KARELIAN_BEAR_DOG: 'Karelian Bear Dog',
  KARST_SHEPHERD: 'Karst Shepherd',
  KEESHOND: 'Keeshond',
  KERRY_BEAGLE: 'Kerry Beagle',
  KERRY_BLUE_TERRIER: 'Kerry Blue Terrier',
  KING_CHARLES_SPANIEL: 'King Charles Spaniel',
  KING_SHEPHERD: 'King Shepherd',
  KINTAMANI: 'Kintamani',
  KISHU: 'Kishu',
  KOMONDOR: 'Komondor',
  KOOIKERHONDJE: 'Kooikerhondje',
  KOOLIE: 'Koolie',
  KOREAN_JINDO_DOG: 'Korean Jindo Dog',
  KUMAON_MASTIFF: 'Kumaon Mastiff',
  LABRADOR_HUSKY: 'Labrador Husky',
  LABRADOR_RETRIEVER: 'Labrador Retriever',
  LAGOTTO_ROMAGNOLO: 'Lagotto Romagnolo',
  LAKELAND_TERRIER: 'Lakeland Terrier',
  LEONBERGER: 'Leonberger',
  LHASA_APSO: 'Lhasa Apso',
  LITHUANIAN_HOUND: 'Lithuanian Hound',
  LONGHAIRED_WHIPPET: 'Longhaired Whippet',
  LOWCHEN: 'Löwchen',
  MAHRATTA_GREYHOUND: 'Mahratta Greyhound',
  MALTESE: 'Maltese',
  MANCHESTER_TERRIER: 'Manchester Terrier',
  MAREMMA_SHEEPDOG: 'Maremma Sheepdog',
  MCNAB: 'McNab',
  MEXICAN_HAIRLESS_DOG: 'Mexican Hairless Dog',
  MINIATURE_AMERICAN_SHEPHERD: 'Miniature American Shepherd',
  MINIATURE_AUSTRALIAN_SHEPHERD: 'Miniature Australian Shepherd',
  MINIATURE_FOX_TERRIER: 'Miniature Fox Terrier',
  MINIATURE_PINSCHER: 'Miniature Pinscher',
  MINIATURE_SCHNAUZER: 'Miniature Schnauzer',
  MINIATURE_SHAR_PEI: 'Miniature Shar Pei',
  MOLOSSUS: 'Molossus',
  MONTENEGRIN_MOUNTAIN_HOUND: 'Montenegrin Mountain Hound',
  MOSCOW_WATCHDOG: 'Moscow Watchdog',
  MOSCOW_WATER_DOG: 'Moscow Water Dog',
  MOUNTAIN_CUR: 'Mountain Cur',
  MUCUCHIES: 'Mucuchies',
  MUDHOL_HOUND: 'Mudhol Hound',
  MUDI: 'Mudi',
  NEAPOLITAN_MASTIFF: 'Neapolitan Mastiff',
  NEW_ZEALAND_HEADING_DOG: 'New Zealand Heading Dog',
  NEWFOUNDLAND: 'Newfoundland',
  NORFOLK_SPANIEL: 'Norfolk Spaniel',
  NORFOLK_TERRIER: 'Norfolk Terrier',
  NORRBOTTENSPETS: 'Norrbottenspets',
  NORTH_COUNTRY_BEAGLE: 'North Country Beagle',
  NORTHERN_INUIT_DOG: 'Northern Inuit Dog',
  NORWEGIAN_BUHUND: 'Norwegian Buhund',
  NORWEGIAN_ELKHOUND: 'Norwegian Elkhound',
  NORWEGIAN_LUNDEHUND: 'Norwegian Lundehund',
  NORWICH_TERRIER: 'Norwich Terrier',
  OLD_CROATIAN_SIGHTHOUND: 'Old Croatian Sighthound',
  OLD_DANISH_POINTER: 'Old Danish Pointer',
  OLD_ENGLISH_SHEEPDOG: 'Old English Sheepdog',
  OLD_ENGLISH_TERRIER: 'Old English Terrier',
  OLD_GERMAN_SHEPHERD_DOG: 'Old German Shepherd Dog',
  OLDE_ENGLISH_BULLDOGGE: 'Olde English Bulldogge',
  OTTERHOUND: 'Otterhound',
  PACHON_NAVARRO: 'Pachon Navarro',
  PAISLEY_TERRIER: 'Paisley Terrier',
  PANDIKONA: 'Pandikona',
  PAPILLON: 'Papillon',
  PARSON_RUSSELL_TERRIER: 'Parson Russell Terrier',
  PATTERDALE_TERRIER: 'Patterdale Terrier',
  PEKINGESE: 'Pekingese',
  PEMBROKE_WELSH_CORGI: 'Pembroke Welsh Corgi',
  PERRO_DE_PRESA_CANARIO: 'Perro de Presa Canario',
  PERRO_DE_PRESA_MALLORQUIN: 'Perro de Presa Mallorquin',
  PERUVIAN_HAIRLESS_DOG: 'Peruvian Hairless Dog',
  PHARAOH_HOUND: 'Pharaoh Hound',
  PHU_QUOC_RIDGEBACK_DOG: 'Phu Quoc ridgeback dog',
  PICARDY_SPANIEL: 'Picardy Spaniel',
  PLOTT_HOUND: 'Plott Hound',
  PODENCO_CANARIO: 'Podenco Canario',
  POINTER_DOG_BREED: 'Pointer (dog breed)',
  POLISH_GREYHOUND: 'Polish Greyhound',
  POLISH_HOUND: 'Polish Hound',
  POLISH_HUNTING_DOG: 'Polish Hunting Dog',
  POLISH_LOWLAND_SHEEPDOG: 'Polish Lowland Sheepdog',
  POLISH_TATRA_SHEEPDOG: 'Polish Tatra Sheepdog',
  POMERANIAN: 'Pomeranian',
  POODLE: 'Poodle',
  PORCELAINE: 'Porcelaine',
  PORTUGUESE_PODENGO: 'Portuguese Podengo',
  PORTUGUESE_POINTER: 'Portuguese Pointer',
  PORTUGUESE_WATER_DOG: 'Portuguese Water Dog',
  POSAVAC_HOUND: 'Posavac Hound',
  PUDELPOINTER: 'Pudelpointer',
  PUG: 'Pug',
  PULI: 'Puli',
  PUMI: 'Pumi',
  PUNGSAN_DOG: 'Pungsan Dog',
  PYRENEAN_MASTIFF: 'Pyrenean Mastiff',
  PYRENEAN_SHEPHERD: 'Pyrenean Shepherd',
  RAFEIRO_DO_ALENTEJO: 'Rafeiro do Alentejo',
  RAJAPALAYAM: 'Rajapalayam',
  RAMPUR_GREYHOUND: 'Rampur Greyhound',
  RASTREADOR_BRASILEIRO: 'Rastreador Brasileiro',
  RAT_TERRIER: 'Rat Terrier',
  RATONERO_BODEGUERO_ANDALUZ: 'Ratonero Bodeguero Andaluz',
  REDBONE_COONHOUND: 'Redbone Coonhound',
  RHODESIAN_RIDGEBACK: 'Rhodesian Ridgeback',
  ROTTWEILER: 'Rottweiler',
  ROUGH_COLLIE: 'Rough Collie',
  RUSSELL_TERRIER: 'Russell Terrier',
  RUSSIAN_SPANIEL: 'Russian Spaniel',
  RUSSIAN_TRACKER: 'Russian tracker',
  SAKHALIN_HUSKY: 'Sakhalin Husky',
  SALUKI: 'Saluki',
  SAMOYED: 'Samoyed',
  SAPSALI: 'Sapsali',
  SCHAPENDOES: 'Schapendoes',
  SCHIPPERKE: 'Schipperke',
  SCHWEIZER_LAUFHUND: 'Schweizer Laufhund',
  SCHWEIZERISCHER_NIEDERLAUFHUND: 'Schweizerischer Niederlaufhund',
  SCOTCH_COLLIE: 'Scotch Collie',
  SCOTTISH_DEERHOUND: 'Scottish Deerhound',
  SCOTTISH_TERRIER: 'Scottish Terrier',
  SEALYHAM_TERRIER: 'Sealyham Terrier',
  SEGUGIO_ITALIANO: 'Segugio Italiano',
  SEPPALA_SIBERIAN_SLEDDOG: 'Seppala Siberian Sleddog',
  SERBIAN_HOUND: 'Serbian Hound',
  SERBIAN_TRICOLOUR_HOUND: 'Serbian Tricolour Hound',
  SHAR_PEI: 'Shar Pei',
  SHETLAND_SHEEPDOG: 'Shetland Sheepdog',
  SHIBA_INU: 'Shiba Inu',
  SHIH_TZU: 'Shih Tzu',
  SHIKOKU: 'Shikoku',
  SHILOH_SHEPHERD_DOG: 'Shiloh Shepherd Dog',
  SIBERIAN_HUSKY: 'Siberian Husky',
  SILKEN_WINDHOUND: 'Silken Windhound',
  SINHALA_HOUND: 'Sinhala Hound',
  SKYE_TERRIER: 'Skye Terrier',
  SMOOTH_COLLIE: 'Smooth Collie',
  SOUTH_RUSSIAN_OVCHARKA: 'South Russian Ovcharka',
  SOUTHERN_HOUND: 'Southern Hound',
  SPANISH_MASTIFF: 'Spanish Mastiff',
  SPANISH_WATER_DOG: 'Spanish Water Dog',
  SPINONE_ITALIANO: 'Spinone Italiano',
  SPORTING_LUCAS_TERRIER: 'Sporting Lucas Terrier',
  ST_BERNARD: 'St. Bernard',
  STAFFORDSHIRE_BULL_TERRIER: 'Staffordshire Bull Terrier',
  STANDARD_SCHNAUZER: 'Standard Schnauzer',
  STEPHENS_CUR: 'Stephens Cur',
  SUSSEX_SPANIEL: 'Sussex Spaniel',
  SWEDISH_LAPPHUND: 'Swedish Lapphund',
  SWEDISH_VALLHUND: 'Swedish Vallhund',
  TAHLTAN_BEAR_DOG: 'Tahltan Bear Dog',
  TAIGAN: 'Taigan',
  TALBOT: 'Talbot',
  TAMASKAN_DOG: 'Tamaskan Dog',
  TEDDY_ROOSEVELT_TERRIER: 'Teddy Roosevelt Terrier',
  TELOMIAN: 'Telomian',
  TENTERFIELD_TERRIER: 'Tenterfield Terrier',
  THAI_BANGKAEW_DOG: 'Thai Bangkaew Dog',
  THAI_RIDGEBACK: 'Thai Ridgeback',
  TIBETAN_MASTIFF: 'Tibetan Mastiff',
  TIBETAN_SPANIEL: 'Tibetan Spaniel',
  TIBETAN_TERRIER: 'Tibetan Terrier',
  TOY_BULLDOG: 'Toy Bulldog',
  TOY_FOX_TERRIER: 'Toy Fox Terrier',
  TREEING_CUR: 'Treeing Cur',
  TREEING_WALKER_COONHOUND: 'Treeing Walker Coonhound',
  TRIGG_HOUND: 'Trigg Hound',
  TWEED_WATER_SPANIEL: 'Tweed Water Spaniel',
  VIZSLA: 'Vizsla',
  VOLPINO_ITALIANO: 'Volpino Italiano',
  WEIMARANER: 'Weimaraner',
  WELSH_SHEEPDOG: 'Welsh Sheepdog',
  WELSH_SPRINGER_SPANIEL: 'Welsh Springer Spaniel',
  WELSH_TERRIER: 'Welsh Terrier',
  WEST_HIGHLAND_WHITE_TERRIER: 'West Highland White Terrier',
  WEST_SIBERIAN_LAIKA: 'West Siberian Laika',
  WESTPHALIAN_DACHSBRACKE: 'Westphalian Dachsbracke',
  WETTERHOUN: 'Wetterhoun',
  WHIPPET: 'Whippet',
  WHITE_SHEPHERD: 'White Shepherd',
  WIRE_FOX_TERRIER: 'Wire Fox Terrier',
  WIREHAIRED_POINTING_GRIFFON: 'Wirehaired Pointing Griffon',
  WIREHAIRED_VIZSLA: 'Wirehaired Vizsla',
  YORKSHIRE_TERRIER: 'Yorkshire Terrier',
}


const breeds = {
  'DOG': dog_breeds,
};
