// import { TestBed } from '@angular/core/testing';

import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

// import { CalculatorService } from './calculator.service';

// describe('CalculatorService', () => {
//   let service: CalculatorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalculatorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


describe('Calculator Service',()=>{
  let mockLoggerService:any;
  let calculator:CalculatorService;
  beforeEach(()=>{
     mockLoggerService=jasmine.createSpyObj('LoggerService',['log']);    
     calculator=new CalculatorService(mockLoggerService);
  })

  it('should add 2 numbers',()=>{
    // pending();
    // let loggerService=new LoggerService();
    // spyOn(loggerService,'log');//this orginal method will not be called
    // const calculator=new CalculatorService(loggerService);

    
    let res=calculator.add(2,2);
    expect(res).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)

  });
  it('should subtract 2 numbers',()=>{
    // let loggerService=new LoggerService();
    // spyOn(loggerService,'log');//this orginal method will not be called
    // const calculator=new CalculatorService(loggerService);

   
    let res=calculator.subtract(2,2);
    expect(res).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);

  })
});
