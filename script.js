const input = document.getElementById('novaTarefa');
const lista = document.getElementById('listaTarefas');
const btn = document.getElementById('adicionarBtn');


btn.addEventListener('click', adicionarTarefa);


input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const texto = input.value.trim();
    if (texto === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;

    const concluirBtn = document.createElement('button');
    concluirBtn.textContent = "Concluída";
    concluirBtn.classList.add('concluirBtn');
    concluirBtn.onclick = () => li.remove();

    li.appendChild(concluirBtn);
    lista.appendChild(li);

    input.value = "";
}
