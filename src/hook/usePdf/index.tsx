import { PDFGenerator } from '@ionic-native/pdf-generator';

const usePdf = () =>{

    const goPdf = (name: string , rank:string ,losse :number ,win :number) =>{
        console.log(name);
        const forma = `

        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../../components/RankSlider/RankSlider.css">
            <title>Document</title>
            
        </head>
        <body>
            <style>
            h1,h2,h3,h4,h5,h6,strong{       
                font-family: fantasy;
                font-size: 60px;
            }
            .from{
                margin-top: 13pc;
                margin-left: 1pc;
            }
            .from_win{
                color: green;
              } 
              .from_losse{
                color:  rgb(128, 0, 0);;
              }
            p{
                font-family: fantasy;
                font-size: 40px;
                color: #979736;
            }
               #card{            
                    background: gray;
                    width: 100%;
                    height: 37%;
                    display: flex;
                    margin: 0;
                    padding: 0;
                 border-color: black;    
                 border: 3px solid;
               }
            .win{
                    background: green;
                    height: 100%;
                    margin-left: 20pc;
                    width: 10%;
            }
            .win2{
                background: gray;
                width: 100%;
                height: ${100 - win}%;
            }
          
            .losse{
                    background: rgb(128, 0, 0);
                    height: 100%;
                    margin-left: 5pc;
                    width: 10%;
            }
            .losse2{
                background: gray;
                width: 100%;
                height: ${100 - losse}%;
            }
            </style>
        <img src="../../../public/assets/rank/Emblem_Bronze.png" alt="">
        ${document.getElementById(name)?.innerHTML}
      
                <div id="card">
                    <div class="win">
                        <div class="win2"></div>
                    </div>
                    <div class="losse">
                        <div class="losse2"></div>
                    </div>
                </div>
        </body>
        </html>


        `;
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