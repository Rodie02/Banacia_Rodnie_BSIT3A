const corporation = {
    name: "Food",
    location: "Biringan"
};

const owner = {
    name: "Drake",
    age: 20
};

let income = 100000;
let productsCount = 20;
let branches = 9;

const customer = ["Diana", "Yane", "Maye"];
const age = [20, 21, 35];
const favoriteFood = ["Chicken", "Ice Cream", "Matcha"];
const customerWants = ["Burger", "Milk Tea", "Fries"];
const foodRating = [9, 8, 5];

class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    introduce() {
        console.log("My name is " + this.name);
    }
}

class Customer1 extends Person {
    constructor(name, age, food, want, rating) {
        super(name, age);
        this.food = food;
        this.want = want;
        this.rating = rating;
    }

    eat() {
        console.log(this.name + " is eating " + this.food + ".");
    }

    introduce() {
        console.log(
            "I am " + this.name +
            ". My favorite food is " + this.food +
            " and I want " + this.want + "."
        );
    }
}

class Customer2 extends Person {
    constructor(name, age, food, want, rating) {
        super(name, age);
        this.food = food;
        this.want = want;
        this.rating = rating;
    }

    preference() {
        console.log(
            this.name +
            " wants " + this.want +
            " and likes " + this.food + "."
        );
    }

    introduce() {
        console.log(
            "I am " + this.name +
            ". I want " + this.want +
            " and my favorite food is " + this.food + "."
        );
    }

    eat() {
        console.log(this.name + " is eating " + this.food + ".");
    }
}

class MonitoringSystem {
    customerInfo() {
        console.log("Customers: " + customer.join(", "));
        console.log("Favorite Food: " + favoriteFood.join(", "));
        console.log("What They Want: " + customerWants.join(", "));
        console.log("Food Ratings: " + foodRating.join(", "));
    }

    showFoodInfo() {
        console.log("Food: " + favoriteFood.join(", "));
        console.log("Preferences: " + customerWants.join(", "));
    }
}

const cost1 = new Customer1(
    "Diana",
    20,
    "Chicken",
    "Burger",
    9
);

const cost2 = new Customer2(
    "Yane",
    21,
    "Ice Cream",
    "Milk Tea",
    8
);

const cost3 = new Customer1(
    "Maye",
    35,
    "Matcha",
    "Fries",
    5
);

const owner1 = new Person(
    "Drake",
    20
);

const monitoring = new MonitoringSystem();

function getAge(person) {
    return person._age;
}

if (cost1.rating >= 7) {
    console.log(cost1.food + " passed with a rating of " + cost1.rating + "/10.");
} else {
    console.log(cost1.food + " failed with a rating of " + cost1.rating + "/10.");
}

if (cost2.rating >= 7) {
    console.log(cost2.food + " passed with a rating of " + cost2.rating + "/10.");
} else {
    console.log(cost2.food + " failed with a rating of " + cost2.rating + "/10.");
}

if (cost3.rating >= 7) {
    console.log(cost3.food + " passed with a rating of " + cost3.rating + "/10.");
} else {
    console.log(cost3.food + " failed with a rating of " + cost3.rating + "/10.");
}

for (let i = 0; i < customer.length; i++) {
    console.log("Customer: " + customer[i]);
}

age.forEach(function(currentAge) {
    console.log("Age: " + currentAge);
});

for (const food of favoriteFood) {
    console.log("Favorite Food: " + food);
}

for (let i = 0; i < customer.length; i++) {
    console.log(
        customer[i] +
        " wants " +
        customerWants[i] +
        " and their favorite food is " +
        favoriteFood[i]
    );
}

cost1.introduce();
cost1.eat();

cost2.introduce();
cost2.eat();
cost2.preference();

cost3.introduce();
cost3.eat();

owner1.introduce();

monitoring.customerInfo();
monitoring.showFoodInfo();

console.log("Diana's age: " + getAge(cost1));

console.log("Corporation Object:", corporation);
console.log("Owner Object:", owner);

