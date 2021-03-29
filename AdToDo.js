//The Auto Add Function To Pending List (Using Jquery)
$(function (){
    $("#adds").on("click", function(){
        var eventName = document.getElementById("name").value
        var eventTime = document.getElementById("time").value
        var eventDate = document.getElementById("date").value
        if (eventName !=""){
            $(function (){
                var list = $("<li></li>"+"<br>").append("Event Name: "+eventName+"<br>"+"Event Time: "+eventTime+"<br>"+"Event Date: "+eventDate);
                $(list).append("<button class = 'rem'>x</button>");
                $("#unlist").append(list)
                document.getElementById("name").value="";
                document.getElementById("time").value="";
                document.getElementById("date").value="";
                $(".rem").on("click",function (){
                    $(this).parent().remove();
                })
                $("li").click(function (){
                    $(this).child().slideToggle(1000);
                })
            })
        }
    })
})
// The Remove All Pending List Function
function de() {
    alert("Refresh to add a new list")
   document.getElementById("unlist").remove()
}

// Using Jquery (Pending Slider)
$(function () {
    $("#toggle").click(function () {
        $(".inner2").slideToggle(1000)
    })

})

   
// Using JavaScript to store your input data  
function rep(){
    var eventName = document.getElementById("name").value
    var eventTime = document.getElementById("time").value
    var eventDate = document.getElementById("date").value

    localStorage.setItem("EVENT NAME", eventName)
    localStorage.setItem("EVENT TIME", eventTime)
    localStorage.setItem("EVENT DATE", eventDate)

    return
}
    