const aluno = ["Claudenir", "Beatriz", "Blaw", "Talia"];
const aluno2 = aluno.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        nota: Math.floor(Math.random() * 10 + 1)
    }
    return itemAtual;
})

function filtraAlunosQuePassaram(aluno) {
    return aluno.nota >= 7;
}

const alunosQuePassaram = aluno2.filter(filtraAlunosQuePassaram);


console.log(alunosQuePassaram);