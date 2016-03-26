   $(function() {
      var availableTags = [
  "Las Palmas, Spain",
  "Bangkok, Thailand",
  "Dallas, United States",
  "Florianopolis, Brazil",
  "Miami, United States",
  "Chiang Mai, Thailand",
  "Puerto Viejo, Costa Rica",
  "Budapest, Hungary",
  "Limassol, Cyprus",
  "West Palm Beach, United States",
  "Hong Kong, Hong Kong",
  "Colorado Springs, United States",
  "Valencia, Spain",
  "Jeju Island, South Korea",
  "Berlin, Germany",
  "Phuket, Thailand",
  "Taipei, Taiwan",
  "Aveiro, Portugal",
  "Portland, United States",
  "Knoxville, United States",
  "Fort Lauderdale, United States",
  "Los Angeles, United States",
  "Chico, United States",
  "Memphis, United States",
  "Las Vegas, United States",
  "Lisbon, Portugal",
  "Taghazout, Morocco",
  "Osaka, Japan",
  "Funchal, Portugal",
  "Christchurch, New Zealand",
  "Norfolk, United States",
  "Chattanooga, United States",
  "Wellington, New Zealand",
  "Braga, Portugal",
  "Oaxaca, Mexico",
  "Charleston, United States",
  "Munich, Germany",
  "Cairns, Australia",
  "Tucson, United States",
  "Baltimore, United States",
  "Nice, France",
  "Asheville, United States",
  "Porto, Portugal",
  "Austin, United States",
  "Madison, United States",
  "Toulouse, France",
  "Quito, Ecuador",
  "Cleveland, United States",
  "Leicester, United Kingdom",
  "Nashville, United States",
  "Hermosillo, Mexico",
  "Manchester, United Kingdom",
  "Bournemouth, United Kingdom",
  "Coimbra, Portugal",
  "Liverpool, United Kingdom",
  "Atlanta, United States",
  "Tallinn, Estonia",
  "Panama City, Panama",
  "Ko Samui, Thailand",
  "Stuttgart, Germany",
  "Seville, Spain",
  "Leeds, United Kingdom",
  "Bristol, United Kingdom",
  "Des Moines, United States",
  "Bern, Switzerland",
  "Monterrey, Mexico",
  "Louisville, United States",
  "Hamburg, Germany",
  "Malaga, Spain",
  "Jacksonville, United States",
  "Cordoba, Argentina",
  "Oxford, United Kingdom",
  "Windsor, Canada",
  "Cork, Ireland",
  "Bloomington, United States",
  "New Orleans, United States",
  "Merida, Mexico",
  "Newark, United States",
  "Nuremberg, Germany",
  "St. Louis, United States",
  "Bremen, Germany",
  "Perth, Australia",
  "Reno, United States",
  "Thessaloniki, Greece",
  "Tijuana, Mexico",
  "Seattle, United States",
  "Leipzig, Germany",
  "Milwaukee, United States",
  "Nottingham, United Kingdom",
  "Rochester, United States",
  "Sydney, Australia",
  "San Francisco, United States",
  "Tel Aviv, Israel",
  "Madrid, Spain",
  "Corralejo, Spain",
  "Oulu, Finland",
  "Provo, United States",
  "Bellingham, United States",
  "Granada, Spain",
  "Minneapolis, United States",
  "Lille, France",
  "Muscat, Oman",
  "Ogden, United States",
  "Adelaide, Australia",
  "Puerto Vallarta, Mexico",
  "Tartu, Estonia",
  "Kelowna, Canada",
  "Yekaterinburg, Russia",
  "Casablanca, Morocco",
  "Wollongong, Australia",
  "Kitchener, Canada",
  "The Hague, Netherlands",
  "Queretaro, Mexico",
  "Kingston, Jamaica",
  "Seoul, South Korea",
  "Leiden, Netherlands",
  "Buffalo, United States",
  "Fargo, United States",
  "Vancouver, Canada",
  "Amsterdam, Netherlands",
  "Curitiba, Brazil",
  "Oakland, United States",
  "Edinburgh, United Kingdom",
  "Cardiff, United Kingdom",
  "Playa del Carmen, Mexico",
  "Vienna, Austria",
  "Montevideo, Uruguay",
  "Trondheim, Norway",
  "Boulder, United States",
  "Lethbridge, Canada",
  "Varna, Bulgaria",
  "Jerusalem, Israel",
  "Bilbao, Spain",
  "Stockholm, Sweden",
  "Ljubljana, Slovenia",
  "Victoria, Canada",
  "Cambridge, United Kingdom",
  "Lugano, Switzerland",
  "Hanoi, Vietnam",
  "Tokyo, Japan",
  "Belfast, United Kingdom",
  "Brasov, Romania",
  "Brighton, United Kingdom",
  "Nantes, France",
  "Karlsruhe, Germany",
  "Prague, Czech Republic",
  "Oslo, Norway",
  "Omaha, United States",
  "Auckland, New Zealand",
  "Riyadh, Saudi Arabia",
  "Denver, United States",
  "Kosice, Slovakia",
  "Basel, Switzerland",
  "Singapore, Singapore",
  "Bordeaux, France",
  "Kota Kinabalu, Malaysia",
  "Indianapolis, United States",
  "Bratislava, Slovakia",
  "Lyon, France",
  "Sliema, Malta",
  "Marseille, France",
  "Nicosia, Cyprus",
  "Timisoara, Romania",
  "Tampere, Finland",
  "New York City, United States",
  "Natal, Brazil",
  "Reykjavik, Iceland",
  "Cancun, Mexico",
  "Belgrade, Serbia",
  "Ibi, Spain",
  "Melbourne, Australia",
  "Kansas City, United States",
  "Orlando, United States",
  "Bologna, Italy",
  "London, United Kingdom",
  "Genoa, Italy",
  "Shanghai, China",
  "Malmo, Sweden",
  "Hartford, United States",
  "Antwerp, Belgium",
  "Gold Coast, Australia",
  "Plovdiv, Bulgaria",
  "Sao Paulo, Brazil",
  "Taichung, Taiwan",
  "Montreal, Canada",
  "San Juan, United States",
  "Grenoble, France",
  "Hangzhou, China",
  "Washington, United States",
  "Toronto, Canada",
  "Vilnius, Lithuania",
  "Rotterdam, Netherlands",
  "Ho Chi Minh City, Vietnam",
  "Zagreb, Croatia",
  "Aalborg, Denmark",
  "Tbilisi, Georgia",
  "Eindhoven, Netherlands",
  "Riga, Latvia",
  "Kraków, Poland",
  "Kaunas, Lithuania",
  "Athens, Greece",
  "Hoi An, Vietnam",
  "Barcelona, Spain",
  "Cartagena, Colombia",
  "Chatham, Canada",
  "Hilo, United States",
  "Fresno, United States",
  "Houston, United States",
  "Columbus, United States",
  "Honolulu, United States",
  "Turku, Finland",
  "Utrecht, Netherlands",
  "Gibraltar, Gibraltar",
  "Beacon, United States",
  "Jena, Germany",
  "Lucknow, India",
  "Halifax, Canada",
  "Sharjah, United Arab Emirates",
  "Santa Monica, United States",
  "Osijek, Croatia",
  "Boston, United States",
  "Manama, Bahrain",
  "Ottawa, Canada",
  "Tromso, Norway",
  "Mexico City, Mexico",
  "Ramallah, Palestine",
  "Ghent, Belgium",
  "Novi Sad, Serbia",
  "Yerevan, Armenia",
  "Cluj, Romania",
  "Copenhagen, Denmark",
  "Aalesund, Norway",
  "Dakar, Senegal",
  "Frankfurt, Germany",
  "Gothenburg, Sweden",
  "Santo Domingo, Dominican Republic",
  "Quebec City, Canada",
  "Ulaanbaatar, Mongolia",
  "Guadalajara, Mexico",
  "Florence, Italy",
  "Shenzhen, China",
  "Birmingham, United Kingdom",
  "Southampton, United Kingdom",
  "Brisbane, Australia",
  "Makati, Philippines",
  "Patras, Greece",
  "Winnipeg, Canada",
  "Paris, France",
  "Edmonton, Canada",
  "San Diego, United States",
  "Salzburg, Austria",
  "Philadelphia, United States",
  "Ludhiana, India",
  "Nanaimo, Canada",
  "Macau, Macau",
  "Arequipa, Peru",
  "Kaohsiung, Taiwan",
  "Moncton, Canada",
  "Amman, Jordan",
  "Santiago, Chile",
  "Galway, Ireland",
  "Bucharest, Romania",
  "Minsk, Belarus",
  "Jarabacoa, Dominican Republic",
  "Glasgow, United Kingdom",
  "Hobart, Australia",
  "Buenos Aires, Argentina",
  "Lima, Peru",
  "Bishkek, Kyrgyzstan",
  "Dusseldorf, Germany",
  "Caye Caulker, Belize",
  "Detroit, United States",
  "Dresden, Germany",
  "Calgary, Canada",
  "Sarajevo, Bosnia-Herzegovina",
  "Dunedin, New Zealand",
  "Anchorage, United States",
  "Jyvaskyla, Finland",
  "Skopje, Macedonia",
  "Modena, Italy",
  "Rio de Janeiro, Brazil",
  "Verona, Italy",
  "Brussels, Belgium",
  "Alicante, Spain",
  "Bangalore, India",
  "Brasilia, Brazil",
  "Burgas, Bulgaria",
  "Northampton, United Kingdom",
  "Paphos, Cyprus",
  "Suva, Fiji",
  "Como, Italy",
  "Lagos, Nigeria",
  "San Miguel de Allende, Mexico",
  "Split, Croatia",
  "Cologne, Germany",
  "Dubai, United Arab Emirates",
  "Pune, India",
  "Zurich, Switzerland",
  "Kuala Lumpur, Malaysia",
  "Haifa, Israel",
  "Aachen, Germany",
  "Sofia, Bulgaria",
  "Lublin, Poland",
  "Podgorica, Montenegro",
  "Saint Helier, Jersey",
  "Rethymno, Greece",
  "Hannover, Germany",
  "Constanta, Romania",
  "Venice, Italy",
  "Reading, United Kingdom",
  "Porto Alegre, Brazil",
  "Turin, Italy",
  "Siem Reap, Cambodia",
  "Kinosaki-Onsen, Japan",
  "Park City, United States",
  "Nanjing, China",
  "Szczecin, Poland",
  "Luxembourg, Luxembourg",
  "Canberra, Australia",
  "Lausanne, Switzerland",
  "Addis Ababa, Ethiopia",
  "Helsinki, Finland",
  "Krasnodar, Russia",
  "Gurgaon, India",
  "Bandar Seri Begawan, Brunei",
  "Rome, Italy",
  "Zadar, Croatia",
  "Bandung, Indonesia",
  "Almaty, Kazakhstan",
  "Beirut, Lebanon",
  "Rijeka, Croatia",
  "Belo Horizonte, Brazil",
  "Salt Lake City, United States",
  "Krasnoyarsk, Russia",
  "Johor Bahru, Malaysia",
  "Ko Pha Ngan, Thailand",
  "Milan, Italy",
  "Qingdao, China",
  "Thane, India",
  "Banja Luka, Bosnia-Herzegovina",
  "Brno, Czech Republic",
  "Nijmegen, Netherlands",
  "Guangzhou, China",
  "Lviv, Ukraine",
  "Colombo, Sri Lanka",
  "Kharkiv, Ukraine",
  "Xi'an, China",
  "Gdansk, Poland",
  "Dublin, Ireland",
  "Bergen, Norway",
  "Fortaleza, Brazil",
  "Naples, Italy",
  "Darwin, Australia",
  "Lodz, Poland",
  "Graz, Austria",
  "Da Lat, Vietnam",
  "Surabaya, Indonesia",
  "Jakarta, Indonesia",
  "Poznan, Poland",
  "Chisinau, Moldova",
  "Aberdeen, United Kingdom",
  "Tianjin, China",
  "Ankara, Turkey",
  "Kiev, Ukraine",
  "Yangon, Myanmar",
  "Tehran, Iran",
  "Goa, India",
  "La Plata, Argentina",
  "Nis, Serbia",
  "Geneva, Switzerland",
  "Avellino, Italy",
  "Phnom Penh, Cambodia",
  "Recife, Brazil",
  "Surat, India",
  "Ploiesti, Romania",
  "Ciutadella, Spain",
  "Ko Lanta, Thailand",
  "San Pedro, Belize",
  "Wuhan, China",
  "Kathmandu, Nepal",
  "Odesa, Ukraine",
  "Craiova, Romania",
  "Kinshasa, DR Congo",
  "Nizhny, Russia",
  "Weifang, China",
  "Chachapoyas, Peru",
  "Iasi, Romania",
  "Kigali, Rwanda",
  "A Coruna, Spain",
  "New Delhi, India",
  "Beijing, China",
  "Chicago, United States",
  "Wenzhou, China",
  "Obninsk, Russia",
  "Dalian, China",
  "Zhoukou, China",
  "Canggu, Indonesia",
  "Hyderabad, India",
  "Vadodara, India",
  "Kaliningrad, Russia",
  "Katowice, Poland",
  "Chengdu, China",
  "Jeddah, Saudi Arabia",
  "Nasik, India",
  "Medellín, Colombia",
  "Xuzhou, China",
  "Mumbai, India",
  "Ivano-Frankivsk, Ukraine",
  "Bar, Montenegro",
  "Cali, Colombia",
  "Baku, Azerbaijan",
  "Male, Maldives",
  "Saratov, Russia",
  "Cochabamba, Bolivia",
  "Abidjan, Ivory Coast",
  "Krivoy-Rog, Ukraine",
  "Budva, Montenegro",
  "Port Elizabeth, South Africa",
  "Pretoria, South Africa",
  "Cuenca, Ecuador",
  "Chongqing, China",
  "Moscow, Russia",
  "Ko Phi Phi, Thailand",
  "Salento, Colombia",
  "Dhaka, Bangladesh",
  "Samara, Russia",
  "Suzhou, China",
  "Windhoek, Namibia",
  "Harbin, China",
  "Durban, South Africa",
  "Havana, Cuba",
  "Warsaw, Poland",
  "Tashkent, Uzbekistan",
  "Nagpur, India",
  "Belize City, Belize",
  "Grodno, Belarus",
  "Ubud, Indonesia",
  "Novosibirsk, Russia",
  "Zhengzhou, China",
  "Cebu, Philippines",
  "Hamilton, Bermuda",
  "Vladivostok, Russia",
  "Saint Petersburg, Russia",
  "Lahore, Pakistan",
  "Bocas del Toro, Panama",
  "Cairo, Egypt",
  "Agadir, Morocco",
  "Luanda, Angola",
  "Kochi, India",
  "Maputo, Mozambique",
  "Managua, Nicaragua",
  "Antigua, Guatemala",
  "Jaipur, India",
  "Tomsk, Russia",
  "Handan, China",
  "Izhevsk, Russia",
  "Wrocław, Poland",
  "Kampala, Uganda",
  "Bogota, Colombia",
  "Kazan, Russia",
  "Santa Cruz, Bolivia",
  "Algiers, Algeria",
  "Nairobi, Kenya",
  "Noida, India",
  "Davao, Philippines",
  "Pai, Thailand",
  "Tunis, Tunisia",
  "Palawan, Philippines",
  "Vientiane, Laos",
  "Penang, Malaysia",
  "Harare, Zimbabwe",
  "Cape Town, South Africa",
  "Port Moresby, Papua New Guinea",
  "Tripoli, Libya",
  "Alexandria, Egypt",
  "Chania, Greece",
  "Chandigarh, India",
  "La Paz, Bolivia",
  "Caracas, Venezuela",
  "Guatemala City, Guatemala",
  "Santa Marta, Colombia",
  "Manila, Philippines",
  "San Salvador, El Salvador",
  "Port Said, Egypt",
  "Karachi, Pakistan",
  "Khartoum, Sudan",
  "Islamabad, Pakistan",
  "El Jadida, Morocco",
  "Johannesburg, South Africa",
  "Kolkata, India",
  "Rawalpindi, Pakistan",
  "Baghdad, Iraq",
  "Dar es Salaam, Tanzania",
  "Erbil, Iraq",
  "Pyongyang, North Korea",
  "Mar del Plata, Argentina",
  "Istanbul, Turkey",
  "Antalya, Turkey",
  "Bodrum, Turkey",
  "Izmir, Turkey",
  "Bursa, Turkey"
      ];
  availableTags.sort();
      $( "#location" ).autocomplete({
        source: availableTags
      });
    });
    