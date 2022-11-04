

// // THIS SINTAX IS A METHOD AS PROPERTY OF ISELA'S OBJECT

//     calcAge: function(){
//         return 3000 - this.birthday;
//     }
//   };
   


//   console.log(isela.calcAge());
//   console.log(isela.calcAge()); 
//   console.log(isela.calcAge());  
//   console.log(isela.calcAge());


  
  
 // this sintax is the same that puts the property of isela's object

//  const calcAge = birthday => {
//     return 2037 - birthday
//  }


const isela = {
    firstName:'Isela',
    lastName :'Alarcón',
    birthday: 2000,
    job : 'developer',
    family: ['Erwie', 'Doudou', 'Gala', 'Romerita'],
    hasDriversLicense: true,

    calcAge: function (){
        this.age = 2037 - this.birthday;
        return this.age;
    },

    getSummary: function (){
        this.license = this.hasDriversLicense;
        return this.license;
    }
};


isela.calcAge()
isela.getSummary()
console.log(isela.age)
console.log(isela.hasDriversLicense)
