console.clear()
console.log('======================================')

//////// Exercice 1 
//////// Ecrire un console.error qui affiche 'test'

// console.error('test')

//////// Exercice 2
//////// Commenter l'exercice 1
//////// Ecrire un array vide 'citations' dans un variable constante

const citations = []

//////// Exercice 3
//////// Créer une collection 'cold' dans une constante avec les clef 'character' et 'punchline' 
//////// 'character' et 'punchline' doivent être des chaines de caratères 
//////// avec les valeurs 'Numérobis' et 'Il fait -8000'.

const cold = { character: 'Numérobis', punchline: 'Il fait -8000' }

//////// Exercice 4
//////// Créer une variable dynamique 'tomb' vide

let tomb

//////// Exercice 5
//////// Assigner à tomb un object vide

tomb = {}

//////// Exercice 6
//////// Assigner à tomb un character et une punchline pour obtenir le même resultat que l'exercice 3

tomb.character = 'Nexusis'
tomb.punchline = 'Ce tombeau sera votre tombeau'

//////// Exercice 7
//////// Logger la phrase 'Nexusis dit "Ce tombeau sera votre tombeau" '

// console.log(`${tomb.character} dit "${tomb.punchline}"`)

//////// Exercice 8
//////// Commenter l'exercice 7
//////// Tester si tomb.character est asterix, et logger 'Imhotep'

// if(tomb.character != 'asterix') {
// 	console.log("Imhotep")
// }

//////// Exercice 9
//////// Commenter l'exercice 8
//////// Créer une fonction fléchée 'getCharacter' qui retourne le nom du personnage de la citation passé en paramètre

const getCharacter = (citation) => citation.character

//////// Exercice 10
//////// Logger le personnage de la citation 'Ce tombeau sera votre tombeau' en utilisant la fonction de l'exercice 9

// console.log(getCharacter(myself))

//////// Exercice 11
//////// Commenter l'exercice 10
//////// Ajouter à citations cold et tomb

citations.push(cold)
citations.push(tomb)

//////// Exercice 12
//////// 1. Crée une fonction nommée addCitation
//////// 2. Cette fonction prend en paramètre un character et une punchline
//////// 3. Elle ajoute à citations une nouvelle citation

const addCitation = function(character, punchline) {
	citations.push({
		character, // Même chose que 'character: character'
		punchline
	})
}

//////// Exercice 13
//////// Décommenter le code pour ajouter plein de citation à citations

addCitation('Numérobis', 'Eh les romains, vous êtes des romains')
addCitation('', '')
addCitation('', '')
addCitation('', '')
addCitation('', '')

//////// Exercice 14
//////// Une des citations ajouter dans l'exercice 14 n'est pas bonne corriger là en modifiant directement dans le tableau
//////// 'Eh les romains, vous êtes des romaines' au lieu de 'Eh les romains, vous êtes des romains'

citations[2].punchline = 'Eh les romains, vous êtes des romaines'

//////// Exercice 15
//////// Logger le nombre de citation dans citations

// console.log(citations.length)

//////// Exercice 16
//////// Commenter l'exercice 15
//////// Logger l'ensemble des citations sous la forme 'Nexusis dit "Ce tombeau sera votre tombeau" '
//////// Utiliser la boucle de votre choix

// for (const citation of citations) {
// 	console.log(`${citation.character} dit "${citation.punchline}"`)
// }

//////// Exercice 17
//////// Commenter l'exercice 16
//////// Ajouter à chaque citations une clef 'movie' avec comme valeur 'Asterix & Obelix : Mission Cléopatre'
//////// Utiliser la boucle de votre choix mais différente de l'exercice 16

citations.forEach((citation) => {
	citation.movie = 'Asterix & Obelix : Mission Cléopatre'
})

//////// Exercice 18
//////// Décommenter les nouvelles citations et ajouter les à 'citations'
//////// Attention il y a un piège

const newCitations = [
	{ character: 'Driss', punchline: 'Pas de bras, pas de chocolat', movie: 'Intouchable' },
	{ character: 'Gandalf', punchline: 'You shall not pass', movie: 'The Lord of the Rings: The Fellowship of the Ring' },
	
]

citations.push(...newCitations)

//////// Exercice 19
//////// Créer une fonction getCitationByMovie qui retourne un tableau de toutes les citations d'un film

function getCitationByMovie(movie) {
	return citations.filter((citation) => citation.movie === movie)
}

//////// Exercice 20
//////// Créer un array 'untouchable' qui contient uniquement les citations de Intouchable

const untouchable = citations.filter((citation) => citation.movie === 'Intouchable')

//////// Exercice 21
//////// Créer un array 'veryLong' qui contient uniquement les citations de plus de 100 caractères

const veryLong = citations.filter((citation) => citation.punchline.length > 100)

//////// Exercice 22
//////// Créer un array 'wtf' qui contient uniquement les citations avec des personnages
//////// qui ont un nom qui ne commence pas par la lettre D et dont le film ne fait que un seul mot

const wtf = citations.filter((citation) => {
	return citation.character.startsWith('D') && !citation.movie.includes(' ')
})

//////// Exercice 23
//////// Ajouter un compteur 'like' sur toutes les citations avec comme valeur par default 0
//////// Ajouter un boolean 'favorite' sur toutes les citations avec comme valeur par default 0
//////// Utiliser la boucle de votre choix mais différente de l'exercice 16 et 17

citations.forEach((citation) => {
	citation.like = 0
	citation.favorite = false
})

//////// Exercice 25
//////// Créer une fonction getCitationByPunchline qui retourne la citation rechercher

function getCitationByPunchline(punchline) {
	return citations.find((citation) => citation.punchline == punchline)
}

//////// Exercice 26
//////// Utiliser getCitationByPunchline pour ajouter la citation de votre choix en favori (favorite = true)



//////// Exercice 27
//////// Crée le tableau "presentation" qui retourne un tableau de toute les citations 
//////// Sous la forme de "Numérobis dit "Il fait -8000" dans Asterix & Obelix : Mission Cléopatre"



//////// Exercice 28
//////// Crée la fonction "hasCitation" qui prend le nom d'un film en parametre
//////// et qui retourne si un film à oui ou non une citation
//////// exemple d'utilisation : hasCitation('Matrix') //> false



//////// Exercice 29
//////// Crée la fonction "hasError" qui retourne 'true' si toutes les citations 
//////// ont bien un personnage, une punchline et un film



//////// Exercice 30
//////// Crée la fonction "countFavorite" qui retourne le nombre de film en favori



//////// Exercice 31
//////// Crée la fonction "deleteByPunchline" qui supprime une citation
//////// Indice : splice, indexOf, getCitationByPunchline
