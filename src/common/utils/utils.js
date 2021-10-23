export const API_END_POINT = "https://api.npoint.io/20c1afef1661881ddc9c";


export function getLocalDataTime(date){
    var currentDate= new Date(`${date} UTC`);
   let Day = `${currentDate.getDate() < 10 ? "0" : "" }${currentDate.getDate()}`;
   let Month = `${(currentDate.getMonth() + 1) < 10 ? "0" : ""}${currentDate.getMonth() + 1}`;
   let Year = `${currentDate.getFullYear()}`;
   let Hours = `${currentDate.getHours()}`;
   let Minutes = `${currentDate.getMinutes() < 10 ? "0" : ""}${currentDate.getMinutes()}`;
   let Seconds = `${currentDate.getSeconds() < 10 ? "0" : ""}${currentDate.getSeconds()}`;
   let Am = `${currentDate.getTimezoneOffset()}`;
   console.log(Am)
       
    let DateTime = `On ${Day}/${Month}/${Year} ${"  "}, At ${Hours}:${Minutes}:${Seconds} ${`${Hours < 12 ? "AM" : "PM"}`}`
    if(date){
      return DateTime;
    }else return "Date Not Available"
  };
