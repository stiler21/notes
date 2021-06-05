function clearTable(table) {
    for (let i = 1; table.rows.length > 1;) {
        table.deleteRow(i);
    }
}

function findRowIndex(table, id) {
    let i = 1;
    while (table.rows[i].cells[5].innerHTML != id) {
        i++;
    }
    return i;
}

function getTime(Time) {
    let hours = Time.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = Time.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
}

function updateSummaryTable(table, notes) {
    let active_tasks = 0, arch_tasks = 0, active_thoughts = 0, arch_thoughts = 0, active_ideas = 0, arch_ideas = 0;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].Status == statuses[0]) {
            switch (notes[i].Category) {
                case categories[0]:
                    active_tasks++;
                    break;
                case categories[1]:
                    active_thoughts++;
                    break;
                case categories[2]:
                    active_ideas++;
                    break;
            }
        } else {
            switch (notes[i].Category) {
                case categories[0]:
                    arch_tasks++;
                    break;
                case categories[1]:
                    arch_thoughts++;
                    break;
                case categories[2]:
                    arch_ideas++;
                    break;
            }
        }
    }
    table.rows[1].cells[1].innerHTML = active_tasks;
    table.rows[1].cells[2].innerHTML = arch_tasks;
    table.rows[2].cells[1].innerHTML = active_thoughts;
    table.rows[2].cells[2].innerHTML = arch_thoughts;
    table.rows[3].cells[1].innerHTML = active_ideas;
    table.rows[3].cells[2].innerHTML = arch_ideas;
}