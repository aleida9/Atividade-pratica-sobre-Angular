import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, UsuarioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}