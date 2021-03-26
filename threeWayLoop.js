const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
const newTab = tab.reverse()
console.log(newTab)



// utiliser indexOf()

for (i = 0; i < tab.length; i++) {


  console.log(`${tab[i]}, length : ${tab[i].length} index : ${tab.indexOf(tab[i])}`)
}

console.log('------ ------')

tab.forEach((elem) => {
  console.log(`${elem}, length : ${elem.length} index : ${tab.indexOf(tab[i])}`)
})

console.log('------ ------')

for (const elem of tab) {
  console.log(`${elem}, length : ${elem.length} index : ${tab.indexOf(tab[i])}`)
}

