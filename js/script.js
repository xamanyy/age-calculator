
    const ageCalculator = () =>{

        document.querySelector(".saal").setAttribute("style","display:none");
        document.querySelector(".mahina").setAttribute("style","display:none");
        document.querySelector(".din").setAttribute("style","display:none");
    
        //to fetch date.
        const date = new Date();

        let currentDay  = date.getDay();
        let currentMonth = date.getMonth() + 1;
        let currentYear  = date.getFullYear();

        console.log(currentDay,currentMonth,currentYear);

        const allMonths = [ 31, 28, 31, 30, 31, 30, 
            31, 31, 30, 31, 30, 31 ];

        let cal_birthDay;
        let cal_birthMonth;
        let cal_birthYear;

        document.querySelector('.round').addEventListener('click', (event) =>{
            let birthDay  = document.getElementById('day').value;
            let birthMonth  = document.getElementById("month").value;
            let birthYear = document.getElementById("year").value;

            if(birthDay > currentDay){
                currentDay = currentDay +  allMonths[birthMonth - 1];
                currentMonth = currentMonth -1;
            }

            if(birthMonth > currentMonth){
                currentYear = currentYear -1;
                currentMonth = currentMonth + 12;
            }

            cal_birthDay = currentDay - birthDay;
            cal_birthMonth = currentMonth - birthMonth;
            cal_birthYear = currentYear - birthYear;
            
        console.log(cal_birthDay,cal_birthMonth,cal_birthYear);

            if(cal_birthDay && cal_birthMonth && cal_birthYear){
                document.querySelector(".year-field1").setAttribute("style","display:none");
                document.querySelector(".year-field2").setAttribute("style","display:none");
                document.querySelector(".month-field1").setAttribute("style","display:none");
                document.querySelector(".month-field2").setAttribute("style","display:none");
                document.querySelector(".day-field1").setAttribute("style","display:none");
                document.querySelector(".day-field2").setAttribute("style","display:none");

                
                document.querySelector(".saal").setAttribute("style","display:inline");
                document.querySelector(".mahina").setAttribute("style","display:inline");
                document.querySelector(".din").setAttribute("style","display:inline");
             

                console.log("true")
                document.querySelector(".saal").textContent = `${cal_birthYear}`;
                document.querySelector(".mahina").textContent = `${cal_birthMonth}`;
                document.querySelector(".din").textContent = `${cal_birthDay}`;
                

                
            }
        })
    }
    
    ageCalculator();

 