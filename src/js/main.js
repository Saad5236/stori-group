// Import our custom CSS
import "../scss/styles.scss"
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap"

// Home Our Services Tabs

const homeOurServices = document.querySelectorAll(".home-service")
homeOurServices.forEach((service) => {
  service.addEventListener("click", (e) => {
    homeOurServices.forEach((ourService) => {
      ourService.classList.remove("active")
    })
    service.classList.add("active")
  })
})

// LOAD MORE FUNCTIONALITY SHORT SOCIAL MEDIA POSTS

const shortSocialMediaPosts = document.querySelectorAll(
  ".portfolio-short-social-media-card.d-none"
)
const shortSocialMediaMoreBtn = document.querySelector(".short-social-media-more-btn")

for(let i=0; i<3; i++) {
  shortSocialMediaPosts[i].classList.remove("d-none")
  shortSocialMediaPosts[i].classList.add("d-block")
}

shortSocialMediaMoreBtn.addEventListener("click", (e) => {
  const remainingShortSocialMediaPosts = document.querySelectorAll(
    ".portfolio-short-social-media-card.d-none"
  ) 

  for(let i=0; i<3; i++) {
    if(!remainingShortSocialMediaPosts[i]) {
      shortSocialMediaMoreBtn.classList.add("d-none")
      document.querySelector(".short-social-media-no-content").classList.remove("d-none")
      return
    }
    remainingShortSocialMediaPosts[i].classList.remove("d-none")
    remainingShortSocialMediaPosts[i].classList.add("d-block")
  }
})

// LOAD MORE FUNCTIONALITY LONG SOCIAL MEDIA POSTS

const longSocialMediaPosts = document.querySelectorAll(
  ".portfolio-long-social-media-card.d-none"
)
const longSocialMediaMoreBtn = document.querySelector(".long-social-media-more-btn")

for(let i=0; i<3; i++) {
  longSocialMediaPosts[i].classList.remove("d-none")
  longSocialMediaPosts[i].classList.add("d-block")
}

longSocialMediaMoreBtn.addEventListener("click", (e) => {
  const remainingLongSocialMediaPosts = document.querySelectorAll(
    ".portfolio-long-social-media-card.d-none"
  ) 

  for(let i=0; i<3; i++) {
    if(!remainingLongSocialMediaPosts[i]) {
      longSocialMediaMoreBtn.classList.add("d-none")
      document.querySelector(".long-social-media-no-content").classList.remove("d-none")
      return
    }
    remainingLongSocialMediaPosts[i].classList.remove("d-none")
    remainingLongSocialMediaPosts[i].classList.add("d-block")
  }
})