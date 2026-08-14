const fellows =[];

fellows.push =({name="Spencer", role:"Machine Learning Engineer", points:"70"});
fellows.push({ name: "Divine", role: "Backend Fellow", points: 95 });
fellows.push({ name: "Njoh", role: "Fullstack Fellow", points: 150 });
fellows.push({ name: "Bih", role: "Design Fellow", points: 80 });

for (let i=0; i<fellows.length<i++){
const f = fellows[i];
  console.log(`${i + 1}. ${f.name}  ${f.role} (${f.points} pts)`);
}
console.log("---")

const summaries= fellow.map(f=>`${f.name}: ${f.points} pts`);
console.log(summaries);
)

const topFellows = fellows.filter(f => f.points > 100);
console.log("Top fellows:", topFellows);

onst topNames = fellows.filter(f => f.points > 100).map(f => f.name);
console.log("Top names:", topNames);
