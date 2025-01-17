<?php
namespace App\Consts;

    class VehiclesConst {
        static function allVehicles(): array
        {
            return [
            'zaz968m' => 'IRL RUNE 68',
            '2140' => 'IRL RUNE 240',
            'lada2107' => 'IRL RUNE 07',
            '2108' => 'IRL RUNE 08',
            'volga' => 'IRL RUNE 31105',
            'm3e30' => 'IRL Übermacht 3-line I30',
            'mk1rabbit' => 'IRL BF Wolf 1',
            'm3e36' => 'IRL Übermacht 3-line I36',
            'm5e34' => 'IRL Übermacht 5-line I34',
            '2114' => 'IRL RUNE 14',
            'c32' => 'IRL Benefactor-ASG C-Series K32',
            '535i97' => 'IRL Übermacht 5-line I39 V8 97',
            'nivapic' => 'IRL RUNE 29 Pickup',
            'sjpontiac' => 'IRL Imponte Gardam GT',
            'apriora' => 'IRL RUNE Pirora',
            'saleen' => 'IRL Vapid Stallion Cobra',
            'chaser' => 'IRL Karin Chancer',
            'uaz31' => 'IRL RUNE 311',
            'fd' => 'IRL Annis PX-7',
            'amgh' => 'IRL Benefactor M124',
            '190e' => 'IRL Benefactor E-Series 19',
            'x5e53' => 'IRL Übermacht C5 I53',
            'impreza98' => 'IRL Karin Impera 98',
            'urban' => 'IRL RUNE Urbn',
            'w140' => 'IRL Benefactor S-Series M140',
            'golfmk6' => 'IRL BF Wolf 6',
            'vwcaddy' => 'IRL BF Cadda',
            'gxs15' => 'IRL Annis Sliva VII 15',
            'e55' => 'IRL Benefactor-ASG H55',
            'evo9' => 'IRL Maibatsu Lacer Revolution 9',
            'bmwe38' => 'IRL Übermacht I38',
            '17octavia' => 'IRL BF Otavia',
            'bmwe70' => 'IRL Übermacht C5W I70',
            'm5e60' => 'IRL Übermacht 5-line I60',
            'rs603' => 'IRL Obey P6 03',
            'camv50' => 'IRL Karin Camria 50',
            'na6' => 'IRL Annis Myata',
            'r50' => 'IRL BF Twareg P50',
            'b12l' => 'IRL Übermacht Apla B12 I38',
            'supra' => 'IRL Karin Supera IV (E80)',
            'aaq4' => 'IRL Obey O4 Quat ABT',
            'x3brzrowen' => 'IRL Karin BZ TS Rowen RR Street Zero',
            'is300' => 'IRL Emperor SI 30',
            'fk8' => 'IRL Dinka Clivi Te-R',
            'vb60' => 'IRL Vulcar J60',
            '16challenger' => 'IRL Bravado Challeng',
            'cam08' => 'IRL Karin Camria 40',
            's550' => 'IRL Benefactor S-Series M221',
            'camry18' => 'IRL Karin Camria 35 AT XE',
            'fx50s' => 'IRL Fathom F 50Y',
            'jeep15' => 'IRL Canis Great Cherokee ST 15',
            'cls500w219' => 'IRL Benefactor KLS50 M219',
            'durango18' => 'IRL Bravado Durong ST 18',
            'xc90' => 'IRL Vulcar X90',
            'm6f13' => 'IRL Übermacht W6 A13',
            'vwtouareg' => 'IRL BF Twareg W10 DI',
            'q7' => 'IRL Obey J7',
            's500w222' => 'IRL Benefactor S-Series M222',
            'kiagt' => 'IRL Bollokan Stin GT',
            'toyotasj' => 'IRL Karin Grand Cruiser 200',
            'mers63c' => 'IRL Benefactor-ASG C63 Coup',
            'ftype15' => 'IRL Ocelot F-Tape',
            'pboxstergts' => 'IRL Pfister Fighter GT 2016',
            'audia6' => 'IRL Obey U6 Sport 55 FSI Quat',
            'sclkuz' => 'IRL Karin Grand Cruiser 200 HAM',
            'bmwg05' => 'IRL Übermacht C5 J05',
            'gxr35' => 'IRL Annis JT-P35',
            'lex570' => 'IRL Emperor XL 57',
            'teslas' => 'IRL Coil Line S',
            'sjtoyota' => 'IRL Karin Grand Cruiser 200 KHAN III',
            'm2f22' => 'IRL Übermacht W2',
            'rmodmustang' => 'IRL Vapid Stallion G 18',
            'brabus800' => 'IRL Benefactor-ASG C63',
            's63amg18' => 'IRL Benefactor-ASG J63 18',
            'rs5' => 'IRL Obey O5 18',
            '500' => 'IRL Bollokan Tank 500',
            'mbgls63' => 'IRL Benefactor-ASG JLS63',
            'i8' => 'IRL Übermacht L8',
            'tundra' => 'IRL Karin Thunder TD Pro',
            'bmwg07' => 'IRL Übermacht С7 J07',
            'bmci' => 'IRL Übermacht W5',
            'rmodx6' => 'IRL Übermacht C6W',
            'rs7' => 'IRL Obey O7 ',
            'corvettec8' => 'IRL Invetero Stin J8',
            'wald2018' => 'IRL Emperor XL 57 Wall 18',
            'tesla' => 'IRL Coil Line R',
            'stradale18' => 'IRL Lampadati GranTur',
            '21avant' => 'IRL Obey O6',
            'panamera18' => 'IRL Pfister Panama',
            'gle63' => 'IRL Benefactor-ASG JLE463 S',
            'raptor150' => 'IRL Vapid Predator',
            'ct5vbw22' => 'IRL Albany T5 V Blackwi 22',
            'ram1500' => 'IRL Bravado Ra Lim',
            'rs721' => 'IRL Obey O7 21 ',
            'gm3' => 'IRL Ubermacht W3 J81 Touring',
            'BMWM5' => 'IRL Übermacht 5-line A90 21',
            'mersls' => 'IRL Benefactor-ASG SSL',
            'gcm992targa' => 'IRL Pfister 91 Traga 4C',
            'modelx' => 'IRL Coil Line X',
            'm760li' => 'IRL Übermacht 7-line W76Li',
            'rmodgt63' => 'IRL Benefactor-ASG GS 4-door',
            'techart911gt' => 'IRL Pfister 91 Turb S',
            'bmwM4' => 'IRL Übermacht W4',
            'h1' => 'IRL Mammoth M1',
            'maybach' => 'IRL Benefactor Mabyah',
            'amggt' => 'IRL Benefactor-ASG JT',
            'bentley20' => 'IRL Enus 2020',
            'lgss' => 'IRL Pegassi Galla LP 57-4 Spide',
            'mansrr' => 'IRL Gallivanter Vogu Mory',
            'gtr50' => 'IRL Annis JT-P50',
            'r8v10abt' => 'IRL Obey P8 V10 ABT',
            'rmodbmwm8' => 'IRL Übermacht W8',
            'murc640' => 'IRL Pegassi Murciego LP 64-4',
            'roma20' => 'IRL Grotti Roma 20',
            'huracanevo' => 'IRL Pegassi Uracan EO',
            'taycan' => 'IRL Pfister Tacan Tur S',
            'g63' => 'IRL Benefactor-ASG J63',
            'rrwraith' => 'IRL Enus Wrai 20',
            '765lt' => 'IRL Dewbauchee 75TL',
            'gt17' => 'IRL Vapid GT',
            'urus' => 'IRL Pegassi Arus',
            'rrghost' => 'IRL Enus Gost 20',
            'Victor' => 'IRL Dewbauchee Vitor',
            'jesko20' => 'IRL Överflöd Jeso',
            'huayrabc' => 'IRL Pegassi Hayra BC',
            'cullinan' => 'IRL Enus Culli',
            'lb750sv' => 'IRL Pegassi Avent Liber Wal',
            'p1' => 'IRL Dewbauchee B1',
            'phantom8' => 'IRL Enus Phantom',
            'g63amg6x6' => 'IRL Benefactor-ASG J63 6x6',
            'sian' => 'IRL Pegassi Cian',
            'veyronss' => 'IRL Truffade Weyron SS',
            'rmodchiron300' => 'IRL Truffade Ciro 17',
            'rmodlp770' => 'IRL Pegassi Centario LP77',
            'ninja250fi' => 'IRL Principe Nija 250',
            'r1' => 'IRL Nagasaki P1',
            's1000rr' => 'IRL Übermacht SRR10',
            'ninjah2r' => 'IRL Principe Nija 2R',
            'zx6r' => 'IRL Principe Nija 6R',
            'mvbrut' => 'IRL Pegassi Brutora',
            'ml63topcar' => 'IRL Benefactor-ASG NJ63 TopCar',
            'ttrs' => 'IRL Obey YY N',
            'golf91wideprzemo' => 'IRL BF Wolf',
            'hondelsol' => 'IRL Dinka Civi GE VIT',
            'hycadepassat' => 'IRL BF Pastat Hyc',
            'm5e28' => 'IRL Übermacht 5-line I28',
            'gcmix2021' => 'IRL Ubermacht IY',
            'g09' => 'IRL Ubermacht YW',
            'v4sl' => 'IRL Pegassi V4SL',
            'v4s' => 'IRL Pegassi V4S',
            'v4r' => 'IRL Pegassi V4R',
            'rsv4' => 'IRL Principe RV-4 110 Fact',
            'v4' => 'IRL Pegassi V4',
            'diaduc' => 'IRL Principe Diavel',
            'gsxr' => 'IRL Shitzu CSX-R 1000',
            'yz450f' => 'IRL Nagasaki US 450 F',
            'z800' => 'IRL Nagasaki S800',
            'hummersuv' => 'IRL Mammoth V 6x6 Hug Sva X 22',
            'gmcev' => 'IRL Brute Merum E',
            'slr' => 'IRL Benefactor SRL MR',
            'bacalar' => 'IRL Enus Mullion Ballar',
            'bmwm5touring' => 'IRL Übermacht W5 Comp Tour',
            'c63w205' => 'IRL Benefactor-ASG M25',
            'evcs850' => 'IRL Benefactor Barbus 580 L23 22',
            'mbh' => 'IRL Enus 62S Zelin',
            'g65' => 'IRL Benefactor-ASG J65',
            'bolide' => 'IRL Truffade Balli',
            'g650' => 'IRL Enus E650 Landa',
            'dbsgt' => 'IRL Dewbauchee BSD Zaga GT ',
            '918spyder' => 'IRL Pfister 98 Spide',
            'rmodcharger69' => 'IRL Bravado Charg 69 ',
            'mansorys500' => 'IRL Benefactor H500 Mory',
            'essenzatdb' => 'IRL Pegassi Ezensa SV12',
            'mercec4' => 'IRL Benefactor E-Series M214 ',
            's500bk' => 'IRL Benefactor H500 L23 Custom Body Kit',
            'vclass21' => 'IRL Benefactor V-Series Mabyah Blac Ver',
            'bs900convertible' => 'IRL Benefactor Barbus H63 Cab Ret 90',
            'x3def70' => 'IRL Gallivanter Protector 7th 18',
            'giulia' => 'IRL Grotti Guli Quadr 17',
            'alfieri' => 'IRL Lampadati Alfie Cpt',
            '650i' => 'IRL Übermacht 6-line 65i Convert 17',
            'mr53' => 'IRL Weeny S R3',
            'rev' => 'IRL Pegassi Rewuelto',
            'm3e46' => 'IRL Übermacht 3-Line I46 05',
            'SQ5' => 'IRL Obey CQ5 18',
            'atlantic' => 'IRL Truffade Atlan',
            'uruslimo' => 'IRL Pegassi Arus 6 Sat Lim',
            'mark2' => 'IRL Karin Mask II',
            'bmx' => 'BMX',
            'cruiser' => 'Cruiser',
            'faggio' => 'Faggio',
            'voodoo2' => 'Voodoo',
            'fixter' => 'Fixter',
            'scorcher' => 'Scorcher',
            'tribike3' => 'Tribike',
            'sanchez2' => 'Sanchez',
            'manchez2' => 'Manchez',
            'picador' => 'Picador',
            'dominator7' => 'Dominator',
            's680guard22' => 'IRL Benefactor Mabyah C68 Guard',
            'bcat' => 'Vapid TARV Bearcat',
            'fbi2' => 'FBI 2',
            'policet' => 'Police T',
            'riot' => 'Riot',
            'cyclone' => 'Cyclone',
            'police4' => 'Police 4',
            'police3' => 'Police 3',
            'police2' => 'Police 2',
            'police' => 'Police 1',
            'policeb' => 'Police B',
            '2015polstang' => 'IRL Vapid Stallion GT',
            'ghispo2' => 'IRL Lampadati GT Police',
            'pol718' => 'IRL Pfister Kayen 78 S',
            'pdchgr18' => 'IRL Bravado ST',
            'rmodx6police' => 'IRL Übermacht C6 Police',
            'pddfpiu' => 'IRL Vapid Explor Sena Police',
            'riot2' => 'Riot 2',
            'polmav' => 'Polmav',
            'flatbed' => 'Flat Bed ',
            'ambulance' => 'Ambulance',
            'ems21yuk' => 'IRL Brute Yukon Denali EMS',
            'f550ems' => 'Vapid A-50 EMS',
            'lguard' => 'Lguard',
            'polnspeedo' => 'Vapid Speedo',
            'blazer2' => 'Blazer',
            'EC135' => 'EC135',
            'schafter6' => 'Schafter',
            'sultan2' => 'Sultan',
            'xls2' => 'Xls',
            'goe63spolice' => 'Merdes-Lens E63 AMG',
            'escpol' => 'IRL Albany Scalade Police',
            'fibchgr18' => 'IRL Bravado Charg FIB',
            'fibclgr' => 'IRL Bravado Challeng FIB',
            'fibrango' => 'IRL Bravado Durong FIB',
            'fibfrogger' => 'FIB Fogger',
            'moonbeam2' => 'Moon Beam 2',
            'speedo4' => 'Speedo 4',
            'burrito3' => 'Burrito',
            'mers124' => 'IRL Benefactor H24',
            'barracks' => 'Barracks',
            'towtruck' => 'Tow truck',
            'insurgent2' => 'Insurgent',
            'mesa3' => 'Mesa',
            'superd' => 'Super D',
            'tacoma22' => 'IRL Karin Takona',
            'buzzard3' => 'Buzzard',
            'pavelow' => 'Pavelow',
            'besra' => 'Besra',
            'mammatus' => 'Mammatus',
            'newsvan2' => 'NEWS Van',
            'scalamo2' => 'NEWS Scalamo',
            'newsmav' => 'NEWS Maverick',
            'fbi' => 'FBI',
            'sheriff' => 'Sheriff',
            'sheriff2' => 'Sheriff 2',
            'dominator3' => 'Dominator',
            'rmodpolice' => 'IRL Annis Nimo RT',
            'polpatriotf' => 'Patriot',
            'polpatriotf2' => 'Patriot 2',
            'g55pol' => 'IRL Benefactor J55',
            'rbchgr14' => 'IRL Bravado Charg Sheriff',
            'rbtahoe16' => 'IRL Declasse Takho Sheriff',
            'rmodjeepp' => 'IRL Canis Great Cherokee Police',
            'pbus' => 'Prison Bus',
            'vetir' => 'Vetir',
            'cog552' => 'Cog 552',
            'baller5' => 'Baller 5',
            'mz3' => 'IRL Annis Speed 3',
            'impreza18' => 'IRL Karin Impera WX SI',
            'pturismo' => 'IRL Pfister Panama Tur S ST',
            'mlmansory' => 'IRL Lampadati Levante Mory',
            'gt40mk2' => 'IRL Vapid GS40K II 1966',
            'wildtrak' => 'IRL Vapid Brox VI 20',
            'demonhawk' => 'IRL Canis Demonhawk',
            '4444' => 'IRL Benefactor J700 J63 4x4²',
            '19x7m' => 'IRL Übermacht С7 Lum',
            'amgone' => 'IRL Benefactor-ASG P-One',
            'cayenne2018' => 'IRL Pfister Kayen Tur',
            'sto21' => 'IRL Pegassi Uracan STO',
            'rmodbugatti' => 'IRL Truffade La Noire',
            'venatus' => 'IRL Pegassi Arus Vatus',
            'mansoryetron' => 'IRL Obey E-Ton GT Mory',
            'regera' => 'IRL Överflöd Regar',
            'ocnlamtmc' => 'IRL Pegassi Tezo Mill',
            'vulcan' => 'IRL Dewbauchee Vulan',
            '70zr1' => 'IRL Invetero RZ1',
            'evo2' => 'IRL Pegassi Uracan EVO2',
            'gemera' => 'IRL Överflöd Emera',
            'por930' => 'IRL Pfister 93',
            'rsq8m' => 'IRL Obey O8 Mory',
            'rmodskyline34' => 'IRL Annis Sky P34',
            'e800eprzemo' => 'IRL Benefactor-ASG E-Series H463 Barbus',
            'forgt50020' => 'IRL Vapid Stallion Custom Body Kit',
            'g900przemo' => 'IRL Benefactor Barbus P900',
            '69chargercustom' => 'IRL Bravado Charg 69 Cust',
            'gls600' => 'IRL Benefactor JLS60 Mabyah',
            'lambose' => 'IRL Pegassi Seto Elemen',
            'lpi8004' => 'IRL Pegassi Coutron LP 80-4',
            'bbentayga' => 'IRL Enus Betayga Speed 21 ',
            'brooklands1' => 'IRL Enus Brook 08',
            'jlumma' => 'IRL Ocelot F-Pice Lum',
            'rrwald' => 'IRL Enus Dan Wal 17',
            's500' => 'IRL Benefactor H500 L23 22',
            'cls63s' => 'IRL Benefactor SLC',
            'gle53' => 'IRL Benefactor JLE 2024',
            'vnl780' => 'Freightstinjer Centuryon',
            'cadi23' => 'IRL Albany Scalade MG',
            'youga' => 'Youga',
            'youga2' => 'Youga Classic',
            'youga3' => 'Youga Classic 4x4',
            'bobcatxl' => 'Bobcat XL',
            'burrito' => 'Burrito',
            'moonbeam' => 'Moonbeam',
            'sadler' => 'Sadler',
            'bison' => 'Bison',
            'sandking' => 'Sandking',
            'bison3' => 'Bison XL',
            'sandking2' => 'Sandking XL',
            'caracara2' => 'Caracara',
            'pounder' => 'Pounder',
            'benson' => 'Benson',
            'everon' => 'Everon',
            'contender' => 'Contender',
            'actros' => 'IRL Benefactor Act',
            'daf' => 'IRL DUDE X 150',
            'man' => 'IRL DUDE GXT',
            'classicxl' => 'Freightliner Classic XL',
            'chr20' => 'IRL Bravado Charg ST Doroty',
            'jeep392' => 'IRL Canis Wran Kelly',
            'microlight' => 'Microlight',
            'havok' => 'Havok',
            'alphaz1' => 'Alpha Z1',
            'buzzard2' => 'Buzzard 2',
            'dodo' => 'Dodo',
            'frogger' => 'Frogger',
            'maverick' => 'Maverick',
            'supervolito2' => 'Supervolito 2',
            'swift' => 'Swift',
            'swift2' => 'Swift 2',
            'luxor' => 'Luxor',
            'luxor2' => 'Luxor 2',
            'nimbus' => 'Nimbus',
            'shamal' => 'Shamal',
            'volatus' => 'Volatus',
            'seashark' => 'Seashark',
            'dinghy' => 'Dinghy',
            'dinghy2' => 'Dinghy 2',
            'speeder' => 'Speeder',
            'squalo' => 'Squalo',
            'suntrap' => 'Suntrap',
            'toro2' => 'Toro 2',
            'tropic2' => 'Tropic 2',
            'tropic' => 'Tropic',
            'jetmax' => 'Jetmax',
            'marquis' => 'Marquis',
            'sr650fly' => 'Sea Wave 650',
            'tornado3' => 'Declasse Tornado №3',
            'tornado4' => 'Declasse Tornado №4',
            'emperor2' => 'Albany Emperor №2',
            'regina' => 'Dundreary Regina',
            'ingot' => 'Vulcar Ingot',
            'tornado2' => 'Declasse Tornado №2',
            'tornado5' => 'Declasse Tornado №5',
            'emperor' => 'Albany Emperor',
            'minivan' => 'Vapid Minivan',
            'blista2' => 'Dinka Blista Compact',
            'chino' => 'Vapid Chino',
            'asbo' => 'Maxwell Asbo',
            'glendale' => 'Benefactor Glendale',
            'asea' => 'Declasse Asea',
            'virgo' => 'Albany Virgo',
            'glendale2' => 'Benefactor Glendale Custom',
            'chino2' => 'Vapid Chino Custom',
            'virgo3' => 'Albany Virgo Classic',
            'virgo2' => 'Albany Virgo Classic Custom',
            'manana' => 'Albany Manana',
            'voodoo' => 'Declasse Voodo Custom',
            'minivan2' => 'Vapid Minivan Custom',
            'dynasty' => 'Weeny Dynasty',
            'manana2' => 'Albany Manana Manana Custom',
            'surge' => 'Cheval Surge',
            'primo' => 'Albany Primo',
            'peyote' => 'Vapid Peyote',
            'blade' => 'Vapid Blade',
            'stanier' => 'Vapid Stanier',
            'stratum' => 'Zirconium Stratum',
            'rhapsody' => 'Declasse Rhapsody',
            'peyote3' => 'Vapid Peyote Custom',
            'tampa' => 'Declasse Tampa',
            'prairie' => 'Bollokan Prairie',
            'nebula' => 'Vulcar Nebula Turbo',
            'radi' => 'Vapid Radius',
            'dukes' => 'Imponte Dukes',
            'blista' => 'Dinka Blista',
            'retinue' => 'Vapid Retinue',
            'stalion' => 'Declasse Stalion',
            'rancherxl' => 'Declasse Rancher XL',
            'asterope' => 'Karin Asterope',
            'buccaneer' => 'Albany Buccaneer',
            'blista3' => 'Dinka Go Go Monkey Blista',
            'washington' => 'Albany Washington',
            'slamvan' => 'Vapid Slamvan',
            'postlude' => 'Dinka Postlude',
            'premier' => 'Declasse Premier',
            'intruder' => 'Karin Intruder',
            'clique' => 'Vapid Clique',
            'ruiner' => 'Imponte Ruiner',
            'seminole' => 'Canis Seminole',
            'bodhi2' => 'Canis Bodhi',
            'oracle' => 'Ubermacht Oracle',
            'savestra' => 'Annis Savestra',
            'phoenix' => 'Imponte Phoenix',
            'habanero' => 'Emperor Habanero',
            'panto' => 'Benefactor Panto',
            'ruiner4' => 'Imponte Ruiner ZZ-8',
            'futo' => 'Karin Futo',
            'bfinjection' => 'BF Injection',
            'rebel2' => 'Karin Rebel',
            'gauntlet' => 'Bravado Gauntlet',
            'seminole2' => 'Canis Seminole Frontier',
            'buffalo' => 'Bravado Buffalo',
            'buccaneer2' => 'Albany Buccaneer Custom',
            'tulip' => 'Declasse Tulip',
            'futo2' => 'Karin Futo GTX',
            'vamos' => 'Declasse Vamos',
            'kanjo' => 'Dinka Blista Kanjo',
            'vigero' => 'Declasse Vigero',
            'buffalo3' => 'Bravado Sprunk Buffalo',
            'sabregt' => 'Declasse Sabre Turbo',
            'issi2' => 'Weeny Issi',
            'ellie' => 'Vapid Ellie',
            'baller' => 'Gallivanter Baller',
            'club' => 'BF Club',
            'sabregt2' => 'Declasse Sabre Turbo Custom',
            'weevil' => 'BF Weevil',
            'hermes' => 'Albany Hermes',
            'landstalker' => 'Dundreary LandStalker',
            'brioso' => 'Grotti Brioso R/A',
            'cavalcade' => 'Albany Cavalcade',
            'bjxl' => 'Karin BeeJay XL',
            'landstalker2' => 'Dundreary Landstalker XL',
            'patriot' => 'Mammoth Patriot',
            'impaler' => 'Declasse Impaler',
            'hellion' => 'Annis Hellion',
            'riata' => 'Vapid Riata',
            'gauntlet3' => 'Bravado Gauntlet Classic',
            'weevil2' => 'BF Weevil Custom',
            'zion3' => 'Ubermacht Zion Classic',
            'greenwood' => 'Bravado Greenwood',
            'gauntlet5' => 'Bravado Gauntlet Classic Custom',
            'cheburek' => 'RUNE Cheburek',
            'zion2' => 'Ubermacht Zion Cabrio',
            'imorgon' => 'Overflod Imorgon',
            'warrener' => 'Vulcar Warrener',
            'fugitive' => 'Cheval Fugitive',
            'tailgater' => 'Obey Tailgater',
            'sentinel2' => 'Ubermacht Sentinel №2',
            'sultan' => 'Karin Sultan',
            'verus' => 'Dinka Verus',
            'yosemite2' => 'Declasse Drift Yosemite',
            'sentinel' => 'Ubermacht Sentinel XS',
            'f620' => 'Ocelot F620',
            'brioso2' => 'Grotti Brioso 300',
            'felon' => 'Lampadati Felon',
            'bifta' => 'BF Bifta',
            'jackal' => 'Ocelot Jackal',
            'rapidgt' => 'Dewbauchee Rapid GT',
            'fusilade' => 'Schyster Fusilade',
            'felon2' => 'Lampadati Felon GT',
            'schwarzer' => 'Benefactor Schwarzer',
            'gresley' => 'Bravado Gresley',
            'exemplar' => 'Dewbauchee Exemplar',
            'yosemite3' => 'Declasse Yosemite Rancher',
            'serrano' => 'Benefactor Serrano',
            'zion' => 'Ubermacht Zion',
            'rocoto' => 'Obey Rocoto',
            'fq2' => 'Fathom FQ2',
            'freecrawler' => 'Canis Freecrawler',
            'brawler' => 'Coil Brawler',
            'penumbra2' => 'Maibatsu Penumbra FF',
            'cavalcade2' => 'Albany Cavalcade №2',
            'penumbra' => 'Maibatsu Penumbra',
            'xls' => 'Benefactor XLS',
            'surano' => 'Benefactor Surano',
            'kuruma' => 'Karin Kuruma',
            'elegy' => 'Annis Elegy Retro Custom',
            'dubsta' => 'Benefactor Dubsta',
            'dominator' => 'Vapid Dominator',
            'schafter2' => 'Benefactor Schafter',
            'nightshade' => 'Imponte Nightshade',
            'novak' => 'Lampadati Novak',
            'buffalo2' => 'Bravado Buffalo S',
            'baller2' => 'Gallivanter Baller №2',
            'banshee' => 'Bravado Banshee',
            'massacro2' => 'Dewbauchee Massacro №2',
            'torero' => 'Pegassi Torero',
            'gp1' => 'Progen GP №1',
            'komoda' => 'Lampadati Komoda',
            'infernus2' => 'Pegassi Infernus Classic',
            'lynx' => 'Ocelot Lynx',
            'cheetah2' => 'Grotti Cheetah Classic',
            'vectre' => 'Emperor Vectre',
            'comet3' => 'Pfister Comet Retro Custom',
            'warrener2' => 'Vulcar Warrener HKR',
            'cypher' => 'Cypher',
            'turismo2' => 'Grotti Turismo Classic',
            'comet4' => 'Pfister Comet Safari',
            'tropos' => 'Lampadatti Tropos Rallye',
            'euros' => 'Annis Euros',
            'growler' => 'Pfister Growler',
            'comet5' => 'Pfister Comet SR',
            'remus' => 'Annis Remus',
            'rt3000' => 'Dinka RT3000',
            'comet6' => 'Pfister Comet S2',
            'pariah' => 'Ocelot Pariah',
            'calico' => 'Karin Calico GTF',
            'zr350' => 'Annis ZR350',
            'sultan3' => 'Karin Sultan RS Classic',
            'tailgater2' => 'Obey Tailgater S',
            'tampa2' => 'Declasse Drift Tampa',
            'feltzer2' => 'Benefactor Feltzer',
            'sultanrs' => 'Karin Sultan RS',
            'raiden' => 'Coil Raiden',
            'torero2' => 'Pegassi Torero XO',
            'vigero2' => 'Declasse Vigero ZX',
            'rhinehart' => 'Rhinehart',
            'khamelion' => 'Hijak Khamelion',
            'omnisegt' => 'Obey Omnis e-GT',
            'tenf' => 'Obey 10F',
            'jb7002' => 'Dewbauchee JB 700W',
            'cognoscenti' => 'Enus Cognoscenti',
            'feltzer3' => 'Benefactor Stirling GT',
            'corsita' => 'Lampadati Corsita',
            'baller4' => 'Gallivanter Baller LE LWB',
            'elegy2' => 'Anis Elegy RH8',
            'comet2' => 'Pfister Comet',
            'bestiagts' => 'Grotti Bestia GTS',
            'infernus' => 'Pegassi Infernus',
            'coquette' => 'Invetero Coquette',
            'omnis' => 'Obey Omnis',
            'windsor' => 'Enus Windsor',
            'ninef' => 'Obey 9F',
            'carbonizzare' => 'Grotti Carbonizzare',
            'ninef2' => 'Obey 9F Cabrio',
            'dubsta2' => 'Benefactor Dubsta №2',
            'jester' => 'Dinka Jester',
            'sugoi' => 'Dinka Sugoi',
            'stinger' => 'Grotti Stinger',
            'verlierer2' => 'Bravado Verlierer',
            'banshee2' => 'Bravado Banshee 900R',
            'huntley' => 'Enus Huntley S',
            'jester2' => 'Dinka Jester №2',
            'entityxf' => 'Overflod Entity XF',
            'stingergt' => 'Grotti Stinger GT',
            'jester3' => 'Dinka Jester Classic',
            'dominator8' => 'Vapid Dominator GTT',
            'voltic' => 'Coil Voltic',
            'specter2' => 'Dewbauchee Specter Custom',
            'coquette2' => 'Invetero Coquette Classic',
            'neon' => 'Pfister Neon',
            'jester4' => 'Dinka Jester RR',
            'rapidgt3' => 'Dewbauchee Rapid GT Classic',
            'cheetah' => 'Grotti Cheetah',
            'deviant' => 'Schyster Deviant',
            'neo' => 'Vysser Neo',
            'gt500' => 'Grotti GT500',
            'penetrator' => 'Ocelot Penetrator',
            'stafford' => 'Enus Stafford',
            'turismor' => 'Grotti Turismo R',
            'monroe' => 'Pegassi Monroe',
            'seven70' => 'Dewbauchee Seven-70',
            'coquette4' => 'Invetero Coquette D10',
            'vstr' => 'Albany V-STR',
            'vacca' => 'Pegassi Vacca',
            'jugular' => 'Ocelot Jugular',
            'italigtb' => 'Progen Itali GTB',
            'bullet' => 'Vapid Bullet',
            'drafter' => 'Obey 8F Drafter',
            'locust' => 'Ocelot Locust',
            'sc1' => 'Ubermacht SC1',
            'windsor2' => 'Enus Windsor Drop',
            'sheava' => 'Emperor ETR1',
            'reaper' => 'Pegassi Reaper',
            'tempesta' => 'Pegassi Tempesta',
            'paragon' => 'Enus Paragon R',
            'dubsta3' => 'Benefactor Dubsta 6x6',
            'italigto' => 'Grotti Itali GTO',
            'zorrusso' => 'Pegassi Zorrusso',
            'xa21' => 'Ocelot XA-21',
            'italirsx' => 'Grotti Itali RSX',
            'toros' => 'Pegassi Toros',
            'osiris' => 'Pegassi Osiris',
            'schlagen' => 'Benefactor Schlagen GT',
            'emerus' => 'Progen Emerus',
            'fmj' => 'Vapid FMJ',
            'rebla' => 'Ubermacht Rebla GTS',
            'pfister811' => 'Pfister 811',
            'adder' => 'Truffade Adder',
            'vagner' => 'Dewbauchee Vagner',
            'nero' => 'Truffade Nero',
            'nero2' => 'Truffade Nero Custom',
            't20' => 'Progen T20',
            'thrax' => 'Truffade Thrax',
            'furia' => 'Grotti Furia',
            'krieger' => 'Benefactor Krieger',
            'sm722' => 'Benefactor SM722',
            'visione' => 'Grotti Visione',
            'zentorno' => 'Pegassi Zentorno',
            'tezeract' => 'Pegassi Tezeract (Электромобиль)',
            'astron' => 'Pfister Astron',
            'baller7' => 'Gallivanter Baller ST',
            'buffalo4' => 'Bravado Buffalo STX',
            'champion' => 'Dewbauchee Champion',
            'cinquemila' => 'Lampadati Cinquemila',
            'comet7' => 'Pfister Comet S2 Cabrio',
            'deity' => 'Enus Deity',
            'ignus' => 'Pegassi Ignus',
            'iwagen' => 'Obey I-Wagen',
            'jubilee' => 'Enus Jubilee',
            'zeno' => 'Overflod Zeno',
            'tribike' => 'Whippet RaceBike',
            'tribike2' => 'Endurex RaceBike',
            'sanchez' => 'Maibatsu Sanchez',
            'enduro' => 'Dinka Enduro',
            'manchez' => 'Maibatsu Manchez',
            'sovereign' => 'Western Sovereign',
            'bagger' => 'Western Bagger',
            'pcj' => 'Shitzu PCJ600',
            'nemesis' => 'Principe Nemesis',
            'lectro' => 'Principe Lectro',
            'hexer' => 'LCC Hexer',
            'hakuchou' => 'Shitzu Hakuchou',
            'ruffian' => 'Pegassi Ruffian',
            'esskey' => 'Pegassi Esskey',
            'bf400' => 'Nagasaki BF400',
            'carbonrs' => 'Nagasaki Carbon RS',
            'daemon' => 'Western Daemon',
            'avarus' => 'LCC Avarus',
            'vader' => 'Shitzu Vader',
            'wolfsbane' => 'Western Wolfsbane',
            'zombiea' => 'Western Zombie Bobber',
            'daemon2' => 'Western Daemon №2',
            'zombieb' => 'Western Zombie Chopper',
            'bati' => 'Pegassi Bati 801',
            'diablous2' => 'Principe Diabolus Custom',
            'double' => 'Dinka Double T',
            'defiler' => 'Shitzu Defiler',
            'bati2' => 'Pegassi Bati 801 RR',
            'diablous' => 'Principe Diablous',
            'cliffhanger' => 'Western Cliffhanger',
            'blazer' => 'Nagasaki Blazer',
            'akuma' => 'Dinka Akuma',
            'ratbike' => 'Western Rat Bike',
            'blazer3' => 'Nagasaki Hot Rod Blazer',
            'vindicator' => 'Dinka Vindicator',
            'thrust' => 'Dinka Thrust',
            'blazer4' => 'Nagasaki Street Blazer',
            'gargoyle' => 'Western Gargoyle',
            'deathbike' => 'Western Apocalypse Deathbike',
            'nightblade' => 'Western Nightblade',
            'reever' => 'Western Reever',
            'shinobi' => 'Nagasaki Shinobi',
            'srt392' => 'IRL Bravado Challeng',
            '350zdk' => 'IRL Annis 35Z LB',
            'modena99' => 'IRL Grotti Modena Spider',
            'm4cg83' => 'IRL Übermacht W4 Y83',
            'm686eu' => 'IRL Übermacht W6 86',
            'fnfrx7' => 'IRL Annis PK-7',
            'bmm' => 'IRL Enus Mulso Mulli 13',
            'm3gtr' => 'IRL Übermacht W3 GR Mos Wed',
            'stretch' => 'Stretch',
            'cogcabrio' => 'Cogcabrio',
            'cog55' => 'Cog',
            'cognoscenti2' => 'Cognoscenti',
            'revolter' => 'Revolter',
            'diletante' => 'Diletante',
            'dilettante' => 'Dilettante',
            'previon' => 'Previon',
            'baller3' => 'Baller',
            'gauntlet4' => 'Gauntlet',
            'pddchgr18' => 'IRL Bravado Charg Police',
            'polbuz' => 'Riot 2',
            'escade' => 'IRL Albany Scalade',
            'fbicoqm' => 'Coquette',
            'lspdunm' => 'IRL Bravado Charg ST',
            'veto2' => 'Veto 2',
            'buggatticentodieci' => 'IRL Truffade Centod',
            'dvc63darwin' => 'IRL Benefactor  R63E Coup',
            'rmodveneno' => 'IRL Pegassi Venero',
            'ambulance22' => 'Vapid Ambulance',
            'umkroamer' => 'Vapid Dundreary',
            '117' => 'Marley Herinston Spotster 120',
            'brickadeb' => 'NAM Delivery',
            'fh500towtruck' => 'IRL Vulcar HV 50',
            'combine' => 'Combine',
            'tractor2' => 'Tractor',
            'eclipse' => 'IRL Maibatsu Elips',
            'fnfrx7d' => 'IRL Annis PX-7D',
            'hondas2000' => 'IRL Dinka S2000',
            'jetta' => 'IRL BF Jedda',
            'rx8r' => 'IRL Annis PX-8',
            's15mak' => 'IRL Annis Sliva 15 Gara AK',
            'fordh' => 'Fdor Mus Hooni',
            'na1' => 'IRL Dinka NX 90',
            'mazdarx7' => 'IRL Zadma RV7 85',
            'ae86' => 'IRL Karin Treno A86',
            'm3kean' => 'IRL Übermacht 3-series I46 Rock Bunny',
            'keenblock' => 'Fdor Mus Hooni V2',
            'f812' => 'IRL Grotti SuperFast',
            '458spider' => 'IRL Grotti 48 Spide 10',
            'sf90' => 'IRL Grotti SF9 Strad 20',
            'x3evija20' => 'IRL Dewbauchee Evij 20',
            '24mustdh' => 'IRL Vapid Stallion GT 2024',
            'defender' => 'IRL Gallivanter Protector 110 2023',
            'glanza22mg' => 'IRL Karin Glanz V 2022',
            'ikx3formentor21' => 'IRL Zirconium Mentor WZ5',
            'owl330' => 'IRL Übermacht N330Y 2023',
            'sl63' => 'IRL Benefactor-ASG CL63',
            '20g90lp' => 'IRL Bollokan C90 Long 2020',
            'carnivalhi' => 'IRL Bollokan Karnoval Lux MVP 22',
            'pnismo' => 'IRL Annis Patron 2023',
            'zc31s' => 'IRL Shitzu Vift Sport 2008',
            '22navi' => 'IRL Dundreary Navigation 2022',
            'rrhycadensx' => 'IRL Dinka NX Bad Blood Custom Hyc',
            'starex' => 'IRL Bollokan Stall 2008',
            '21staria' => 'IRL Bollokan Star 2023',
            'zeekr001' => 'IRL Bollokan-Coil 001 EV 2023',
            'civicek9rb' => 'IRL Dinka Sivik EK9 Rocket Bunny',
            '14genesis' => 'IRL Bollokan C70 2023',
            'bugatting' => 'IRL Truffade Gallib 16C 2009',
            'aurussenat' => 'IRL RUNE Senat',
            '08magnumsrt' => 'IRL Bravado Magnum RT8 2008',
            '20rs5' => 'IRL Obey PS5 Cupe 2020',
            'aventadors' => 'IRL Pegassi Avent C',
            'bdivo' => 'IRL Truffade Vivo',
            'bmwi7' => 'IRL Übermacht L7 A70 2023',
            'fxx' => 'IRL Grotti Enso XXF',
            'h3' => 'IRL Mammoth M3 2010',
            'ikx3iaa' => 'IRL Benefactor Concept All 2015',
            'ikx3mistral23' => 'IRL Truffade Vistol 20233',
            'kia' => 'IRL Bollokan P9 2023',
            'mc20h' => 'IRL Lampadati CM20 2021',
            'range12' => 'IRL Galiivanter Biography 2012',
            'rimac' => 'IRL Vulcar Wenera 2021',
            'rs6c6s' => 'IRL Obey PS6 Sedan 2008',
            'rx450hf' => 'IRL Emperor XR45H L-Sport 17',
            'skoda1' => 'IRL BF Super-D 2022',
            'vip8' => 'IRL Bravado Vipe RS10 2008',
            'x6m' => 'IRL Übermacht C6 A96 Compet Prior Design 2021',
            'z48' => 'IRL Übermacht S4 Cupe 2007',
            'matiz' => 'IRL Declasse Malis',
            'mysterycar' => 'Mystical',
            'ecto1' => 'Ghostbusters',
            'regalia' => 'Quartz Regalia',
            'morgan' => 'Morgan Aero',
            'dodgebseries' => 'IRL Bravado Pickup 1953',
            'aleutianxl' => 'IRL Vapid Aleutian XL',
            'ccadeesv' => 'IRL Albany Cavalcade ESV',
            'niniette' => 'IRL Truffade Niniette',
            '23ram' => 'IRL Bravado Ra 2',
            'cord812b' => 'IRL Vapid 812 Beverly Charg Sedan',
            'r1s' => 'IRL Coil R1S 2024',
            '24crvhybrid' => 'IRL Dinka CR-V 2024',
            '2101011' => 'IRL Rune 2101 1971',
            'gxflyspur' => 'IRL Enus Flying Spur',
            'wazuma' => 'IRL Nagasaki MV Agusta',
            'ami' => 'IRL Zirconium Ami',
            '560sel87' => 'IRL Benefactor 560 SEL',
            'chevropremtn' => 'IRL Ocelot Tigo 8',
            'jagetype71' => 'IRL Ocelot G-Type S2C',
            'humbo' => 'IRL Pegassi SC18 Alstov',
            'uaz452concept' => 'IRL Rune 452 Concept',
            'jeepcrew715' => 'IRL Canis 715 Crew Concept'
            ];
        }
    }