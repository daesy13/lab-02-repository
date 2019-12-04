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
    <div>
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
      let creature = new Creatures( creatureObjFromFile.image_url,creatureObjFromFile.title, creatureObjFromFile.description);
      creature.renderingWithJQuery();
    })
  }
)