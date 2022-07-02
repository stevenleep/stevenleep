function genId(){
    let initID = 0;
    return () => {
        return initID+=1;
    }
}
// const maxLoopSize = 20;
// const increaseFunc = genId();
//
// e:if(maxLoopSize === 20) {
//     if(increaseFunc() <= 10) {
//         console.log("Current id is less than the predefined range")
//         break e;
//     }
//     console.log("normal predefined range")
// }
//


let firstLayerIndex, secondLayerIndex;

firstLayerLoop:
for (firstLayerIndex = 0; firstLayerIndex <= 3; firstLayerIndex++) {
    for (secondLayerIndex = 0; secondLayerIndex <= 3; secondLayerIndex++) {
        if(firstLayerIndex === 1 && secondLayerIndex === 1) {
            break firstLayerLoop;
        }
        console.log("first:", firstLayerIndex, "second:", secondLayerIndex);
    }
}












