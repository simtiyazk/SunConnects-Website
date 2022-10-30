const debounce = func => {
  let timer;

  return function(event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
};
const navigationComponentClass = 'header';

const getNavigationHeight = () => {
  const navigationElement = document.getElementById(navigationComponentClass);
  const navigationHeight = navigationElement ? navigationElement.offsetHeight : 0;

  return {
    mainHeight: navigationHeight,
  };
};

const getScrollOffset = ( isSticky, showTKILogo, isTablet, stickyNavigationHeight, mainNavigationHeight, pageWithStickyNav ) => {
  const extraWithLogo = showTKILogo ? 0 : -60;
  const extraTablet = (isTablet && showTKILogo)  ? 35 : 0;

  if (pageWithStickyNav)
    return isSticky ? stickyNavigationHeight : mainNavigationHeight + extraWithLogo + extraTablet;
  else
    return 0;
};

const getScrollHeight = () => {
  return document.body.scrollHeight;
}

class GTMScriptData {
  createScript(id){
    const snippet = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});\nvar f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\nj.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;\nf.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','" + id + "');"
    const script = document.createElement('script');
    script.innerHTML = snippet;
    document.head.insertBefore(script,document.head.childNodes[0]);
    this.createIndex(id);
  }

  createIndex(id){
    const iframe = '<iframe src="https://www.googletagmanager.com/ns.html?id=' + id + ';"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';
    const noscript = document.createElement('noscript');
    noscript.innerHTML = iframe;
    document.body.insertBefore(noscript, document.body.childNodes[0]);
  }
}

export {
  debounce,
  getScrollHeight,
  getNavigationHeight,
  getScrollOffset,
  GTMScriptData
}
