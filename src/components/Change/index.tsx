

export default function changeText(boxDescription: string, newDescription: string){
    var oldText:HTMLElement = document.getElementsByClassName(boxDescription)[0] as HTMLElement;
    var newText:HTMLElement =document.getElementsByClassName(newDescription)[0] as HTMLElement;
    oldText.style.cssText = "display:none";
    newText.style.cssText="display: grid";


    
    
    
}