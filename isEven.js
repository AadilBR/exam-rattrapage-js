const isOdd = (nb) => {

  if (nb % 2 !== 0) {
    return true
  } else {
    return false
  }


}

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isOdd(1)) // true
console.log(isOdd(2)) // false
console.log(isEven(1)) // false
console.log(isEven(2)) // true