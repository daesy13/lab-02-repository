'use strict'

const creaturesList = [];
const creatureTemplate = Handlebars.compile($('#photo-template').html());

function Creatures(creatureIsObject){
  this.image_url=creatureIsObject.image_url;
  this.title=creatureIsObject.title;
  this.description=creatureIsObject.description;
  this.keyword=creatureIsObject.keyword;
  this.horns=creatureIsObject.horns;
}

Creatures.prototype.renderingWithHandlebars = function(){
  // $('#photo-template').append(`
  //   <div class="${this.keyword}">
  //     <h2>${this.title}</h2>
  //     <img src="${this.image_url}"></img>
  //     <p>${this.description}</p>
  //   </div>`
  // )
  const myHtml = creatureTemplate(this);
  console.log(myHtml);
  $('#photo-template').append(myHtml);
};

// $.get('../data/page-1.json').then(
//   (data) => {
//     console.log(data);
//     data.forEach(creatureObjFromFile => {
//       let creature = new Creatures( creatureObjFromFile.image_url,creatureObjFromFile.title, creatureObjFromFile.description, creatureObjFromFile.keyword, creatureObjFromFile.horns);
//       creature.renderingWithJQuery();
//     })
//   }
// )

creatureDataSetOne.forEach(creatureObject => {
  creaturesList.push(new Creatures(creatureObject))
})

creaturesList.forEach(creatureRender => {
  creatureRender.renderingWithHandlebars();
});


$(document).ready(function(){
  $('#but_read').click(function() {
    let $animal = $('#keyword-dropdown option:selected').text();
    $('#result').html('animal: ' + $animal)
    $('div').hide();
    $(`div[class="${$animal}"]`).show();
    console.log(`div[class="${$animal}"]`);
  });
});

// PAGE 2 EVENT LISTENER

$(document).ready(function(){
  $('#page_button').click(function() {
    $('div').hide();
    $.get('../data/page-2.json').then(
      (data) => {
        data.forEach(creatureObjFromFile => {
          let creature = new Creatures( creatureObjFromFile.image_url,creatureObjFromFile.title, creatureObjFromFile.description, creatureObjFromFile.keyword, creatureObjFromFile.horns);
          creature.renderingWithJQuery();
        })
      }
    )
  });
});


