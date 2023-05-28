//JS-объект
var result = {
    list: []
};

//XML-парсер
const parser = new DOMParser();

//XML
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentsNodes = xmlDOM.querySelectorAll("student");

studentsNodes.forEach((element) => {
    var student = new Object();
    const firstName = element.querySelector("first");
    const secondName = element.querySelector("second");
    const age = element.querySelector("age");
    const prof = element.querySelector("prof");
    const nameNode = element.querySelector("name");
    const nameLang = nameNode.getAttribute("lang");
    student.name = firstName.textContent + ' ' + secondName.textContent;
    student.age = age.textContent;
    student.prof = prof.textContent;
    student.lang = nameLang;
    result.list.push(student);
});

console.log(result);