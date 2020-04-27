const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // make all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false); // aria attribute has to use setAttribute
  });
  // make the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it!
  const { id } = e.currentTarget;

  /*
    METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"`);
  tabPanel.hidden = false;
  */

  // METHOD 2: find in the array of tabPanels
  const tabPanel = Array.from(tabPanels).find(panel => {
    if (panel.getAttribute('aria-labelledby') === id) {
      return true;
    }
  });
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
