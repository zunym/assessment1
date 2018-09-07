import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
//Form
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'


const MODULES = [
    MatToolbarModule,MatButtonModule,
    MatFormFieldModule,MatInputModule,
    FormsModule
]

@NgModule({
imports: MODULES,
exports: MODULES
})
//give Name MaterialModule to import in app.modules.ts
export class MaterialModule{}