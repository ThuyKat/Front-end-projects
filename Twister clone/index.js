import { tweetsData } from "./data.js";

//get element
const feedEl = document.getElementById("feed");

document.addEventListener("click", function (e) {
  if (e.target.dataset.replies) {
    handleReplyClick(e.target.dataset.replies);
  } else if (e.target.dataset.likes) {
    handleLikeClick(e.target.dataset.likes);
  } else if (e.target.dataset.share) {
    handleShareClick(e.target.dataset.share);
  }
});

function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];
  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
    document.getElementById(`likes-${tweetId}`).style.color = "black";
  } else {
    targetTweetObj.likes++;
    document.getElementById(`likes-${tweetId}`).style.color = "red";
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;

  render();
}

function handleShareClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];
  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--;
  } else {
    targetTweetObj.retweets++;
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;

  render();
}

function handleReplyClick(tweetId){
    document.getElementById(`replies-${tweetId}`).classList.toggle("hidden")

}

function render() {
  let feedHtml = "";
  tweetsData.forEach(function (tweet) {
    let replyHtml = "";
    if (tweet.replies.length > 0) {
      tweet.replies.forEach(function (reply) {
        replyHtml += `
            <div class='tweet-reply'>
                <img
                    src="images/logo.jpeg"
                    alt="profile photo of user"
                    class="profile-pic"
                />
                <div>
                    <p class="handler">${reply.handle}</p>
                    <p class="tweet-text">${reply.tweetText}</p>
                </div>
            </div>
            `;
      });
    }
    feedHtml += `
     <div class="tweet-container">
        <img
          src="images/logo.jpeg"
          alt="profile photo of user"
          class="profile-pic"
        />
        <div>
          <p class="handler">${tweet.handle}</p>
          <p class="tweet-text">${tweet.tweetText}</p>
          <div class="icon-group">
            <span>
              <i class="fa-regular fa-comment-dots" data-replies=${tweet.uuid}></i>
              ${tweet.replies.length}
            </span>
            <span>
              <i class="fa-solid fa-heart" data-likes=${tweet.uuid} id=likes-${tweet.uuid}></i>
              ${tweet.likes}
            </span>
            <span>
              <i class="fa-solid fa-retweet" data-share=${tweet.uuid}></i>
              ${tweet.retweets}
            </span>
          </div>
        </div>
      </div>
      <div class="hidden" id="replies-${tweet.uuid}">
      ${replyHtml}
      </div>
        `;
  });
  feedEl.innerHTML = feedHtml;
}
render();
