/**
 * Generic table search function
 * @param {string} tableId - ID of the table to search
 * @param {string} inputId - ID of the search input field
 */
function searchTable(tableId, inputId) {
  try {
    const input = document.getElementById(inputId).value.toUpperCase();
    const table = document.getElementById(tableId);
    
    if (!table) {
      console.error(`Table with ID ${tableId} not found`);
      return;
    }
    
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      let match = false;

      for (let j = 0; j < cells.length; j++) {
        const cellText = cells[j].textContent || cells[j].innerText;
        if (cellText.toUpperCase().includes(input)) {
          match = true;
          break;
        }
      }

      rows[i].style.display = match ? "" : "none";
    }
  } catch (error) {
    console.error("Error in searchTable function:", error);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Remove empty rows from tables
  const tables = document.querySelectorAll('table');
  
  tables.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      let isEmpty = true;
      
      cells.forEach(cell => {
        if (cell.textContent.trim() !== '') {
          isEmpty = false;
        }
      });
      
      if (isEmpty) {
        row.remove();
      }
    });
  });
  
  // Add loading state for tables
  const tableContainers = document.querySelectorAll('.table-container');
  tableContainers.forEach(container => {
    container.insertAdjacentHTML('beforeend', '<div class="loading">Loading data...</div>');
    setTimeout(() => {
      container.querySelector('.loading').remove();
    }, 500);
  });
});
// Remove all &nbsp; from tables on load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('td').forEach(td => {
    if (td.innerHTML === '&nbsp;') {
      td.innerHTML = '';
    }
  });
});
// When creating new cells
const td = document.createElement('td');
td.textContent = ''; // Instead of &nbsp;