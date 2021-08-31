var ans;

alert("Esse site foi feito como atividade de Programação para Web. Entrega dia 16/09/2020")

function um() {
	document.getElementById("img").src = "./img/1.png";
	document.getElementById("ttl").innerHTML = "Minecraft";
	document.getElementById("txt").innerHTML = "Minecraft é, atualmente, o jogo mais vendido de todos os tempos. O jogo indie (independente) já está com a íncrível marca de 202.000.000 de unidades vendidas.";
}

function swc() {
	//
	ans = prompt("Qual jogo quer ver? (1, 2, 3, 4, 5)")

	switch (ans) {
		case "1":
			ans = document.getElementById("img").src = "./img/1.png";
			document.getElementById("ttl").innerHTML = "Minecraft";
			document.getElementById("txt").innerHTML = "Minecraft é, atualmente, o jogo mais vendido de todos os tempos. O jogo indie (independente) já está com a íncrível marca de 202.000.000 de unidades vendidas \n"; 
			document.getElementById("txt0").innerHTML = "O famoso jogo de posicionar blocos em 10 anos superou Tetris, outro famoso jogo de posicionar blocos (Aparentemente blocos são o segredo para um jogo de sucesso) que estava há mais de 20 anos no pódio imbatível. \n"; 
			document.getElementById("txt1").innerHTML = "Seu criador (Markus Persson) com apenas um PC e conhecimento em POO em Java fez uma versão alpha do jogo em 2009, já naquele tempo o jogo atraia curiosos com a novidade, novidade esta que só teve sua versão completa (1.0) em 2011, a partir daí o jogo já começou a ganhar sucesso no YouTube e em pouco tempo virou febre a ponto de, em apenas três anos depois (2014), já ter se tornado o 3º mais vendido do mundo e a empresa fundada por Markus Persson, Jakob Porser e Carl Manneh (Mojang) ter sido comprada pela Microsoft por US$ 2,5 bilhões e ter sido movida a Xbox Game Studios."
			break;
		case "2":
			ans = document.getElementById("img").src = "./img/2.png";
			document.getElementById("ttl").innerHTML = "Tetris";
			document.getElementById("txt").innerHTML = "Tetris foi, durante quase 30 anos, o jogo mais vendido da história, esse sucesso se deve ao fato de Tetris ser multi-plataforma, isto é ele sempre está se reinventando e se adaptadando a todos os consoles disponíveis, o jogo esteve disponível para quase todos os consoles mobile, está disponível também para Android, IOs, lançou para todos os consoles dos anos 80 e 90, enfim Tetris está sempre lá. \n";
			document.getElementById("txt0").innerHTML = "Pra quem não se lembra (meio impossível), Tetris é o famoso jogo de blocos (tetraminós) onde o jogador tem de virá-los para encaixá-los corretamente nos espaços vazios, pode parecer simples e até meio bobo, mas acontece que é o jogo 'bobo' com 201.000.000 de unidades vendidas ao longo de todo o seu tempo no mercado.";
			document.getElementById("txt1").innerHTML = "O jogo também é um jogo indie (independente), no caso ele não foi criado por apenas uma pessoa e sim por três, Alexey Pajitnov, Dmitry Pavlovsky e Vadim Gerasimov, ambos, os três, russos e engenheiros informáticos do Centro de Computadores da Academia Russa das Ciências, um deles, Vadim, tinha apenas 16 anos quando começou a criar o jogo, porém nenhum deles, quando lançaram o jogo não estavam com expectativas altas quanto ao jogo, até porque o jogo foi criado mais como um hobby do que um produto mesmo, também havia o fato de que o mercado de jogos e consoles, no laçamento de Tetris, estava em uma crise que até hoje nunca foi vista no mercado devido a empresa que até a época era sinônimo de videogame, a Atari, estar tomando maus rumos que a levaram a beira da falência, além de tudo isso Pajitnov tinha destruído uma grande parte dos disquetes para prevenir-se de ser acusado pelo governo soviético de viciar os pesquisadores da academia, sendo durante um bom tempo distribuído informal e ilegalmente entre os que ainda possuíam disquetes, ilegalmente, pois o governo soviético era rígido quanto as leis de propriedade privada e comercialização de bens. \n";
			break;
		case "3":
			ans = document.getElementById("img").src = "./img/3.png";
			document.getElementById("ttl").innerHTML = "GTA V";
			document.getElementById("txt").innerHTML = "O 5º jogo da franquia GTA (Grand Theft Auto) impressiona, seja pelos gráficos, pelo mundo aberto, pela história, pela liberdade do jogador e, principalmente pelos altos números que conquistou muito rapidamente, atualmente tem 130.000.000 de unidades vendidas. \n";
			document.getElementById("txt0").innerHTML = "GTA V (5) mudou completamente o gênero de ação e aventura em mundo aberto e diferente dos outros 2 primeiros da lista ele não é simples e cheio de blocos e sim relativamente simples com sangue, armas e muita ação. A Rockstar, produtora do jogo, até hoje fatura milhões com a versão online do jogo com direito até a um cassino de dinheiro real dentro do jogo, mesmo depois de 7 anos do lançamento  do jogo - também multiplataforma por sinal - ele continua sendo o carro-chefe da empresa e os fãs já estão há anos ansiosos por uma sequência, seja do jogo ou da franquia.";
			document.getElementById("txt1").innerHTML = "O jogo já se cansou de quebrar recordes, é tão popular e tão rentável que até hoje segura o recorde de produto de entretenimento com vendas mais rápidas no mundo; para se ter uma base de comparação, Vingadores Ultimato, o filme mais vendido da história, em 11 dias faturou US$ 2 bilhões, GTA consegui isso em menos de uma semana 6 anos antes. Todos esse faturamento óbvio que é só uma reflexão, não só do marketing extenso e abundante feito em cima do jogo em seu lançamento, mas também a facilidade de conquista do público que ele tem, facilidade esta que rendeu ao 5º título da franquia inúmeros títulos, incluindo de um dos jogos mais importantes da história.";
			break;
		case "4":
			ans = document.getElementById("img").src = "./img/4.png";
			document.getElementById("ttl").innerHTML = "Wii Sports";
			document.getElementById("txt").innerHTML = "Esse é o famoso jogo de esportes da Nintendo, serviu como um teste ao controle novo, adaptado a ser segurado por uma só mão e deixado na vertical, e testou também a captação de movimentos que o console prometeu ter";
			document.getElementById("txt0").innerHTML = "O jogo teve 82.900.000 de unidades vendidas e diferente de todos os outros este não é multi-plataforma, quem quisesse jogar o Wii Sports teria de comprar um Wii (hoje fora de linha), isto fez com que o console tivesse vendas absurdas, já que muitos o compravam apenas para jogar o jogo.";
			document.getElementById("txt1").innerHTML = "O Wii Sports foi um dos pioneiros no gênero de jogos de esportes com sensor de movimento e devido a esse fato, de ter sido uma enorme novidade na época, talvez possa se considerar que esse foi o principal fator pelas altas vendas, sem desmerecer o empenho da Nintendo e o suporte excelente para o jogo.";
			break;
		case "5":
			ans = document.getElementById("img").src = "./img/5.jpg";
			document.getElementById("ttl").innerHTML = "PUBG";
			document.getElementById("txt").innerHTML = "Um dos principais criadores do gênero Battle Royale não podia ficar de fora dessa lista, com 72.800.000 de unidades vendidas (e aumentando) este jogo conseguiu alavancar o gênero ao ponto de, em menos de 2 anos,ultrapassar Super Mario Bros que estava com o 5º lugar, quebrando o recorde de Minecraft que demorou 2 e a tendência deste jogo (PUBG) é apenas subir.";
			document.getElementById("txt0").innerHTML = "O jogo foi tão expressivo que teve (e ainda tem) até problemas legais com jogos muitos parecidos que lançaram em datas próximas ao lançamento dele, pois a desenvolvedora (PUBG Corporation) considerava uma espécie de plágio, hoje a situação está mais branda, contudo o jogo ficou tão popular que muitas corporações chinesas lançaram clones do jogo em seus nomes para circular dentro do mercado chinês, já que a China é fechada para certos produtos estrangeiros.";
			document.getElementById("txt1").innerHTML = "PUBG além de ter um número absurdo de vendas ainda carrega um número de 600.000.000 de downloads, além de produtos disponíveis para venda (em dinheiro real) dentro do game que rende ainda mais pra empresa, empresa esta que, assim como a Mojang, só tem um jogo, no caso ao longo do tempo foram lançando outros, mas ainda assim baseados em um jogo apenas.";
			break;

		default:
			ans = alert("São apenas os 5 jogos mais vendidos, não está catalogado qualquer outro. :p")
	}
}
