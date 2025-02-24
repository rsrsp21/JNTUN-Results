var csvData = `ID,Subject Code,Subject Name,Grade,Credits
`;
var grades = {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 5,
    'F': 'Fail',
    'COMPLE': 0,
  'ABSENT': 'Fail',
  'NOT CO': 0
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
'23031A0101','23031A0102','23031A0103','23031A0104','23031A0105','23031A0106','23031A0107','23031A0108','23031A0109','23031A0110','23031A0111','23031A0112','23031A0113','23031A0114','23031A0115','23031A0116','23031A0117','23031A0118','23031A0119','23031A0120','23031A0121','23031A0122','23031A0123','23031A0124','23031A0125','23031A0126','23031A0127','23031A0128','23031A0129','23031A0130','23031A0202','23031A0203','23031A0204','23031A0207','23031A0208','23031A0209','23031A0218','23031A0219','23031A0220','23031A0221','23031A0222','23031A0223','23031A0224','23031A0227','23031A0230','23031A0232','23031A0234','23031A0235','23031A0238','23031A0242','23031A0245','23031A0246','23031A0247','23031A0248','23031A0301','23031A0302','23031A0304','23031A0305','23031A0306','23031A0307','23031A0308','23031A0309','23031A0310','23031A0311','23031A0312','23031A0313','23031A0314','23031A0315','23031A0317','23031A0318','23031A0319','23031A0320','23031A0321','23031A0322','23031A0324','23031A0325','23031A0326','23031A0327','23031A0328','23031A0329','23031A0330','23031A0331','23031A0332','23031A0401','23031A0403','23031A0405','23031A0407','23031A0408','23031A0409','23031A0410','23031A0413','23031A0416','23031A0417','23031A0418','23031A0421','23031A0422','23031A0423','23031A0424','23031A0425','23031A0426','23031A0430','23031A0432','23031A0433','23031A0437','23031A0438','23031A0439','23031A0442','23031A0443','23031A0446','23031A0447','23031A0448','23031A0451','23031A0452','23031A0453','23031A0455','23031A0458','23031A0508','23031A0509','23031A0518','23031A0520','23031A0528','23031A0536','23031A0540','23031A0550'
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
var totalCreditsObtained = calculateTotalCredits(studentData);

// Check if the 8th digit of the ID is 4 and adjust total credits accordingly
if (studentId && (studentId.charAt(7) === '1' || studentId.charAt(7) === '3' || studentId.charAt(7) === '4')) {
    totalCreditsText.innerHTML = '<span style="color: black; font-weight: bold;">Total Credits Obtained: </span><span style="color: red; font-weight: bold;">' + totalCreditsObtained + ' / 20.5</span>';
} else {
    totalCreditsText.innerHTML = '<span style="color: black; font-weight: bold;">Total Credits Obtained: </span><span style="color: red; font-weight: bold;">' + totalCreditsObtained + ' / 19.5</span>';
}

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
