/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(s){"use strict";function a(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}var e,t,c;function n(s,n){(e(s,n)?c:t)(s,n)}c="classList"in document.documentElement?(e=function(s,n){return s.classList.contains(n)},t=function(s,n){s.classList.add(n)},function(s,n){s.classList.remove(n)}):(e=function(s,n){return a(n).test(s.className)},t=function(s,n){e(s,n)||(s.className=s.className+" "+n)},function(s,n){s.className=s.className.replace(a(n)," ")}),s.classie={hasClass:e,addClass:t,removeClass:c,toggleClass:n,has:e,add:t,remove:c,toggle:n}}(window);