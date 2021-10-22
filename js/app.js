const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ]

let current = 0  
function load(reviews,current) {
const image = document.querySelector(".review__img--person")
const name = document.querySelector(".review__author")
const job = document.querySelector(".review__job")
const text = document.querySelector(".review__info")
image.src = reviews[current].img
name.innerText = reviews[current].name
job.innerText = reviews[current].job
text.innerText = reviews[current].text

}

window.addEventListener("DOMContentLoaded", (event) => {
  load(reviews,current)
});

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const rand = document.querySelector(".random")

next.addEventListener("click", (event) =>{
  current++;
  if(current > reviews.length -1){
    current = 0
  }
  
    load(reviews,current)
    
  
})

prev.addEventListener("click", (event) =>{
  
  current--;
  if(current < 0){
    current = reviews.length - 1
  }
  
    load(reviews,current)
  
   
})

rand.addEventListener("click", (event) =>{
  current = Math.floor((reviews.length ) * Math.random())
  console.log(current)
  load(reviews,current)
})


