function changeModalHeaderColor(status)
{
    let modalHeader = document.getElementById('modal-header');
    modalHeader.classList.remove('bg-warning-subtle','bg-body-secondary', 'bg-danger-subtle', 'bg-success-subtle' );

    switch (status) { 
        case 'On Queue':
            modalHeader.classList.add('bg-body-secondary');
            status.classList.add('text-dark');
        break;
        case 'overdue':
            modalHeader.classList.add('bg-danger-subtle');
            status.classList.add('text-dark');
        break;
        case 'completed':
            modalHeader.classList.add('bg-success-subtle');
            status.classList.add('text-dark');
        break;  
        default:
            modalHeader.classList.add('bg-warning-subtle');
            status.classList.add('text-dark');
        break;                    
    } 
}




// Main Content
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
    const columns = row.getElementsByTagName('td');
    if(columns[6].textContent == 'completed'){
        let removeButtons = columns[7].querySelectorAll(".btn-warning,.btn-danger");
          removeButtons[0].classList.add('d-none'); //edit
          removeButtons[1].classList.add('d-none'); //delete
    }
    });
});

    //View Button
    viewButton = document.querySelectorAll('.view-ticket');
    viewButton.forEach(function(button){
    button.addEventListener('click', function(){
        let row = this.parentElement.parentElement;
        let columns = row.getElementsByTagName('td');


        let title = document.getElementById('request-title');
        title.value = columns[0].textContent;

        let requestedby = document.getElementById('requested-by');
        requestedby.value = columns[1].textContent;

        let department = document.getElementById('department');
        department.value = columns[2].textContent;

        let daterequested = document.getElementById('date-requested');
        daterequested.value = columns[3].textContent;

        let datetarget = document.getElementById('target-date');
        datetarget.value = columns[4].textContent;

        let status = document.getElementById('field-status');
        status.value = columns[6].textContent;


        changeModalHeaderColor(columns[6].textContent);
    });
});