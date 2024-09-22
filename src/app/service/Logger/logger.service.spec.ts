import { LoggerService } from "./logger.service";

describe('LoggerService',()=>{
  it('should not have any messages at the starting',()=>{
    //arrange 
    const service=new LoggerService();

    //act
    let messages=service.messages.length;
    //assert
    expect(messages).toBe(0);
  })

  it('should add the message when log() is called',()=>{
    //arrange
    const service=new LoggerService();

    //act
    service.log("msg1");
    service.log("msg2");
    let messages=service.messages.length;

    //assert
    expect(messages).toBe(2);
  })

  it('it should clear all the message when clear() is called',()=>{
    //arrange
    const service=new LoggerService();   
    service.log("msg1");
    service.log("msg2");
    
     //act
    service.clear();
    let messages=service.messages.length;

    //assert
    expect(messages).toBe(0);
  })


})