////////////////////////////////////////////////////////////////////////////////////
// MY DATA MODEL 
////////////////////////////////////////////////////////////////////////////////////
class Media {


  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.yearPublish = year;
  }

  // we define a method in the Media class
  render() {
    let msg = `
       <div class="">
          <p><i> media id: ${this.id} </i></p>
          <h3>title: ${this.title}</h3>
          <p>by ${this.author}, ${this.yearPublish}</p>
          <p>Type: ${this.constructor.name}</p> 
      </div>
      `;
    return msg;
  }

  renderSmall() {
    let msg = `${this.title}, `; 
    return msg;
  }

}

class CD extends Media {
  // new constructor
  constructor(id, title, author, year, duration) {
    super(id, title, author, year); //  calling parent constructor
    this.duration = duration;
  }

  // overwrite parent class method
  render() {
    let msg = `
         <div class="cd-background">
            <p><i> <b>CD</b> id: ${this.id} </i></p>
            <p>by ${this.author}, ${this.yearPublish}</p>
            <h3>title: ${this.title}</h3> 
            <p>duration: ${this.duration}</p>
        </div>
        `;
    return msg;

  }
}

class DVD extends Media {
  // new constructor
  constructor(id, title, author, year, duration) {
    super(id, title, author, year); // calling parent constructor
    this.duration = duration;
  }

  // overwrite parent class method
  render() {
    let msg = `
         <div class="dvd-background">
            <p><i>id: ${this.id} </i></p>
            <p>by ${this.author}, ${this.yearPublish}</p>
            <h3>title: ${this.title}</h3>
            <p>Type is DVD, baby</p> 
        </div>
        `;
    return msg;

  }
}

class Book extends Media {
  // new constructor
  constructor(id, title, author, year, weight) {
    super(id, title, author, year); // calling parent constructor
    this.weight = weight;
  }

  // overwrite parent class method
  render() {
    let msg = `
         <div class="book-background">
            <p><i>id: ${this.id} </i></p>            
            <h3>title: ${this.title}</h3>

            <p>by ${this.author}, ${this.yearPublish}</p>

            <p>and this  book weights <b> ${this.weight} </b></p> 
        </div>
        `;
    return msg;

  }

}

var mediaCollection = [
  new DVD(1111, "The Pianist", "Roman Polansky", 2008, 1000),
  new Book(2222, "Lord of the Rings", "J.R.R.Tolkien", 1954, "3.5kg"),  
  new CD(3333, "New Eyes", "Clean Bandit", 2017, 3000),
  new Book(4444, "The Hobbit", "J.R.R.Tolkien", 1937, "0.5kg"),  
  new CD(5555, "Divide", "Ed Sheeren", 2016, 5000),
  new Book(6666, "The Silmarillion", "J.R.R.Tolkien", 1977, "0.5kg"), 
  new Book(7777, "The Martian", "Andy Weir", 2011, "0.75kg"), 
  new DVD(8888, "Lawrence of Arabia", "T.E.Lawrence", 2017),

];

////////////////////////////////////////////////////////////////////////////////////
// MY VIEW MODEL
////////////////////////////////////////////////////////////////////////////////////
function showBigList() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {
    bigList.innerHTML += mediaCollection[i].render();
  }
}

function showSmallList() {
  let smallList = document.getElementById("smallList");
  let html = '';
  for (let i = 0; i < mediaCollection.length; i++) {
    html += mediaCollection[i].renderSmall();
  }
  smallList.innerHTML = html; // TODO remove trailing ","

}

function showOnlyBooks() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {

    if (mediaCollection[i].constructor.name == "Book") {
    bigList.innerHTML += mediaCollection[i].render();
    }
  }
}

function showOnlyBooksOfTolkien() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {

    if (mediaCollection[i].constructor.name == "Book" && 
      mediaCollection[i].author === 'J.R.R.Tolkien') {

      bigList.innerHTML += mediaCollection[i].render();
    }

  }
}


function showMediaPublishedAfter2000() {
  let bigList = document.getElementById("bigList");
  for (let i = 0; i < mediaCollection.length; i++) {

    if (mediaCollection[i].yearPublish > 2000) {

      bigList.innerHTML += mediaCollection[i].render();
    }

  }
}

