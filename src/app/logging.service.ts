export class LoggingService{
  logStatusChange(status:string){
    console.log("A Server Status change, new status," + status);
  }
}
