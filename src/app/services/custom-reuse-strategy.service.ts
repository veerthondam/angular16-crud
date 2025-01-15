import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomReuseStrategyService implements RouteReuseStrategy {
  
  private storedRoutes = new Map<string, DetachedRouteHandle>();

   shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(route)
    return !!route.data && route.data['reuse'];
    
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void{
    const key = route.routeConfig?.path;
    if(key){
      this.storedRoutes.set(key, handle); 
      /* In backend it will store like 
      
      storedRoutes: {
        'dashboard' : DetachedRouteHandle // { maintians the dashobardComponent state  like  view, data and params}
      }
      */
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean{
    const key = route.routeConfig?.path;
    return !!key && this.storedRoutes.has(key);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {    
    const key = route.routeConfig?.path;
    return key ? this.storedRoutes.get(key) || null : null;
}

shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean{

  return future.routeConfig === curr.routeConfig;
}
}
