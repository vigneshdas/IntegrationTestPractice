import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display TotalVotes correctly', () => {
  
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    //const compiled : HTMLElement = fixture.nativeElement;
    //expect(compiled.querySelector('.vote-count').textContent).toContain('20');
    let de  = fixture.debugElement.query(By.css('.vote-count'));
    let el : HTMLElement = de.nativeElement;
    console.log("el.innerText=="+el.innerText)
     expect(el.innerText).toBe('21');
  });

  it('should highlight up button when upVoted',()=>{
      component.myVote=1;
      fixture.detectChanges();


      let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

      expect(de.classes['highlighted']).toBeTrue();
  });

  it('should increase total votes when update vote button is clicked',()=>{
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click',null);

    expect(component.totalVotes).toBe(1);
  });

});
