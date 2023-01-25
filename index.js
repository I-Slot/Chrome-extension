
// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads" , JSON.parse(myLeads) ));
console.log(leadsFromLocalStorage)


// localStorage.setItem("MyName", "Ismail Adeshola Ogundele");
let myName = localStorage.getItem("myName");
console.log(myName)
if (leadsFromLocalStorage) {
    myName = leadsFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href=' " + myLeads[i] + " '>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>
`;
    //  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
  ulEl.innerHTML = listItems;
}
