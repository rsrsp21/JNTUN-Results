var csvData = `ID,Subject Code,Subject Name,Grade,Credits
21031A0104,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),C,1
21031A0104,R202205AT,OPERATING SYSTEMS(INTEGRATED),C,3
21031A0205,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),F,0
21031A0205,R202205AT,OPERATING SYSTEMS(INTEGRATED),ABSENT,0
21031A0206,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),F,0
21031A0206,R202205AT,OPERATING SYSTEMS(INTEGRATED),ABSENT,0
21031A0239,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),C,1
21031A0239,R202205AT,OPERATING SYSTEMS(INTEGRATED),C,3
21031A0323,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,B,4
21031A0423,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),ABSENT,0
21031A0423,R202205AT,OPERATING SYSTEMS(INTEGRATED),ABSENT,0
21031A0445,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),C,1
21031A0445,R202205AT,OPERATING SYSTEMS(INTEGRATED),D,3
21031A0502,R202205B,DATA VISUALIZATION,D,4
21031A0503,R202205B,DATA VISUALIZATION,D,4
21031A0507,R202205B,DATA VISUALIZATION,C,4
21031A0515,R202204AT,ELECTRONIC DEVICES AND BASIC CIRCUITS,ABSENT,0
21031A0516,R202205B,DATA VISUALIZATION,D,4
21031A0518,R202204AT,ELECTRONIC DEVICES AND BASIC CIRCUITS,C,4
21031A0522,R202205B,DATA VISUALIZATION,C,4
21031A0523,R202205B,DATA VISUALIZATION,C,4
21031A0531,R202204AT,ELECTRONIC DEVICES AND BASIC CIRCUITS,D,4
21031A0532,R202205B,DATA VISUALIZATION,C,4
21031A0533,R202205B,DATA VISUALIZATION,D,4
21031A0534,R202205B,DATA VISUALIZATION,B,4
21031A0535,R202205C,PRINCIPALES OF CYBER SECURITY,C,4
21031A0536,R202205B,DATA VISUALIZATION,E,4
21031A0537,R202205B,DATA VISUALIZATION,ABSENT,0
21031A0541,R202205B,DATA VISUALIZATION,D,4
21031A0544,R202205B,DATA VISUALIZATION,B,4
21031A0546,R202205D,MATHEMATICS FOR MACHINE LEARNING,A+,4
21031A0548,R202205B,DATA VISUALIZATION,ABSENT,0
21031A0551,R202205B,DATA VISUALIZATION,D,4
21031A0552,R202205B,DATA VISUALIZATION,C,4
21031A0554,R202205B,DATA VISUALIZATION,D,4
21031A0561,R202205C,PRINCIPALES OF CYBER SECURITY,C,4
22035A0101,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),D,1
22035A0101,R202205AT,OPERATING SYSTEMS(INTEGRATED),E,3
22035A0102,R202201A,PRE STRESSED CONCRETE,B,4
22035A0106,R202201A,PRE STRESSED CONCRETE,B,4
22035A0116,R202201A,PRE STRESSED CONCRETE,B,4
22035A0117,R202201A,PRE STRESSED CONCRETE,B,4
22035A0121,R202201A,PRE STRESSED CONCRETE,B,4
22035A0125,R202201A,PRE STRESSED CONCRETE,A,4
22035A0128,R202201A,PRE STRESSED CONCRETE,B,4
22035A0129,R202201A,PRE STRESSED CONCRETE,C,4
22035A0130,R202201A,PRE STRESSED CONCRETE,A,4
22035A0215,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),C,1
22035A0215,R202205AT,OPERATING SYSTEMS(INTEGRATED),B,3
22035A0221,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),C,1
22035A0221,R202205AT,OPERATING SYSTEMS(INTEGRATED),D,3
22035A0303,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,C,4
22035A0307,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,C,4
22035A0314,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,D,4
22035A0316,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,C,4
22035A0321,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,C,4
22035A0322,R202203A,ALTERNATIVE FUELS TECHNOLOGIES,C,4
22035A0402,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),D,1
22035A0402,R202205AT,OPERATING SYSTEMS(INTEGRATED),B,3
22035A0403,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),ABSENT,0
22035A0403,R202205AT,OPERATING SYSTEMS(INTEGRATED),ABSENT,0
22035A0408,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),C,1
22035A0408,R202205AT,OPERATING SYSTEMS(INTEGRATED),B,3
22035A0409,R202205AL,OPERATING SYSTEMS LAB(INTEGRATED),ABSENT,0
22035A0409,R202205AT,OPERATING SYSTEMS(INTEGRATED),ABSENT,0`;

    var grades = {
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

    function parseCSV(csv) {
      var lines = csv.split('\n');
      var headers = lines[0].split(',');

      var data = [];
      for (var i = 1; i < lines.length; i++) {
        var values = lines[i].split(',');
        if (values.length === headers.length) {
          var entry = {};
          for (var j = 0; j < headers.length; j++) {
            entry[headers[j].trim()] = values[j].trim();
          }
          data.push(entry);
        }
      }

      return data;
    }

    function getStudentData(id, data) {
      var studentData = data.filter(function(entry) {
        return entry.ID === id;
      });

      return studentData;
    }

    function calculateSGPA(studentData) {
      var totalCredits = 0;
      var totalGradePoints = 0;

      for (var i = 0; i < studentData.length; i++) {
        var subject = studentData[i];
        var grade = grades[subject.Grade];
        var credits = parseFloat(subject.Credits);

        if (grade === 'Fail') {
          return 'Fail';
        }

        totalCredits += credits;
        totalGradePoints += grade * credits;
      }

      var sgpa = (totalGradePoints / totalCredits).toFixed(2);

      return sgpa;
    }
var clearedSupplementaryIDs = [

]

function displayResults() {
var studentId = document.getElementById('student-id').value.trim();
  if (!studentId) {
    alert('Please enter a valid Roll Number');
    return;
  }

  var studentData = getStudentData(studentId, parseCSV(csvData));
  if (studentData.length === 0) {
    alert('No data found for the given Roll Number.');
    return;
  }

 var idContainer = document.getElementById('id-container');
  var idHeading = idContainer.querySelector('p');
  idHeading.textContent = 'Roll Number: ';
 idHeading.style.color = 'black';
  idHeading.style.fontWeight = 'bold';
  idContainer.style.marginTop = '20px';

  var idValue = document.createElement('span');
  idValue.textContent = studentId;
  idValue.style.color = 'red';
  idValue.style.fontWeight = 'bold';
  idHeading.appendChild(idValue);

  var resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  var table = document.createElement('table');
  var tableHeader = document.createElement('thead');
  var tableBody = document.createElement('tbody');

  var headers = Object.keys(studentData[0]);
  var headerRow = document.createElement('tr');
  headers.forEach(function(header) {
    if (header !== 'ID') {
      var th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    }
  });
  tableHeader.appendChild(headerRow);

  studentData.forEach(function(subject) {
    var row = document.createElement('tr');
    Object.entries(subject).forEach(function([key, value]) {
      if (key !== 'ID') {
        var td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      }
    });
    tableBody.appendChild(row);
  });

  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  resultsContainer.appendChild(table);
	
  var sgpaContainer = document.getElementById('sgpa-container');
  sgpaContainer.innerHTML = '';

  // Create a container for the Total Credits
  var totalCreditsContainer = document.createElement('div');
  totalCreditsContainer.className = 'total-credits';

  var sgpaResult = document.createElement('h3');
  var sgpa = calculateSGPA(studentData);
  sgpaResult.innerHTML = '<span style="color: black;">SGPA : </span><span style="color: red;">' + sgpa + '</span>';

  var supplementaryResult = document.createElement('p');
  supplementaryResult.className = 'supplementary-message';
  if (sgpa === 'Fail') {
    supplementaryResult.innerHTML = '<span style="color: blue;">Better luck next time!</span>';
  } else if (clearedSupplementaryIDs.includes(studentId)) {
    supplementaryResult.innerHTML = '<span style="color: blue;">Passed. Cleared in supplementary appearance(s).</span>';
  } else {
    supplementaryResult.innerHTML = '<span style="color: green;">Congratulations! You have passed!</span>';
  }

  // Append SGPA and Supplementary Results to the SGPA Container
  sgpaContainer.appendChild(sgpaResult);
  sgpaContainer.appendChild(supplementaryResult);

  // Calculate and display Total Credits Obtained
  var totalCreditsText = document.createElement('h6');
  totalCreditsText.innerHTML = '<span style="color: black; font-weight: bold;">Total Credits Obtained: </span><span style="color: red; font-weight: bold;">' + calculateTotalCredits(studentData) + ' / 4.0</span>';
  totalCreditsContainer.appendChild(totalCreditsText);

  // Append the Total Credits Container to the SGPA Container
  sgpaContainer.appendChild(totalCreditsContainer);

  document.getElementById('student-id').focus();
}

function calculateTotalCredits(studentData) {
  var totalCredits = 0;

  for (var i = 0; i < studentData.length; i++) {
    var credits = parseFloat(studentData[i].Credits);
    totalCredits += credits;
  }

  return totalCredits.toFixed(1);
}

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
