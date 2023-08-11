// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const ulEl = document.createElement("ul");

// for(const technology of technologies){
    // const liEl = document.createElement("li");
    // liEl.textContent = technology;
    // ulEl.appendChild(liEl);
// }
// document.body.appendChild(ulEl);

// const markup = technologies.map((technology) => `<li> ${technology}</li>`).join("");
//  document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);
// const markup = technologies.reduce((acc, technology) => acc + `<li> ${technology}</li>`, "");
// document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);

// const colors = [
    //    { 
        // label: "red",
        // color: "#FF0000",
// },
// {
    // label: "green",
    // color: "#00FF00",
// },
// {
    // label: "blue",
    // color: "#0000FF",
// },
// {
    // label: "yellow",
    // color: "#FFFF00",
// },
    
// ];
// const fragment = document.createDocumentFragment();
// for(const {label, color}of colors){
    // const buttonEl = document.createElement("button");
    // buttonEl.textContent = label;
    // buttonEl.style.backgroundColor = color;
    // buttonEl.type = "button";
    // fragment.appendChild(buttonEl); 
// }
// document.body.appendChild(fragment);


// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

/*
1. Отримати всі рефси (форма, спан, тотал)
2. Повісити слухач подій по інпуту на всю форму
3. Реалізувати ренж
  3.1. Отримувати value ренжу і записувати його у спан
4. Створимо обʼєкт у якому збережемо ціну і кількість кг + додамо метод для підрахунку фінальної вартості (ціна * кг)
5. Фінальну вартість записати в параграф
*/
// const refs = {
    // form:document.getElementById("form"),
//    total:document.getElementById("total"),
//    amount:document.getElementById("amount"),
// };

// const data = {
    // price: 0,
    // amount: 0,
    // calcTotalPrice() {
        // return (this.price * this.amount).toFixed(2);
    // },
// };
// setAmount();
// fillData();
// displayTotal();
// refs.form.addEventListener("input", onInput);
// function onInput({target}){
    // if(target.name === "quantity"){
    // setAmount();
      
    // }
    // fillData();
    // displayTotal();
// }
// function fillData() {
    // data.price = refs.form.elements.price.value;
    // data.amount = refs.form.elements.quantity.value;
// }
// function displayTotal() {
//    refs.total.textContent = `${data.calcTotalPrice()}грн`; 
// }
// function setAmount (){
    // refs.amount.textContent = refs.form.elements.quantity.value;;
// }