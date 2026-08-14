//Functoin for checking for duplicates 
function findDuplicates(ids) {
  const counts = ids.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts)
    .filter((id) => counts[id] > 1)
    .map((id) => (isNaN(id) ? id : Number(id))); 
}

//displaying the output of the contents
const ids = [102, 105, 102, 110, 105, 108, 102];
console.log(findDuplicates(ids)); 


//Filtering duplicates functoin
function scoresAboveThreshold(fellows, threshold) {
  const above = fellows.filter((f) => f.score > threshold);

  return {
    count: above.length,
    names: above.map((f) => f.name),
  };
}

const fellows = [
  { name: "Ama", score: 78 },
  { name: "Bate", score: 92 },
  { name: "Che", score: 65 },
  { name: "Divine", score: 88 },
];
console.log(scoresAboveThreshold(fellows, 80)); /

//Displaying the conetents which are been filtered by genres
function groupByCategory(projects) {
  return projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project.name);
    return acc;
  }, {});
}

const projects = [
  { name: "Budget Tracker", category: "Finance" },
  { name: "Attendance App", category: "Education" },
  { name: "Expense Splitter", category: "Finance" },
  { name: "Quiz Master", category: "Education" },
  { name: "Farm Monitor", category: "Agriculture" },
];
console.log(groupByCategory(projects));

  const combined = names.map((name, i) => ({
    name,
    score: scores[i],
  }));

  return combined
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.name);
}

const names = ["Ngwa", "Fon", "Achu", "Tabe", "Mbah"];
const scores = [72, 95, 88, 91, 67];
console.log(mergeAndRank(names, scores)); 
