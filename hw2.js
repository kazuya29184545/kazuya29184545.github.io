// Create the template for objects that are plans
function Plan(name, housing, tuition, scholarships) {
    this.name = name;
    this.housing = housing;
    this.tuition = tuition;
    this.scholarships = scholarships;
    this.totalCost = function() {
        return this.housing + this.tuition;
    };
}


// Create three plan objects
let tobitate = new Plan('Tobitate', 13000, 15000, true);
let ibp = new Plan('IBP', 14000, 13000, true);
let exchange = new Plan('Exchange', 14000, 0, false);


//update the html for the page
let details1 = tobitate.name + ' cost (housing and tuition): ';
    details1 += tobitate.totalCost();
    details1 += ", Scholarships: " + tobitate.scholarships;
let elPlan1 = document.getElementById('plan1');
elPlan1.textContent = details1;

let details2 = ibp.name + ' cost (housing and tuition): ';
    details2 += ibp.totalCost();
    details2 += ", Scholarships: " + ibp.scholarships;
let elPlan2 = document.getElementById('plan2');
elPlan2.textContent = details2;

let details3 = exchange.name + ' cost (housing and tuition): ';
    details3 += exchange.totalCost();
    details3 += ", Scholarships: " + exchange.scholarships;
let elPlan3 = document.getElementById('plan3');
elPlan3.textContent = details3;
