// MongoDB Atlas Data API Endpoint and API Key
const API_URL = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-ztyrfvn/endpoint/data/v1'; // Replace with your Data API URL
const API_KEY = '24nFZbNLiGdSLnLOafFr6T0MTaT7zvu400IB2AO5HPMyTiNYTKctG3Q7vMRvB5Nn'; // Replace with your Data API key
const DB_NAME = 'Jntun_db_results'; // Replace with your database name
const COLLECTION_NAME = '2021_honorsminors'; // Replace with your collection name

// Function to fetch student data using MongoDB Atlas Data API
async function fetchStudentData(studentId) {
    const query = {
        "ID": studentId
    };

    const requestPayload = {
        "dataSource": "jntun_results_database_1", // Replace with your cluster name
        "database": DB_NAME,
        "collection": COLLECTION_NAME,
        "filter": query
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        },
        body: JSON.stringify(requestPayload)
    });

    if (!response.ok) {
        throw new Error('Failed to fetch student data');
    }

    const data = await response.json();
    return data.documents;
}

// Grades map
const grades = {
    'A+': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 5,
    'F': 'Fail',
    'COMPLE': 0,
    'ABSENT': 'Fail'
};

// Function to display the results
async function displayResults() {
    const studentId = document.getElementById('student-id').value.trim();

    if (!studentId) {
        alert('Please enter a valid Roll Number');
        return;
    }

    try {
        const studentData = await fetchStudentData(studentId);
        
        if (studentData.length === 0) {
            alert('No data found for the given Roll Number.');
            return;
        }

        const idContainer = document.getElementById('id-container');
        const idHeading = idContainer.querySelector('p');
        idHeading.textContent = 'Roll Number: ';
        idHeading.style.color = 'black';
        idHeading.style.fontWeight = 'bold';
        idContainer.style.marginTop = '20px';

        const idValue = document.createElement('span');
        idValue.textContent = studentId;
        idValue.style.color = 'red';
        idValue.style.fontWeight = 'bold';
        idHeading.appendChild(idValue);

        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';

        const table = document.createElement('table');
        const tableHeader = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        const headers = Object.keys(studentData[0]);
        const headerRow = document.createElement('tr');
        headers.forEach(function(header) {
            if (header !== 'ID') {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            }
        });
        tableHeader.appendChild(headerRow);

        studentData.forEach(function(subject) {
            const row = document.createElement('tr');
            Object.entries(subject).forEach(function([key, value]) {
                if (key !== 'ID') {
                    const td = document.createElement('td');
                    td.textContent = value;
                    row.appendChild(td);
                }
            });
            tableBody.appendChild(row);
        });

        table.appendChild(tableHeader);
        table.appendChild(tableBody);
        resultsContainer.appendChild(table);

        const sgpaContainer = document.getElementById('sgpa-container');
        sgpaContainer.innerHTML = '';

        // Calculate and display Total Credits Obtained
        const totalCreditsText = document.createElement('h6');
        totalCreditsText.innerHTML = '<span style="color: black; font-weight: bold;">Total Credits Obtained: </span><span style="color: red; font-weight: bold;">' + calculateTotalCredits(studentData) + ' / 12.0</span>';
        sgpaContainer.appendChild(totalCreditsText);

    } catch (error) {
        alert('Error fetching student data: ' + error.message);
    }

    document.getElementById('student-id').focus();
}

// Function to calculate total credits
function calculateTotalCredits(studentData) {
    let totalCredits = 0;

    studentData.forEach(function(subject) {
        const credits = parseFloat(subject.Credits);
        totalCredits += credits;
    });

    return totalCredits.toFixed(1);
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.keyCode === 13) { // 13 represents the Enter key
        displayResults();
    }
}

// Add event listener to input element
document.getElementById('student-id').addEventListener('keyup', handleKeyPress);

function printResults() {
  var printContents = document.querySelector('.container').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();

  document.body.innerHTML = originalContents;
}
