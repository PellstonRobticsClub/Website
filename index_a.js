/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP.bw=0; IDP.bd=0;
	if(self.innerHeight)
	{	IDP.bw=self.innerWidth;
		IDP.bd=self.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight)
	{	IDP.bw=document.documentElement.clientWidth;
		IDP.bd=document.documentElement.clientHeight;
	}
	else if(document.body)
	{	IDP.bw=document.body.clientWidth;
		IDP.bd=document.body.clientHeight;
	}
	IDP.bw=IDP.bw / 1.33;
	IDP.bd=IDP.bd / 1.33;
	IDP[1]={	x:new Array(106,106),
				y:new Array(-100,529),
				s:12 };
	IDP[2]=(V5)?document.getElementById('e9').style:(IE)?e9.style:document.e9;
	window.setTimeout('DoRoute(2,1,0,0,0,100)',1000);
}


/*--- EndOfFile ---*/
