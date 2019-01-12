import {
  TestBed,
  async,
  ComponentFixture,
  fakeAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Logger } from './services';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [Logger],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));
  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'taskb'`, () => {
    fakeAsync(() => {
      expect(component.title).toEqual('taskb');
    });
  });

  it('should render title in a h2 tag', () => {
    component.title = 'taskb';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain(component.title);
  });
});
