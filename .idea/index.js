function Bestill() {
    let filmer=document.getElementById("filmer").value;
    let antall=document.getElementById("antall").value;
    let fornavn=document.getElementById("fornavn").value;
    let etternavn=document.getElementById("etternavn").value;
    let tlfnr=document.getElementById("tlfnr").value;
    let epost=document.getElementById("epost").value;
    let biletter=document.getElementById("alleBiletter");
    let enBilett="";

    // Resetter errormeldinger dersom skjema blir sendt inn på nytt
    document.getElementById("errorAntall").innerHTML="";
    document.getElementById("errorFornavn").innerHTML="";
    document.getElementById("errorEtternavn").innerHTML="";
    document.getElementById("errorTlf").innerHTML="";
    document.getElementById("errorEpost").innerHTML="";

    // Errormeldinger
    if (filmer==0) {
        document.getElementById("errorFilmer").innerHTML="Vennligst velg film";
    } else {
        enBilett+=""+filmer;
    }
    if (antall==0) {
        document.getElementById("errorAntall").innerHTML="Vennligst fyll inn antall";
    } else {
        enBilett+=" "+antall;
    }
    if(fornavn==0){
        document.getElementById("errorFornavn").innerHTML="Vennligst fyll inn fornavn";
    } else {
        enBilett+=" "+fornavn;
    }
    if(etternavn==0){
        document.getElementById("errorEtternavn").innerHTML="Vennligst fyll inn etternavn";
    } else {
        enBilett+=" "+etternavn;
    }
    if(tlfnr==0){
        document.getElementById("errorTlf").innerHTML="Vennligst fyll inn telefon nr.";
    } else {
        enBilett+=" "+tlfnr;
    }
    if(epost==0){
        document.getElementById("errorEpost").innerHTML="Vennligst fyll inn e-postadresse";
    } else {
        enBilett+=" "+epost+"<br>";
    }

    if (filmer!==0 && antall!==0 && fornavn!==0 && etternavn!==0 && tlfnr!==0 && epost!==0) {
        biletter.innerHTML+=enBilett;
    }
}
function Slett() {
    document.getElementById("alleBiletter").innerHTML="";
}