import { Post } from "src/app/model/Post";
import { PostComponent } from "./post.component"
import { first } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe('Post component',()=>{
    let fixture:ComponentFixture<PostComponent>;
    let comp:PostComponent;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[PostComponent]
        });
        fixture=TestBed.createComponent(PostComponent);
        comp=fixture.componentInstance;
    });


    it('should create post component using TestBed',()=>{    
        expect(comp).toBeDefined();
    });
  

    it('should raise an event when delete Post is clicked',()=>{
        // const comp= new PostComponent();
        const post:Post={id:1,body:'body1',title:'title 1'}

        comp.post=post;

        comp.delete.pipe(first()).subscribe((selectedPost)=>expect(selectedPost).toEqual(post))
        comp.onDeletePost(new MouseEvent('click'));
    })
})