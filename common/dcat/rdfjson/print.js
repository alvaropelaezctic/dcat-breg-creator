//>>built
define("rdfjson/print",["exports","./namespaces"],function(g,h){g.pretty=function(d,e){for(var c={},f=d.find(e),b=0;b<f.length;b++){var a=f[b];"bnode"!=a.getType()&&(c[h.shorten(a.getPredicate())]=a.getValue())}return c};g.statementTree=function(d,e,c){c=c||{};e=d?d.find(e):[];for(var f=[],b=0;b<e.length;b++){var a=e[b];"literal"===a.getType()?f.push({stmt:a}):(a=a.getValue(),c[a]||(c[a]=!0,g.statementTree(d,a,c)))}return f};g.statementList=function(d,e){var c=g.statementTree(d,e),f=[],b=function(a,
c){for(var e=0;e<a.length;e++){var d=a[e];d.indent=c;f.push(d);d.children&&(b(d.children,c+1),delete d.children)}};b(c,1);return f};g.prettyTree=function(d,e){for(var c=g.statementList(d,e),f=0;f<c.length;f++){var b=c[f],a=b.stmt;a.isSubjectBlank()?b.s=a.getSubject():b.s=h.shorten(a.getSubject());b.p=h.shorten(a.getPredicate());if("uri"===a.getType()){b.o=h.shorten(a.getValue());var k=a.getLanguage(),a=a.getDatatype();null!=k?b.o+="@@"+k:null!=a&&(b.o+="^^"+a)}else b.o='"'+a.getValue()+'"'}return c};
return g});
//# sourceMappingURL=print.js.map