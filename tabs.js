document.addEventListener('DOMContentLoaded', ()=>{
  const tabs=document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs_btn');
  const tabsContent = document.querySelectorAll('.tabs_content');
  
  if(tabs){
    tabs.addEventListener('click', (e)=>{
      if(e.target.classList.contains('tabs_btn')){
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }
  
  const tabsHandler = (path) =>{
    tabsBtn.forEach(el=>{el.classList.remove('tabs_btn--active')});
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs_btn--active');
  
    tabsContent.forEach(el=>{el.classList.remove('tabs_content--active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs_content--active');
  }; 
  });
  
  
  