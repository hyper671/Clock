import React,{useState, useEffect} from 'react';

function DigitalClock(){
 const [time,setTime] = useState(new Date());

    useEffect(() => {
      const intervalidId =setInterval (()=> {
        setTime(new Date());
      }, 1000);
        return () => {
          clearInterval(intervalidId);
        }

    }, []);
      function formatTime(){
        let hours = time.getHours();
          const minutes = time.getMinutes();
          const second = time.getSeconds();
          const meridiem = hours >= 12 ? "PM" : "AM";

          hours = hours % 12 || 12;

          return `${padZero(hours)}:${padZero (minutes)}:${padZero (second)} ${meridiem}`;

          function padZero(number){
                return (number < 10 ? "0" : "") + number;
          }
        
      }

  return(
    <>
    
    <div className='clock-container'>
      <div className='clock'>
       <div>
        <span className='digit'>{formatTime()}</span>
</div>
      </div>

    </div>
    
    </>
  );
}
export default DigitalClock;