// import animations from "./targetOrder";
var animationsInit = [
    {name: "#target1",
    animation: {
            left: "300px",
            top: "-150px"
        } 
    },
    {name: "#target2",
    animation: {
            left: "1700px",
            top: "43px"
        } 
    },
    {name: "#target3",
    animation: {
            left: "-200px",
            top: "900px"
        } 
    },
    {name: "#target4",
    animation: {
            left: "1700px",
            top: "600px"
        } 
    },
    {name: "#target5",
    animation: {
            left: "1100px",
            top: "900px"
        } 
    },
    {name: "#target6",
    animation: {
            left: "-100px",
            top: "-100px"
        } 
    },
    {name: "#target7",
    animation: {
            left: "-100px",
            top: "250px"
        } 
    },
    {name: "#target8",
    animation: {
            left: "1000px",
            top: "-100px"
        } 
    },
    {name: "#target9",
    animation: {
            left: "600px",
            top: "900px"
        } 
    },
    {name: "#target10",
    animation: {
            left: "1600px",
            top: "400px"
        } 
    },
    {name: "#target11",
    animation: {
            left: "500px",
            top: "900px"
        } 
    },
    {name: "#target12",
    animation: {
            left: "400px",
            top: "900px"
        } 
    },
    {name: "#target13",
    animation: {
            left: "-200px",
            top: "400px"
        } 
    },
    {name: "#target14",
    animation: {
            left: "1700px",
            top: "700px"
        } 
    },
    {name: "#target15",
    animation: {
            left: "1700px",
            top: "-200px"
        } 
    },
    {name: "#target16",
    animation: {
            left: "250px",
            top: "900px"
        } 
    },
    {name: "#target17",
    animation: {
            left: "-100px",
            top: "250px"
        } 
    },
    {name: "#target18",
    animation: {
            left: "800px",
            top: "900px"
        } 
    },
    {name: "#target19",
    animation: {
            left: "1650px",
            top: "450px"
        } 
    },
    {name: "#target20",
    animation: {
            left: "300px",
            top: "-100px"
        } 
    }
];
var animationCopy = [];
var animations = [];
$(function(){
    
    var score = 0;
    
    
    //sets up game and screen
    $(".play").click(function(){
        setUpGame();
        $("#titleScreen").css("display","none");
        $("#resultsScreen").css("display","none");
        $(".mainContainer").css("display","block");
        goThroughList(animations[0], 0);
    });
    
    //outer large ring
    $(".target").click(function(){
        score += 10;
        $(this).stop();
        $(this).animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        })
        
    });

    //other large ring scores
    $(".ring2").click(function(event){
        event.stopPropagation();
        score += 20;
        $(this).parents(".target").stop();
        $(this).parents(".target").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".ring3").click(function(event){
        event.stopPropagation();
        score += 30;
        $(this).parents(".target").stop();
        $(this).parents(".target").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".ring4").click(function(event){
        event.stopPropagation();
        score += 40;
        $(this).parents(".target").stop();
        $(this).parents(".target").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".bullseye").click(function(event){
        event.stopPropagation();
        score += 50;
        $(this).parents(".target").stop();
        $(this).parents(".target").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });

        
    });

    //medium target scores
    $(".mTarget").click(function(){
        score += 20;
        $(this).stop();
        $(this).animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        })
        
    });
    $(".mRing2").click(function(event){
        event.stopPropagation();
        score += 30;
        $(this).parents(".mTarget").stop();
        $(this).parents(".mTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".mRing3").click(function(event){
        event.stopPropagation();
        score += 40;
        $(this).parents(".mTarget").stop();
        $(this).parents(".mTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".mRing4").click(function(event){
        event.stopPropagation();
        score += 50;
        $(this).parents(".mTarget").stop();
        $(this).parents(".mTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".mBullseye").click(function(event){
        event.stopPropagation();
        score += 70;
        $(this).parents(".mTarget").stop();
        $(this).parents(".mTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });

    //small target score
    $(".sTarget").click(function(){
        score += 30;
        $(this).stop();
        $(this).animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        })
        
    });
    $(".sRing2").click(function(event){
        event.stopPropagation();
        score += 60;
        $(this).parents(".sTarget").stop();
        $(this).parents(".sTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".sRing3").click(function(event){
        event.stopPropagation();
        score += 90;
        $(this).parents(".sTarget").stop();
        $(this).parents(".sTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".sRing4").click(function(event){
        event.stopPropagation();
        score += 120;
        $(this).parents(".sTarget").stop();
        $(this).parents(".sTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    $(".sBullseye").click(function(event){
        event.stopPropagation();
        score += 150;
        $(this).parents(".sTarget").stop();
        $(this).parents(".sTarget").animate({
            opacity: "0"
        },200,function(){
            $(this).css("display","none");
            updateScore();
        });
    });
    

    function goThroughList(target, it){
        //goes through individual targets
        if(it !== animations.length ){
            $("#targetCount").text(String(it + 1));
            $(target.name).animate(target.animation, 6000);
            setTimeout(function(){
                it++;
                goThroughList(animations[it], it);
            },5000);
            
        }
        else{
            //ends game
            animationCopy = [];
            animations = [];
            $("#finalScore").text(String(score));
            $("#accuracy").text(String(((score * 100) / 1440).toFixed(2)));
            $(".mainContainer").css("display","none");
            $("#resultsScreen").css("display","block");
            resetTargets();
        }
        
    }
    function resetTargets(){
        $("#target1").css({"left":"300px","top":"1200px","opacity":"1","display":"flex"});
        $("#target2").css({"left":"-200px","top":"43px","opacity":"1","display":"flex"});
        $("#target3").css({"left":"1600px","top":"43px","opacity":"1","display":"flex"});
        $("#target4").css({"left":"-200px","top":"600px","opacity":"1","display":"flex"});
        $("#target5").css({"left":"-200px","top":"-200px","opacity":"1","display":"flex"});
        $("#target6").css({"left":"1700px","top":"1200px","opacity":"1","display":"flex"});
        $("#target7").css({"left":"1700px","top":"600px","opacity":"1","display":"flex"});
        $("#target8").css({"left":"-200px","top":"1600px","opacity":"1","display":"flex"});
        $("#target9").css({"left":"600px","top":"-200px","opacity":"1","display":"flex"});
        $("#target10").css({"left":"-200px","top":"400px","opacity":"1","display":"flex"});
        $("#target11").css({"left":"150px","top":"-200px","opacity":"1","display":"flex"});
        $("#target12").css({"left":"-200px","top":"400px","opacity":"1","display":"flex"});
        $("#target13").css({"left":"1600px","top":"450px","opacity":"1","display":"flex"});
        $("#target14").css({"left":"-200px","top":"700px","opacity":"1","display":"flex"});
        $("#target15").css({"left":"-200px","top":"600px","opacity":"1","display":"flex"});
        $("#target16").css({"left":"250px","top":"-200px","opacity":"1","display":"flex"});
        $("#target17").css({"left":"1700px","top":"600px","opacity":"1","display":"flex"});
        $("#target18").css({"left":"800px","top":"-100px","opacity":"1","display":"flex"});
        $("#target19").css({"left":"600px","top":"1000px","opacity":"1","display":"flex"});
        $("#target20").css({"left":"-200px","top":"400px","opacity":"1","display":"flex"});
        $("#score").text("0");
    }
    function updateScore(){
        $("#score").text(String(score));
    }
    function setUpGame(){
        score = 0;
        animationCopy = [...animationsInit];
        //shuffles target order
        while(animationCopy.length !== 0){
            var num = Math.floor(Math.random() * animationCopy.length);
            animations.push(animationCopy[num]);
            animationCopy.splice(num, 1);
        }

    }

});