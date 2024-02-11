document.addEventListener("DOMContentLoaded", function () {
    const generatePassengerIdButton = document.getElementById("generatePassengerId");
    const passengerIdInput = document.getElementById("passengerId");
    let passengerCounter = 1;

    generatePassengerIdButton.addEventListener("click", function () {
        const passengerId = `PSNG-23-${pad(passengerCounter, 2)}`;
        passengerIdInput.value = passengerId;
        passengerCounter++;
    });

    // Function to pad numbers with leading zeros
    function pad(number, length) {
        return (number + "").padStart(length, "0");
    }
});

function showSeats(trainId) {
    const seatSelection = document.getElementById('seatSelection');
    seatSelection.style.display = 'block';

    let seatData = {};
    switch (trainId) {
        case 'train1':
            seatData = generateSeatData(10, 5); // 10 rows, 5 columns
            break;
        case 'train2':
            seatData = generateSeatData(8, 6); // 8 rows, 6 columns
            break;
        case 'train3':
            seatData = generateSeatData(12, 4); // 12 rows, 4 columns
            break;
        default:
            seatSelection.innerHTML = "<p>No seat information available.</p>";
            return;
    }

    seatSelection.innerHTML = generateSeatTable(seatData);
    setupSeatSelection(seatData);
}

function generateSeatData(rows, columns) {
    const seatData = [];
    for (let i = 1; i <= rows; i++) {
        const row = [];
        for (let j = 1; j <= columns; j++) {
            row.push({ row: i, column: j, value: `S ${i}-${j}`, available: Math.random() < 0.7 });
        }
        seatData.push(row);
    }
    return seatData;
}

function generateSeatTable(seatData) {
    let tableHTML = '<table>';
    for (let i = 0; i < seatData.length; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < seatData[i].length; j++) {
            const seat = seatData[i][j];
            const seatClass = seat.available ? 'available' : 'unavailable';
            tableHTML += `<td class="${seatClass}" onclick="toggleSeat(this, ${seat.row}, ${seat.column})"><input type="text" value="${seat.value}"></td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    return tableHTML;
}

function setupSeatSelection(seatData) {
    // Implement logic for seat selection (marking selected seats, handling reservations, etc.)
}

function toggleSeat(seatElement, row, column) {
    // Additional logic can be added here based on your requirement
}
