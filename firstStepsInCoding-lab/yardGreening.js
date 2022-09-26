function yardGreening(input){
    let priceMeter = 7.61;
    let greeningMeter = Number(input[0]);
    let priceSum = priceMeter * greeningMeter 
    let discount = 0.18 * priceSum;
    let finalprice = priceSum - discount;

    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
    }
    yardGreening(["550"]);
    yardGreening(["150"])