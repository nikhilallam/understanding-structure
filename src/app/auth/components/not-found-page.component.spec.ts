import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NotFoundPageComponent,
      ]
    }).compileComponents();
  });

  it('should load the page', () => {
    const fixture = TestBed.createComponent(NotFoundPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should display "Page not found"', () => {
    const fixture = TestBed.createComponent(NotFoundPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Page not found');
  });

});
