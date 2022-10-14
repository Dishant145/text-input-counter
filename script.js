let inputTextArea=document.getElementById("input-textarea");

inputTextArea.addEventListener("input", countvc);

inputTextArea.addEventListener("input", countwc);

inputTextArea.addEventListener("input", countpc);



function countwc()
{
    let characCount = document.getElementById("charac-count");
    let wordCount = document.getElementById("word-count");
    characCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
}

function countvc()  
{
    const vc = document.getElementById("vowel-count");
    const cc = document.getElementById("cons-count");

    var str=document.getElementById("input-textarea").value;

    var vowel= "aeiouAEIOU";
    var consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    
    var ctr1=0;
    var ctr2=0;

    if (str=='')
    {
        vc.textContent=ctr1;
        cc.textContent=ctr2;
    }

    else
    {
        for (var x=0; x<str.length; x++)
        { 
            for (var y=0; y<vowel.length; y++)
            { 
                if(str[x]==vowel[y])
                {
                    ctr1++;
                    vc.textContent=ctr1;
                }
            }
            for (var z=0; z<consonant.length; z++)
            { 
                if(str[x]==consonant[z])
                {
                    ctr2++;
                    cc.textContent=ctr2;
                }
            }
        }
    }
    
}

function countpc()
{
    let sc = document.getElementById("sentence-count");
    let pc = document.getElementById("para-count");
    let txt = inputTextArea.value.trim();
    sc.textContent = txt.split(/[.?!]+/).filter((item) => item).length;
    pc.textContent = txt.split(/\n/).filter((item) => item).length;

}
