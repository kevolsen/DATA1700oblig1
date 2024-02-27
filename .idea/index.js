function Bestill() {
    let filmer=document.getElementById("filmer").value;
    let antall=document.getElementById("antall").value;
    let fornavn=document.getElementById("fornavn").value;
    let etternavn=document.getElementById("etternavn").value;
    var tlfnr=document.getElementById("tlfnr").value;
    var epost=document.getElementById("epost").value;
    let biletter=document.getElementById("alleBiletter");
    let enBilett="";

    var tlfREGX = /^[0-9\+]{8,12}$/;
    var epostREGX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    var tlfnrResultat =
        tlfREGX.test(tlfnr);

    var epostResultat =
        epostREGX.test(epost);

    // Resetter errormeldinger dersom skjema blir sendt inn på nytt
    document.getElementById("errorAntall").innerHTML="";
    document.getElementById("errorFornavn").innerHTML="";
    document.getElementById("errorEtternavn").innerHTML="";
    document.getElementById("errorTlf").innerHTML="";
    document.getElementById("errorEpost").innerHTML="";

    let error=0;

    // Errormeldinger
    if (filmer==0) {
        document.getElementById("errorFilmer").innerHTML="Vennligst velg film";
        ++error;
    } else {
        enBilett+=""+filmer;
    }
    if (antall==0) {
        document.getElementById("errorAntall").innerHTML="Vennligst fyll inn antall";
        ++error;
    } else {
        enBilett+=" "+antall;
    }
    if(fornavn==0){
        document.getElementById("errorFornavn").innerHTML="Vennligst fyll inn fornavn";
        ++error;
    } else {
        enBilett+=" "+fornavn;
    }
    if(etternavn==0){
        document.getElementById("errorEtternavn").innerHTML="Vennligst fyll inn etternavn";
        ++error;
    } else {
        enBilett+=" "+etternavn;
    }
    if(tlfnr==0){
        document.getElementById("errorTlf").innerHTML="Vennligst fyll inn telefon nr.";
        ++error;
    } else if(tlfnrResultat==0) {
        document.getElementById("errorTlf").innerHTML = tlfnr + " er ikke et gyldig telefonnummer.";
        ++error;
    }
        else {
            enBilett+=" "+tlfnr;
        }
    if(epost==0){
        document.getElementById("errorEpost").innerHTML="Vennligst fyll inn e-postadresse";
        ++error;
    }  else if(epostResultat==0){
        document.getElementById("errorEpost").innerHTML = epost + " er ikke en gyldig e-postadresse.";
        ++error;
    }
    else {
        enBilett+=" "+epost+"<br>";
    }

        if(error==0){
            biletter.innerHTML+=enBilett;
            document.getElementById('filmer').value='';
            document.getElementById('epost').value='';
            document.getElementById('tlfnr').value='';
            document.getElementById('etternavn').value='';
            document.getElementById('fornavn').value='';
            document.getElementById('antall').value='';
        }

}
function Slett() {
    document.getElementById("alleBiletter").innerHTML="";
}