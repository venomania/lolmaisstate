import { PDFGenerator } from '@ionic-native/pdf-generator';

const usePdf = () =>{

    const goPdf = (name: string) =>{
        console.log(name);
        const forma = `${document.getElementById(name)?.innerHTML}`;
        console.log(forma);
        let option = {
            documentSize: 'A4',
            type:'Share',
        }
        
        PDFGenerator.fromData(forma,option).then(resolve => {
            console.log(resolve)
        }).catch((err)=>{
            alert(err); 
        })
    }

    return{
        goPdf,
    };
}

export default usePdf;