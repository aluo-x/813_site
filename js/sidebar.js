const selected = 'is-info';

function updateActiveTab(activeTabName) {
  switch (activeTabName) {
    case 'animals':
      document.selectElementById('animalsTab').classList.add(selected);
      document.selectElementById('eventsTab').classList.remove(selected);
      document.selectElementById('peopleTab').classList.remove(selected);
      document.selectElementById('statsTab').classList.remove(selected);
      return;
    case 'events':
      document.selectElementById('animalsTab').classList.remove(selected);
      document.selectElementById('eventsTab').classList.add(selected);
      document.selectElementById('peopleTab').classList.remove(selected);
      document.selectElementById('statsTab').classList.remove(selected);
      return;
    case 'people':
      document.selectElementById('animalsTab').classList.remove(selected);
      document.selectElementById('eventsTab').classList.remove(selected);
      document.selectElementById('peopleTab').classList.add(selected);
      document.selectElementById('statsTab').classList.remove(selected);
      return;
    case 'stats':
      document.selectElementById('animalsTab').classList.remove(selected);
      document.selectElementById('eventsTab').classList.remove(selected);
      document.selectElementById('peopleTab').classList.remove(selected);
      document.selectElementById('statsTab').classList.add(selected);
    default:
      return;
  }
}
