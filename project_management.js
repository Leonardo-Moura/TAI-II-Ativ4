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
        status: 'Pausada'
    };
}

function getTask2() {
    return {
        number: 2,
        developerItem: 'Painel Administrativo KSD',
        taskDescription: 'Integração API Mercado Pago',
        progress: 100,
        status: 'Implementada'
    };
}

function updateList() {
    var listHtml = '';
    list.forEach(t => {
        listHtml += getRow(t);
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
        <td><h4><span class="badge badge-primary">${rowData.status}</span></h4>
        </td>

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
    var devItemElement = document.getElementById('developerItem'); 
    var developerItem = devItemElement[devItemElement.selectedIndex].text;
    var taskDescription = document.getElementById('task').value;
    var progress = document.getElementById('progress').value
    var task = {
        number: list.length + 1,
        developerItem: developerItem,
        taskDescription: taskDescription,
        progress: Number(progress),
        status: 'Nova'
    }
    list.push(task);
    updateList();
}