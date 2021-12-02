

// function example(parameter: any) {
//    console.log(parameter);
// }

// example('string');
// example(2);
// example(false);

// let another: {
   
//     properyOne: number,
//     properyTwo: number,
//     properyThree: number,
//     properyFour: number,

// };


// function objectParametre(obj: { one: string, two: number, three: boolean}) {
    
//     console.log(obj.one, obj.two, obj.three);
// }

// objectParametre({ one: 'string', two: 2, three: false });

type Example = {
    
    propertyOne: string,
    propertyTwo: number,
    propertyThree: boolean,
 
 }

 function aliasUsage(parameter: Example) {
     console.log(parameter.propertyOne, parameter.propertyTwo, parameter.propertyThree,);
 }
 
 aliasUsage({ propertyOne: 'string', propertyTwo: 2, propertyThree: false })