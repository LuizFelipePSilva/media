const alunos = {
    nomes: [
        "Aluno 1", "Aluno 2", "Aluno 3", "Aluno 4", "Aluno 5",
        "Aluno 6", "Aluno 7", "Aluno 8", "Aluno 9", "Aluno 10",
        "Aluno 11", "Aluno 12", "Aluno 13", "Aluno 14", "Aluno 15",
        "Aluno 16", "Aluno 17", "Aluno 18", "Aluno 19", "Aluno 20",
        "Aluno 21", "Aluno 22", "Aluno 23", "Aluno 24", "Aluno 25",
        "Aluno 26", "Aluno 27", "Aluno 28", "Aluno 29", "Aluno 30",
        "Aluno 31", "Aluno 32", "Aluno 33", "Aluno 34", "Aluno 35",
        "Aluno 36", "Aluno 37", "Aluno 38", "Aluno 39", "Aluno 40",
        "Aluno 41", "Aluno 42", "Aluno 43", "Aluno 44", "Aluno 45",
        "Aluno 46", "Aluno 47", "Aluno 48", "Aluno 49", "Aluno 50"
    ],
    notas: {
      primeiraNotas: [
        7, 5, 9, 6, 10,
        4, 8, 6, 7, 8,
        5, 9, 4, 7, 6,
        8, 10, 5, 9, 7,
        6, 5, 8, 7, 10,
        6, 9, 8, 5, 7,
        10, 9, 6, 8, 4,
        7, 8, 6, 5, 9,
        8, 7, 9, 6, 10,
        5, 6, 8, 10, 7
    ],
    segundaNotas: [
        8, 7, 10, 5, 9,
        6, 8, 7, 9, 5,
        8, 9, 6, 10, 7,
        5, 8, 9, 6, 7,
        10, 8, 9, 10, 8,
        6, 7, 5, 9, 8,
        10, 6, 5, 8, 9,
        7, 8, 9, 5, 6,
        8, 9, 10, 6, 7,
        9, 8, 6, 7, 5
    ],
    terceiraNotas: [
        6, 8, 9, 7, 10,
        5, 7, 8, 6, 9,
        6, 8, 7, 9, 8,
        7, 5, 10, 6, 9,
        8, 7, 6, 9, 8,
        7, 8, 6, 5, 10,
        6, 9, 8, 7, 5,
        8, 10, 7, 8, 9,
        9, 6, 5, 8, 7,
        10, 9, 6, 7, 8
    ],
    quartaNotas: [
        9, 6, 10, 8, 7,
        6, 9, 5, 10, 8,
        7, 6, 8, 9, 10,
        9, 7, 8, 6, 10,
        5, 7, 8, 9, 6,
        10, 9, 7, 5, 8,
        6, 7, 9, 10, 8,
        6, 5, 7, 8, 9,
        7, 10, 9, 6, 8,
        8, 7, 10, 9, 5
    ]
    }
};


let nome1 = alunos.nomes
let notas1 = alunos.notas.primeiraNotas
let notas2 = alunos.notas.segundaNotas
let notas3 = alunos.notas.terceiraNotas
let notas4 = alunos.notas.quartaNotas


function recebe (nom,nota1,nota2,nota3,nota4, filtro) {
let n1 = {...nom}, n2 = {...nota1}, n3 = {...nota2}, n4 = {...nota3},n5 = {...nota4}
let resultado = {
  nome: [],
  media: []
}
for(let i = 0; i < nom.length; i++) {
  let media = ((n2[i] + n3[i] + n4[i] + n5[i]) / 4)
  if(filtro != undefined && filtro > 0) {
    if(media >= filtro) {
    resultado.nome.push(n1[i])
    resultado.media.push(media)
    }
  } 
  return(`${n1[i]} tem as notas ${n2[i]}, ${n3[i]}, ${n4[i]}, ${n5[i]} de media ${media}`)
}
return(resultado)
}

recebe(nome1,notas1,notas2,notas3,notas4,7)


