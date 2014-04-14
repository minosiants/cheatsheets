---
title: Fonts
layout: default
---

[fontello](http://fontello.com/)
[icomoon](http://icomoon.io/)


### Font-based icons 

```html
<style> 

   &#91; data-icon &#93; :before
   
	{ font-family: 'icon-font'; content: attr(data-icon); } 
</style> 

<a href="http://example.com/cloud/save/"> 
	<span data-icon="C" aria-hidden="true"></span> 
	Save to Cloud 
</a>
```

