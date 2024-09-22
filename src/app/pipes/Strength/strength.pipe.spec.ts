import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if value 5 is passed',()=>{
    const pipe= new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)')
  })

  it('should display strong if value 11 is passed',()=>{
    const pipe= new StrengthPipe();
    expect(pipe.transform(11)).toEqual('11 (strong)')
  })

  it('should display strongest if value 23 is passed',()=>{
    const pipe= new StrengthPipe();
    expect(pipe.transform(23)).toEqual('23 (strongest)')
  })
});
