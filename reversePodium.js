let tab = [15, 12, 1, 6, 0, 14, 18, 2, 16]

const reversePodium = (tab) => {

  tab.sort((a, b) => {
    return a - b
  })


  console.log(tab[2])
  console.log(tab[1])
  console.log(tab[0])
}

reversePodium(tab)


