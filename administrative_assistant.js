var list = new Array();

function init() {
    list.push(getFelipe());
    list.push(getJose());
}

function getFelipe() {
    return {
        number: 1,
        name: 'Felipe',
        cost: 2100,
        progress: 55
    };
}

function getJose() {
    return {
        number: 2,
        name: 'José',
        cost: 12900,
        progress: 89
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
        <td>${rowData.name}</td>
        <td>${rowData.cost}</td>

        <td>
        <div class="progress mt-2">
            <div class="progress-bar" role="progressbar" style="width: ${rowData.progress}%;"
            aria-valuenow="${rowData.progress}" aria-valuemin="0"
            aria-valuemax="100">${rowData.progress}%</div>
        </div>
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
    var clientName = document.getElementById('clientName').value;
    var budgetValue = document.getElementById('budgetValue').value;
    var person = {
        number: list.length + 1,
        name: clientName,
        cost: Number.parseFloat(budgetValue),
        progress: 0
    }
    list.push(person);
    updateList();
}