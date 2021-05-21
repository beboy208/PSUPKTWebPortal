/*
Put simply, the adapter pattern is used to implement a light wrapper around third-party APIs, 
one that is contextually relevant for your codebase, 
and can withstand upstream changes or wholesale replacements of the vendor API without impacting 
the rest of your application. 
This manages the risk of integration by providing the rest of your codebase with consistent interface 
that you control. 
Additionally, the adapter provides an ideal test seam for stubbing out the service during testing.
*/