const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// get elements
const nameEl = document.getElementsByClassName("name")
const usernameEl = document.getElementsByClassName("username")
const locationEl = document.getElementsByClassName("location")
const likeEl = document.getElementsByClassName("like")
console.log(likeEl)
const commentEl = document.getElementsByClassName("comment")
const mainContentEl = document.querySelector(".main-content-container")
const imageDataEl = document.getElementsByClassName("image-data")

//first post
nameEl[0].innerText = posts[0].name
usernameEl[0].innerText = posts[0].username
locationEl[0].innerText = posts[0].location
imageDataEl[0].src=posts[0].avatar
imageDataEl[1].src = posts[0].post
likeEl[0].innerText =`${posts[0].likes} likes`
commentEl[0].innerText = posts[0].comment

//from second post onwards, clone the HTML nodes of the first post and replace the data
for (let i = 1; i < posts.length; i++) {
  const mainContentElClone = mainContentEl.cloneNode(true)
  document.querySelector('main').appendChild(mainContentElClone)
  nameEl[i].innerText = posts[i].name
  usernameEl[i].innerText = posts[i].username
  locationEl[i].innerText = posts[i].location
  imageDataEl[(2*i)].src=posts[i].avatar
  imageDataEl[(2*i+1)].src = posts[i].post
  likeEl[i].innerText =`${posts[i].likes} likes`
  commentEl[i].innerText = posts[i].comment
}
