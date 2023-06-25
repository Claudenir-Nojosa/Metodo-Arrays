const aluno = ["Claudenir", "Beatriz"];
const aluno2 = aluno.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        nota: 9
    }
    return itemAtual;
})

function filtraAlunosQuePassaram(aluno) {
    return aluno.nota >= 7;
}

const alunosQuePassaram = aluno2.filter(filtraAlunosQuePassaram);


console.log(alunosQuePassaram);