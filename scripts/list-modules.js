const data = require('../lib/modules-data.json');
const paths = {};
data.forEach(m => {
  const path = m.learningPath || 'No Path';
  if (!paths[path]) paths[path] = [];
  paths[path].push({ id: m.id, title: m.title });
});
Object.keys(paths).sort().forEach(path => {
  console.log('\n' + '='.repeat(60));
  console.log(path + ' (' + paths[path].length + ' modules)');
  console.log('='.repeat(60));
  paths[path].forEach((m, i) => console.log((i+1) + '. ' + m.title));
});
