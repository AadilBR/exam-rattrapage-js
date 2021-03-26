let sexe = true
// faire un switch en foction du sexe entré
if (sexe)


  const information = (prenom, nom, age, sexe) => {


    console.log(` prénom : ${prenom}\n nom :${nom}\n age :${age}`)

    if (age >= 18) {
      console.log(` ${sexe} vous êtes majeur depuis ${age - 18}  ans`)

    } else {
      console.log(` ${sexe} vous serez majeur dans ${18 - age}  ans`)
    }
  }

information('Alice', 'Liddell', 7)

information('Sofiane', 'Akermoun', 39)

information('Valerie', 'Dupont', 7)