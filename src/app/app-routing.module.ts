import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { map } from 'rxjs/operators';

const uidalumno = 'BuH32cHKpygwHAn5vTqfVAiSZ632';
const uidalumno2 = 'tkYwu1WfI9POaL76R0w7AfAYdps2';
const uidprofe = '4i4ndYD7w1Ub11aevuMr7jLNr2S2';
const uidprofe2 = 'iDxE1KpIRWMdoCQ04oRtK8G2Rpt2';

const onlyalumnos = () => map ( (user:any) => !!user && (user.id === uidalumno || user.id === uidalumno2));
const onlyprofes = () => map ( (user:any) => !!user && (user.id === uidprofe || user.id === uidprofe2));

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/places']);
const redirectLoggedInToSendEmail = () => redirectLoggedInTo(['/not-found']);

const routes: Routes = [

  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule),canActivate :[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'guard',
    loadChildren: () => import('./guard/guard.module').then( m => m.GuardPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule),canActivate :[AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule), canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } 
  },
  {
    path: 'userslist',
    loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule) ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule), canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule), canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QRPageModule),canActivate :[AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule), canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'inicioperfil',
    loadChildren: () => import('./pages/inicioperfil/inicioperfil.module').then( m => m.InicioperfilPageModule), canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
