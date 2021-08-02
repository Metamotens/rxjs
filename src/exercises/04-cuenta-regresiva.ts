import { interval } from "rxjs";
import { map, mergeMap, take } from "rxjs/operators";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const start = 7;
  const countdown$ = interval(700).pipe(
    map((i) => start - i),
    take(8)
  );

  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();
