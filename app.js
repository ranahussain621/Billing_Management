
let total=[];
let array=[];
let j=0;
let arr=[
   {
       img:'images/biryani.jpg',
       name: 'Biryani',
       price:"250"
   },
   {
       img:'images/pulao.jpg',
       name: 'Pulao',
       price:"200"
   },
   {
       img:'images/chicken-Paratha1.jpg',
       name: 'Chicken Paratha',
       price:"180"
   },
   {
       img:'images/kabab.jpg',
       name: 'Chapli Kabab',
       price:"100"
   },
  

]

/////////////////////////////  WELCOME TO RESTAURANT WALA DIV  /////////////////////////////////////////
let thirdDiv=document.createElement('div');
thirdDiv.style.border="1px solid grey";
thirdDiv.style.height="70px";
thirdDiv.style.margin="20px";
thirdDiv.style.paddingTop='45px'
thirdDiv.style.backgroundColor='rgb(194, 224, 194)';

//////////////////////////// WELCOME DA CODE ////////////////////////////////////////////
let forText=document.createElement("text");
let marquee = document.createElement('marquee')
forText.innerText="Welcome to the Resturant Portal";
forText.style.fontFamily="Helvetica";
forText.style.fontSize="30px";
forText.style.color="green";
forText.style.marginLeft="450px";
marquee.appendChild(forText)
/////////////////////////////  DETAIL WALA DIV  /////////////////////////////////////////
let secondDiv=document.createElement('div');
secondDiv.style.border="1px solid grey";
secondDiv.style.height="343px";
secondDiv.style.margin="20px";
secondDiv.className="secondDIV";
secondDiv.style.backgroundColor='rgb(194, 224, 194)';



//////////////////////////  APPEND /////////////////////////////////////////////////////       
thirdDiv.appendChild(forText);

mainDiv.appendChild(thirdDiv);
mainDiv.appendChild(secondDiv);



///////////////////////////  ARRAY TY WORKING ////////////////////////////////////////////
arr.forEach((news, i) => {

/////////////////////////// AD DIV  //////////////////////////////////////////////////////            


let adDiv=document.createElement("div")
adDiv.style.border="1px solid grey"
adDiv.style.height="290px"
adDiv.style.width='268px'
adDiv.style.margin="20px"


//////////////////////// IMAGE DA CODE  //////////////////////////////////////////////////


let adImg=document.createElement('img')
   adImg.src=news.img;
//    adImg.style.border="1px solid yellow"
  adImg.style.width='265px'
  adImg.style.textAlign='center'
   adImg.style.height="205px"
//    adImg.style.margin="20px"
// adImg.style.paddingTop='10px'


////////////////////////// PRICE DA CODE  //////////////////////////////////////////////


   let adPrice=document.createElement('text')
   adPrice.style.fontSize='17px'
   adPrice.style.fontFamily="Helvetica"
   adPrice.style.fontWeight='bold'
   adPrice.innerText=news.name
   adPrice.className="nameOfDish"



////////////////////////  BREAK  ///////////////////////////////////////////////////////

   let break3=document.createElement('br')
  
//////////////////////////  NAME WASTY CODE  ///////////////////////////////////////////


   let adName=document.createElement('text')
   adName.innerText='Price : '+news.price
   adName.style.fontSize='17px'
   adName.style.fontFamily="sans"
   adName.style.height='37px'
   adName.style.fontWeight='bold'

   // let adCheckbox=document.createElement("checkBox")
   // adCheckbox.style.boxSizing='40px'


////////////////////////  BREAK  ///////////////////////////////////////////////////////


   let break2=document.createElement("br")


////////////////////////  QUANTITY DA CODE  ///////////////////////////////////////////////////////


   let adQuantityLabel=document.createElement('text')
   adQuantityLabel.innerText="Enter Quantity : "
   adQuantityLabel.style.fontFamily="Times"
   adQuantityLabel.style.fontSize="18px"
   
////////////////////////  INPUT  ///////////////////////////////////////////////////////
   let adQuantity=document.createElement('input')
   adQuantity.className="quantatityOFDish"
   adQuantity.placeholder="0"


////////////////////////  SUBMITT DA CODE  ///////////////////////////////////////////////////////
   

   let btnSubmitt = document.createElement('button')
   btnSubmitt.style.width='94.5px'
   btnSubmitt.style.height='20px'
   btnSubmitt.style.background='lightgreen'
   btnSubmitt.innerText='Submitt'
   btnSubmitt.onclick= (e)=>{
       
       total[j]=adQuantity.value*news.price;
       // 
       j+=1;
       let obj1={}
       obj1["name"]=news.name
       obj1["price"]=news.price
       obj1["quantity"]=adQuantity.value
       // obj1["name"]=news.name
   
       array.push(obj1)

      

       
   }


  
////////////////////////////// APPEND  //////////////////////////////////////////////////  
  
secondDiv.appendChild(adDiv)
adDiv.appendChild(adImg);
adDiv.appendChild(adPrice);
adDiv.appendChild(break3);
adDiv.appendChild(adName);
adDiv.appendChild(break2);
adDiv.appendChild(adQuantityLabel);
adDiv.appendChild(adQuantity);
adDiv.appendChild(btnSubmitt);

});

