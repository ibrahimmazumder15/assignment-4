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
const filterSection = document.getElementById('filtered-section')

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
     

   if(even.target.classList.contains('click-interview')){
     const parentNode = even.target.parentNode.parentNode;
   const jobsName = parentNode.querySelector('.badge')
   const cardInfo ={
     jobsName,
   }
   const jobExist = interviewList.find(item=> item.jobsName == cardInfo.jobsName)

   parentNode.querySelector('.badge').innerText = `Interview`


   if(!jobExist){
     interviewList.push(cardInfo);
   }

   renderInterview()
   }
     
});

function renderInterview(){
filterSection.innerHTML = ''

for(let interviews of interviewList){
     console.log(interviews)
    let div = document.createElement('div');

    div.className = `flex justify-between bg-base-100 shadow-sm rounded-lg`
    div.innerHTML = `<div class="p-[24px]">
                  <div>
                        <p class="font-bold">Mobile First Corp</p>
                        <p class="text-[#64748B]">React Native Developer</p>
                        <p class="text-[#64748B] py-5">Remote • Full-time • $130,000 - $175,000</p>
                  </div>

                  <p class="badge bg-[#EEF4FF] rounded-[4px] w-32 text-center py-2">Not Applied</p>
                  <p class=" text-[#64748B] pt-2">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                  <div class="pt-3 flex gap-2">
                        <button id="click-interview" class="border-[1.5px] text-[#10B981] rounded-[4px] py-2 px-3 font-bold">Interview</button>
                        <button id="click-rejected" class="border-[1.5px] text-[#EF4444] rounded-[4px] py-2 px-3 font-bold">Rejected</button>
                  </div>

            </div>

            <div class="p-[24px]"> 
                  <button class="btn-delete flex"><i class="fa-solid fa-trash-can"></i></button>
            </div>`
            filterSection.appendChild(div)

} 
}
