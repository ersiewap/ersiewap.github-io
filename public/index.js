document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
        const columns = row.getElementsByTagName('td');
        console.log(`Title: ${columns[0].textContent}`);
        console.log(`Requested By:${columns[1].textContent}`);
        console.log(`Department:${columns[2].textContent}`);
        console.log(`Date Requested:${columns[3].textContent}`);
        console.log(`Target Date:${columns[4].textContent}`);
        console.log(`Category: ${columns[5].textContent}`);
        console.log(`Status: ${columns[6].textContent}`);
        

    });
});
