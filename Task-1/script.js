
    function getOption() {
        selectElement = document.querySelector('select');
        var c=selectElement.options[selectElement.selectedIndex].value;

        if(c=='fah'){
            var fahtemp=document.querySelector('input').valueAsNumber;
            var number1=(fahtemp-32)*(5/9);
            document.querySelectorAll('input')[1].value=number1;
        
        }
        else{
        var celtemp=document.querySelector('input').valueAsNumber;
        var number=((9/5.0)*celtemp)+32;
        document.querySelectorAll('input')[1].value=number;
}
    }
    function resetvalue(){
        var number="";
        document.querySelector('input').value=number;
        document.querySelectorAll('input')[1].value=number;
    }