////////////////////////  FOOTER WALA DIV  ////////////////////////////////////////////////


let lastDiv =document.createElement('div')
lastDiv.style.border="1px solid grey"
// lastDiv.style.height="230px"
lastDiv.style.margin="20px"
lastDiv.style.backgroundColor='rgb(194, 224, 194)'


let creatingTable = document.createElement('table');
creatingTable.style.width="600px"

creatingTable.style.marginLeft="750px"



let item=document.createElement('th')

let item1=document.createElement('th')
let item2=document.createElement('th')



let nameTable= document.createElement('tr')
nameTable.innerText="Name"

let nameTable2= document.createElement('tr')
nameTable2.innerText="Net Price"

let nameTable3= document.createElement('tr')
nameTable3.innerText="Quantatity"




let totlll=0;

let detailKeLye = document.createElement('button')
detailKeLye.style.width='120px'
   detailKeLye.style.marginLeft="50px"
   detailKeLye.style.height='40px'
//    detailKeLye.style.marginBottom='80px';
   detailKeLye.innerText='Details'
   detailKeLye.onclick=(e)=>{
       array.forEach((lines)=> {


       let nameeeee=document.createElement("tr")
       nameeeee.innerText=lines.name


       let name12=document.createElement("tr")
       name12.innerText=lines.price


       let name001=document.createElement("tr")
       name001.innerText=lines.quantity


       item.appendChild(nameeeee);
       item1.appendChild(name12);
       item2.appendChild(name001);
       }); 
   }
////////////////////////// GENERATE DA BUTTON  ////////////////////////////////////////////
let btnTotal = document.createElement('button')
   btnTotal.style.width='120px'
//    btnTotal.style.marginTop="50px"
   btnTotal.style.height='40px'
   btnTotal.innerText='Generate Bill'
   btnTotal.onclick= (e)=>{
       total.forEach((indexxx,m) => {
           totlll+=indexxx 

     

       });
let grossBill=0;
       let totalBill=document.createElement('text')
       totalBill.style.fontSize='30px'
       totalBill.style.border="1px solid grey"
       totalBill.style.marginLeft='30px'
       totalBill.innerText= "Net Price : Rs. "+totlll 

      
       let grossPrice=document.createElement('text')
      grossPrice.style.fontSize='30px'
      grossPrice.style.border="1px solid grey"
       grossPrice.style.marginLeft='30px'
       grossPrice.innerText= '0' 
       if(totlll<1200)
       {
           grossBill=totlll
       grossPrice.innerText='Gross Price : Rs.' +grossBill
       }
       else
       {
           grossBill=totlll +((totlll*10)/100)
           grossPrice.innerText='Gross Price : Rs.' +grossBill
           
       }

       let discount=document.createElement('text')
       discount.style.fontSize='30px'
       discount.style.border="1px solid grey"
       discount.style.marginLeft='30px'
      
       if(totlll<1200)
       {
       discount.innerText='After 5% discount : Rs.' +(grossBill-((grossBill*5)/100))
       }
       else
       {
           
           discount.innerText='After 10% discount : Rs.' +(grossBill-((grossBill*10)/100))
           
       }



       
       lastDiv.appendChild(grossPrice)

       lastDiv.appendChild(totalBill)

       lastDiv.appendChild(discount)
   }


   mainDiv.appendChild(lastDiv)
   
   lastDiv.appendChild(creatingTable)
   
   lastDiv.appendChild(btnTotal)
   lastDiv.appendChild(detailKeLye)
   creatingTable.appendChild(item);
creatingTable.appendChild(item1);
creatingTable.appendChild(item2);


item.appendChild(nameTable);
item1.appendChild(nameTable2);
item2.appendChild(nameTable3);

  
