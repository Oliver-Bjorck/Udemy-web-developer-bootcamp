const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function(e) { //event delegation adds an event listener to the parent
    e.target.nodeName === 'LI' && e.target.remove(); //but affects the target of the event (in this case the parent is the ul but the targets are lis)
    //you can even ensure it only affects specific elements within the parent by using nodeName
})

//this means you can apply event listeners to elements that haven't been created yet