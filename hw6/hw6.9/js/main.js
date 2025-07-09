//  #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let coursesArray = [
 {
  title: 'JavaScript Complex',
  monthDuration: 5,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
 },

 {
  title: 'Java Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'git',
   'java core',
   'java advanced']
 },

 {
  title: 'Python Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'python core',
   'python advanced']
 },

 {
  title: 'QA Complex',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
 },

 {
  title: 'FullStack',
  monthDuration: 7,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'react',
   'angular',
   'aws',
   'docker',
   'git',
   'node.js',
   'python',
   'java']
 },

 {
  title: 'Frontend',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
 }
];
console.log(coursesArray.filter (value => {
 return value.modules.includes('sass')
}));

console.log(coursesArray.filter (value => {
 return value.modules.includes('docker')
}));

