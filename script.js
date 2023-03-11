const quotes=[
    {
        quote:"the pessimist Sees Difficulty ,in every Opportunity.the optimist Sees opportuniy in every Difficulty",
        author:"varnika poswal"
    },

    {
        quote:"if you are working on something that you really care about,you dont have to be pushed,the vision pulls you",
        author:"~steve jobs"
    },
    {
        quote:"god save me my friends.i can protect myself from my enemies.",
        author:"~claude louis hector de villars"
    },

    {
        quote:"people who are crazy Enough to think they can change the world,Are the ones who Do",
        author:"~rob Siltaen"
    },

    {
        quote:"Failuere will never Overtake me if my determinatio to succeed is strong Enough",
        author:"~Og mandino"
    },
    {
        quote:"dont let yesterday take up too much of today",
        author:"~will Rogers"
    }
];
const btn=document.getElementById("generatequote");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length);
   // console.log(quotes.length);
    console.log(random);
    let generate=quotes[random];
    quote.innerHTML=generate.quote;
    author.innerHTML=generate.author;
});