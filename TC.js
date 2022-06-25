const convert_temp = () => {
    const temp = document.getElementById("temp").value;
    const unit = document.getElementById("type");
    const unit_selected = unit.options[unit.selectedIndex].value

    const CtoF = (c) => {
        let f = (c * 9 / 5) + 32;
        return f;
    }
    const FtoC = (f) => {
        let c = (f - 32) * 5/9;
        return c;
    }

    let result = document.getElementById("result");
    if(unit_selected=='celcius'){
        result.value = `${CtoF(temp)}°F`;    
    }else{
        result.value = `${FtoC(temp)}°C`;
    }
    return 0;
}