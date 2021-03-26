const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
const newTab = tab.reverse()
console.log(newTab)


// utiliser indexOf()

let i = 0
while (i < tab.length) {
  console.log(`${tab[i]}, length: ${tab[i].length} index : ${tab.indexOf(tab[i])}`)
  ++i
}

console.log('------ ------')

i = 0
do {
  console.log(`${tab[i]}, length: ${tab[i].length} index : ${tab.indexOf(tab[i])}`)
  ++i
} while (i < tab.length)