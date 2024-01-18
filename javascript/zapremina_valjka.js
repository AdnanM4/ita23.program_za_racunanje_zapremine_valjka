function calculateVolume () {
    const radius = document.getElementById("radius").value; 
    const height = document.getElementById("height").value; 
    const pi = 3.14; 

    if (radius && height) {
        const volume = (pi * radius * radius * height).toFixed(2);
        document.getElementById("result").innerText = `Zapremina Valjka je: ${volume}`;
    }else{
        document.getElementById("result").innerText = "Molimo unesite i poluprecnik i visinu";
    }
}