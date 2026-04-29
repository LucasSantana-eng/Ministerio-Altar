/**
 * CONFIGURAÇÃO DO BACK-END (SUPABASE)
 * Substitua os valores abaixo pelos que você encontrar em: 
 * Settings -> API no seu painel do Supabase
 */
const SUPABASE_URL = 'https://ebgabvvqmoseywkucqoa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lOLm0UYc8s9yxIcVeE6tVw_ojnxxgrN';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Player de áudio global
const audioPlayer = new Audio();/**
 * Estrutura de dados centralizada do repertório
 */
const repertorio = [
    { 
        cantor: "AD Brás", 
        musicas: ["Vem Cantar Louvores"] 
    },
    { 
        cantor: "Adai Music", 
        musicas: ["Bondade de Deus", "Casa do Oleiro", "Aguardo o Dia", "Deus Amou o Mundo", "Santo, Santo", "Teu Amor é Mais Forte"] 
    },
    { 
        cantor: "Adhemar de Campos", 
        musicas: ["Grande é o Senhor", "Nosso General", "Louvemos ao Senhor", "Tributo a Yehovah"] 
    },
    { 
        cantor: "Adoração Central", 
        musicas: ["Avivamento", "Por Amor", "Digno", "Escreve Teu Nome Em Nós", "Lapidação"] 
    },
    { 
        cantor: "Adoração e Adoradores", 
        musicas: ["Tu És Bom", "Me Rendo A Ti"] 
    },
    { 
        cantor: "Alessandro Vilas Boas", 
        musicas: ["Tu És Bom", "Me Rendo A Ti"] 
    },
    { 
        cantor: "Aline Barros", 
        musicas: ["Caminho de Milagres", "Adoração Sem Limites", "Consagração", "Corre", "Depois Da Cruz", "Digno É O Senhor", "Entrega", "Geração Bem Aventurada", "Leva-me Aos Sedentos", "Lugar Secreto", "Lugar Seguro", "Poder da Cruz", "Primeira Essência", "Ressucita-me", "Tua Palavra", "Usa-me", "Vem Chegando o Natal", "Vitória no Deserto", "Vivo Estas", "Autor da Vida", "Guarda Tua Fé", "Jeová Jireh", "Acredito Sim", "Casa do Pai", "Poder para Salvar", "Rendido Estou", "Sonda-me"] 
    },
    { 
        cantor: "Aline Silva", 
        musicas: ["Em Nome de Jesus"] 
    },
    { 
        cantor: "Ana Nobréga", 
        musicas: ["Eu Quero Teu Fogo", "Quando Ele Vem", "Oceanos"] 
    },
    { 
        cantor: "Anderson Freire", 
        musicas: ["Canção do Céu", "Efésios 6", "Raridade", "A Igreja Vem"] 
    },
    { 
        cantor: "André Aquino", 
        musicas: ["Vem Incendiar Meu Coração", "Em Seu Nome", "Pai de Amor", "Quando Ele Vem", "Vai Chover De Novo"] 
    },
    { 
        cantor: "André Valadão", 
        musicas: ["Eu Nasci De Novo", "Para Sempre Teu", "Quando o Mundo Cai Ao Meu Redor", "Noite Feliz"] 
    },
    { 
        cantor: "Anthony Evans", 
        musicas: ["How He Loves"] 
    },
    { 
        cantor: "Ariete Nagrine", 
        musicas: ["Em Espirito", "Grande É O Senhor", "Jesus Te Entronizamos", "O Quão Lindo Esse Nome É"] 
    },
    { 
        cantor: "Artistas Diversos", 
        musicas: ["Altar", "Canvas And Clay", "Children Come", "Do You Hear Me", "Espelhos Magicos", "Fill Me Up", "Floodgates", "Joy To The World", "Lord, I Need You", "Recless Love", "Rhythm Of Your Love", "Spirit Of The Living God", "Turning Over Table", "Your Love Never Fails", "Em Teus Braços"] 
    },
    { 
        cantor: "Atmosfera da Adoração", 
        musicas: ["Abraça-me"] 
    },
    { 
        cantor: "Banda Som e Louvor", 
        musicas: ["Festa De Crente"] 
    },
    { 
        cantor: "Bethel Music", 
        musicas: ["For The Cross", "Have It All", "Our Father", "Sheperd", "We Will Not Be Sharken", "Vou Construir", "Ain`t No Grave", "Chasing You Tides", "Deep Cries Out", "Ever Be", "Furious", "Jesus We Love You", "King Of My Heart", "Lion And The Lamb", "Mercy", "Praises", "Spirit Move", "Starlight", "Tremble", "Victory Is Yours", "You Make Me Brave", "This Is Amazing Grace", "Be Entroned", "Glory To Glory", "Ousado Amor", "Rockless Love", "Te Entrego"] 
    },
    { 
        cantor: "Brasa Church", 
        musicas: ["Altar"] 
    },
    { 
        cantor: "Carol Braga", 
        musicas: ["O Escudo"] 
    },
    { 
        cantor: "Casa Worship", 
        musicas: ["A Casa É Sua", "Preciso De Ti", "Era Eu", "Eu Te Vejo Em Tudo", "Vento Impetuoso", "Ceu É Meu Lugar"] 
    },
    { 
        cantor: "Cassiane", 
        musicas: ["A Cura", "A Mensagem Da Cruz"] 
    },
    { 
        cantor: "Cece Winans", 
        musicas: ["Belive For It"] 
    },
    { 
        cantor: "Central 3", 
        musicas: ["Tudo A Ver Com Ele"] 
    },
    { 
        cantor: "Central dos Adoradores", 
        musicas: ["Teu Nome É Santo"] 
    },
    { 
        cantor: "Chris Tomlin", 
        musicas: ["A King Like This", "Awake My Soul", "God Great Dance Floor", "Hou Great Is Our God", "Our God", "Rockless Love"] 
    },
    { 
        cantor: "Cia Salt", 
        musicas: ["Quero Conhecer Jesus"] 
    },
    { 
        cantor: "Cody Carnes", 
        musicas: ["Nothing Else"] 
    },
    { 
        cantor: "Coral Kemuel", 
        musicas: ["Oh Quão Lindo Esse Nome É"] 
    },
    { 
        cantor: "Cory Asbury", 
        musicas: ["Rockless Love", "Ousado Amor"] 
    },
    { 
        cantor: "Cristo Vivo", 
        musicas: ["Teu Reino"] 
    },
    { 
        cantor: "Daniel Souza", 
        musicas: ["Salvo Pela Graça"] 
    },
    { 
        cantor: "Daniele Cristina", 
        musicas: ["Fidelidade"] 
    },
    { 
        cantor: "Danilo Monteiro", 
        musicas: ["Bendito Jesus", "Dios DE Amor", "Eres Todo Poderoso", "Mi Dios Es Refugio", "Revelation", "Salmo 84"] 
    },
    { 
        cantor: "Darlene Zschech", 
        musicas: ["In The Nome Of Jesus", "Victor´s Crown"] 
    },
    { 
        cantor: "Davi Passamani", 
        musicas: ["Vento Impetuoso"] 
    },
    { 
        cantor: "Davi Sacer", 
        musicas: ["Meu Abrigo", "o Deus Que Surpreend", "Venha O Teu Reino", "Sobre As Águas", "Tua Graça Me Basta", "Teu Reino"] 
    },
    { 
        cantor: "David Crowder", 
        musicas: ["How He Loves"] 
    },
    { 
        cantor: "David Quinlan", 
        musicas: ["Essência Da Adoração"] 
    },
    { 
        cantor: "Delino Marçal", 
        musicas: ["Deus É Deus"] 
    },
    { 
        cantor: "Diante Do Trono", 
        musicas: ["Canção do Apocalipse", "Anseio", "Levanto um Aleluia", "Medley Israel", "Preciso de Ti", "Águas Purificadoras", "Deus de amor", "Hosana", "Quero me apaixonar", "Reis dos Reis", "Seja Pra Mim", "Só o Senhor é Deus", "Tetelestai", "Toma o teu lugar", "Vinho Novo", "A Batalha e do Senhor", "A Vitoria da Cruz", "Anseio-Sol da Justica", "Coracao Igual Ao Teu", "Deus do recomeco", "Me Ama", "Quao Grande Es Tu", "Vaso de Alabastro", "Quero me apaixonar"] 
    },
    { 
        cantor: "Discopraise", 
        musicas: ["Ouvir O Teu Falar", "Se Eu Me Humilhar"] 
    },
    { 
        cantor: "Dj Pv", 
        musicas: ["Som Da Liberdade"] 
    },
    { 
        cantor: "Drops", 
        musicas: ["Em Uma Só Vez"] 
    },
    { 
        cantor: "Dunamis", 
        musicas: ["Volto Meus Olhos"] 
    },
    { 
        cantor: "Elaine Martins", 
        musicas: ["Santificação"] 
    },
    { 
        cantor: "Elevation Worship", 
        musicas: ["Grateful-There Is A Cloud", "Here as in heaven", "O come to the altar", "Echo", "Faithful", "God of the Promise", "Here again", "Never Walk Away", "Resurrecting", "See A Victory", "Won't Stop Now", "Worthy", "Yahweh", "Do It Again There Is A Cloud"] 
    },
    { 
        cantor: "Eli Soares", 
        musicas: ["Me Ajude a Melhorar", "Eu sou", "Os anjos te louvam", "Here as in Heaven", "Tudo que Eu Sou"] 
    },
    { 
        cantor: "Elizeu Alves", 
        musicas: ["Sou Casa"] 
    },
    { 
        cantor: "Equippers Revolution", 
        musicas: ["Hands High"] 
    },
    { 
        cantor: "Eyshila", 
        musicas: ["Casa De Benção"] 
    },
    { 
        cantor: "Fernanda Brum", 
        musicas: ["A Visão Da Glória", "A Tua Glória Faz", "Cura-me", "Efésios"] 
    },
    { 
        cantor: "Fernandinho", 
        musicas: ["Deus Não Está Morto", "Luz do Mundo", "Adestra", "Ainda que a figueira", "Caia Fogo", "Dono do mundo", "Fogo Consumidor", "Fogo Santo", "Galileu", "Infinitamente mais", "Jesus, Filho De Deus", "Mais Alto", "Me Leva", "O hino", "Santa Euforia", "Seu Nome é Jesus", "Seu Sangue", "Vento Impetuoso", "Nada Além do Sangue", "Santo"] 
    },
    { 
        cantor: "FHop", 
        musicas: ["Batendo A Porta", "Ruja o Leão", "Unico", "Só Quero Ver Você"] 
    },
    { 
        cantor: "For The Kind And The Brave", 
        musicas: ["Fix My Eyes"] 
    },
    { 
        cantor: "Forerunner", 
        musicas: ["Grateful Love"] 
    },
    { 
        cantor: "Fred Arrais", 
        musicas: ["Deus de Recomeço", "Eu Te Louvarei", "Tu És Bom"] 
    },
    { 
        cantor: "Fred Vieira", 
        musicas: ["Eu Vejo A Golria"] 
    },
    { 
        cantor: "Fruition", 
        musicas: ["Hosanna"] 
    },
    { 
        cantor: "Gabi Sampaio", 
        musicas: ["Bom Perfume", "Lindo És", "Na Terra Como No Céu", "Ousado Amor"] 
    },
    { 
        cantor: "Gabriel Guedes", 
        musicas: ["A Bênção", "Atos 2", "Ele vem", "Eu Creio", "Minhas Guerras", "Noiva", "Santo Para Sempre", "Quero Jesus"] 
    },
    { 
        cantor: "Gabriela Rocha", 
        musicas: ["Me Atraiu", "Atos 2", "CÉU", "CREIO QUE TU ÉS A CURA", "Desperta", "Eu o Amo", "Espírito Enche a Minha Vida", "Eu navegarei", "Faz Chover", "Hosana", "Me Aproximou", "MEU CORAÇÃO É TEU", "Meu salvador", "Lugar Secreto", "Diz", "Pra Te adorar", "A Ele A Glória", "Correrei", "Creio em Ti", "Santo Espírito Vem", "Teu Santo Nome", "Vida aos Sepulcros", "VIVE"] 
    },
    { 
        cantor: "Geração 12", 
        musicas: ["A Nuvem Da Tua Gloria", "No Soy Esclavo"] 
    },
    { 
        cantor: "Heloisa Rocha", 
        musicas: ["Yeshua", "Jesus É O Caminho", "Há Um Lugar"] 
    },
    { 
        cantor: "Highlands Worship", 
        musicas: ["Joy To The World"] 
    },
    { 
        cantor: "Hillsong United", 
        musicas: ["Oceanos", "Love is war", "Go", "Take it all", "Your forever", "Another In The Fire", "As You Find Me", "Echoes", "Relentless", "Shadow step", "So Will I", "The Stand", "Touch the sky", "Whole Heart", "Wonder", "Tudo Por Ti", "Good Grace", "Scandal of Grace", "Tu Amor No Se Rinde"] 
    },
    { 
        cantor: "Hillsong Worship", 
        musicas: ["Forever Reign", "Glorious Ruins", "Heaven and Earth", "PRA SEMPRE", "Lead me to the Cross", "From the inside out", "A Paixão", "All things new", "Anchor", "At the cross", "Awake My Soul", "Behold", "Beneath The Waters", "Born is the king", "Broken Vessel", "Children of the light", "Cornerstone", "Crowns", "Depths", "Desert Song", "Eterno Amor", "Eu Sou Quem Dizes Que Eu Sou", "Alive", "God is able", "Grace to grace", "Heaven and Earth", "Hosanna", "I Surrender", "I Surrender", "King of Kings", "Man of Sorrows", "Me Lembrarei", "Mighty to save", "New Wine", "No One But You", "No Other Name", "Oh Holy Night", "Quão Lindo Esse Nome É", "Praise Him", "Run", "Running", "Salvation is Here", "This I Believe", "This is our God", "Touch of Heaven", "Transfiguration", "Valentine", "Victory", "What a beautiful name", "Where The Spirit Of The Lord Is", "Who you say I am", "With everything", "You", "You are life", "Your name is high", "Let There Be Light", "O Holy Night"] 
    },
    { 
        cantor: "Hillsong Young", 
        musicas: ["Where the fight calls", "Alive", "Brighter", "Every little thing", "Falling Into You", "Heart of God", "Hindsight", "In Sync", "Just Jesus", "Let go", "Love won’t let me down", "Only wanna sing", "Real Love", "Sinking deep", "The stand", "This is Living", "Wake", "What a beautiful name", "Where you are"] 
    },
    { 
        cantor: "Isadora Pompeo", 
        musicas: ["Minha Morada"] 
    },
    { 
        cantor: "Isaias Saad", 
        musicas: ["Águas Purificadoras + Oceanos", "Apocalipse 4", "Enche Me", "BONDADE DE DEUS", "Ruja o Leão + Que Se Abram os Céus", "Ousado Amor"] 
    },
    { 
        cantor: "Israel And New Breed", 
        musicas: ["Friend of God", "I know who i am", "Tu es bom", "Senhor Tu És Bom", "In Jesus Name", "You Are Good"] 
    },
    { 
        cantor: "Israel Houghton", 
        musicas: ["Mighty To Save", "Jesús El Mismo", "Más y Más", "Easy for you", "Hosanna", "I Call You Jesus", "In Jesus Name", "Our god Reign", "Reckless love", "Risen", "Thank You Lord", "Te llamo Cristo", "You are good", "Jesus En El Centro", "Nada Me Faltará", "Poder De tu Victoria", "Te Amo"] 
    },
    { 
        cantor: "Israel Salazar", 
        musicas: ["EU QUERO MAIS", "Avante", "É Natal", "Graça", "No meio dos louvores", "Tudo o que me prometeu", "TU ES O REI", "Deus Conosco"] 
    },
    { 
        cantor: "Jefferson E Suellem", 
        musicas: ["Saudade de Casa", "Labareda", "Vem Me Buscar"] 
    },
    { 
        cantor: "Jeremy Camp", 
        musicas: ["Migthy To Save"] 
    },
    { 
        cantor: "Jesus Culture", 
        musicas: ["Rooftops – (incluindo Come Away Live)", "Sing Out / Unstoppable Love", "AGNUS DEI", "Alive in you", "Dance", "Freedom Reigns", "I see heaven", "Let it rain", "Spirit Break Out", "Unstoppable Love", "Walk with me", "Your Name is Glorious", "Your Love Never Fails", "Let it echo (Unplugged)", "Break every chain", "Miracles", "Ardemos Para Ti", "Fierce", "Holy Spirit", "Show Me Your Glory", "Teu Amor Nao Falha"] 
    },
    { 
        cantor: "Jj Week Band", 
        musicas: ["Children Come"]
    },
    { 
        cantor: "John Mark Mcmillan", 
        musicas: ["Plumbing Towards The Light", "How he love us", "Mercury & Lightning"] 
    },
    { 
        cantor: "Juliano Son", 
        musicas: ["Tudo Novo"] 
    },
    { 
        cantor: "Kari Jobe", 
        musicas: ["Cover the Earth", "Forever", "Healer", "Let the heaven open", "Revelation Song"] 
    },
    { 
        cantor: "Kemilly Santos", 
        musicas: ["Fica Tranquilo"] 
    },
    { 
        cantor: "Kemuel", 
        musicas: ["Algo Novo", "Oh, Qual Lindo Esse Nome É", "Tua Graça"] 
    },
    { 
        cantor: "Kirk Franklin", 
        musicas: ["Brighterday", "Dontcry", "Hereigns", "Hosanna"] 
    },
    { 
        cantor: "Kleber Lucas", 
        musicas: ["Deus cuida de mim", "Vou deixar na cruz", "Meu Alvo", "Vou Seguir com Fé", "Nova Criatura", "Te Agradeço"] 
    },
    { 
        cantor: "Klebson Kollins", 
        musicas: ["Sou Casa"] 
    },
    { 
        cantor: "Kristine Dimarco", 
        musicas: ["It Is Well"] 
    },
    { 
        cantor: "Larue Howard", 
        musicas: ["Great I Am"] 
    },
    { 
        cantor: "Laura Soughelis", 
        musicas: ["Closer", "Em Teus Braços"] 
    },
    { 
        cantor: "Lauriete", 
        musicas: ["As Sete Trombetas"] 
    },
    { 
        cantor: "Lee Land", 
        musicas: ["Way Maker"] 
    },
    { 
        cantor: "Leme", 
        musicas: ["Liberdade"] 
    },
    { 
        cantor: "Leonardo Gonçalves", 
        musicas: ["Getsêmani", "Eu Me Rendo"] 
    },
    { 
        cantor: "Lifeway Worship", 
        musicas: ["The Power Of Your Love"] 
    },
    { 
        cantor: "Lincoln Brewster", 
        musicas: ["Amazed", "Another Hallelujah", "Love The Lord", "Son of God", "Surrender","You Are Good", "You are the One"] 
    },
    { 
        cantor: "Luma Elpidio", 
        musicas: ["Liberta-me De Mim", "Que Amor É Esse"] 
    },
    { 
        cantor: "Marcos Barrientos", 
        musicas: ["Amanece"] 
    },
    { 
        cantor: "Marcus Salles", 
        musicas: ["Maria Saibas Que"] 
    },
    { 
        cantor: "Mariana Valadão", 
        musicas: ["Hosanna"] 
    },
    { 
        cantor: "Marine Friesen", 
        musicas: ["Alfa e Omega", "Amor Poderoso"] 
    },
    { 
        cantor: "Matheus Brito", 
        musicas: ["Fez O Caminho", "Marcado Pelo Teu Amor"] 
    },
    { 
        cantor: "Matt Maher", 
        musicas: ["Lord, I Need You"] 
    },
    { 
        cantor: "Matt Redman", 
        musicas: ["10,000 Reasons", "It Is Well With My Soul", "Gracefully Broken"] 
    },
    { 
        cantor: "Mercy Me", 
        musicas: ["I Can Only Imagine"] 
    },
    { 
        cantor: "Michael W Smith", 
        musicas: ["Agnus Dai", "You Wont Let Go"] 
    },
    { 
        cantor: "Midian Lima", 
        musicas: ["Jó", "Nâo Pare"] 
    },
    { 
        cantor: "Miel San Marcos", 
        musicas: ["Proezas Miel"] 
    },
    { 
        cantor: "Ministério Avivah", 
        musicas: ["Maranata", "Rocha Eterna", "Pra Sempre"] 
    },
    { 
        cantor: "Ministério Ipiranga", 
        musicas: ["Ressuscita"] 
    },
    { 
        cantor: "Ministério Zoe", 
        musicas: ["Você Me Leva Ao Deserto", "Até Que O Senhor Venha", "Aquieta Minha Alma"] 
    },
    { 
        cantor: "Morada", 
        musicas: ["Só Tu És Santo", "Medley Leão de Judá", "Pra Onde Eu Irei", "Para Que Entre o Rei", "Uma Coisa", "Puro e Simples", "Vida Longa ao Rei", "Oh! Se Fendesses", "Isaías 6", "Dia e Noite", "Desenvolvendo Amor", "É Tudo Sobre Você", "Emaús", "Vim Para Adorar Te / Estou Só / Digno / Lembre-se", "Puro e Simples / Uma Coisa", "Não Há Amor Igual", "Meus Votos", "Jesus Em Tua Presença", "Essência da Adoração / Abraça-me / Lembre-se", "Espelhos Mágicos / Naves Imperiais", "Ao Único / Espírito / Enche a Minha Vida / Sala do Trono"] 
    },
    { 
        cantor: "Mosaic", 
        musicas: ["Tremble", "Heartbeat"] 
    },
    { 
        cantor: "Newboys", 
        musicas: ["Here We Stand", "Hallelujah"] 
    },
    { 
        cantor: "Nivea Soares", 
        musicas: ["Teu Amor Não Falha", "RIO", "Que se Abram os Céus", "Deus Vivo", "Meu Maior Amor", "Filho Do Deus Vivo", "Sua Justiça Prevalecerá", "Não Seremos Abalados", "Me Entrego a Ti", "Em Tua Presença", "Your love never fails", "Venceu", "Rocha Eterna", "Reina o Senhor", "Pai de Amor", "Os que esperam", "O Senhor é bom", "Jesus", "Grande é o Senhor", "Eu Me Prostro", "Me Esvaziar", "Maravilhado", "Incomparável", "Caminho no Deserto", "Santo Espírito", "Deus Eterno"] 
    },
    { 
        cantor: "Novo Som", 
        musicas: ["Sempre é Possivel", "Não Me Deixe Te Deixar"] 
    },
    { 
        cantor: "Nueva Generación", 
        musicas: ["Glorioaso"] 
    },
    { 
        cantor: "Oficina G3", 
        musicas: ["Espelhos Magicos", "Aos Pes Da Cruz"] 
    },
    { 
        cantor: "Passion", 
        musicas: ["Glorious Day", "Build My Life"] 
    },
    { 
        cantor: "Pat Barrett", 
        musicas: ["Canvas And Clay"] 
    },
    { 
        cantor: "Paul Baloche", 
        musicas: ["Abra Os Olhos Do Meu Coração"] 
    },
    { 
        cantor: "Pc Baruk", 
        musicas: ["Sobre A Graça", "Ousado Amor", "Novo"] 
    },
    { 
        cantor: "Phil Wickham", 
        musicas: ["Your Love Awakens Me", "Till I Found You", "This is Amazind Grace", "Living Hope", "Great Things"] 
    },
    { 
        cantor: "Planetshakers", 
        musicas: ["The First Noel", "Rain", "I Choose You", "Here´s My Life"] 
    },
    { 
        cantor: "Preto No Branco", 
        musicas: ["Sonhos De Deus", "O Leão e a Igreja", "Estado de Graça"] 
    },
    { 
        cantor: "Quatro Por Um", 
        musicas: ["Um Milagre", "Nada É Impossivel", "De Volta A Inocência"] 
    },
    { 
        cantor: "Renascer Praise", 
        musicas: ["Plano Perfeito", "Hosana", "1000 Graus", "Escape"] 
    },
    { 
        cantor: "Reyer", 
        musicas: ["Your Love Never Fails"] 
    },
    { 
        cantor: "Rodolfo Abrantes", 
        musicas: ["Só Quero Ver Você"] 
    },
    { 
        cantor: "Saints And Sinners", 
        musicas: ["Because He Lives"] 
    },
    { 
        cantor: "Seeker And Servant", 
        musicas: ["Do You Hear Me"] 
    },
    { 
        cantor: "Seu Worship", 
        musicas: ["Altar"] 
    },
    { 
        cantor: "Shane And Shane", 
        musicas: ["Rockless Love"] 
    },
    { 
        cantor: "Soraya Moraes", 
        musicas: ["Caminho No Deserto"] 
    },
    { 
        cantor: "Tangela Vieira", 
        musicas: ["Te Fazer Feliz"] 
    },
    { 
        cantor: "Tasha Cobbs", 
        musicas: ["Fill Me Up"] 
    },
    { 
        cantor: "Thales Roberto", 
        musicas: ["Me Faz Viver", "Escrita Pelo Dedo De Deus", "Deus Me Ama", "Deus Da Minha Vida", "Arde Outra Vez", "Filho Meu", "Eu Escolho Deus", "Cheio Do Espirito Santo"] 
    },
    { 
        cantor: "The Brilliance", 
        musicas: ["Turning Over Table"] 
    },
    { 
        cantor: "The Digital Age", 
        musicas: ["Glow"] 
    },
    { 
        cantor: "The Response Band", 
        musicas: ["Floodgates"] 
    },
    { 
        cantor: "Thiago Suguihara", 
        musicas: ["Bom Bom Pai"] 
    },
    { 
        cantor: "Toque No Altar", 
        musicas: ["Tua Graça Me Basta", "Toda Sorte De Benção", "Manancial De Aguas Vivas"] 
    },
    { 
        cantor: "Travis Cottrell", 
        musicas: ["What A Beautiful Name"] 
    },
    { 
        cantor: "Trazendo A Arca", 
        musicas: ["Tua Graça Me Basta", "Toda Sorte De Benção", "Deus De Promessas"] 
    },
    { 
        cantor: "Upperoom", 
        musicas: ["Surrounded"] 
    },
    { 
        cantor: "Valesca Mayssa", 
        musicas: ["Árvore Cortada"] 
    },
    { 
        cantor: "Vertical Worship", 
        musicas: ["Spirit Of The Living God"] 
    },
    { 
        cantor: "Vineyard", 
        musicas: ["Vem Esta É A Hora", "Só Tenho A Ti", "Senhor Te Quero", "Reina Em Mim", "Me Derramar", "All I Have", "Sweetly Broken", "Furious"] 
    },
    { 
        cantor: "Vous Worship", 
        musicas: ["Rhythm Of Your Love"] 
    },
    { 
        cantor: "Vox Central Msc", 
        musicas: ["Quebrantado"] 
    },
    { 
        cantor: "Wesley Santos", 
        musicas: ["Teu Amor Não Falha", "O Seu Amor Por Mim"] 
    },
    { 
        cantor: "Worship Central", 
        musicas: ["The Way Set Apart"] 
    }
];

