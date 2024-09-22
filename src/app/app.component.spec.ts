import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';


//providing mock service
class MockProductService{
  getProducts(){
    const mockProducts=[
    {id:1,productName:'Product 1'},
    {id:2,productName:'Product 2'}
    ];
    return of(mockProducts);
  }
}

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let productService:ProductService;

//   beforeEach(() => TestBed.configureTestingModule({
//     declarations: [AppComponent],
//     imports:[HttpClientModule],
//     providers:[
//       {provide:ProductService,useClass:MockProductService}
//     ]
//   }));

  beforeEach(fakeAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports:[HttpClientModule],
    providers:[
      {provide:ProductService,useClass:MockProductService}
    ]
    }).compileComponents()

  }));

  beforeEach(()=>{
    fixture=TestBed.createComponent(AppComponent);
    component=fixture.componentInstance;
    productService=TestBed.inject(ProductService);
  });

  it('Should retrieve products',fakeAsync(()=>{
    component.getProducts();
    tick();
    expect(component.product).toEqual([
      {id:1,productName:'Product 1'},
      {id:2,productName:'Product 2'}
    ])
  }))


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularUpgrade16To17'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularUpgrade16To17');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Login details');
  });
});
