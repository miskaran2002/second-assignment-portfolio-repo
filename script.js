
// subcribe container start
function handlecontact(event){
    event.preventDefault();
    const email=event.target.email.value;
   

    
    console.log(email);
    const successcontainer=document.getElementById("success-container");
    console.log(successcontainer);
   
    const emailparagraph=document.createElement("p");
    emailparagraph.innerText=`your email:${email}`;
    
    
    console.log(emailparagraph);
    successcontainer.appendChild(emailparagraph);
    
    

}
// subcribe container end
// product start

 const imageArray=[
   {
        url:"image/main/Green Salad.png",
   },

    {
       url:"image/main/Enchilade.png",
   },
   {
        url:"image/main/Green Beans.png",
    },
   {
        url:"image/main/Pizza.png",
        
    },
   {
        url:"image/main/Chicken Pot Pie.png",
    },
   {
        url:"image/main/Green Salad.png",
    },
   
    
    
];

 function handleShowMoreProject(){   
 const projectContainer=document.getElementById("items");   
 for (const item of imageArray) {    

     const itemsDivImage=document.createElement("div");
        itemsDivImage.classList.add("item");
        itemsDivImage.innerHTML= 
        `<img src="${item.url}" alt"">
         `;
        projectContainer.appendChild(itemsDivImage);  
    }   
}
//product end