// Estado da aplicação
let minhaLista = [];

// Seletores do DOM
const homeView = document.getElementById('home-view');
const singerView = document.getElementById('singer-view');
const songView = document.getElementById('song-view');
const mylistView = document.getElementById('mylist-view');
const singerGrid = document.getElementById('singer-grid');
const songList = document.getElementById('song-list');
const mylistContainer = document.getElementById('mylist-container');
const currentSingerName = document.getElementById('current-singer-name');
const btnBack = document.getElementById('back-button');

// Seletores de Navegação
const navHome = document.getElementById('nav-home');
const navRepertoire = document.getElementById('nav-repertoire');
const navMylist = document.getElementById('nav-mylist');
const mainNav = document.getElementById('main-nav');
const hamburgerBtn = document.getElementById('hamburger-btn');
const btnWhatsapp = document.getElementById('btn-whatsapp');
const btnStart = document.getElementById('btn-start-exploring');

// Novos seletores do Player
const playerBar = document.getElementById('player-bar');
const playerSongTitle = document.getElementById('player-song-title');
const playerSingerName = document.getElementById('player-singer-name');
const btnPlayPause = document.getElementById('btn-play-pause');
const btnStop = document.getElementById('btn-stop');

/**
 * FUNÇÃO DE BACK-END: Busca e toca o áudio
 */
