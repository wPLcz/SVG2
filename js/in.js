//                 lewa gora            prawa gora             prawy dol              lewy dol
const line1hidden="836.556,382.557      852.556,382.557     852.556,382.557         836.556,382.557";
const line2hidden="804.556,382.557      820.556,382.557     820.556,382.557         804.556,382.557";
const line3hidden="795.556,403.557      788.556,382.557     788.556,382.557         795.556,403.557";
const line4hidden="827.556,403.557      819.556,427.557     819.556,427.557         827.556,403.557";


TweenMax.from('#line1',2,{attr:{points:line1hidden},repeat:7,yoyo:true,ease:Elastic.easeInOut});
TweenMax.from('#line2',2,{attr:{points:line2hidden},repeat:7,yoyo:true,ease:Elastic.easeInOut});
TweenMax.from('#line3',2,{attr:{points:line3hidden},repeat:7,yoyo:true,ease:Elastic.easeInOut});
TweenMax.from('#line4',2,{attr:{points:line4hidden},repeat:7,yoyo:true,ease:Elastic.easeInOut});
