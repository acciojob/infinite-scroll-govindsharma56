//your code here!
let infinite=document.querySelector('#infi-list');
let count=0
 for(let i=1;i<=10;i++){
	 let li=document.createElement('li');
	   li.textContent=`Item ${i}`
	 infinite.appendChild(li);
	 count=i+1;
}
infinite.addEventListener('scroll',()=>{
	  if (infinite.scrollTop + infinite.clientHeight >=
    infinite.scrollHeight - 5
  )
	  {
		   for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    infinite.appendChild(li);
  }
}
})
 