async function tocarMusica(nomeMusica, nomeCantor) {
    if (audioPlayer.src.includes(encodeURIComponent(nomeMusica)) && !audioPlayer.paused) {
        audioPlayer.pause();
        return;
    } else if (audioPlayer.src.includes(encodeURIComponent(nomeMusica)) && audioPlayer.paused) {
        audioPlayer.play();
        return;
    }

    const { data, error } = await _supabase
        .from('repertorio')
        .select('link_audio')
        .eq('titulo', nomeMusica)
        .single();

    if (error || !data) {
        alert("Áudio ainda não disponível para esta música no sistema.");
        return;
    }

    // Atualiza Interface do Player
    playerSongTitle.innerText = nomeMusica;
    playerSingerName.innerText = nomeCantor || "Artista";
    playerBar.classList.remove('hidden');

    // Media Session API (Controle em Segundo Plano)
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: nomeMusica,
            artist: nomeCantor || "Ministério Altar",
            artwork: [{ src: 'https://cdn-icons-png.flaticon.com/512/3844/3844720.png', sizes: '512x512', type: 'image/png' }]
        });

        navigator.mediaSession.setActionHandler('play', () => audioPlayer.play());
        navigator.mediaSession.setActionHandler('pause', () => audioPlayer.pause());
        navigator.mediaSession.setActionHandler('stop', () => stopAudio());
    }

    audioPlayer.src = data.link_audio;
    audioPlayer.play();
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playerBar.classList.add('hidden');
}

