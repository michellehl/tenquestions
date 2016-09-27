//create global variables
//var count = 0
var i=0
var correct//what the user chose 
var ans // the answer and description
var a //the letter to the answer
var Question//object
var q1
var q2
var amtRight=0
var checked=false
var music=true
//var picked = new boolean(true);
//create function to make sure the document or page is ready to begin
$ (document).ready(function() {  
  $("input[name='Group']").hide();
  $("#check").hide();
  $("#next").hide();
  $(".music").hide();
  $("#start").show();
  $("h1").show();
//function to execute the form once the submit button has been used
    $("form").on("submit", function(event) {
      $("#check").show();
      $("#next").show();
      $(".music").show();
$("#start").hide();
$("h1").hide();
    $("input[name='Group']").show();
      //prevents the default action from happening?
        event.preventDefault();
        playGoT();
      getQuestionNo(); 
  $("a.new").html("");
   $("#next").attr('disabled', true);    
        }) 
  // $("#start").click(function(){ 
function getQuestionNo(){
 i++
      // alert(i +"the number in the loop");
  getQuestion(i);        
  
  
}
function getQuestion(i){
 // alert(i + " the number of the question");
    Question = {
          a:"",
          b:"",
          c:"",
          d:""
        }
        if (i==1){
        
         q1 = Object.create(Question);
        q1.questions = "1. Who is the mother of dragons?";
      q1.a = "a) Cersi";
      q1.b = "b) Arya";
      q1.c = "c) Sansa";
      q1.d = "d) Daenerys";
      q1.answer = "d";
      a = q1.answer;
      ans = q1.d;
  
      $(".questions").html(q1.questions);
     $("#a").html(q1.a);
     $("#b").html(q1.b);
     $("#c").html(q1.c);
     $("#d").html(q1.d);
    // $('.box').css('background-image','url("dani.jpg")');
   // $(".box").attr( background-image: url("dani.jpg"))
  //getChoice();
    // getAnswer(a);

                }
       if (i==2){
        q2 = Object.create(Question);
       q2.questions = "2. How was Robert Baratheon killed?";
      q2.a = "a) Poisoned by Cersi";
      q2.b = "b) Stabbed by Ned";
      q2.c = "c) Skewered by a boar";
      q2.d = "d) Died of natural causes";
      q2.answer = "c";
      a = q2.answer;
      ans = q2.c;
   
       $(".questions").html(q2.questions);
     $("#a").html(q2.a);
     $("#b").html(q2.b);
     $("#c").html(q2.c);
     $("#d").html(q2.d);
        
}
else if (i==3){
      var q3 = Object.create(Question);
      q3.questions = "3. Which character had molten gold poured over his head?";
      q3.a = "a) Viserys Targaryen";
      q3.b = "b) Ned Stark";
      q3.c = "c) Khal Drogo";
      q3.d = "d) Jaime Lannister";
      q3.answer = "a";
       a = q3.answer;
      ans = q3.a;
  
      $(".questions").html(q3.questions);
     $("#a").html(q3.a);
     $("#b").html(q3.b);
     $("#c").html(q3.c);
     $("#d").html(q3.d);
    }
     else if (i==4){
      var q4 = Object.create(Question);
      q4.questions = "4. Who broke his promise to marry one of Walter Frey's daughters?";
      q4.a = "a) Loras Tyrell";
      q4.b = "b) Roose Bolton";
      q4.c = "c) Robb Stark";
      q4.d = "d) Sandor Clegane";
      q4.answer = "c";
       a = q4.answer;
      ans = q4.c;
  
      $(".questions").html(q4.questions);
     $("#a").html(q4.a);
     $("#b").html(q4.b);
     $("#c").html(q4.c);
     $("#d").html(q4.d);
    }
     else if (i==5){
      var q5 = Object.create(Question);
      q5.questions = "5. Who tortured Theon Greyjoy?";
      q5.a = "a) Jon Snow";
      q5.b = "b) Edmure Tully";
      q5.c = "c) Ned Stark";
      q5.d = "d) Ramsay Snow";
      q5.answer = "d";
       a = q5.answer;
      ans = q5.d;
  
      $(".questions").html(q5.questions);
     $("#a").html(q5.a);
     $("#b").html(q5.b);
     $("#c").html(q5.c);
     $("#d").html(q5.d);
    }
     else if (i==6){
      var q6 = Object.create(Question);
      q6.questions = "6. Who was Sansa Stark engaged to first?";
      q6.a = "a) Tyrion Lannister";
      q6.b = "b) Ramsay Bolton";
      q6.c = "c) Loras Tyrell";
      q6.d = "d) Joffrey Baratheon";
      q6.answer = "d";
       a = q6.answer;
      ans = q6.d;
  
      $(".questions").html(q6.questions);
     $("#a").html(q6.a);
     $("#b").html(q6.b);
     $("#c").html(q6.c);
     $("#d").html(q6.d);
    }
     else if (i==7){
      var q7 = Object.create(Question);
      q7.questions = "7. What is the name of the castrated slaves trained from childhood to be warriors?";
      q7.a = "a) The Golden Company";
      q7.b = "b) Second Sons";
      q7.c = "c) Unsullied";
      q7.d = "d) Brave Companions";
      q7.answer = "c";
       a = q7.answer;
      ans = q7.c;
  
      $(".questions").html(q7.questions);
     $("#a").html(q7.a);
     $("#b").html(q7.b);
     $("#c").html(q7.c);
     $("#d").html(q7.d);
    } 
    else if (i==8){
      var q8 = Object.create(Question);
      q8.questions = "8. What did Jon Snow join?";
      q8.a = "a) The Night's Watch";
      q8.b = "b) Brave Companions";
      q8.c = "c) Knights Guard";
      q8.d = "d) Knights of the Vale";
      q8.answer = "a";
       a = q8.answer;
      ans = q8.a;
  
      $(".questions").html(q8.questions);
     $("#a").html(q8.a);
     $("#b").html(q8.b);
     $("#c").html(q8.c);
     $("#d").html(q8.d);
    } 
    else if (i==9){
      var q9 = Object.create(Question);
      q9.questions = "9. What was Mance Rader's title?";
      q9.a = "a) Prince of the Free Folk";
      q9.b = "b) King Beyond The Wall";
      q9.c = "c) Commander of the Night's Watch";
      q9.d = "d) King of the North";
      q9.answer = "b";
       a = q9.answer;
      ans = q9.b;
  
      $(".questions").html(q9.questions);
     $("#a").html(q9.a);
     $("#b").html(q9.b);
     $("#c").html(q9.c);
     $("#d").html(q9.d);
    } 
    else if (i==10){
      var q10 = Object.create(Question);
      q10.questions = "10. What did Arya Stark name her sword?";
      q10.a = "a) Heartsbane";
      q10.b = "b) Ice";
      q10.c = "c) Oathkeeper";
      q10.d = "d) Needle";
      q10.answer = "d";
       a = q10.answer;
      ans = q10.d;
  
      $(".questions").html(q10.questions);
     $("#a").html(q10.a);
     $("#b").html(q10.b);
     $("#c").html(q10.c);
     $("#d").html(q10.d);
          }
    }

$("#check").click(function(event){
  event.preventDefault();
$("#start").attr('disabled', true);
   if  (document.getElementById("r1").checked && (correct = document.getElementById("r1").value)) {
 checked = true;
 }
  if (document.getElementById("r2").checked && (correct = document.getElementById("r2").value)){
checked = true;
  }
  if (document.getElementById("r3").checked && (correct = document.getElementById("r3").value)){
   checked = true;
  }
  if (document.getElementById("r4").checked && (correct = document.getElementById("r4").value)){
 checked = true;
  }

if(checked == false){
  alert("you must answer");
}
 else if(correct == a){
 
    $("#correct").html("You are correct");
   amtRight++
$("#amtright").html("You have " + amtRight + " correct out of " + i);
$("#answer").html("The answer is " + ans);
radioStatus();
getImage();    

  }
  else {
 
    $("#correct").html("You are not correct");
    $("#amtright").html("You have " + amtRight + " correct out of " + i);
    $("#answer").html("The answer is " + ans);
    radioStatus();
    getImage();    

}
if (i==10){
  endofGame();
 
}




})
function getImage(){
  if(i==1){
    $('.box').css('background-image','url("dani.jpg")');
   // $('.box').css('background-color','rgba(255,0,0,0.9)');
     }else if (i==2){
      $('.box').css('background-image','url("robertB.jpg")');
     } else if (i==3){
      $('.box').css('background-image','url("goldcrown.jpg")');
     } else if (i==4){
      $('.box').css('background-image','url("robb.jpg")');
     } else if (i==5){
      $('.box').css('background-image','url("theon.jpg")');
     } else if (i==6){
      $('.box').css('background-image','url("joffrey.jpg")');
     } else if (i==7){
      $('.box').css('background-image','url("unsullied.jpg")');
     } else if (i==8){
      $('.box').css('background-image','url("jon.jpg")');
     } else if (i==9){
      $('.box').css('background-image','url("mance.jpg")');
    }else if (i==10){
      $('.box').css('background-image','url("arya.jpg")');
    }

}
//function radioStatus takes each button in the group and makes them enabled and unchecked
function radioStatus(){
 

    $("input[name='Group']").each(function(){
    $(this).attr('disabled', 'disabled');
$("input[name='Group']").attr('checked',false);
   $("#next").attr('disabled', false);
   $("#check").attr('disabled', true);
   checked = false;
 })
  
 // }
}
//function radioClear takes each button in the group and makes them enabled
function radioClear(){
   $("input[name='Group']").each(function(){
   
$("input[name='Group']").attr('disabled',false);
$("#next").attr('disabled', false);
$("#check").attr('disabled', false);
   $("#correct").html("");
     $("#answer").html("");

  });  
}
function clearGame(){
   $(".questions").html("");
     $("#a").html("");
     $("#b").html("");
     $("#c").html("");
     $("#d").html("");
     $("#correct").html("");
     $("#answer").html("");
     $("#check").attr('disabled', true);
     $("#next").attr('disabled', true);
     i==0;
    
}
//refreshes page to start game over
$("a.new").click(function() {
location.reload();
  })
$("a.music").click(function(){
if (music == true){
  $('#GoT-sound')[0].pause();
  music = false;
  }
  else {
    $('#GoT-sound')[0].play();
    music = true;
  }
 
  

})
//when the button next is clicked it calls the radioClear function, checks to see if 
//the number of questions is ten and then tells the user the game is over but if not ten
//then it calls the function getQuestionNo
 $("#next").click(function(event) {
   event.preventDefault();
   radioClear();
 $("#next").attr('disabled', true);

 $('.box').css('background-image','url(" ")');
 
getQuestionNo();



}) 
 function endofGame(){

  $("input[name='Group']").hide();
  $("#answer").html("The game is over, press New Game to begin again");
 $("a.new").html("New Game?");
 $("#start").hide();
 $("#check").hide();
 $("#next").hide();

clearGame();
 }
function playGoT() {
  $('#GoT-sound')[0].volume = 0.5;
  $('#GoT-sound')[0].load();
  $('#GoT-sound')[0].play();
} 

  
   
   });
     




