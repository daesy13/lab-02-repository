'use strict'

function Creatures(image_url, title, description, keyword, horns){
  this.image_url=image_url;
  this.title=title;
  this.description=description;
  this.keyword=keyword;
  this.horns=horns;
}

Creatures.prototype.renderingWithJQuery = function(){
  $('#photo-template').append(`
    <div class="${this.keyword}">
      <h2>${this.title}</h2>
      <img src="${this.image_url}"></img>
      <p>${this.description}</p>
    </div>`
  )
}

$.get('../data/page-1.json').then(
  (data) => {
    console.log(data);
    data.forEach(creatureObjFromFile => {
      let creature = new Creatures( creatureObjFromFile.image_url,creatureObjFromFile.title, creatureObjFromFile.description, creatureObjFromFile.keyword, creatureObjFromFile.horns);
      creature.renderingWithJQuery();
    })
  }
)




// let dropdown = $('keyword-dropdown');

// dropdown.empty();


// const url = '../data/page-1.json';

// $.getJSON(url, function (data) {
//   $.each(data, function (key, entry) {
//     dropdown.append($('<option></option>').attr('value', this.keyword).text(this.keyword));
//   })
// });

$(document).ready(function(){
  // $("#keyword-dropdown").select2();
  $('#but_read').click(function() {
    let $animal = $('#keyword-dropdown option:selected').text();

    $('#result').html('animal: ' + $animal)
    // $('div').each(function(value){

    // })
    $('div').hide();
    // $('div class=this.keyword').show();
    $(`div[class="${$animal}"]`).show();
    console.log(`div[class="${$animal}"]`);
    // if ($(this).keyword !== animal)
    //   $(this).hide();

    // if ($(this).keyword === animal)
    //   $(this).show();
  });
});