/**
 * Controladores do Player Global
 */
btnPlayPause.addEventListener('click', () => {
    if (audioPlayer.paused) audioPlayer.play();
    else audioPlayer.pause();
});

btnStop.addEventListener('click', stopAudio);

audioPlayer.addEventListener('play', () => {
    btnPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
});

audioPlayer.addEventListener('pause', () => {
    btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
});

audioPlayer.addEventListener('ended', () => playerBar.classList.add('hidden'));

// Registro do Service Worker (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').catch(err => console.log('Erro SW:', err));
    });
}

/**
 * Gerencia a visibilidade das telas
 */
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'));
    document.querySelectorAll('.main-nav a').forEach(link => link.classList.remove('active'));

    mainNav.classList.remove('active');
    const icon = hamburgerBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');

    if (viewId === 'home') {
        homeView.classList.remove('hidden');
        navHome.classList.add('active');
    } else if (viewId === 'repertoire') {
        singerView.classList.remove('hidden');
        navRepertoire.classList.add('active');
    } else if (viewId === 'songs') {
        songView.classList.remove('hidden');
    } else if (viewId === 'mylist') {
        mylistView.classList.remove('hidden');
        navMylist.classList.add('active');
        renderMyList();
    }
}

function addToMyList(cantor, musica) {
    const jaExiste = minhaLista.some(item => item.musica === musica && item.cantor === cantor);
    if (!jaExiste) {
        minhaLista.push({ cantor, musica });
        alert(`"${musica}" adicionada à sua lista!`);
    } else {
        alert("Esta música já está na sua lista.");
    }
}

