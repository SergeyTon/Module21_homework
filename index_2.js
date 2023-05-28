// JS-объект JSON-строка

// {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}

const person = {
  
    name: "Anton",
    age: 36,
    salary: 80000,
    skills: ["Javascript", "HTML", "CSS"]
  }
    const stringJSON = JSON.stringify(person);
    console.log(stringJSON);