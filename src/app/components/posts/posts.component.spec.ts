import { Post } from "src/app/model/Post"
import { PostsComponent } from "./posts.component";
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { PostService } from "src/app/service/Post/post.service";

describe('PostComponent',()=>{
    let POSTS:Post[];
    let component:PostsComponent;
    let mockPostService:any;

    beforeEach(()=>{
        POSTS=[
            {id:1,body:'body1',title:'title 1'},
            {id:2,body:'body2',title:'title 2'},
            {id:3,body:'body3',title:'title 3'}
        ];

        mockPostService=jasmine.createSpyObj(['getPosts','deletePost']);
        TestBed.configureTestingModule({
            providers:[PostsComponent,{
                    provide: PostService, 
                    useValue:mockPostService
                }
            ]
        });        
        // component= new PostsComponent(mockPostService);
        component=TestBed.inject(PostsComponent);
    });

    describe('delete Post',()=>{

        it('should delete the passed post from the Posts array',()=>{
            mockPostService.deletePost.and.returnValue(of(true));
           //Arrange 
           component.posts=POSTS;
           //Act
           component.delete(POSTS[1]);          
           //Assert
           expect(component.posts.length).toBe(2);
        });

        it('Should call the delete method in Post service only once', ()=>{
            mockPostService.deletePost.and.returnValue(of(true));
            //Arrange 
           component.posts=POSTS;
           //Act
           component.delete(POSTS[1]);
           //Assert
           expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
        });

        it('should confirm  delete the actual selected post in Posts array',()=>{
            mockPostService.deletePost.and.returnValue(of(true));
            //Arrange 
           component.posts=POSTS;
            //Act
            component.delete(POSTS[1]);
            //Assert
           for(let p of component.posts){
            expect(p).not.toEqual(POSTS[1]);
           }

        })
    })
})