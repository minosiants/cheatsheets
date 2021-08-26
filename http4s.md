# Http4s

 
```
type Http[F[_], G[_]] = Kleisli[F, Request[G], Response[G]]

type HttpApp[F[_]]    = Http[F, F]
type HttpRoutes[F[_]] = Http[OptionT[F, *], F]
```
Midleware has two shapes

 - `HttpRoats[F] => HttpRoats[F]`  
 - `HttpApp[F] => HttpApp[F]`   
