import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateRecipesComponent } from './form-create-recipes.component';

describe('FormCreateRecipesComponent', () => {
  let component: FormCreateRecipesComponent;
  let fixture: ComponentFixture<FormCreateRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateRecipesComponent]
    });
    fixture = TestBed.createComponent(FormCreateRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