function removeFromMyList(index) {
    minhaLista.splice(index, 1);
    renderMyList();
}

function renderMyList() {
    mylistContainer.innerHTML = '';
    if (minhaLista.length === 0) {
        mylistContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">Nenhuma música selecionada ainda.</p>';
        return;
    }

    minhaLista.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <button class="play-btn"><i class="fas fa-play"></i></button>
            <div class="song-info">
                <div class="song-name">${item.musica}</div>
                <small style="color: var(--text-secondary)">${item.cantor}</small>
            </div>
            <button class="add-btn remove-btn" title="Remover">
                <i class="fas fa-trash-can"></i>
            </button>
        `;
        
        li.querySelector('.play-btn').addEventListener('click', () => tocarMusica(item.musica, item.cantor));
        li.querySelector('.remove-btn').addEventListener('click', () => removeFromMyList(index));
        mylistContainer.appendChild(li);
    });
}

function sendToWhatsApp() {
    if (minhaLista.length === 0) {
        alert("Sua lista está vazia!");
        return;
    }
    let mensagem = "*Repertório selecionado*:\n\n";
    minhaLista.forEach((item) => {
        mensagem += `- *${item.musica}* — ${item.cantor}\n`;
    });
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`, '_blank');
}

function renderSingers() {
    singerGrid.innerHTML = '';
    repertorio.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<i class="fas fa-microphone-lines"></i><span>${item.cantor}</span>`;
        card.addEventListener('click', () => showSongs(index));
        singerGrid.appendChild(card);
    });
}

/**
 * Transiciona para a tela de músicas e ativa o Play Real
 */
function showSongs(index) {
    const data = repertorio[index];
    currentSingerName.innerText = `Músicas: ${data.cantor}`;
    songList.innerHTML = '';

    data.musicas.forEach(musica => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <button class="play-btn" title="Ouvir ${musica}">
                <i class="fas fa-play"></i>
            </button>
            <span class="song-name">${musica}</span>
            <button class="add-btn" title="Adicionar à lista">
                <i class="fas fa-plus"></i>
            </button>
        `;

        // BOTÃO DE PLAY CONECTADO AO SUPABASE
        li.querySelector('.play-btn').addEventListener('click', () => tocarMusica(musica, data.cantor));

        li.querySelector('.add-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            addToMyList(data.cantor, musica);
        });

        songList.appendChild(li);
    });

    switchView('songs');
}

// Eventos de Navegação e Cliques
btnBack.addEventListener('click', () => switchView('repertoire'));
navHome.addEventListener('click', (e) => { e.preventDefault(); switchView('home'); });
navRepertoire.addEventListener('click', (e) => { e.preventDefault(); switchView('repertoire'); });
navMylist.addEventListener('click', (e) => { e.preventDefault(); switchView('mylist'); });
hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = hamburgerBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
btnWhatsapp.addEventListener('click', sendToWhatsApp);
btnStart.addEventListener('click', () => switchView('repertoire'));

document.addEventListener('DOMContentLoaded', renderSingers);