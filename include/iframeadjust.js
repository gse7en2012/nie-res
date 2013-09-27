// JavaScript Document

function dyniframesize(iframeObj)
{
	if (iframeObj && !window.opera)
	{
		iframeObj.style.display = "block";
		if (iframeObj.contentDocument && iframeObj.contentDocument.body.offsetHeight)
			iframeObj.height = iframeObj.contentDocument.body.offsetHeight;
		else if (iframeObj.Document && iframeObj.Document.body.scrollHeight)
			iframeObj.height = iframeObj.Document.body.scrollHeight;
	}

}

