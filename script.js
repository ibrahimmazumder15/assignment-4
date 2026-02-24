let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let  interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-btn')
const interviewFilterBtn = document.getElementById('interview-btn')
const rejectedFilterBtn = document.getElementById('rejected-btn')


const jobsCardSection = document.getElementById('jobsCard');
console.log(jobsCardSection.children.length); 

const mainContainer = document.querySelector('main')
console.log(mainContainer)

function calculateCount (){
     total.innerText = jobsCardSection.children.length
     interview.innerText = interviewList.length
     rejected.innerText = rejectedList.length
}

calculateCount()

function toggleStyle(id){
     console.log("click",id);
     allFilterBtn.classList.remove('bg-[#3B82F6]');
     interviewFilterBtn.classList.remove('bg-[#3B82F6]');
     rejectedFilterBtn.classList.remove('bg-[#3B82F6]');

     allFilterBtn.classList.add('bg-base-100');
     interviewFilterBtn.classList.add('bg-base-100');
     rejectedFilterBtn.classList.add('bg-base-100');

     const selected = document.getElementById(id);
     console.log(selected);
     selected.classList.add('bg-[#3B82F6]')
}

mainContainer.addEventListener('click', function(even){
   const parentNode = even.target.parentNode.parentNode;
   const jobsName = parentNode.querySelector('.badge').innerText
   
   const cardInfo ={
     jobsName,
   }
   

   const jobExist = interviewList.find(item=> item.jobsName == cardInfo.jobsName)

   if(!jobExist){
     interviewList.push(cardInfo);
   }
   
console.log(interviewList)


   

   
});
