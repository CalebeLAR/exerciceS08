// ./index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log(`Losango de base maior D = 32cm e base menor d = 18cm: ${Ex.getDiamondArea(32, 18)}cm²`);
console.log(`Losango de base maior D = 200cm e base menor d = 50cm: ${Ex.getDiamondArea(32, 18)}cm²`);
console.log(`Losango de base maior D = 75cm e base menor d = 25cm: ${Ex.getDiamondArea(32, 18)}cm²`);

console.log(`trapézio de base maior B = 100cm, base menor b = 70cm e altura h = 50cm: ${Ex.getTrapezeArea(100,70,50)}cm²`);
console.log(`trapézio de base maior B = 75cm, base menor b = 50cm e altura h = 35cm: ${Ex.getTrapezeArea(75, 50, 35)}cm²`);
console.log(`trapézio de base maior B = 150cm, base menor b = 120cm e alturah  = 80cm: ${Ex.getTrapezeArea(150, 120, 80)}cm²`);
