



function displayQuote(){

    var qouteList = [`“To live is the rarest thing in the world. Most people exist, that is all.” ` ,`“We accept the love we think we deserve.”` , `“So many books, so little time.”
` , `“A room without books is like a body without a soul.”` , `“Be the change that you wish to see in the world.”` , `“You only live once, but if you do it right, once is enough.”` , `“In three words I can sum up everything I've learned about life: it goes on.”` ];
    var authorList = ["― Oscar Wilde" ,"― Stephen Chbosky" , "― Frank Zappa" , "― Marcus Tullius Cicero" , "― Mahatma Gandhi" , "― Mae West" , "― Robert Frost" ]
 

    var x = Math.floor(Math.random()*6);
    
    for(var i = x ; i < qouteList.length ; i++)
    {
        for(var i = x ; i < authorList.length ; i++){
            document.getElementById("quotedDiplay").innerHTML = qouteList[x]; 
            document.getElementById("author").innerHTML = authorList[x]; 
           
        }
       
    }
  
    
}
   




