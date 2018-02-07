// OLD
<script type="text/javascript">
feathr_account_id = "5818fc487c1fea1278ec944e";
(function () {
    var loadBoomer = function(){
        if (!/complete|loaded/.test(document.readyState)) {setTimeout(loadBoomer, 10);return}
        var scr = document.createElement("script");
        scr.src = "//cdn.feathr.co/js/boomerang.min.js";
        scr.async = true;
        __feathr_loaded = true;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    };
    if (/complete|loaded/.test(document.readyState)) {setTimeout(loadBoomer, 10);}
    else if (window.addEventListener) {window.addEventListener('load', loadBoomer, false);}
    else {window.attachEvent('onload', loadBoomer)}
}());
</script>


//  NEW
<script type="text/javascript"> 
!​f​u​n​c​t​i​o​n​(​f​,​e​,​a​,​t​,​h​,​r​)​{​i​f​(​!​f​[​h​]​)​{​r​=​f​[​h​]​=​f​u​n​c​t​i​o​n​(​)​{r.invoke? 
r​.​i​n​v​o​k​e​.​a​p​p​l​y​(​r​,​a​r​g​u​m​e​n​t​s​)​:​r​.​q​u​e​u​e​.​p​u​s​h​(​a​r​g​u​m​e​n​t​s​)}, 
r.queue=[],r.loaded=1*new Date,r.version="1.0.0", 
f.FeathrBoomerang=r;var g=e.createElement(a), 
h​=​e​.​g​e​t​E​l​e​m​e​n​t​s​B​y​T​a​g​N​a​m​e​(​"​h​e​a​d​"​)​[​0​]​|​|​e​.​g​e​t​E​l​e​m​e​n​t​s​ByTagName("script")[0].parentNode; 
g.async=!0,g.src=t,h.appendChild(g)} 
}​(​w​i​n​d​o​w​,​d​o​c​u​m​e​n​t​,​"​s​c​r​i​p​t​"​,​"​h​t​t​p​s​:​/​/​c​d​n​.​f​e​a​t​h​r​.​c​o​/​js/boomerang.min.js","feathr") 

feathr("fly", "5818fc487c1fea1278ec944e"); 
feathr("sprinkle", "page_view"); 

// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-767255-8', 'auto');
  ga('send', 'pageview');
</script>



<script>
  

</script>

