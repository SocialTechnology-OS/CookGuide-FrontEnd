import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromUpdateRecipesComponent } from './from-update-recipes.component';

describe('FromUpdateRecipesComponent', () => {
  let component: FromUpdateRecipesComponent;
  let fixture: ComponentFixture<FromUpdateRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromUpdateRecipesComponent]
    });
    fixture = TestBed.createComponent(FromUpdateRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
