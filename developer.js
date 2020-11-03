var list = new Array();

function init() {
    list.push(getTask1());
    list.push(getTask2());
}

function getTask1() {
    return {
        number: 1,
        developerItem: 'Landing Page Big Motors',
        taskDescription: 'CRUD de Clientes x Pagamentos',
        progress: 20,
        commit: '#009-footer'
    };
}

function getTask2() {
    return {
        number: 2,
        developerItem: 'Painel Administrativo KSD',
        taskDescription: 'Integração API Mercado Pago',
        progress: 100,
        commit: '#024-api-mercado-pago'
    };
}

function updateList() {
    var listHtml = '';
    list.forEach(p => {
        listHtml += getRow(p);
    })
    
    document.getElementById('list').innerHTML = listHtml;
}

function getRow(rowData) {
    return `<tr>
        <th scope="row">${rowData.number}</th>
        <td>${rowData.developerItem}</td>
        <td>${rowData.taskDescription}</td>
        <td>
        <div class="progress mt-2">
            <div class="progress-bar" role="progressbar" style="width: ${rowData.progress}%;"
            aria-valuenow="${rowData.progress}" aria-valuemin="0"
            aria-valuemax="100">${rowData.progress}%</div>
        </div>
        </td>
        <td>${rowData.commit}</td>

        <td style="width: 10%">

        <div class="info-table d-flex">
            <button class="btn-sm btn-secondary" style="width: 80px;">
            + Info
            </button>
            <button class="btn-sm btn-danger" style="width: 80px;">
            Apagar
            </button>
        </div>

        </td>
    </tr>`
}

function add() {
    var devItem = getDevItemText();
    var task = getTaskText();

    var element = list.find(t => t.developerItem == devItem && t.taskDescription == task);

    if (element !== undefined) {
        element.progress = Number(document.getElementById('progress').value);
        element.commit = document.getElementById('commitMessage').value;
        updateList();
    } else {
        alert('Combinação de tarefa e demanda não encontrada para atualizar.');
    }
}

function getDevItemText() {
    var devItem = document.getElementById('developerItem');
    return devItem[devItem.selectedIndex].text;
}

function getTaskText() {
    var task = document.getElementById('developerTasks');
    return task[task.selectedIndex].text;
}