

document.addEventListener("DOMContentLoaded",function(){
    this.DOM = {};
    this.next_question = undefined;
    const resister = resisterDOM.bind(this);
    resister();
    this.DOM.btn.forEach(btn =>{
        btn.addEventListener("click", function(){
            
            if(this.id === "under-twenty"){
                document.DOM.age = "20歳以下"
                console.log("20saiika");
            }

            if(this.id === "over-twenty"){
                document.DOM.age = "20歳以上"
                console.log("20saiijou");
            }

            console.log(document.DOM);
            addClass(document.DOM.now_question,document.next_question);
            
        }); 
});
});

function resisterDOM(){
    this.DOM.id = document.querySelector(".question-number").value;
    this.DOM.now_question = document.querySelector(".question");
    this.DOM.btn = document.querySelectorAll(".btn");

    next_question_id = Number.parseInt(this.DOM.id) + 1;
    this.next_question = document.querySelector(".question" + next_question_id);
}

function addClass(now_question, next_question){
    now_question.classList.remove("inview");
    now_question.classList.add("fade");

    next_question.classList.add("inview")
}