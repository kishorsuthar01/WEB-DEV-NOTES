const { useReducer } = require("react")

document.addEventListener('DOMContentLoaded',function(){

    const searchbtn=document.getElementById('search-btn')
    const userinput=document.getElementById('input-user')
    const static=document.querySelector('.static-container')
    const easycircle=document.querySelector('.easy')
    const mediumcircle=document.querySelector('.medium')
    const hardcircle=document.querySelector('.hard')
     const rasylable=document.getElementById('easy-lable')
    const mediumulable=document.getElementById('medium-lable')
    const hardlable=document.getElementById('hard-lable')
})
  function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {

        try{
            searchbtn.textContent = "Searching...";
            searchbtn.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData);
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }}

searchbtn.addEventListener('click',function(){
    const username=userinput.value;
    console.log("username",username);
    if(validateUsername(username)){
        fetchUserDetails(username)
    }
})